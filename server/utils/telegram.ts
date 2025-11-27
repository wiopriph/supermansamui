export async function tgNotify(text: string) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = useRuntimeConfig();

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {

    console.error('Telegram config is missing');

    return;
  }

  await $fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    body: {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: 'HTML',
      text,
    },
  })
    .catch((error) => {
      console.error('Telegram notify failed:', error);
    });
}
