// =========================
// بيانات ثابتة للتطبيق
// =========================
// قائمة السور للبحث والاستماع
const surahs = [
  { number: 1, name: "الفاتحة" }, { number: 2, name: "البقرة" }, { number: 3, name: "آل عمران" }, { number: 4, name: "النساء" },
  { number: 5, name: "المائدة" }, { number: 6, name: "الأنعام" }, { number: 7, name: "الأعراف" }, { number: 8, name: "الأنفال" },
  { number: 9, name: "التوبة" }, { number: 10, name: "يونس" }, { number: 11, name: "هود" }, { number: 12, name: "يوسف" },
  { number: 13, name: "الرعد" }, { number: 14, name: "إبراهيم" }, { number: 15, name: "الحجر" }, { number: 16, name: "النحل" },
  { number: 17, name: "الإسراء" }, { number: 18, name: "الكهف" }, { number: 19, name: "مريم" }, { number: 20, name: "طه" },
  { number: 21, name: "الأنبياء" }, { number: 22, name: "الحج" }, { number: 23, name: "المؤمنون" }, { number: 24, name: "النور" },
  { number: 25, name: "الفرقان" }, { number: 26, name: "الشعراء" }, { number: 27, name: "النمل" }, { number: 28, name: "القصص" },
  { number: 29, name: "العنكبوت" }, { number: 30, name: "الروم" }, { number: 31, name: "لقمان" }, { number: 32, name: "السجدة" },
  { number: 33, name: "الأحزاب" }, { number: 34, name: "سبأ" }, { number: 35, name: "فاطر" }, { number: 36, name: "يس" },
  { number: 37, name: "الصافات" }, { number: 38, name: "ص" }, { number: 39, name: "الزمر" }, { number: 40, name: "غافر" },
  { number: 41, name: "فصلت" }, { number: 42, name: "الشورى" }, { number: 43, name: "الزخرف" }, { number: 44, name: "الدخان" },
  { number: 45, name: "الجاثية" }, { number: 46, name: "الأحقاف" }, { number: 47, name: "محمد" }, { number: 48, name: "الفتح" },
  { number: 49, name: "الحجرات" }, { number: 50, name: "ق" }, { number: 51, name: "الذاريات" }, { number: 52, name: "الطور" },
  { number: 53, name: "النجم" }, { number: 54, name: "القمر" }, { number: 55, name: "الرحمن" }, { number: 56, name: "الواقعة" },
  { number: 57, name: "الحديد" }, { number: 58, name: "المجادلة" }, { number: 59, name: "الحشر" }, { number: 60, name: "الممتحنة" },
  { number: 61, name: "الصف" }, { number: 62, name: "الجمعة" }, { number: 63, name: "المنافقون" }, { number: 64, name: "التغابن" },
  { number: 65, name: "الطلاق" }, { number: 66, name: "التحريم" }, { number: 67, name: "الملك" }, { number: 68, name: "القلم" },
  { number: 69, name: "الحاقة" }, { number: 70, name: "المعارج" }, { number: 71, name: "نوح" }, { number: 72, name: "الجن" },
  { number: 73, name: "المزمل" }, { number: 74, name: "المدثر" }, { number: 75, name: "القيامة" }, { number: 76, name: "الإنسان" },
  { number: 77, name: "المرسلات" }, { number: 78, name: "النبأ" }, { number: 79, name: "النازعات" }, { number: 80, name: "عبس" },
  { number: 81, name: "التكوير" }, { number: 82, name: "الإنفطار" }, { number: 83, name: "المطففين" }, { number: 84, name: "الإنشقاق" },
  { number: 85, name: "البروج" }, { number: 86, name: "الطارق" }, { number: 87, name: "الأعلى" }, { number: 88, name: "الغاشية" },
  { number: 89, name: "الفجر" }, { number: 90, name: "البلد" }, { number: 91, name: "الشمس" }, { number: 92, name: "الليل" },
  { number: 93, name: "الضحى" }, { number: 94, name: "الشرح" }, { number: 95, name: "التين" }, { number: 96, name: "العلق" },
  { number: 97, name: "القدر" }, { number: 98, name: "البينة" }, { number: 99, name: "الزلزلة" }, { number: 100, name: "العاديات" },
  { number: 101, name: "القارعة" }, { number: 102, name: "التكاثر" }, { number: 103, name: "العصر" }, { number: 104, name: "الهمزة" },
  { number: 105, name: "الفيل" }, { number: 106, name: "قريش" }, { number: 107, name: "الماعون" }, { number: 108, name: "الكوثر" },
  { number: 109, name: "الكافرون" }, { number: 110, name: "النصر" }, { number: 111, name: "المسد" }, { number: 112, name: "الإخلاص" },
  { number: 113, name: "الفلق" }, { number: 114, name: "الناس" }
];

