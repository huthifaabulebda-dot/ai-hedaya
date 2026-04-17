const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const GROK_API_KEY = process.env.GROK_API_KEY;
const GROK_MODEL = process.env.GROK_MODEL || 'mixtral-8x7b-32768';
const GROK_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

if (!GROK_API_KEY) {
  console.error('Missing required environment variable GROK_API_KEY. Please add it to backend/.env');
  process.exit(1);
}

function parseHFResponse(responseData) {
  // Hugging Face returns an array of generated_text objects or text completions
  if (Array.isArray(responseData) && responseData.length > 0) {
    return responseData[0]?.generated_text || responseData[0]?.text;
  }
  return responseData?.generated_text || responseData?.text || null;
}

// AI Chat endpoint
app.post('/api/ask-ai', async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({
        error: 'Invalid question provided'
      });
    }

    // Prepare the prompt for Islamic context
    const systemPrompt = `أنت مساعد ذكاء اصطناعي متخصص في الإسلام والعلوم الشرعية.
    يجب أن تكون إجاباتك:
    - دقيقة ومبنية على القرآن الكريم والسنة النبوية الصحيحة
    - محترمة ومهذبة في التعبير
    - مفيدة ومباشرة في الإجابة
    - باللغة العربية الفصحى
    - إذا كان السؤال خارج نطاق الإسلام، أخبر المستخدم بأنك متخصص في المواضيع الإسلامية فقط

    السؤال: ${question.trim()}`;

    // Call Grok Cloud API
    let answer;
    try {
      const response = await axios.post(GROK_API_URL, {
        model: GROK_MODEL,
        messages: [
          {
            role: 'system',
            content: `أنت مساعد ذكاء اصطناعي متخصص في الإسلام والعلوم الشرعية.
            يجب أن تكون إجاباتك:
            - دقيقة ومبنية على القرآن الكريم والسنة النبوية الصحيحة
            - محترمة ومهذبة في التعبير
            - مفيدة ومباشرة في الإجابة
            - باللغة العربية الفصحى
            - إذا كان السؤال خارج نطاق الإسلام، أخبر المستخدم بأنك متخصص في المواضيع الإسلامية فقط`
          },
          {
            role: 'user',
            content: question.trim()
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROK_API_KEY}`
        },
        timeout: 30000
      });

      answer = response.data?.choices?.[0]?.message?.content?.trim();
      
      if (!answer) {
        throw new Error('Empty response from Grok Cloud');
      }
    } catch (apiError) {
      const apiErrorData = apiError.response?.data;
      console.log('Grok Cloud Error:', apiErrorData || apiError.message);

      const apiErrorMessage = apiErrorData?.error?.message || apiError.message || 'Unknown Grok Cloud error';
      const isInvalidKey = apiErrorMessage.toLowerCase().includes('invalid api key') ||
        apiErrorMessage.toLowerCase().includes('unauthorized') ||
        apiError.response?.status === 401;
      const isQuotaExceeded = apiErrorMessage.toLowerCase().includes('quota') ||
        apiErrorMessage.toLowerCase().includes('limit') ||
        apiError.response?.status === 429;

      if (isInvalidKey) {
        throw new Error('خطأ في مفتاح Grok Cloud. يرجى التحقق من المفتاح في backend/.env');
      } else if (isQuotaExceeded) {
        throw new Error('تم تجاوز حد الاستخدام المجاني لـ Grok Cloud. يرجى المحاولة لاحقاً أو الترقية إلى خطة مدفوعة.');
      } else {
        throw apiError;
      }
    }

    if (!answer) {
      throw new Error('No response from Grok API');
    }

    res.json({
      answer: answer.trim(),
      question: question.trim()
    });

  } catch (error) {
    console.error('Error calling Grok Cloud:', error.response?.data || error.message);

    let errorMessage = 'حدث خطأ في معالجة السؤال. يرجى المحاولة مرة أخرى.';
    let statusCode = error.response?.status || 500;

    if (error.message && !error.response) {
      errorMessage = error.message;
    } else if (error.response?.status === 401) {
      errorMessage = 'خطأ في مفتاح Grok Cloud. يرجى التحقق من الإعدادات.';
    } else if (error.response?.status === 429) {
      errorMessage = 'تم تجاوز حد الاستخدام المجاني. يرجى المحاولة لاحقاً.';
    } else if (error.response?.status >= 500) {
      errorMessage = 'خطأ في خادم Grok Cloud. يرجى المحاولة مرة أخرى.';
    } else if (error.response?.data?.error?.message) {
      errorMessage = error.response.data.error.message;
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = 'انتهت مهلة الانتظار. الخادم مشغول، يرجى المحاولة لاحقاً.';
    }

    res.status(statusCode).json({
      error: errorMessage,
      ...(process.env.NODE_ENV === 'development' ? { details: error.response?.data || error.message } : {})
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Hedaya Backend'
  });
});

// Fallback for frontend routes
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Hedaya Backend server running on port ${PORT}`);
  console.log(`📱 Frontend can connect to: http://localhost:${PORT}/api/ask-ai`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`🚨 Port ${PORT} is already in use. تأكد أن عملية سابقة من الخادم متوقفة أو غيّر PORT في backend/.env.`);
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});