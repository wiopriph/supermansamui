# Samui Services Website

A website for services in Samui (moving, cargo transportation, excavator works, waste/soil removal).  
Leads are stored in the database and notifications are sent to Telegram and LINE.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

Build the project:

```bash
npm run build
```

Start the server:

```bash
npm start
```

Preview the production build locally:

```bash
npm run preview
```

## Environment variables

Create a `.env` file in the project root with the following variables:

```env
NUXT_SUPABASE_URL=your-supabase-url
NUXT_SUPABASE_SERVICE_ROLE=your-supabase-service-role-key

NUXT_TELEGRAM_BOT_TOKEN=your-telegram-bot-token
NUXT_TELEGRAM_CHAT_ID=your-telegram-chat-id

NUXT_LINE_CHANNEL_ACCESS_TOKEN=your-line-channel-access-token
NUXT_LINE_TO=your-line-user-or-group-id
```