// مكتبة أحاديث صحيحة (تُعرض داخل قسم الأحاديث)
const hadithData = [
  { text: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى. (البخاري ومسلم)" },
  { text: "من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت. (متفق عليه)" },
  { text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه. (متفق عليه)" },
  { text: "المسلم من سلم المسلمون من لسانه ويده. (البخاري ومسلم)" },
  { text: "الدين النصيحة. (مسلم)" },
  { text: "من غشّنا فليس منا. (مسلم)" },
  { text: "من ستر مسلمًا ستره الله في الدنيا والآخرة. (مسلم)" },
  { text: "المؤمن للمؤمن كالبنيان يشد بعضه بعضًا. (البخاري ومسلم)" },
  { text: "المسلم أخو المسلم لا يظلمه ولا يسلمه. (البخاري ومسلم)" },
  { text: "من سلك طريقًا يلتمس فيه علمًا سهل الله له به طريقًا إلى الجنة. (مسلم)" },
  { text: "من يرد الله به خيرًا يفقهه في الدين. (متفق عليه)" },
  { text: "ما نقصت صدقة من مال. (مسلم)" },
  { text: "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن. (الترمذي وقال حسن صحيح)" },
  { text: "الطهور شطر الإيمان. (مسلم)" },
  { text: "إن الله كتب الإحسان على كل شيء. (مسلم)" },
  { text: "خيركم من تعلم القرآن وعلمه. (البخاري)" },
  { text: "الكلمة الطيبة صدقة. (متفق عليه)" },
  { text: "أحب الأعمال إلى الله أدومها وإن قل. (متفق عليه)" },
  { text: "إن الله طيب لا يقبل إلا طيبًا. (مسلم)" },
  { text: "سبحان الله وبحمده عدد خلقه... (معنى صحيح في الأحاديث الصحيحة)" },
  { text: "من قال: سبحان الله وبحمده في يومه مائة مرة حطت خطاياه. (متفق عليه)" },
  { text: "من قال حين يصبح وحين يمسي: سبحان الله وبحمده... كان حقًا على الله أن يرضيه. (معنى صحيح)" },
  { text: "الدعاء هو العبادة. (الترمذي وصححه)" },
  { text: "عليكم بالصدق؛ فإن الصدق يهدي إلى البر... (متفق عليه بمعناه)" },
  { text: "لا ضرر ولا ضرار. (حديث صحيح)" },
  { text: "إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية أو علم ينتفع به أو ولد صالح يدعو له. (مسلم)" },
  { text: "سبعة يظلهم الله في ظله يوم لا ظل إلا ظله. (متفق عليه)" },
  { text: "من قام رمضان إيمانًا واحتسابًا غفر له ما تقدم من ذنبه. (متفق عليه)" },
  { text: "من قام ليلة القدر إيمانًا واحتسابًا غفر له ما تقدم من ذنبه. (متفق عليه)" },
  { text: "إنما الصبر عند الصدمة الأولى. (متفق عليه)" },
  { text: "يسروا ولا تعسروا وبشروا ولا تنفروا. (متفق عليه)" },
  { text: "أطعموا الجائع وعودوا المريض وامشوا مع الجنازة. (متفق عليه)" },
  { text: "إن الله مع الصابرين. (مستفاد من القرآن والسنة)" },
  { text: "اتقوا النار ولو بشق تمرة. (متفق عليه)" },
  { text: "ما منكم من أحد إلا سيكلمه ربه... (معناه صحيح)" },
  { text: "من آمن بالله ورسوله وأقام الصلاة وآتى الزكاة... (معنى صحيح في الصحيحين)" }
];

// تذكيرات يومية عشوائية
const reminders = [
  "أكثر من ذكر الله في يومك.",
  "حافظ على الصلاة في وقتها فهي عماد يومك.",
  "ادعُ الله بقلب حاضر ويقين بالإجابة.",
  "الكلمة الطيبة صدقة.",
  "اجعل لك وردًا يوميًا من القرآن.",
  "الاستغفار باب للرحمة والتيسير.",
  "صلِّ على النبي صلى الله عليه وسلم كثيرًا.",
  "اقرأ أذكار الصباح والمساء.",
  "اصبر واحتسب فإن مع العسر يسرًا."
];

const islamWorldData = [
  {
    country: "السعودية",
    muslims: "حوالي 34 مليون مسلم",
    mosques: ["المسجد الحرام - مكة", "المسجد النبوي - المدينة", "مسجد قباء - المدينة"]
  },
  {
    country: "مصر",
    muslims: "حوالي 95 مليون مسلم",
    mosques: ["الجامع الأزهر - القاهرة", "مسجد عمرو بن العاص - القاهرة", "مسجد الحسين - القاهرة"]
  },
  {
    country: "تركيا",
    muslims: "حوالي 75 مليون مسلم",
    mosques: ["مسجد السلطان أحمد - إسطنبول", "آيا صوفيا - إسطنبول", "مسجد السليمانية - إسطنبول"]
  },
  {
    country: "إندونيسيا",
    muslims: "حوالي 240 مليون مسلم",
    mosques: ["مسجد الاستقلال - جاكرتا", "مسجد بيت الرحمن - آتشيه", "مسجد الأنور الكبير - سولو"]
  },
  {
    country: "باكستان",
    muslims: "حوالي 230 مليون مسلم",
    mosques: ["مسجد فيصل - إسلام آباد", "بادشاهي مسجد - لاهور", "المسجد الكبير - كراتشي"]
  },
  {
    country: "المغرب",
    muslims: "حوالي 37 مليون مسلم",
    mosques: ["مسجد الحسن الثاني - الدار البيضاء", "جامع القرويين - فاس", "مسجد الكتبية - مراكش"]
  },
  {
    country: "فلسطين",
    muslims: "حوالي 5.3 مليون مسلم",
    mosques: ["المسجد الأقصى - القدس", "المسجد الإبراهيمي - الخليل", "المسجد العمري الكبير - غزة"]
  },
  {
    country: "الأردن",
    muslims: "حوالي 10 مليون مسلم",
    mosques: ["مسجد الملك عبدالله الأول - عمّان", "المسجد الحسيني الكبير - عمّان", "مسجد أبو درويش - عمّان"]
  },
  {
    country: "الإمارات",
    muslims: "حوالي 7 مليون مسلم",
    mosques: ["جامع الشيخ زايد الكبير - أبوظبي", "مسجد جميرا - دبي", "مسجد النور - الشارقة"]
  },
  {
    country: "ماليزيا",
    muslims: "حوالي 20 مليون مسلم",
    mosques: ["المسجد الوطني - كوالالمبور", "المسجد الأزرق - شاه علم", "مسجد بوترا - بوتراجايا"]
  },
  {
    country: "الجزائر",
    muslims: "حوالي 43 مليون مسلم",
    mosques: ["الجامع الأعظم - الجزائر", "جامع كتشاوة - الجزائر", "جامع الأمير عبدالقادر - قسنطينة"]
  },
  {
    country: "تونس",
    muslims: "حوالي 11 مليون مسلم",
    mosques: ["جامع الزيتونة - تونس", "جامع عقبة بن نافع - القيروان", "جامع القصبة - تونس"]
  },
  {
    country: "العراق",
    muslims: "حوالي 40 مليون مسلم",
    mosques: ["جامع الإمام الأعظم - بغداد", "مرقد الإمام علي - النجف", "جامع الكوفة - الكوفة"]
  },
  {
    country: "سوريا",
    muslims: "حوالي 18 مليون مسلم",
    mosques: ["الجامع الأموي - دمشق", "جامع خالد بن الوليد - حمص", "جامع السلطان - حلب"]
  },
  {
    country: "الهند",
    muslims: "حوالي 200 مليون مسلم",
    mosques: ["الجامع الكبير - دلهي", "مسجد مكة - حيدر آباد", "تاج المسجد - بوبال"]
  },
  {
    country: "نيجيريا",
    muslims: "حوالي 110 مليون مسلم",
    mosques: ["المسجد الوطني - أبوجا", "مسجد إيلورين المركزي", "مسجد كانو الكبير"]
  },
  {
    country: "بنغلاديش",
    muslims: "حوالي 150 مليون مسلم",
    mosques: ["بيت المكرم - دكا", "مسجد الستين قبة - باجيرهات", "مسجد تارا - دكا"]
  }
];

const fridayDuas = [
  "اللهم في يوم الجمعة اكتب لنا الخير، واصرف عنا كل شر، واغفر لنا ولوالدينا.",
  "اللهم صلِّ وسلم على نبينا محمد، واجعل قلوبنا عامرة بذكرك وطاعتك.",
  "اللهم ارزقنا في ساعة الاستجابة دعاءً لا يُرد، وفرجًا لا يُحد."
];


// =========================
// مراجع عناصر DOM
// =========================
const surahList = document.getElementById("surahList");
const surahSearch = document.getElementById("surahSearch");
const quranAudio = document.getElementById("quranAudio");
const reciterSelect = document.getElementById("reciterSelect");
const reciterSearch = document.getElementById("reciterSearch");
const khatmaToggleBtn = document.getElementById("khatmaToggleBtn");
const khatmaToggleText = document.getElementById("khatmaToggleText");
const khatmaResetBtn = document.getElementById("khatmaResetBtn");
const khatmaStatus = document.getElementById("khatmaStatus");
const khatmaTrackerList = document.getElementById("khatmaTrackerList");
const hadithSearch = document.getElementById("hadithSearch");
const hadithCategory = document.getElementById("hadithCategory");
const hadithResults = document.getElementById("hadithResults");
const hadithLibraryLink = document.getElementById("hadithLibraryLink");
const zakatBtn = document.getElementById("zakatBtn");
const zakatResult = document.getElementById("zakatResult");
const fatwaBtn = document.getElementById("fatwaBtn");
const fatwaQuestion = document.getElementById("fatwaQuestion");
const fatwaAnswer = document.getElementById("fatwaAnswer");
const reminderBtn = document.getElementById("reminderBtn");
const notifyBtn = document.getElementById("notifyBtn");
const reminderText = document.getElementById("reminderText");
const prayerBtn = document.getElementById("prayerBtn");
const prayerStatus = document.getElementById("prayerStatus");
const regionInput = document.getElementById("regionInput");
const mosqueAddressInput = document.getElementById("mosqueAddressInput");
const mosqueSearchBtn = document.getElementById("mosqueSearchBtn");
const mosqueCurrentLocationBtn = document.getElementById("mosqueCurrentLocationBtn");
const mosqueSearchStatus = document.getElementById("mosqueSearchStatus");
const islamWorldCards = document.getElementById("islamWorldCards");
const islamWorldSearchInput = document.getElementById("islamWorldSearchInput");
const islamWorldToggleBtn = document.getElementById("islamWorldToggleBtn");
const contactForm = document.getElementById("contactForm");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");
const contactStatus = document.getElementById("contactStatus");
const tasbeehCountEl = document.getElementById("tasbeehCount");
const resetTasbeeh = document.getElementById("resetTasbeeh");
const tasbeehCircle = document.getElementById("tasbeehCircle");
const darkModeToggle = document.getElementById("darkModeToggle");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const hijriDateBox = document.getElementById("hijriDateBox");
const fridayModeSection = document.getElementById("friday-mode");
const fridayBanner = document.getElementById("fridayBanner");
const salawatBtn = document.getElementById("salawatBtn");
const salawatCount = document.getElementById("salawatCount");
const fridayDuaText = document.getElementById("fridayDuaText");
const nextDuaBtn = document.getElementById("nextDuaBtn");
const themeToggles = Array.from(document.querySelectorAll(".js-theme-toggle"));
const navToggle = document.getElementById("navToggle");
const mainNavLinks = document.getElementById("mainNavLinks");

let tasbeehCount = Number(localStorage.getItem("tasbeehCount")) || 0;
tasbeehCountEl.textContent = tasbeehCount;

// إعدادات عامة
const HADITH_VISIBLE_COUNT = 8; // عدد الأحاديث الظاهرة أولًا
const CONTACT_ACCESS_KEY = "9f2ee5ae-7248-4ce5-9f8f-6afb248d303f"; // مفتاح خدمة إرسال البريد
const KHATMA_LAST_SURAH = 114; // المتابعة من الفاتحة إلى الناس

// قائمة قرّاء احتياطية تعمل حتى بدون اتصال API
const fallbackReciters = [
  { identifier: "ar.alafasy", name: "مشاري العفاسي" },
  { identifier: "ar.abdurrahmaansudais", name: "عبدالرحمن السديس" },
  { identifier: "ar.saoodshuraym", name: "سعود الشريم" },
  { identifier: "ar.mahermuaiqly", name: "ماهر المعيقلي" },
  { identifier: "ar.abdulbasitmurattal", name: "عبدالباسط عبدالصمد (مرتل)" },
  { identifier: "ar.abdulbasitmujawwad", name: "عبدالباسط عبدالصمد (مجود)" },
  { identifier: "ar.husary", name: "محمود خليل الحصري" },
  { identifier: "ar.husarymujawwad", name: "محمود خليل الحصري (مجود)" },
  { identifier: "ar.minshawi", name: "محمد صديق المنشاوي" },
  { identifier: "ar.minshawimujawwad", name: "محمد صديق المنشاوي (مجود)" },
  { identifier: "ar.ahmedajamy", name: "أحمد العجمي" },
  { identifier: "ar.shaatree", name: "أبو بكر الشاطري" },
  { identifier: "ar.hudhaify", name: "علي الحذيفي" },
  { identifier: "ar.hanirifai", name: "هاني الرفاعي" },
  { identifier: "ar.muhammadayyoub", name: "محمد أيوب" },
  { identifier: "ar.abdullahbasfar", name: "عبدالله بصفر" },
  { identifier: "ar.yasseraldossari", name: "ياسر الدوسري" },
  { identifier: "ar.nasserqatami", name: "ناصر القطامي" },
  { identifier: "ar.muhammadjibreel", name: "محمد جبريل" },
  { identifier: "ar.ghamdi", name: "سعد الغامدي" },
  { identifier: "ar.faresabbad", name: "فارس عباد" },
  { identifier: "ar.ghassan.alshorbaji", name: "غسان الشوربجي" }
];

// نسخة فعالة من القرّاء (قد تُستبدل بقائمة أكبر عند التحميل من API)
let allReciters = [...fallbackReciters];
let islamWorldExpanded = false;
let fridayDuaIndex = 0;
const khatmaTrackableSurahs = surahs.filter((s) => s.number <= KHATMA_LAST_SURAH);
let currentSurahNumber = null;
let khatmaTrackingEnabled = localStorage.getItem("khatmaTrackingEnabled") === "true";
let khatmaCompleted = (() => {
  try {
    const raw = JSON.parse(localStorage.getItem("khatmaCompleted") || "[]");
    if (!Array.isArray(raw)) return [];
    return raw
      .map((n) => Number(n))
      .filter((n) => Number.isInteger(n) && n >= 1 && n <= KHATMA_LAST_SURAH);
  } catch (error) {
    return [];
  }
})();

// توحيد النص العربي للبحث (إزالة التشكيل وتوحيد بعض الحروف)
function normalizeForSearch(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, " ")
    .trim();
}

// رسم قائمة القرّاء داخل select مع محاولة الحفاظ على الاختيار الحالي
function renderReciters(list) {
  if (!reciterSelect) return;
  const selected = reciterSelect.value;
  reciterSelect.innerHTML = "";
  list.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r.identifier;
    opt.textContent = r.name;
    reciterSelect.appendChild(opt);
  });
  if (selected) reciterSelect.value = selected;
  if (!reciterSelect.value && reciterSelect.options.length) reciterSelect.selectedIndex = 0;
}

