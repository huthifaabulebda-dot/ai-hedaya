# Hedaya Backend

Backend server for the Hedaya Islamic Platform with Grok AI integration.

## Features

- 🤖 AI-powered Islamic Q&A using Grok API
- 🔄 CORS enabled for frontend integration
- 🛡️ Error handling and validation
- 📊 Health check endpoint

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your Grok API key:
```
GROK_API_KEY=your_api_key_here
```

3. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

### POST /api/ask-ai
Ask questions about Islamic topics.

**Request Body:**
```json
{
  "question": "ما هو أفضل الذكر؟"
}
```

**Response:**
```json
{
  "answer": "أفضل الذكر هو لا إله إلا الله...",
  "question": "ما هو أفضل الذكر؟"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "Hedaya Backend"
}
```

## Integration

The backend runs on `http://localhost:5000` and serves the frontend's API calls.

Frontend expects:
- POST `/api/ask-ai` with `{ question: string }`
- Returns `{ answer: string }` or `{ error: string }`