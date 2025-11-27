type Lead = {
  id: string
  name: string
  phone: string
  service_type: string
  district?: string
  date_requested?: string
  comment?: string
  locale: string
  contact_line?: string
  contact_whatsapp?: string
};

export function formatLeadMsg(lead: Lead) {
  const serviceLabels: Record<string, string> = {
    cargo: '🚚 Cargo transportation',
    excavator: '⛏ Excavator services',
    waste: '🗑 Waste/soil removal',
    moving: '📦 Moving services',
  };

  return [
    `📩 New Lead [${lead.locale}]`,
    ' ',
    `${serviceLabels[lead.service_type] || lead.service_type}`,
    ' ',
    `👤 Name: ${lead.name}`,
    `📞 Phone: ${lead.phone}`,
    lead.contact_whatsapp ? `🟢 WhatsApp: ${lead.contact_whatsapp}` : null,
    lead.contact_line ? `🟢 LINE: ${lead.contact_line}` : null,
    ' ',
    lead.date_requested ? `📅 Date: ${lead.date_requested}` : null,
    lead.district ? `📍 District: ${lead.district}` : null,
    lead.comment ? `📝 Comment: ${lead.comment}` : null,
    ' ',
    `#️⃣ ID: ${lead.id}`,
  ]
    .filter(Boolean)
    .join('\n');
}