// تحميل قائمة قرّاء موسعة من API (إن نجحت)، وإلا تبقى القائمة الاحتياطية
async function loadReciters() {
  try {
    const res = await fetch("https://api.alquran.cloud/v1/edition?format=audio&type=surah&language=ar");
    const json = await res.json();
    const items = Array.isArray(json?.data) ? json.data : [];
    const normalized = items
      .filter((x) => x?.identifier && x?.name)
      .map((x) => ({
        identifier: x.identifier,
        name: x.name
      }));
    if (normalized.length) {
      allReciters = normalized;
      renderReciters(allReciters);
    }
  } catch (e) {
    // fallback list already in use
  }
}

// رسم قائمة السور مع ربط كل سورة بتغيير رابط الصوت
function renderSurahs(items) {
  surahList.innerHTML = "";
  items.forEach((surah) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${surah.number}. ${surah.name}`;
    btn.addEventListener("click", () => {
      const reciter = reciterSelect.value;
      currentSurahNumber = surah.number;
      quranAudio.src = `https://cdn.islamic.network/quran/audio-surah/128/${reciter}/${surah.number}.mp3`;
    });
    li.appendChild(btn);
    surahList.appendChild(li);
  });
}

function saveKhatmaState() {
  // حفظ حالة تتبع الختمة لتبقى بعد تحديث الصفحة
  localStorage.setItem("khatmaTrackingEnabled", khatmaTrackingEnabled ? "true" : "false");
  localStorage.setItem("khatmaCompleted", JSON.stringify(khatmaCompleted));
}

