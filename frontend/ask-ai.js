const BACKEND_API_URL = (() => {
  const hostname = window.location.hostname;
  if (!hostname || hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:5000/api/ask-ai';
  }
  return '/api/ask-ai';
})();

const aiQuestion = document.getElementById("aiQuestion");
const askAiBtn = document.getElementById("askAiBtn");
const clearBtn = document.getElementById("clearBtn");
const aiResponse = document.getElementById("aiResponse");
const loadingSpinner = document.getElementById("loadingSpinner");
const responseContent = document.getElementById("responseContent");
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

// مسح الحقول
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    aiQuestion.value = "";
    responseContent.innerHTML = "";
    loadingSpinner.style.display = "none";
    aiQuestion.focus();
  });
}

if (askAiBtn && aiQuestion && aiResponse) {
  askAiBtn.addEventListener("click", async () => {
    const question = aiQuestion.value.trim();
    if (!question) {
      responseContent.innerHTML = "❌ يرجى كتابة سؤال أولاً.";
      loadingSpinner.style.display = "none";
      return;
    }

    responseContent.innerHTML = "";
    loadingSpinner.style.display = "block";
    askAiBtn.disabled = true;
    clearBtn.disabled = true;

    try {
      const response = await fetch(BACKEND_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();
      if (!response.ok) {
        const backendError = data?.error || response.statusText || `HTTP ${response.status}`;
        throw new Error(backendError);
      }

      const answer = data?.answer || data?.text;
      if (!answer) {
        throw new Error(data?.error || "لم تعد الخدمة بإجابة صحيحة");
      }

      loadingSpinner.style.display = "none";
      responseContent.innerHTML = `
        <strong>✅ السؤال:</strong>
        <p style="margin-top:0.7rem; font-weight:500;">${escapeHtml(question)}</p>
        <strong style="display:block; margin-top:1rem; color:#667eea;">📚 الإجابة:</strong>
        <p style="margin-top:0.7rem; line-height:1.8;">${escapeHtml(answer)}</p>
      `;
    } catch (error) {
      console.error("خطأ في الاتصال:", error);
      loadingSpinner.style.display = "none";
      responseContent.innerHTML = `<strong>خطأ:</strong> ${escapeHtml(error.message || 'حدث خطأ غير متوقع.')}<br>يرجى التأكد من تشغيل الـ backend على http://localhost:5000`;
    } finally {
      askAiBtn.disabled = false;
      clearBtn.disabled = false;
    }
  });
}

initTheme();
