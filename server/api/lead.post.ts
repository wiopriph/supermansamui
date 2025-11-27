import { z } from 'zod';
import { serverSupabaseServiceRole } from '#supabase/server';
import { tgNotify } from '~~/server/utils/telegram';
import { lineNotify } from '~~/server/utils/line';
import { formatLeadMsg } from '~~/server/utils/formatLead';


const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(5),
  service_type: z.enum(['cargo', 'excavator', 'waste', 'moving']),
  district: z.string().optional(),
  date_requested: z.string().optional(),
  comment: z.string().optional(),
  locale: z.enum(['ru', 'en', 'th', 'fr']).default('ru'),
  contact_line: z.string().optional(),
  contact_whatsapp: z.string().optional(),

  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const parsed = schema.parse(body);

    const data = {
      ...parsed,
      name: parsed.name.trim(),
      phone: parsed.phone.trim(),
      district: parsed.district?.trim() || undefined,
      comment: parsed.comment?.trim() || undefined,
    };

    const supa = await serverSupabaseServiceRole(event);

    const { data: ins, error } = await supa
      .from('leads')
      .insert([data])
      .select('id')
      .single();

    if (error) {
      throw createError({ statusCode: 500, statusMessage: error.message });
    }

    const msg = formatLeadMsg({ ...data, id: ins.id });

    Promise.allSettled([tgNotify(msg), lineNotify(msg)]).catch(() => {});

    return { ok: true, id: ins.id };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error?.message || 'Bad Request',
    });
  }
});