function renderKhatmaTracker() {
  if (!khatmaTrackerList) return;
  khatmaTrackerList.innerHTML = "";
  khatmaTrackableSurahs.forEach((surah) => {
    const item = document.createElement("li");
    const isDone = khatmaCompleted.includes(surah.number);
    if (isDone) item.classList.add("done");
    item.innerHTML = `
      <input type="checkbox" ${isDone ? "checked" : ""} data-surah="${surah.number}" aria-label="متابعة سورة ${surah.name}">
      <span class="track-label">${surah.number}. ${surah.name}</span>
    `;
    const checkbox = item.querySelector("input");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        if (!khatmaCompleted.includes(surah.number)) khatmaCompleted.push(surah.number);
      } else {
        khatmaCompleted = khatmaCompleted.filter((n) => n !== surah.number);
      }
      khatmaCompleted.sort((a, b) => a - b);
      saveKhatmaState();
      renderKhatmaUI();
    });
    khatmaTrackerList.appendChild(item);
  });
}

function renderKhatmaUI() {
  // تحديث حالة زر المتابعة + رسالة الإحصائيات + إظهار/إخفاء الجدول
  if (!khatmaToggleBtn || !khatmaStatus || !khatmaTrackerList || !khatmaToggleText) return;
  const doneCount = khatmaCompleted.length;
  const totalCount = khatmaTrackableSurahs.length;
  const remaining = totalCount - doneCount;
  khatmaToggleBtn.classList.toggle("active", khatmaTrackingEnabled);
  khatmaToggleBtn.setAttribute("aria-pressed", khatmaTrackingEnabled ? "true" : "false");
  khatmaToggleText.textContent = khatmaTrackingEnabled ? "إيقاف متابعة الختمة" : "تفعيل متابعة الختمة";
  khatmaStatus.textContent = khatmaTrackingEnabled
    ? `المتابعة مفعلة: تم إنجاز ${doneCount} من ${totalCount} سورة، المتبقي ${remaining}.`
    : "المتابعة غير مفعلة حاليًا. عند التفعيل سيبدأ تسجيل التقدم تلقائيًا.";
  khatmaTrackerList.style.display = khatmaTrackingEnabled ? "block" : "none";
}

