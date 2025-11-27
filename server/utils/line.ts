export async function lineNotify(text: string) {
  const { LINE_TO, LINE_CHANNEL_ACCESS_TOKEN } = useRuntimeConfig();

  if (!LINE_CHANNEL_ACCESS_TOKEN || !LINE_TO) {
     
    console.error('LINE config is missing');

    return;
  }

  await $fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: {
      to: LINE_TO,
      messages: [{
        type: 'text',
        text,
      }],
    },
  }).catch((error) => {
     
    console.error('LINE notify failed:', error);
  });
}
