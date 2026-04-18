const BACKEND_API_URL = (() => {
  const hostname = window.location.hostname;
  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:5000/api/ask-ai';
  }
  return '/api/ask-ai';
})();

// Chat state
let conversation = [];
const maxHistoryToSend = 10;

// DOM Elements
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const newChatBtn = document.getElementById("newChatBtn");
const chatMessages = document.getElementById("chatMessages");
const themeToggles = Array.from(document.querySelectorAll(".js-theme-toggle"));
const navToggle = document.getElementById("navToggle");
const mainNavLinks = document.getElementById("mainNavLinks");

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function syncThemeToggleUI() {
  const isDark = document.body.classList.contains("dark");
  themeToggles.forEach((btn) => {
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    const textEl = btn.querySelector(".toggle-text");
    if (textEl) textEl.textContent = isDark ? "الوضع النهاري" : "الوضع الليلي";
  });
}

function initTheme() {
  const mode = localStorage.getItem("darkMode");
  if (mode === "enabled") {
    document.body.classList.add("dark");
  }
  syncThemeToggleUI();
}

themeToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    syncThemeToggleUI();
  });
});

if (navToggle && mainNavLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNavLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNavLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Create a message element
function createMessageElement(role, content) {
  const messageDiv = document.createElement('div');
  messageDiv.style.cssText = `
    display: flex;
    justify-content: ${role === 'user' ? 'flex-start' : 'flex-end'};
    margin-bottom: 0.5rem;
  `;

  const messageBubble = document.createElement('div');
  messageBubble.style.cssText = `
    max-width: 75%;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    word-wrap: break-word;
    line-height: 1.6;
    background: ${role === 'user' ? '#667eea' : '#f0f0f0'};
    color: ${role === 'user' ? 'white' : 'black'};
    text-align: right;
  `;

  const icon = document.createElement('span');
  icon.style.marginRight = '0.5rem';
  icon.textContent = role === 'user' ? '👤' : '🤖';

  const text = document.createElement('span');
  text.textContent = content;

  messageBubble.appendChild(icon);
  messageBubble.appendChild(text);
  messageDiv.appendChild(messageBubble);

  return messageDiv;
}

// Remove welcome message
function removeWelcomeMessage() {
  const welcome = chatMessages.querySelector('.welcome-message');
  if (welcome) {
    welcome.remove();
  }
}

// Add message to chat
function addMessageToChat(role, content) {
  removeWelcomeMessage();
  const messageElement = createMessageElement(role, content);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Store in conversation history
  conversation.push({ role, content });
}

// Add loading indicator
function addLoadingIndicator() {
  removeWelcomeMessage();
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loadingIndicator';
  loadingDiv.style.cssText = `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    color: #999;
  `;
  loadingDiv.innerHTML = `<span class="spinner">⏳</span> <span>جاري الرد...</span>`;
  chatMessages.appendChild(loadingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove loading indicator
function removeLoadingIndicator() {
  const loading = document.getElementById('loadingIndicator');
  if (loading) {
    loading.remove();
  }
}

// Send message
async function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) {
    alert("يرجى كتابة رسالة أولاً.");
    return;
  }

  // Add user message to chat
  addMessageToChat('user', message);
  messageInput.value = '';
  
  // Disable buttons
  sendBtn.disabled = true;
  newChatBtn.disabled = true;
  messageInput.disabled = true;

  // Show loading indicator
  addLoadingIndicator();

  try {
    const response = await fetch(BACKEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        conversation: conversation.slice(-maxHistoryToSend)
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data?.error || response.statusText || `HTTP ${response.status}`;
      throw new Error(errorMsg);
    }

    const answer = data?.answer || data?.text;
    if (!answer) {
      throw new Error(data?.error || "لم يتم الحصول على إجابة صحيحة");
    }

    removeLoadingIndicator();
    addMessageToChat('assistant', answer);

  } catch (error) {
    console.error("خطأ في الاتصال:", error);
    removeLoadingIndicator();
    const errorMsg = `❌ خطأ: ${escapeHtml(error.message || 'حدث خطأ غير متوقع.')}`;
    addMessageToChat('error', errorMsg);
  } finally {
    sendBtn.disabled = false;
    newChatBtn.disabled = false;
    messageInput.disabled = false;
    messageInput.focus();
  }
}

// New chat
function newChat() {
  if (confirm("هل تريد بدء محادثة جديدة؟ سيتم حذف سجل المحادثة الحالي.")) {
    conversation = [];
    chatMessages.innerHTML = `
      <div class="welcome-message" style="text-align: center; color: #999; padding: 2rem 0;">
        <p>👋 مرحباً بك في المحادثة مع الذكاء الاصطناعي</p>
        <p style="font-size: 0.9rem;">ابدأ محادثتك بأي سؤال تريده</p>
      </div>
    `;
    messageInput.value = '';
    messageInput.focus();
  }
}

// Event listeners
if (sendBtn && messageInput) {
  sendBtn.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      sendMessage();
    }
  });
}

if (newChatBtn) {
  newChatBtn.addEventListener('click', newChat);
}

initTheme();