function renderIslamWorld() {
  // يدعم البحث باسم الدولة + عرض أول 3 دول أو كل الدول حسب حالة "عرض المزيد"
  if (!islamWorldCards || !islamWorldToggleBtn) return;
  const query = normalizeForSearch(islamWorldSearchInput ? islamWorldSearchInput.value : "");
  const filteredItems = query
    ? islamWorldData.filter((item) => normalizeForSearch(item.country).includes(query))
    : islamWorldData;
  const visibleItems = query || islamWorldExpanded ? filteredItems : filteredItems.slice(0, 3);
  islamWorldCards.innerHTML = "";
  visibleItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3 class="icon-title" style="margin-bottom:0.5rem;">${item.country}</h3>
      <p style="margin:0 0 0.6rem;"><strong>عدد المسلمين:</strong> ${item.muslims}</p>
      <p style="margin:0; font-weight:700; color:var(--primary-strong);">مساجد مشهورة:</p>
      <ul style="margin:0.45rem 0 0; padding-right:1.1rem;">
        <li>${item.mosques[0]}</li>
        <li>${item.mosques[1]}</li>
        <li>${item.mosques[2]}</li>
      </ul>
    `;
    islamWorldCards.appendChild(card);
  });
  if (!visibleItems.length) {
    islamWorldCards.innerHTML = `<div class="result">لا توجد دولة مطابقة للبحث.</div>`;
  }
  islamWorldToggleBtn.style.display = query ? "none" : "inline-block";
  islamWorldToggleBtn.textContent = islamWorldExpanded ? "عرض أقل" : "عرض المزيد";
}

// رسم الأحاديث بعد تطبيق البحث + إظهار رابط المكتبة الخارجية
function renderHadith() {
  const query = hadithSearch.value.trim().toLowerCase();
  const filtered = hadithData.filter((h) => h.text.toLowerCase().includes(query));

  hadithResults.innerHTML = "";
  if (!filtered.length) {
    hadithResults.innerHTML = `<div class="result">لا توجد نتائج مطابقة للبحث أو التصفية.</div>`;
    if (hadithLibraryLink) hadithLibraryLink.style.display = "none";
    return;
  }

  const toShow = filtered.slice(0, HADITH_VISIBLE_COUNT);
  toShow.forEach((h) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h4 style="margin:0;color:var(--primary-strong);">صحيح</h4><p style="margin:0.5rem 0 0;">${h.text}</p>`;
    hadithResults.appendChild(card);
  });

  if (hadithLibraryLink) {
    const q = query ? `${hadithSearch.value.trim()} صحيح` : "الأحاديث الصحيحة";
    hadithLibraryLink.href = `https://sunnah.com/search?q=${encodeURIComponent(q)}`;
    hadithLibraryLink.style.display = "inline-block";
  }
}

// حساب الزكاة من المدخلات المعطاة (2.5%)
function calculateZakat() {
  const money = Number(document.getElementById("money").value) || 0;
  const gold = Number(document.getElementById("gold").value) || 0;
  const silver = Number(document.getElementById("silver").value) || 0;
  const business = Number(document.getElementById("business").value) || 0;
  const total = money + gold + silver + business;
  const zakat = total * 0.025;
  zakatResult.textContent = `إجمالي الأصول الخاضعة للزكاة: ${total.toFixed(2)} | الزكاة الواجبة (2.5%): ${zakat.toFixed(2)}`;
}

// جلب تذكير عشوائي + إشعار متصفح (إن كان مسموحًا)
function showReminder() {
  const random = reminders[Math.floor(Math.random() * reminders.length)];
  reminderText.textContent = random;
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("تذكير إسلامي", { body: random });
  }
}

// عرض التاريخ الهجري الحالي بصيغة عربية
function renderHijriDate() {
  if (!hijriDateBox) return;
  try {
    const today = new Date();
    const formatter = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    hijriDateBox.textContent = `التاريخ الهجري اليوم: ${formatter.format(today)}`;
  } catch (error) {
    hijriDateBox.textContent = "التاريخ الهجري غير متوفر في هذا المتصفح.";
  }
}

function renderSalawatCount() {
  // عداد الصلاة على النبي داخل وضع الجمعة (محفوظ محليًا)
  if (!salawatCount) return;
  const count = Number(localStorage.getItem("fridaySalawatCount") || "0");
  salawatCount.textContent = `العدد الحالي: ${count}`;
}

function initFridayMode() {
  // تفعيل مظهر ومحتوى الجمعة فقط إذا كان اليوم الحالي جمعة
  const isFriday = new Date().getDay() === 5;
  if (!isFriday) return;
  document.body.classList.add("friday-mode");
  if (fridayModeSection) fridayModeSection.style.display = "block";
  if (fridayBanner) fridayBanner.style.display = "block";

  renderSalawatCount();
}

// البحث في السور أثناء الكتابة
surahSearch.addEventListener("input", () => {
  const query = surahSearch.value.trim().toLowerCase();
  const filtered = surahs.filter((s) => `${s.number} ${s.name}`.toLowerCase().includes(query));
  renderSurahs(filtered);
});

// عند تغيير القارئ: إعادة تحميل السورة المختارة/الأولى بالصوت الجديد
reciterSelect.addEventListener("change", () => {
  const firstButton = surahList.querySelector("button");
  if (firstButton) firstButton.click();
});

if (reciterSearch) {
  // البحث عن قارئ داخل القائمة
  reciterSearch.addEventListener("input", () => {
    const q = normalizeForSearch(reciterSearch.value);
    if (!q) {
      renderReciters(allReciters);
      return;
    }
    const filtered = allReciters.filter((r) => {
      const name = normalizeForSearch(r.name);
      const id = normalizeForSearch(r.identifier);
      return name.includes(q) || id.includes(q);
    });
    renderReciters(filtered.length ? filtered : allReciters);
  });
}

if (khatmaToggleBtn) {
  // تشغيل/إيقاف تتبع الختمة
  khatmaToggleBtn.addEventListener("click", () => {
    khatmaTrackingEnabled = !khatmaTrackingEnabled;
    saveKhatmaState();
    renderKhatmaUI();
  });
}

if (khatmaResetBtn) {
  // إعادة تعيين تقدم الختمة بالكامل
  khatmaResetBtn.addEventListener("click", () => {
    khatmaCompleted = [];
    saveKhatmaState();
    renderKhatmaTracker();
    renderKhatmaUI();
  });
}

if (quranAudio) {
  // عند انتهاء السورة: تسجيلها منجزة تلقائيًا أثناء تفعيل المتابعة
  quranAudio.addEventListener("ended", () => {
    if (!khatmaTrackingEnabled || !currentSurahNumber) return;
    if (currentSurahNumber > KHATMA_LAST_SURAH) return;
    if (!khatmaCompleted.includes(currentSurahNumber)) {
      khatmaCompleted.push(currentSurahNumber);
      khatmaCompleted.sort((a, b) => a - b);
      saveKhatmaState();
      renderKhatmaTracker();
      renderKhatmaUI();
    }
  });
}

if (islamWorldToggleBtn) {
  // توسيع/تقليص قائمة الدول في قسم "إسلام حول العالم"
  islamWorldToggleBtn.addEventListener("click", () => {
    islamWorldExpanded = !islamWorldExpanded;
    renderIslamWorld();
  });
}

if (islamWorldSearchInput) {
  // البحث الفوري بالدول أثناء الكتابة
  islamWorldSearchInput.addEventListener("input", renderIslamWorld);
}

if (salawatBtn) {
  // زيادة عداد الصلاة على النبي وحفظ القيمة محليًا
  salawatBtn.addEventListener("click", () => {
    const current = Number(localStorage.getItem("fridaySalawatCount") || "0") + 1;
    localStorage.setItem("fridaySalawatCount", String(current));
    renderSalawatCount();
  });
}

if (nextDuaBtn && fridayDuaText) {
  // تدوير الأدعية المختارة لعرض دعاء جديد كل ضغطة
  nextDuaBtn.addEventListener("click", () => {
    fridayDuaIndex = (fridayDuaIndex + 1) % fridayDuas.length;
    fridayDuaText.textContent = fridayDuas[fridayDuaIndex];
  });
}

// بحث الأحاديث
hadithSearch.addEventListener("input", renderHadith);
if (hadithCategory) hadithCategory.addEventListener("change", renderHadith);
zakatBtn.addEventListener("click", calculateZakat);

// تجهيز رابط بحث الفتوى عبر Google
fatwaBtn.addEventListener("click", () => {
  const question = fatwaQuestion.value.trim();
  if (!question) {
    fatwaAnswer.textContent = "يرجى كتابة السؤال أولًا.";
    return;
  }
  const query = encodeURIComponent(`${question} فتوى إسلامية`);
  const googleUrl = `https://www.google.com/search?q=${query}`;
  fatwaAnswer.innerHTML = `تم تجهيز البحث لسؤالك: <a href="${googleUrl}" target="_blank" rel="noopener noreferrer">اضغط هنا لعرض النتائج</a>`;
});

// تجهيز رابط بحث مواقيت الصلاة حسب المدينة
prayerBtn.addEventListener("click", () => {
  const region = regionInput.value.trim();
  if (!region) {
    prayerStatus.textContent = "يرجى إدخال اسم المنطقة أولًا.";
    return;
  }
  const query = encodeURIComponent(`مواقيت الصلاة ${region}`);
  const googleUrl = `https://www.google.com/search?q=${query}`;
  prayerStatus.innerHTML = `تم تجهيز بحث مواقيت الصلاة لمنطقة ${region}: <a href="${googleUrl}" target="_blank" rel="noopener noreferrer">اضغط هنا لعرض المواقيت</a>`;
});

// تجهيز رابط خرائط Google للعثور على أقرب مسجد من العنوان المدخل
if (mosqueSearchBtn && mosqueAddressInput && mosqueSearchStatus) {
  mosqueSearchBtn.addEventListener("click", () => {
    const address = mosqueAddressInput.value.trim();
    if (!address) {
      mosqueSearchStatus.textContent = "يرجى كتابة عنوانك أولًا.";
      return;
    }
    const query = encodeURIComponent(`اقرب مسجد من ${address}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    mosqueSearchStatus.innerHTML = `تم تجهيز البحث عن أقرب مسجد من موقعك (${address}): <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">اضغط هنا لفتح الخرائط</a>`;
  });
}

// استخدام موقع المستخدم الحالي لتجهيز رابط أقرب مسجد
if (mosqueCurrentLocationBtn && mosqueSearchStatus) {
  mosqueCurrentLocationBtn.addEventListener("click", () => {
    if (!("geolocation" in navigator)) {
      mosqueSearchStatus.textContent = "خدمة تحديد الموقع غير مدعومة في هذا المتصفح.";
      return;
    }

    mosqueSearchStatus.textContent = "جارٍ تحديد موقعك الحالي...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const query = encodeURIComponent(`اقرب مسجد من ${latitude},${longitude}`);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
        mosqueSearchStatus.innerHTML = `تم تحديد موقعك بنجاح: <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">اضغط هنا لفتح الخرائط وعرض أقرب مسجد</a>`;
      },
      () => {
        mosqueSearchStatus.textContent = "تعذر الوصول إلى موقعك. فعّل إذن الموقع ثم حاول مرة أخرى.";
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

if (contactForm) {
  // إرسال الاستفسار عبر Web3Forms
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      contactStatus.textContent = "يرجى تعبئة جميع الحقول قبل الإرسال.";
      return;
    }

    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.textContent = "جاري الإرسال...";
    }
    contactStatus.textContent = "يتم الآن إرسال الاستفسار...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          subject: "استفسار جديد من منصة الخدمات الإسلامية",
          from_name: name,
          email,
          message
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        contactStatus.textContent = "تم إرسال الاستفسار بنجاح. سنقوم بالرد عبر البريد الإلكتروني بإذن الله.";
        contactForm.reset();
      } else {
        contactStatus.textContent = "تعذر الإرسال حاليًا. تحقق من المفتاح أو حاول لاحقًا.";
      }
    } catch (error) {
      contactStatus.textContent = "حدث خطأ أثناء الإرسال. تحقق من الاتصال بالإنترنت ثم حاول مرة أخرى.";
    } finally {
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.textContent = "إرسال الاستفسار";
      }
    }
  });
}

reminderBtn.addEventListener("click", showReminder);

// تفعيل/تعطيل إشعارات المتصفح
notifyBtn.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    reminderText.textContent = "الإشعارات غير مدعومة في هذا المتصفح.";
    return;
  }
  const permission = await Notification.requestPermission();
  reminderText.textContent = permission === "granted"
    ? "تم تفعيل الإشعارات. ستصلك تنبيهات التذكير."
    : "لم يتم منح إذن الإشعارات.";
});

// زيادة عداد التسبيح + حفظه في localStorage
function incrementTasbeehCount() {
  tasbeehCount += 1;
  tasbeehCountEl.textContent = tasbeehCount;
  localStorage.setItem("tasbeehCount", String(tasbeehCount));
}

if (tasbeehCircle) {
  // الضغط على دائرة التسبيح: زيادة العدد + تأثير بصري
  tasbeehCircle.addEventListener("click", () => {
    incrementTasbeehCount();
    tasbeehCircle.classList.remove("pulse");
    void tasbeehCircle.offsetWidth;
    tasbeehCircle.classList.add("pulse");
    window.setTimeout(() => tasbeehCircle.classList.remove("pulse"), 300);
  });
}

// إعادة ضبط العداد
resetTasbeeh.addEventListener("click", () => {
  tasbeehCount = 0;
  tasbeehCountEl.textContent = tasbeehCount;
  localStorage.setItem("tasbeehCount", "0");
});

// مزامنة شكل أزرار الثيم (نص/أيقونة) مع الوضع الحالي
function syncThemeToggleUI() {
  const isDark = document.body.classList.contains("dark");
  themeToggles.forEach((btn) => {
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    const textEl = btn.querySelector(".toggle-text");
    if (textEl) textEl.textContent = isDark ? "الوضع النهاري" : "الوضع الليلي";
  });
}

themeToggles.forEach((btn) => {
  // التبديل بين الوضع الليلي والنهاري
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    syncThemeToggleUI();
  });
});

if (navToggle && mainNavLinks) {
  // فتح/إغلاق قائمة الجوال (الهامبرغر)
  navToggle.addEventListener("click", () => {
    const isOpen = mainNavLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // إغلاق القائمة بعد اختيار أي رابط
  mainNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNavLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (scrollTopBtn) {
  // إظهار زر الرجوع للأعلى بعد النزول
  const toggleScrollBtn = () => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    scrollTopBtn.classList.toggle("visible", y > 420);
  };

  window.addEventListener("scroll", toggleScrollBtn, { passive: true });
  toggleScrollBtn();

  // العودة لأول الصفحة بسلاسة
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// تهيئة أولية عند فتح الصفحة
(function init() {
  const mode = localStorage.getItem("darkMode");
  if (mode === "enabled") {
    document.body.classList.add("dark");
  }
  syncThemeToggleUI();
  renderReciters(allReciters);
  loadReciters();
  renderSurahs(surahs);
  renderKhatmaTracker();
  renderKhatmaUI();
  renderIslamWorld();
  renderHadith();
  renderHijriDate();
  initFridayMode();
})();
