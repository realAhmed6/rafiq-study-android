"use strict";

const LESSONS_KEY = "rafiq-study-lessons-v1";
const PLANNER_KEY = "rafiq-study-planner-v1";
const CARDS_KEY = "rafiq-study-cards-v1";
const PROGRESS_KEY = "rafiq-study-progress-v1";
const TIMER_KEY = "rafiq-study-timer-v1";
const BACKUP_FORMAT = "rafiq-study-backup";
const LANGUAGE_KEY = "rafiq-study-language-v1";
const THEME_KEY = "rafiq-study-theme-v1";
const PALETTE_KEY = "rafiq-study-palette-v1";
const CUSTOM_ACCENT_KEY = "rafiq-study-custom-accent-v1";
const TIMER_SETTINGS_KEY = "rafiq-study-timer-settings-v1";
const SCRATCHPAD_KEY = "rafiq-study-scratchpad-v1";
const SELECTED_DATE_KEY = "rafiq-study-selected-date-v1";
const ALARM_SETTINGS_KEY = "rafiq-study-alarm-settings-v1";
const ALARM_SOUND_DB = "rafiq-study-alarm-audio-v1";
const ALARM_SOUND_STORE = "sounds";
const translations = {
  ar: {
    "page.title": "رفيق المذاكرة — خطّط، ذاكر، وتقدّم",
    "page.description": "رفيقك الهادئ لتنظيم المذاكرة، متابعة التقدم، ومراجعة الدروس.",
    "brand.aria": "رفيق المذاكرة — الرئيسية", "brand.name": "رفيق", "brand.suffix": "المذاكرة",
    "theme.dark": "التبديل إلى الوضع الداكن", "theme.oled": "التبديل إلى الوضع الأسود",
    "theme.light": "التبديل إلى الوضع الفاتح",
    "theme.current.light": "الوضع الحالي: فاتح", "theme.current.dark": "الوضع الحالي: داكن",
    "theme.current.oled": "الوضع الحالي: أسود OLED",
    "appearance.title": "ألوان الواجهة", "appearance.palette": "لوحة الألوان",
    "appearance.emerald": "أخضر زمردي", "appearance.crimson": "أحمر قرمزي",
    "appearance.blue": "أزرق ملكي", "appearance.amber": "ذهبي كهرماني",
    "appearance.purple": "بنفسجي", "appearance.custom": "لون مخصص",
    "appearance.reset": "إعادة المظهر الافتراضي", "appearance.resetDone": "عاد المظهر الافتراضي؛ بيانات دراستك محفوظة.",
    "timer.customize": "تخصيص مدة الجلسة", "timer.focusDuration": "التركيز (دقائق)",
    "timer.breakDuration": "الاستراحة (دقائق)", "timer.saveSettings": "حفظ المدد",
    "timer.settingsSaved": "حُفظت مدد المؤقّت.",
    "settings.open": "الإعدادات", "settings.title": "الإعدادات",
    "settings.close": "إغلاق الإعدادات", "alarm.enabled": "تفعيل صوت التنبيه",
    "alarm.sound": "نغمة التنبيه", "alarm.sound.bell": "جرس هادئ",
    "alarm.sound.chime": "رنين قصير", "alarm.sound.digital": "نغمة رقمية",
    "alarm.sound.custom": "ملف صوتي من الجهاز", "alarm.customFile": "اختر ملفًا صوتيًا",
    "alarm.noFile": "لم يُختر ملف صوتي مخصص بعد.",
    "alarm.volume": "مستوى الصوت", "alarm.volumeValue": "{volume}٪",
    "alarm.test": "تجربة الصوت", "alarm.stop": "إيقاف الصوت",
    "alarm.testDone": "اكتملت تجربة التنبيه.",
    "alarm.unavailable": "تعذّر تشغيل الصوت في هذا المتصفح.",
    "alarm.fileInvalid": "اختر ملفًا صوتيًا حجمه أقل من 10 ميغابايت.",
    "alarm.fileSaved": "حُفظ ملف التنبيه على هذا الجهاز.",
    "alarm.storageError": "تعذّر حفظ ملف الصوت محليًا.",
    "alarm.offlineNote": "الصوت يعمل دون إنترنت عند بقاء الصفحة مفتوحة. لا يمكن للنسخة الثابتة تشغيل تنبيه في الخلفية بعد إغلاق الصفحة.",
    "scratchpad.eyebrow": "مساحة شخصية", "scratchpad.title": "ملاحظات سريعة",
    "scratchpad.description": "دوّن فكرة سريعة؛ تُحفظ ملاحظاتك تلقائيًا على هذا الجهاز.",
    "scratchpad.label": "مساحة الملاحظات", "scratchpad.placeholder": "اكتب ملاحظة...",
    "language.switch": "التبديل إلى الإنجليزية",
    export: "تصدير نسخة", "export.label": "تصدير نسخة احتياطية",
    import: "استيراد نسخة", "import.label": "استيراد نسخة احتياطية",
    "quick.aria": "اختصارات سريعة", "quick.timer": "انتقل إلى المؤقّت",
    "quick.lesson": "أضف درسًا", "quick.top": "العودة إلى أعلى الصفحة",
    "welcome.eyebrow": "مساحة هادئة لأهداف كبيرة", "welcome.title": "خطوة بخطوة،",
    "welcome.titleAccent": "تصل إلى ما تريد.",
    "welcome.description": "خطّط لأسبوعك، ركّز على جلسة واحدة، واحتفِ بكل تقدّم تحرزه.",
    "stats.aria": "إحصائيات تقدّمك", "stats.completed": "مهام أنجزتها",
    "stats.studyTime": "وقت المذاكرة", "stats.lessons": "دروسك", "stats.sessions": "جلسات مكتملة",
    "stats.hours": "س", "stats.minutes": "د",
    "focus.aria": "مؤقّت التركيز والخطة الأسبوعية", "timer.eyebrow": "وقت لنفسك",
    "timer.title": "جلسة تركيز", "timer.mode": "نوع المؤقّت",
    "timer.focusMode": "تركيز · {minutes} دقيقة", "timer.breakMode": "استراحة · {minutes} دقائق",
    "timer.focus": "وقت التركيز", "timer.break": "وقت الاستراحة", "timer.start": "ابدأ الجلسة",
    "timer.pause": "أوقف مؤقتًا", "timer.pauseLabel": "إيقاف المؤقّت مؤقتًا",
    "timer.startLabel": "ابدأ الجلسة", "timer.reset": "إعادة ضبط",
    "timer.sessionCount": "أكملت {count} جلسة تركيز — أحسنت!",
    "timer.sessionHint": "كل جلسة إنجاز تستحق استراحة قصيرة.",
    "timer.paused": "أُوقف المؤقّت مؤقتًا، وحُفظ وقت مذاكرتك.",
    "timer.resetStatus": "أُعيد ضبط المؤقّت.",
    "timer.focusComplete": "أحسنت! اكتملت جلسة التركيز. خذ استراحة قصيرة.",
    "timer.breakComplete": "انتهت الاستراحة. أنت جاهز لجلسة تركيز جديدة.",
    "planner.eyebrow": "أسبوعك كما تحب", "planner.title": "الخطة الأسبوعية",
    "planner.previousWeek": "الأسبوع السابق", "planner.nextWeek": "الأسبوع التالي",
    "planner.task": "المهمة", "planner.dueDate": "موعد المهمة",
    "planner.placeholder": "ما الذي تريد إنجازه؟", "planner.add": "أضف للخطة",
    "planner.weekDays": "أيام الأسبوع",
    "planner.empty": "لا توجد مهام في هذا الأسبوع بعد. أضف أول خطوة صغيرة!",
    "planner.aria": "قائمة مهام الأسبوع", "planner.completed": "إنجاز المهمة: {text}",
    "planner.delete": "حذف المهمة: {text}", "planner.added": "أُضيفت المهمة إلى خطتك الأسبوعية.",
    "planner.done": "أُنجزت مهمة الخطة الأسبوعية.", "planner.undone": "أُعيدت المهمة إلى خطتك.",
    "planner.deleted": "حُذفت المهمة من الخطة.",
    "lessons.aria": "دروسك ومهامها", "lessons.eyebrow": "ابدأ بخطوة",
    "lessons.addTitle": "أضف درسًا", "lessons.title": "عنوان الدرس",
    "lessons.titlePlaceholder": "مثال: الفصل الثالث — الخلية", "lessons.subject": "المادة",
    optional: "(اختياري)", "lessons.subjectPlaceholder": "مثال: الأحياء",
    "lessons.add": "أضف الدرس", "tip.title": "نصيحة اليوم",
    "tip.text": "المهام الصغيرة أسهل بدايةً وأوضح إنجازًا.",
    "lessons.progressEyebrow": "تقدّمك يصنع الفرق", "lessons.heading": "دروسي",
    "lessons.searchLabel": "ابحث في الدروس", "lessons.searchPlaceholder": "ابحث عن درس...",
    "lessons.emptyTitle": "لا توجد دروس بعد", "lessons.emptyDescription": "أضف درسًا، ثم قسّمه إلى مهام سهلة الإنجاز.",
    "lessons.noResults": "لم نعثر على هذا الدرس", "lessons.noResultsDescription": "جرّب كلمة بحث أخرى.",
    "lessons.added": "أُضيف الدرس إلى قائمتك.", "lessons.taskAdded": "أُضيفت المهمة.",
    "lessons.taskDone": "أُنجزت المهمة، أحسنت!", "lessons.taskUndone": "أُعيدت المهمة إلى قائمتك.",
    "lessons.clearCompleted": "مُسحت {count} من المهام المكتملة.",
    "lessons.confirmDelete": "حذف درس «{title}» ومهامه؟", "lessons.deleted": "حُذف الدرس.",
    "lessons.taskDeleted": "حُذفت المهمة.", "lessons.delete": "حذف درس {title}",
    "lessons.progress": "تقدم درس {title}", "lessons.completedCount": "{done} / {total} مكتمل",
    "lessons.firstTask": "أضف أول مهمة", "lessons.newTask": "اكتب مهمة جديدة...",
    "lessons.newTaskLabel": "مهمة جديدة لدرس {title}", "lessons.addTask": "إضافة مهمة",
    "lessons.clearButton": "مسح المهام المكتملة", "lessons.taskComplete": "إنجاز المهمة: {text}",
    "lessons.taskDelete": "حذف المهمة: {text}",
    "cards.aria": "بطاقات المراجعة", "cards.eyebrow": "تذكّرها بطريقتك",
    "cards.title": "بطاقات المراجعة",
    "cards.intro": "اكتب سؤالًا أو مصطلحًا على الوجه، وإجابته على الوجه الآخر.",
    "cards.question": "السؤال أو المصطلح", "cards.answer": "الإجابة أو التعريف",
    "cards.add": "أضف بطاقة", "cards.flip": "اقلب بطاقة المراجعة",
    "cards.flipHint": "اضغط لقلب البطاقة ↻", "cards.previous": "السابق",
    "cards.next": "التالي", "cards.delete": "حذف هذه البطاقة", "cards.faceQuestion": "السؤال",
    "cards.faceAnswer": "الإجابة", "cards.emptyContent": "أضف بطاقتك الأولى لتبدأ المراجعة.",
    "cards.emptyTitle": "بطاقاتك", "cards.emptyPosition": "لا توجد بطاقات",
    "cards.count": "{current} / {total}", "cards.added": "أُضيفت بطاقة المراجعة.",
    "cards.starterDelete": "البطاقات الإرشادية لا يمكن حذفها.", "cards.deleted": "حُذفت البطاقة.",
    "privacy.title": "بياناتك لك.",
    "privacy.text": "تُحفظ خطتك على هذا المتصفح والجهاز فقط، ولا تتزامن تلقائيًا بين أجهزتك أو مع أشخاص آخرين. استخدم التصدير والاستيراد لنقل نسخة احتياطية بنفسك.",
    "resetAll.trigger": "إعادة ضبط جميع البيانات",
    "resetAll.title": "هل تريد إعادة ضبط جميع البيانات؟",
    "resetAll.description": "سيؤدي ذلك إلى حذف تقدمك وملاحظاتك ومهامك وإعداداتك من هذا المتصفح نهائيًا. لا يمكن التراجع عن هذا الإجراء.",
    "resetAll.cancel": "إلغاء",
    "resetAll.confirm": "نعم، احذف كل البيانات",
    "resetAll.error": "تعذّرت إعادة ضبط البيانات. بقيت بياناتك محفوظة.",
    "footer.tagline": "على مهل — المهم أن تستمر",
    "footer.note": "رفيق المذاكرة يعمل كملفات ثابتة، دون خادم أو حساب.",
    "data.loadError": "تعذّر قراءة بعض البيانات المحفوظة. لن تُمس البيانات الأصلية.",
    "data.saveError": "تعذّر حفظ التغييرات على هذا الجهاز. تحقّق من مساحة التخزين وإعدادات المتصفح.",
    "data.timerSaveError": "تعذّر حفظ حالة المؤقّت على هذا الجهاز.",
    "data.progressSaveError": "تعذّر حفظ إحصائيات المذاكرة على هذا الجهاز.",
    "data.exported": "نُزّلت نسخة احتياطية من بياناتك.",
    "data.importInvalidLessons": "الملف لا يحتوي على قائمة دروس صالحة.",
    "data.importInvalid": "تحتوي النسخة الاحتياطية على بيانات غير صالحة.",
    "data.importConfirm": "ستُضاف العناصر الجديدة إلى بيانات هذا الجهاز، ولن تُستبدل العناصر الحالية. هل تريد المتابعة؟",
    "data.imported": "اكتمل الاستيراد الدمجي؛ بقيت بياناتك الحالية محفوظة.",
    "data.importError": "تعذّر استيراد الملف: {error}",
    "data.importSaveError": "تعذّر حفظ النسخة المستوردة؛ أُعيدت البيانات السابقة. تحقّق من مساحة التخزين.",
    "data.importRollbackError": "تعذّر حفظ البيانات المستوردة على هذا الجهاز.",
    "data.preferenceSaveError": "تعذّر حفظ هذا التفضيل على هذا الجهاز.",
  },
  en: {
    "page.title": "Rafiq Study — Plan, Focus, Progress",
    "page.description": "A calm companion to plan study, track progress, and review lessons.",
    "brand.aria": "Rafiq Study — Home", "brand.name": "Rafiq", "brand.suffix": "Study",
    "theme.dark": "Switch to dark mode", "theme.oled": "Switch to OLED black mode",
    "theme.light": "Switch to light mode",
    "theme.current.light": "Current mode: light", "theme.current.dark": "Current mode: dark",
    "theme.current.oled": "Current mode: OLED black",
    "appearance.title": "Appearance colors", "appearance.palette": "Color palette",
    "appearance.emerald": "Emerald green", "appearance.crimson": "Crimson red",
    "appearance.blue": "Royal blue", "appearance.amber": "Amber gold",
    "appearance.purple": "Purple", "appearance.custom": "Custom accent",
    "appearance.reset": "Reset appearance", "appearance.resetDone": "Default appearance restored; your study data is unchanged.",
    "timer.customize": "Customize session lengths", "timer.focusDuration": "Focus (minutes)",
    "timer.breakDuration": "Break (minutes)", "timer.saveSettings": "Save durations",
    "timer.settingsSaved": "Timer durations saved.",
    "settings.open": "Settings", "settings.title": "Settings",
    "settings.close": "Close settings", "alarm.enabled": "Enable alarm sound",
    "alarm.sound": "Alarm sound", "alarm.sound.bell": "Gentle bell",
    "alarm.sound.chime": "Short chime", "alarm.sound.digital": "Digital tone",
    "alarm.sound.custom": "Audio file from device", "alarm.customFile": "Choose an audio file",
    "alarm.noFile": "No custom audio file selected yet.",
    "alarm.volume": "Volume", "alarm.volumeValue": "{volume}%",
    "alarm.test": "Test sound", "alarm.stop": "Stop sound",
    "alarm.testDone": "Alarm test finished.",
    "alarm.unavailable": "Audio could not be played in this browser.",
    "alarm.fileInvalid": "Choose an audio file smaller than 10 MB.",
    "alarm.fileSaved": "Alarm audio saved on this device.",
    "alarm.storageError": "Audio could not be saved locally.",
    "alarm.offlineNote": "Audio works offline while this page stays open. A static web page cannot sound alarms in the background after it is closed.",
    "scratchpad.eyebrow": "Personal space", "scratchpad.title": "Quick notes",
    "scratchpad.description": "Jot down an idea; notes are saved automatically on this device.",
    "scratchpad.label": "Notes", "scratchpad.placeholder": "Write a note...",
    "language.switch": "Switch to Arabic",
    export: "Export", "export.label": "Export a backup",
    import: "Import", "import.label": "Import a backup",
    "quick.aria": "Quick actions", "quick.timer": "Go to timer",
    "quick.lesson": "Add a lesson", "quick.top": "Back to top",
    "welcome.eyebrow": "A calm space for big goals", "welcome.title": "One step at a time,",
    "welcome.titleAccent": "you can get there.",
    "welcome.description": "Plan your week, focus on one session, and celebrate every bit of progress.",
    "stats.aria": "Your progress statistics", "stats.completed": "Tasks completed",
    "stats.studyTime": "Study time", "stats.lessons": "Lessons", "stats.sessions": "Sessions completed",
    "stats.hours": "h", "stats.minutes": "min",
    "focus.aria": "Focus timer and weekly planner", "timer.eyebrow": "Time for yourself",
    "timer.title": "Focus session", "timer.mode": "Timer mode",
    "timer.focusMode": "Focus · {minutes} min", "timer.breakMode": "Break · {minutes} min",
    "timer.focus": "Focus time", "timer.break": "Break time", "timer.start": "Start session",
    "timer.pause": "Pause", "timer.pauseLabel": "Pause timer",
    "timer.startLabel": "Start session", "timer.reset": "Reset",
    "timer.sessionCount": "You completed {count} focus sessions — well done!",
    "timer.sessionHint": "Every focused session deserves a short break.",
    "timer.paused": "Timer paused. Your study time has been saved.",
    "timer.resetStatus": "Timer reset.",
    "timer.focusComplete": "Well done! Focus session complete. Take a short break.",
    "timer.breakComplete": "Break's over. You're ready for another focus session.",
    "planner.eyebrow": "Your week, your way", "planner.title": "Weekly planner",
    "planner.previousWeek": "Previous week", "planner.nextWeek": "Next week",
    "planner.task": "Task", "planner.dueDate": "Due date",
    "planner.placeholder": "What would you like to accomplish?", "planner.add": "Add to plan",
    "planner.weekDays": "Days of the week",
    "planner.empty": "No tasks this week yet. Add your first small step!",
    "planner.aria": "Weekly task list", "planner.completed": "Complete task: {text}",
    "planner.delete": "Delete task: {text}", "planner.added": "Task added to your weekly plan.",
    "planner.done": "Weekly planner task completed.", "planner.undone": "Task returned to your plan.",
    "planner.deleted": "Task removed from the plan.",
    "lessons.aria": "Your lessons and tasks", "lessons.eyebrow": "Start with one step",
    "lessons.addTitle": "Add a lesson", "lessons.title": "Lesson title",
    "lessons.titlePlaceholder": "e.g. Chapter 3 — The Cell", "lessons.subject": "Subject",
    optional: "(optional)", "lessons.subjectPlaceholder": "e.g. Biology",
    "lessons.add": "Add lesson", "tip.title": "Today's tip",
    "tip.text": "Small tasks make it easier to start and easier to finish.",
    "lessons.progressEyebrow": "Your progress makes a difference", "lessons.heading": "My lessons",
    "lessons.searchLabel": "Search lessons", "lessons.searchPlaceholder": "Search lessons...",
    "lessons.emptyTitle": "No lessons yet", "lessons.emptyDescription": "Add a lesson, then break it into easy tasks.",
    "lessons.noResults": "No lessons found", "lessons.noResultsDescription": "Try another search term.",
    "lessons.added": "Lesson added to your list.", "lessons.taskAdded": "Task added.",
    "lessons.taskDone": "Task completed — well done!", "lessons.taskUndone": "Task returned to your list.",
    "lessons.clearCompleted": "Cleared {count} completed tasks.",
    "lessons.confirmDelete": "Delete “{title}” and its tasks?", "lessons.deleted": "Lesson deleted.",
    "lessons.taskDeleted": "Task deleted.", "lessons.delete": "Delete lesson {title}",
    "lessons.progress": "Progress for {title}", "lessons.completedCount": "{done} / {total} completed",
    "lessons.firstTask": "Add your first task", "lessons.newTask": "Write a new task...",
    "lessons.newTaskLabel": "New task for {title}", "lessons.addTask": "Add task",
    "lessons.clearButton": "Clear completed tasks", "lessons.taskComplete": "Complete task: {text}",
    "lessons.taskDelete": "Delete task: {text}",
    "cards.aria": "Flashcards", "cards.eyebrow": "Remember your way",
    "cards.title": "Flashcards",
    "cards.intro": "Write a question or term on one side and its answer on the other.",
    "cards.question": "Question or term", "cards.answer": "Answer or definition",
    "cards.add": "Add card", "cards.flip": "Flip flashcard",
    "cards.flipHint": "Tap to flip the card ↻", "cards.previous": "Previous",
    "cards.next": "Next", "cards.delete": "Delete this card", "cards.faceQuestion": "Question",
    "cards.faceAnswer": "Answer", "cards.emptyContent": "Add your first card to start reviewing.",
    "cards.emptyTitle": "Your cards", "cards.emptyPosition": "No cards",
    "cards.count": "{current} / {total}", "cards.added": "Flashcard added.",
    "cards.starterDelete": "Starter cards cannot be deleted.", "cards.deleted": "Card deleted.",
    "privacy.title": "Your data stays yours.",
    "privacy.text": "Your plan is saved only in this browser on this device. It does not sync between your devices or with other people. Use export and import to move a backup yourself.",
    "resetAll.trigger": "Reset all data",
    "resetAll.title": "Reset all study data?",
    "resetAll.description": "This permanently deletes your progress, notes, tasks, and settings from this browser. This action cannot be undone.",
    "resetAll.cancel": "Cancel",
    "resetAll.confirm": "Yes, delete all data",
    "resetAll.error": "Data could not be reset. Your saved data has been preserved.",
    "footer.tagline": "Take it easy — keep going",
    "footer.note": "Rafiq Study runs as static files, with no server or account.",
    "data.loadError": "Some saved data could not be read. Your original data has not been changed.",
    "data.saveError": "Changes could not be saved on this device. Check browser storage and settings.",
    "data.timerSaveError": "Timer state could not be saved on this device.",
    "data.progressSaveError": "Study statistics could not be saved on this device.",
    "data.exported": "Your data backup was downloaded.",
    "data.importInvalidLessons": "The file does not contain a valid lesson list.",
    "data.importInvalid": "The backup contains invalid data.",
    "data.importConfirm": "New items will be added to this device without replacing existing items. Continue?",
    "data.imported": "Import complete. Your existing data remains saved.",
    "data.importError": "Could not import the file: {error}",
    "data.importSaveError": "Could not save the imported backup; previous data was restored. Check available storage.",
    "data.importRollbackError": "Could not save imported data on this device.",
    "data.preferenceSaveError": "This preference could not be saved on this device.",
  },
};
let language = readPreference(LANGUAGE_KEY, ["ar", "en"], "ar");
let theme = readPreference(THEME_KEY, ["light", "dark", "oled"], "light");
let palette = readPreference(PALETTE_KEY, ["emerald", "crimson", "blue", "amber", "purple"], "emerald");
let customAccent = readCustomAccent();
const formatNumber = (value) => new Intl.NumberFormat(language).format(value);
const dateFormatter = () => new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" });
const weekdayFormatter = () => new Intl.DateTimeFormat(locale(), { weekday: "short" });
let statusTimer;
const lessons = loadArray(LESSONS_KEY, isLesson);
let plannerTasks = loadArray(PLANNER_KEY, isPlannerTask);
let customCards = loadArray(CARDS_KEY, isCard);
let progress = loadObject(PROGRESS_KEY, (value) =>
  Number.isFinite(value.studySeconds) && value.studySeconds >= 0
  && Number.isInteger(value.focusSessions) && value.focusSessions >= 0,
  { studySeconds: 0, focusSessions: 0 });
let timerSettings = loadObject(TIMER_SETTINGS_KEY, (value) =>
  Number.isInteger(value.focusMinutes) && value.focusMinutes >= 1 && value.focusMinutes <= 180
  && Number.isInteger(value.breakMinutes) && value.breakMinutes >= 1 && value.breakMinutes <= 60,
  { focusMinutes: 25, breakMinutes: 5 });
let alarmSettings = loadObject(ALARM_SETTINGS_KEY, isAlarmSettings, {
  enabled: false, sound: "bell", volume: 70, customSoundName: "",
});
let timer = loadObject(TIMER_KEY, isTimer, {
  mode: "focus",
  remainingMs: timerSettings.focusMinutes * 60 * 1000,
  runningSince: null,
});
let scratchpad = loadScratchpad();
let selectedDate = loadSelectedDate() ?? toDateKey(new Date());
let weekOffset = Math.round((startOfWeek(new Date(`${selectedDate}T12:00:00`)) - startOfWeek(new Date()))
  / (7 * 24 * 60 * 60 * 1000));
let flashcardIndex = 0;
let cardFlipped = false;
let timerInterval;
let scratchpadSaveTimeout;
let isResettingAllData = false;
let alarmAudio = null;
let alarmAudioUrl = null;
let alarmAudioContext = null;
let alarmToneNodes = [];
let alarmToneInterval;
let alarmStopTimeout;
let alarmPlaybackId = 0;
const ringCircumference = 2 * Math.PI * 96;
const starterCards = [
  { id: "starter-1", question: "ما العضية المسؤولة عن إنتاج الطاقة في الخلية؟", answer: "الميتوكوندريا؛ إذ تُنتج معظم الطاقة التي تحتاجها الخلية." },
  { id: "starter-2", question: "ما ناتج ٣⁄٤ + ١⁄٤؟", answer: "واحد صحيح؛ لأن مجموع البسطين ٤ والمقام يبقى ٤." },
  { id: "starter-3", question: "ما العملية التي يصنع بها النبات غذاءه؟", answer: "البناء الضوئي؛ يستخدم النبات ضوء الشمس والماء وثاني أكسيد الكربون." },
  { id: "starter-4", question: "ما المقصود بالفكرة الرئيسة في النص؟", answer: "المعنى أو الرسالة الأساسية التي تدور حولها الفقرة أو القطعة." },
];
const englishStarterCards = [
  { id: "starter-1", question: "Which cell organelle produces most of the cell's energy?", answer: "The mitochondrion, which produces most of the energy the cell needs." },
  { id: "starter-2", question: "What is 3/4 + 1/4?", answer: "One whole: the numerators add to 4 and the denominator stays 4." },
  { id: "starter-3", question: "How do plants make their food?", answer: "Through photosynthesis, using sunlight, water, and carbon dioxide." },
  { id: "starter-4", question: "What is the main idea of a text?", answer: "The central meaning or message that a paragraph or passage is about." },
];
const PALETTES = {
  emerald: { light: { accent: "#52735d", deep: "#3e5d49", pale: "#edf3ec", ring: "#7e9c80" }, dark: { accent: "#a8c9ad", deep: "#91b697", pale: "#2d4032", ring: "#a8c9ad" } },
  crimson: { light: { accent: "#a53f50", deep: "#803040", pale: "#f8e9ec", ring: "#c96c7b" }, dark: { accent: "#f09aa5", deep: "#de8994", pale: "#432b31", ring: "#f09aa5" } },
  blue: { light: { accent: "#3f5f9c", deep: "#304a7b", pale: "#eaf0fb", ring: "#6c8bc7" }, dark: { accent: "#a7bdf2", deep: "#8ca9e9", pale: "#29354d", ring: "#a7bdf2" } },
  amber: { light: { accent: "#8b641e", deep: "#6d4d16", pale: "#f8f0df", ring: "#bd9140" }, dark: { accent: "#e9c477", deep: "#d6ad5e", pale: "#423824", ring: "#e9c477" } },
  purple: { light: { accent: "#7250a0", deep: "#593c80", pale: "#f0eafa", ring: "#9a7bc1" }, dark: { accent: "#c2a5ed", deep: "#ac8bd9", pale: "#392e4a", ring: "#c2a5ed" } },
};

function readPreference(key, allowedValues, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch (error) {
    console.error(`Unable to read preference (${key}).`, error);
    return fallback;
  }
}

function readCustomAccent() {
  try {
    const value = localStorage.getItem(CUSTOM_ACCENT_KEY);
    return value && /^#[\da-f]{6}$/i.test(value) ? value : null;
  } catch (error) {
    console.error("Unable to read custom accent color.", error);
    return null;
  }
}

function loadScratchpad() {
  try {
    return localStorage.getItem(SCRATCHPAD_KEY) ?? "";
  } catch (error) {
    console.error("Unable to load saved scratchpad notes.", error);
    return "";
  }
}

function loadSelectedDate() {
  try {
    const value = localStorage.getItem(SELECTED_DATE_KEY);
    return isDateKey(value) ? value : null;
  } catch (error) {
    console.error("Unable to load the selected planner date.", error);
    return null;
  }
}

function setSelectedDate(value) {
  selectedDate = value;
  try {
    localStorage.setItem(SELECTED_DATE_KEY, value);
  } catch (error) {
    console.error("Unable to save the selected planner date.", error);
    showStatus(t("data.saveError"));
  }
}

function locale() { return language === "ar" ? "ar" : "en"; }

function t(key, values = {}) {
  const text = translations[language][key] ?? translations.ar[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : match);
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(`Unable to save preference (${key}).`, error);
    showStatus(t("data.preferenceSaveError"));
    return false;
  }
}

function persistAppearance(nextTheme, nextPalette, nextAccent) {
  const changes = [
    [THEME_KEY, nextTheme],
    [PALETTE_KEY, nextPalette],
    [CUSTOM_ACCENT_KEY, nextAccent],
  ];
  const previous = [];
  try {
    changes.forEach(([key, value]) => {
      previous.push([key, localStorage.getItem(key)]);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    });
    return true;
  } catch (error) {
    console.error("Unable to save appearance preferences.", error);
    previous.forEach(([key, value]) => {
      try {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch (rollbackError) {
        console.error(`Unable to restore appearance preference (${key}).`, rollbackError);
      }
    });
    showStatus(t("data.preferenceSaveError"));
    return false;
  }
}

function contrastText(hex) {
  const values = hex.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  const luminance = 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
  return luminance > 0.192 ? "#111111" : "#ffffff";
}

function mixHex(color, other, colorRatio) {
  const channels = color.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16));
  const otherChannels = other.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16));
  const mixed = channels.map((channel, index) =>
    Math.round(channel * colorRatio + otherChannels[index] * (1 - colorRatio)));
  return `#${mixed.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function applyTheme() {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.palette = palette;
  root.style.colorScheme = theme === "light" ? "light" : "dark";
  const mode = theme === "light" ? "light" : "dark";
  const colors = PALETTES[palette][mode];
  const accent = customAccent ?? colors.accent;
  const deepAccent = customAccent
    ? mixHex(customAccent, mode === "dark" ? "#ffffff" : "#111111", mode === "dark" ? 0.82 : 0.76)
    : colors.deep;
  root.style.setProperty("--green", customAccent ?? colors.accent);
  root.style.setProperty("--green-dark", deepAccent);
  const backgroundAccent = customAccent ?? colors.accent;
  if (theme === "oled") {
    root.style.setProperty("--canvas", "#000000");
    root.style.setProperty("--paper", "#000000");
    root.style.setProperty("--welcome", "#000000");
    root.style.setProperty("--welcome-shadow", "#000000");
    root.style.setProperty("--welcome-orbit", "#101010");
    root.style.setProperty("--line", "#282828");
    root.style.setProperty("--input", "#080808");
    root.style.setProperty("--subtle", "#090909");
    root.style.setProperty("--subtle-strong", "#060606");
    root.style.setProperty("--sand", "#101010");
    root.style.setProperty("--timer-track", "#242424");
    root.style.setProperty("--task-line", "#1c1c1c");
    root.style.setProperty("--task-border", "#3c3c3c");
    root.style.setProperty("--empty-border", "#363636");
    root.style.setProperty("--tip-background", "#080808");
    root.style.setProperty("--footer-color", "#b7c2b9");
  } else {
    const canvas = theme === "light" ? "#f4f6f1" : "#1b221e";
    const paper = theme === "light" ? "#ffffff" : "#252e28";
    root.style.setProperty("--canvas",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "8%" : "9%"}, ${canvas})`);
    root.style.setProperty("--paper",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "2%" : "5%"}, ${paper})`);
    root.style.setProperty("--welcome",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "17%" : "15%"}, ${paper})`);
    root.style.setProperty("--welcome-shadow",
      `color-mix(in srgb, ${backgroundAccent} 19%, ${canvas})`);
    root.style.setProperty("--welcome-orbit",
      `color-mix(in srgb, ${backgroundAccent} 21%, ${paper})`);
    root.style.setProperty("--line",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "12%" : "16%"}, ${theme === "light" ? "#e8ece5" : "#3a463d"})`);
    root.style.setProperty("--input",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "2%" : "4%"}, ${theme === "light" ? "#fcfdfb" : "#202823"})`);
    root.style.setProperty("--subtle",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "5%" : "7%"}, ${theme === "light" ? "#f5f6f2" : "#202823"})`);
    root.style.setProperty("--subtle-strong",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "3%" : "5%"}, ${theme === "light" ? "#fafbf9" : "#202823"})`);
    root.style.setProperty("--sand",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "8%" : "8%"}, ${theme === "light" ? "#f7efe4" : "#443a2d"})`);
    root.style.setProperty("--timer-track",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "8%" : "9%"}, ${theme === "light" ? "#edf0eb" : "#3b473e"})`);
    root.style.setProperty("--task-line",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "4%" : "6%"}, ${theme === "light" ? "#f1f2ef" : "#364139"})`);
    root.style.setProperty("--task-border",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "15%" : "18%"}, ${theme === "light" ? "#d6ddd5" : "#647267"})`);
    root.style.setProperty("--empty-border",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "14%" : "16%"}, ${theme === "light" ? "#dce4d9" : "#46554a"})`);
    root.style.setProperty("--tip-background",
      `color-mix(in srgb, ${backgroundAccent} ${theme === "light" ? "4%" : "6%"}, ${theme === "light" ? "#f7f8f4" : "#202823"})`);
    root.style.setProperty("--footer-color", theme === "light" ? "#5f6f63" : "#aeb9b0");
  }
  root.style.setProperty("--green-pale", customAccent
    ? `color-mix(in srgb, ${customAccent} ${mode === "light" ? "13%" : "22%"}, var(--paper))`
    : colors.pale);
  root.style.setProperty("--focus-ring", customAccent
    ? `color-mix(in srgb, ${customAccent} 16%, var(--canvas))`
    : colors.pale);
  if (theme === "oled") {
    root.style.setProperty("--green-pale", `color-mix(in srgb, ${accent} 17%, #000000)`);
    root.style.setProperty("--focus-ring", `color-mix(in srgb, ${accent} 24%, #000000)`);
  }
  root.style.setProperty("--button-text", contrastText(accent));
  root.style.setProperty("--button-hover-text", contrastText(deepAccent));
  root.style.setProperty("--ring-progress", colors.ring);
  const button = document.querySelector("#theme-toggle");
  const nextThemeLabel = theme === "light" ? "theme.dark" : theme === "dark" ? "theme.oled" : "theme.light";
  button.setAttribute("aria-label", `${t(`theme.current.${theme}`)}. ${t(nextThemeLabel)}`);
  button.title = t(nextThemeLabel);
  button.removeAttribute("aria-pressed");
  document.querySelector('meta[name="theme-color"]').content =
    theme === "light" ? "#f4f6f1" : theme === "oled" ? "#000000" : "#1b221e";
  document.querySelector("#palette-select").value = palette;
  document.querySelector("#accent-color").value = customAccent ?? colors.accent;
}

function renderTodayDate() {
  const today = new Date();
  const dateElement = document.querySelector("#today-label");
  dateElement.textContent = new Intl.DateTimeFormat(locale(), {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(today);
  dateElement.dateTime = toDateKey(today);
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = t("page.title");
  document.querySelector('meta[name="description"]').content = t("page.description");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  const languageButton = document.querySelector("#language-toggle");
  languageButton.textContent = language === "ar" ? "EN" : "عربي";
  languageButton.setAttribute("aria-label", t("language.switch"));
  languageButton.title = t("language.switch");
  const themeButton = document.querySelector("#theme-toggle");
  const themeAction = t(theme === "light" ? "theme.dark" : theme === "dark" ? "theme.oled" : "theme.light");
  themeButton.setAttribute("aria-label", `${t(`theme.current.${theme}`)}. ${themeAction}`);
  themeButton.title = themeAction;
  document.querySelector(".brand-mark").textContent = language === "ar" ? "ر" : "R";
  document.querySelector("#week-previous").textContent = language === "ar" ? "‹" : "›";
  document.querySelector("#week-next").textContent = language === "ar" ? "›" : "‹";
  renderTodayDate();
  document.querySelector("#status-message").textContent = "";
  render();
  renderPlanner();
  renderTimer();
  renderFlashcard();
  renderAlarmSettings();
}

function toggleTheme() {
  const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "oled" : "light";
  if (!persistAppearance(nextTheme, palette, customAccent)) return;
  theme = nextTheme;
  applyTheme();
}

function resetAppearance() {
  const keys = [THEME_KEY, PALETTE_KEY, CUSTOM_ACCENT_KEY];
  let previous;
  try {
    previous = keys.map((key) => [key, localStorage.getItem(key)]);
    keys.forEach((key) => localStorage.removeItem(key));
  } catch (error) {
    console.error("Unable to reset appearance preferences.", error);
    previous?.forEach(([key, value]) => {
      try {
        if (value !== null) localStorage.setItem(key, value);
      } catch (rollbackError) {
        console.error(`Unable to restore appearance preference (${key}).`, rollbackError);
      }
    });
    showStatus(t("data.preferenceSaveError"));
    return;
  }
  theme = "light";
  palette = "emerald";
  customAccent = null;
  applyTheme();
  showStatus(t("appearance.resetDone"));
}

document.querySelector("#palette-select").addEventListener("change", (event) => {
  const nextPalette = event.currentTarget.value;
  if (!PALETTES[nextPalette] || !persistAppearance(theme, nextPalette, null)) return;
  palette = nextPalette;
  customAccent = null;
  applyTheme();
});
document.querySelector("#accent-color").addEventListener("input", (event) => {
  const nextAccent = event.currentTarget.value;
  if (!/^#[\da-f]{6}$/i.test(nextAccent) || !persistAppearance(theme, palette, nextAccent)) return;
  customAccent = nextAccent;
  applyTheme();
});
document.querySelector("#reset-appearance").addEventListener("click", resetAppearance);

const appearancePanel = document.querySelector(".appearance-panel");
const appearanceToggle = document.querySelector("#appearance-toggle");
const appearanceControls = document.querySelector("#appearance-controls");
let appearanceCloseTimeout;

function openAppearanceMenu() {
  window.clearTimeout(appearanceCloseTimeout);
  appearancePanel.open = true;
  appearancePanel.classList.remove("is-closing");
  appearanceControls.inert = false;
  appearancePanel.classList.add("is-expanded");
  appearanceToggle.setAttribute("aria-expanded", "true");
}

function closeAppearanceMenu() {
  if (!appearancePanel.open || appearancePanel.classList.contains("is-closing")) return;
  appearancePanel.classList.remove("is-expanded");
  appearancePanel.classList.add("is-closing");
  appearanceControls.inert = true;
  appearanceToggle.setAttribute("aria-expanded", "false");
  appearanceCloseTimeout = window.setTimeout(() => {
    appearancePanel.open = false;
    appearancePanel.classList.remove("is-closing");
  }, 180);
}

appearanceToggle.addEventListener("click", (event) => {
  event.preventDefault();
  if (appearancePanel.classList.contains("is-expanded")) closeAppearanceMenu();
  else openAppearanceMenu();
});
document.addEventListener("pointerdown", (event) => {
  if (appearancePanel.open && !appearancePanel.contains(event.target)) closeAppearanceMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && appearancePanel.classList.contains("is-expanded")) {
    closeAppearanceMenu();
    appearanceToggle.focus();
  }
});

function toggleLanguage() {
  const nextLanguage = language === "ar" ? "en" : "ar";
  if (!savePreference(LANGUAGE_KEY, nextLanguage)) return;
  language = nextLanguage;
  applyLanguage();
}

applyTheme();
applyLanguage();
document.querySelector("#scratchpad-input").value = scratchpad;
document.querySelector("#focus-minutes").value = timerSettings.focusMinutes;
document.querySelector("#break-minutes").value = timerSettings.breakMinutes;
window.setInterval(renderTodayDate, 60 * 1000);

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);
document.querySelector("#language-toggle").addEventListener("click", toggleLanguage);
const settingsDialog = document.querySelector("#settings-dialog");
document.querySelector("#settings-open").addEventListener("click", () => settingsDialog.showModal());
document.querySelector("#settings-close").addEventListener("click", () => settingsDialog.close());
document.querySelector("#alarm-enabled").addEventListener("change", (event) => {
  const enabled = event.currentTarget.checked;
  if (saveAlarmSettings({ ...alarmSettings, enabled }) && !enabled) stopAlarm();
});
document.querySelector("#alarm-sound").addEventListener("change", (event) => {
  saveAlarmSettings({ ...alarmSettings, sound: event.currentTarget.value });
});
document.querySelector("#alarm-volume").addEventListener("input", (event) => {
  document.querySelector("#alarm-volume-value").textContent =
    t("alarm.volumeValue", { volume: formatNumber(Number(event.currentTarget.value)) });
});
document.querySelector("#alarm-volume").addEventListener("change", (event) => {
  saveAlarmSettings({ ...alarmSettings, volume: Number(event.currentTarget.value) });
});
document.querySelector("#alarm-file").addEventListener("change", saveCustomAlarmSound);
document.querySelector("#alarm-test").addEventListener("click", () => {
  if (!alarmSettings.enabled) return;
  playAlarm({ durationMs: 2600, announceEnd: true });
});
document.querySelector("#alarm-stop").addEventListener("click", () => stopAlarm());
document.querySelector("#timer-settings-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const focusMinutes = Number(document.querySelector("#focus-minutes").value);
  const breakMinutes = Number(document.querySelector("#break-minutes").value);
  if (!Number.isInteger(focusMinutes) || focusMinutes < 1 || focusMinutes > 180
    || !Number.isInteger(breakMinutes) || breakMinutes < 1 || breakMinutes > 60) return;
  const updatedSettings = { focusMinutes, breakMinutes };
  if (!saveTimerSettings(updatedSettings)) return;
  timerSettings = updatedSettings;
  if (timer.runningSince !== null) pauseTimer(false);
  timer.remainingMs = timerDuration(timer.mode);
  timer.runningSince = null;
  saveTimer();
  renderTimer();
  showStatus(t("timer.settingsSaved"));
});
document.querySelector("#scratchpad-input").addEventListener("input", (event) => {
  scratchpad = event.currentTarget.value;
  window.clearTimeout(scratchpadSaveTimeout);
  scratchpadSaveTimeout = window.setTimeout(saveScratchpad, 250);
});
window.addEventListener("pagehide", () => {
  window.clearTimeout(scratchpadSaveTimeout);
  if (!isResettingAllData) saveScratchpad();
});
const factoryResetDialog = document.querySelector("#factory-reset-dialog");
document.querySelector("#factory-reset-button").addEventListener("click", () => {
  factoryResetDialog.showModal();
});
document.querySelector("#factory-reset-cancel").addEventListener("click", () => {
  factoryResetDialog.close();
});
factoryResetDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    factoryResetDialog.close();
  }
});
document.querySelector("#factory-reset-confirm").addEventListener("click", resetAllData);
const backToTopButton = document.querySelector("#back-to-top");
function updateBackToTop() {
  backToTopButton.hidden = window.scrollY < 360;
}
window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
});
updateBackToTop();

document.querySelector("#lesson-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.querySelector("#lesson-title");
  const title = titleInput.value.trim();
  if (!title) return titleInput.focus();
  lessons.unshift({
    id: createId(),
    title,
    subject: document.querySelector("#lesson-subject").value.trim(),
    createdAt: new Date().toISOString(),
    tasks: [],
  });
  event.currentTarget.reset();
  saveLessons();
  render();
  showStatus(t("lessons.added"));
  titleInput.focus();
});

document.querySelector("#search-input").addEventListener("input", render);
document.querySelector("#lesson-list").addEventListener("submit", (event) => {
  const form = event.target.closest("[data-task-form]");
  if (!form) return;
  event.preventDefault();
  const lesson = lessons.find((item) => item.id === form.dataset.lessonId);
  const input = form.querySelector("input");
  const text = input.value.trim();
  if (!lesson || !text) return input.focus();
  lesson.tasks.push({ id: createId(), text, completed: false });
  if (saveLessons()) {
    render();
    document.querySelector(`[data-task-input="${CSS.escape(lesson.id)}"]`)?.focus();
    showStatus(t("lessons.taskAdded"));
  }
});
document.querySelector("#lesson-list").addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-task-checkbox]");
  if (!checkbox) return;
  const lesson = lessons.find((item) => item.id === checkbox.dataset.lessonId);
  const task = lesson?.tasks.find((item) => item.id === checkbox.dataset.taskId);
  if (!task) return;
  task.completed = checkbox.checked;
  if (saveLessons()) {
    render();
    showStatus(t(task.completed ? "lessons.taskDone" : "lessons.taskUndone"));
  }
});
document.querySelector("#lesson-list").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const lesson = lessons.find((item) => item.id === button.dataset.lessonId);
  if (!lesson) return;
  if (button.matches("[data-clear-completed]")) {
    const completed = lesson.tasks.filter((task) => task.completed).length;
    if (!completed) return;
    lesson.tasks = lesson.tasks.filter((task) => !task.completed);
    showStatus(t("lessons.clearCompleted", { count: formatNumber(completed) }));
  } else if (button.matches("[data-delete-lesson]")) {
    if (!window.confirm(t("lessons.confirmDelete", { title: lesson.title }))) return;
    lessons.splice(lessons.indexOf(lesson), 1);
    showStatus(t("lessons.deleted"));
  } else if (button.matches("[data-delete-task]")) {
    lesson.tasks = lesson.tasks.filter((task) => task.id !== button.dataset.taskId);
    showStatus(t("lessons.taskDeleted"));
  } else {
    return;
  }
  if (saveLessons()) render();
});

document.querySelector("#planner-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const textInput = document.querySelector("#planner-task");
  const dateInput = document.querySelector("#planner-date");
  const text = textInput.value.trim();
  if (!text || !isDateKey(dateInput.value)) return;
  plannerTasks.push({ id: createId(), text, dueDate: dateInput.value, completed: false });
  if (saveArray(PLANNER_KEY, plannerTasks)) {
    setSelectedDate(dateInput.value);
    event.currentTarget.reset();
    dateInput.value = selectedDate;
    renderPlanner();
    renderStats();
    showStatus(t("planner.added"));
    textInput.focus();
  }
});
document.querySelector("#week-previous").addEventListener("click", () => changeWeek(-1));
document.querySelector("#week-next").addEventListener("click", () => changeWeek(1));
document.querySelector("#week-days").addEventListener("click", (event) => {
  const button = event.target.closest("[data-date]");
  if (!button) return;
  setSelectedDate(button.dataset.date);
  renderPlanner();
});
document.querySelector("#planner-list").addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-planner-checkbox]");
  if (!checkbox) return;
  const task = plannerTasks.find((item) => item.id === checkbox.dataset.taskId);
  if (!task) return;
  task.completed = checkbox.checked;
  if (saveArray(PLANNER_KEY, plannerTasks)) {
    renderPlanner();
    renderStats();
    showStatus(t(task.completed ? "planner.done" : "planner.undone"));
  }
});
document.querySelector("#planner-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-planner]");
  if (!button) return;
  plannerTasks = plannerTasks.filter((item) => item.id !== button.dataset.taskId);
  if (saveArray(PLANNER_KEY, plannerTasks)) {
    renderPlanner();
    renderStats();
    showStatus(t("planner.deleted"));
  }
});

document.querySelector("#focus-mode").addEventListener("click", () => setTimerMode("focus"));
document.querySelector("#break-mode").addEventListener("click", () => setTimerMode("break"));
document.querySelector("#timer-toggle").addEventListener("click", toggleTimer);
document.querySelector("#timer-reset").addEventListener("click", resetTimer);

document.querySelector("#flashcard-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const questionInput = document.querySelector("#card-question");
  const answerInput = document.querySelector("#card-answer");
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if (!question || !answer) return;
  const updatedCards = [...customCards, { id: createId(), question, answer }];
  if (saveArray(CARDS_KEY, updatedCards)) {
    customCards = updatedCards;
    event.currentTarget.reset();
    flashcardIndex = allCards().length - 1;
    cardFlipped = false;
    renderFlashcard();
    showStatus(t("cards.added"));
  }
});
document.querySelector("#flashcard").addEventListener("click", () => {
  if (!allCards().length) return;
  cardFlipped = !cardFlipped;
  renderFlashcard();
});
document.querySelector("#card-previous").addEventListener("click", () => moveCard(-1));
document.querySelector("#card-next").addEventListener("click", () => moveCard(1));
document.querySelector("#card-delete").addEventListener("click", () => {
  const card = allCards()[flashcardIndex];
  if (!card || !customCards.length) return showStatus(t("cards.starterDelete"));
  const remainingCards = customCards.filter((item) => item.id !== card.id);
  if (saveArray(CARDS_KEY, remainingCards)) {
    customCards = remainingCards;
    flashcardIndex = Math.min(flashcardIndex, allCards().length - 1);
    cardFlipped = false;
    renderFlashcard();
    showStatus(t("cards.deleted"));
  }
});
document.querySelector("#export-button").addEventListener("click", exportData);
document.querySelector("#import-button").addEventListener("click", () => document.querySelector("#import-file").click());
document.querySelector("#import-file").addEventListener("change", importData);

function loadArray(key, validator) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error(`Invalid data in ${key}.`);
    const valid = parsed.filter(validator);
    if (valid.length !== parsed.length) {
      console.warn(`Some saved entries were not recognized (${key}); the original browser data has not been changed.`);
    }
    return valid;
  } catch (error) {
    console.error(`Unable to load saved data (${key}).`, error);
    showStatus(t("data.loadError"));
    return [];
  }
}

function loadObject(key, validator, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return { ...fallback };
    const parsed = JSON.parse(raw);
    if (!validator(parsed)) throw new Error(`Invalid data in ${key}.`);
    return parsed;
  } catch (error) {
    console.error(`Unable to load saved data (${key}).`, error);
    showStatus(t("data.loadError"));
    return { ...fallback };
  }
}

function isAlarmSettings(value) {
  return value && typeof value.enabled === "boolean"
    && ["bell", "chime", "digital", "custom"].includes(value.sound)
    && Number.isInteger(value.volume) && value.volume >= 0 && value.volume <= 100
    && typeof value.customSoundName === "string";
}

function isLesson(value) {
  return value !== null && typeof value === "object"
    && typeof value.id === "string" && typeof value.title === "string"
    && typeof value.subject === "string" && Array.isArray(value.tasks)
    && value.tasks.every((task) => task && typeof task.id === "string"
      && typeof task.text === "string" && typeof task.completed === "boolean");
}

function isPlannerTask(value) {
  return value && typeof value.id === "string" && typeof value.text === "string"
    && isDateKey(value.dueDate) && typeof value.completed === "boolean";
}

function isCard(value) {
  return value && typeof value.id === "string" && typeof value.question === "string"
    && typeof value.answer === "string";
}

function isTimer(value) {
  return value && ["focus", "break"].includes(value.mode)
    && Number.isFinite(value.remainingMs) && value.remainingMs > 0
    && (value.runningSince === null || Number.isFinite(value.runningSince));
}

function createId() {
  return globalThis.crypto?.randomUUID?.()
    ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function saveArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save study data (${key}).`, error);
    showStatus(t("data.saveError"));
    return false;
  }
}

function saveLessons() { return saveArray(LESSONS_KEY, lessons); }
function saveTimer() {
  try {
    localStorage.setItem(TIMER_KEY, JSON.stringify(timer));
    return true;
  } catch (error) {
    console.error("Unable to save timer state.", error);
    showStatus(t("data.timerSaveError"));
    return false;
  }
}

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("Unable to save study progress.", error);
    showStatus(t("data.progressSaveError"));
    return false;
  }
}

function saveAlarmSettings(nextSettings) {
  try {
    localStorage.setItem(ALARM_SETTINGS_KEY, JSON.stringify(nextSettings));
    alarmSettings = nextSettings;
    renderAlarmSettings();
    return true;
  } catch (error) {
    console.error("Unable to save alarm settings.", error);
    showStatus(t("data.preferenceSaveError"));
    renderAlarmSettings();
    return false;
  }
}

function renderAlarmSettings() {
  const enabledInput = document.querySelector("#alarm-enabled");
  if (!enabledInput) return;
  enabledInput.checked = alarmSettings.enabled;
  const controls = document.querySelector("#alarm-controls");
  controls.hidden = !alarmSettings.enabled;
  controls.disabled = !alarmSettings.enabled;
  document.querySelector("#alarm-sound").value = alarmSettings.sound;
  const fileInput = document.querySelector("#alarm-file");
  const fileLabel = document.querySelector('label[for="alarm-file"]');
  const customSoundSelected = alarmSettings.sound === "custom";
  fileInput.hidden = !customSoundSelected;
  fileLabel.hidden = !customSoundSelected;
  const fileName = document.querySelector("#alarm-file-name");
  fileName.hidden = !customSoundSelected;
  fileName.textContent = alarmSettings.customSoundName || t("alarm.noFile");
  const volumeInput = document.querySelector("#alarm-volume");
  volumeInput.value = alarmSettings.volume;
  document.querySelector("#alarm-volume-value").textContent =
    t("alarm.volumeValue", { volume: formatNumber(alarmSettings.volume) });
}

function openAlarmDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is unavailable."));
      return;
    }
    const request = indexedDB.open(ALARM_SOUND_DB, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(ALARM_SOUND_STORE)) {
        request.result.createObjectStore(ALARM_SOUND_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Could not open audio storage."));
  });
}

async function storeCustomAlarmSound(file) {
  const database = await openAlarmDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(ALARM_SOUND_STORE, "readwrite");
    transaction.objectStore(ALARM_SOUND_STORE).put(file, "custom");
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error ?? new Error("Could not save the alarm audio."));
    };
    transaction.onabort = () => {
      database.close();
      reject(transaction.error ?? new Error("Alarm audio storage was aborted."));
    };
  });
}

async function readCustomAlarmSound() {
  const database = await openAlarmDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(ALARM_SOUND_STORE, "readonly");
    const request = transaction.objectStore(ALARM_SOUND_STORE).get("custom");
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error ?? new Error("Could not read the alarm audio."));
    transaction.oncomplete = () => database.close();
    transaction.onerror = () => {
      database.close();
      reject(transaction.error ?? new Error("Could not read the alarm audio."));
    };
  });
}

function deleteCustomAlarmDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is unavailable."));
      return;
    }
    const request = indexedDB.deleteDatabase(ALARM_SOUND_DB);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error ?? new Error("Could not clear alarm audio storage."));
    request.onblocked = () => reject(new Error("Alarm audio storage is still in use."));
  });
}

async function saveCustomAlarmSound(event) {
  const file = event.currentTarget.files?.[0];
  if (!file) return;
  const supportedAudio = file.type.startsWith("audio/")
    || (!file.type && /\.(mp3|wav|ogg|m4a|aac|flac|opus|webm)$/i.test(file.name));
  if (!supportedAudio || file.size > 10 * 1024 * 1024) {
    showStatus(t("alarm.fileInvalid"));
    event.currentTarget.value = "";
    return;
  }
  try {
    await storeCustomAlarmSound(file);
    if (!saveAlarmSettings({ ...alarmSettings, sound: "custom", customSoundName: file.name })) return;
    showStatus(t("alarm.fileSaved"));
  } catch (error) {
    console.error("Unable to save custom alarm audio.", error);
    showStatus(t("alarm.storageError"));
  }
}

function stopAlarm(announce = false) {
  alarmPlaybackId += 1;
  window.clearInterval(alarmToneInterval);
  window.clearTimeout(alarmStopTimeout);
  alarmToneInterval = undefined;
  alarmStopTimeout = undefined;
  alarmToneNodes.forEach((node) => {
    try {
      node.stop();
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "InvalidStateError")) {
        console.error("Unable to stop an alarm tone.", error);
      }
    }
  });
  alarmToneNodes = [];
  if (alarmAudio) {
    alarmAudio.pause();
    alarmAudio.src = "";
    alarmAudio = null;
  }
  if (alarmAudioUrl) {
    URL.revokeObjectURL(alarmAudioUrl);
    alarmAudioUrl = null;
  }
  if (announce) showStatus(t("alarm.stop"));
}

function playBuiltinAlarm() {
  const notes = {
    bell: [659, 523, 659],
    chime: [523, 659, 784],
    digital: [880, 660, 880],
  }[alarmSettings.sound];
  const start = alarmAudioContext.currentTime;
  notes.forEach((frequency, index) => {
    const oscillator = alarmAudioContext.createOscillator();
    const gain = alarmAudioContext.createGain();
    const noteStart = start + index * 0.24;
    const noteEnd = noteStart + 0.2;
    oscillator.type = alarmSettings.sound === "digital" ? "square" : "sine";
    oscillator.frequency.setValueAtTime(frequency, noteStart);
    gain.gain.setValueAtTime(0.0001, noteStart);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, alarmSettings.volume / 100 * 0.18), noteStart + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
    oscillator.connect(gain);
    gain.connect(alarmAudioContext.destination);
    oscillator.onended = () => {
      alarmToneNodes = alarmToneNodes.filter((node) => node !== oscillator);
      oscillator.disconnect();
      gain.disconnect();
    };
    alarmToneNodes.push(oscillator);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd);
  });
}

async function playAlarm({ durationMs = 15000, announceEnd = false } = {}) {
  stopAlarm();
  if (!alarmSettings.enabled) return;
  const playbackId = alarmPlaybackId;
  try {
    if (alarmSettings.sound === "custom") {
      const audioBlob = await readCustomAlarmSound();
      if (playbackId !== alarmPlaybackId || !alarmSettings.enabled) return;
      if (!audioBlob) throw new Error("No custom alarm audio is saved.");
      alarmAudioUrl = URL.createObjectURL(audioBlob);
      alarmAudio = new Audio(alarmAudioUrl);
      alarmAudio.volume = alarmSettings.volume / 100;
      alarmAudio.loop = true;
      await alarmAudio.play();
    } else {
      const AudioContextConstructor = window.AudioContext;
      if (!AudioContextConstructor) throw new Error("Web Audio is unavailable.");
      alarmAudioContext ??= new AudioContextConstructor();
      await alarmAudioContext.resume();
      if (playbackId !== alarmPlaybackId || !alarmSettings.enabled) return;
      playBuiltinAlarm();
      alarmToneInterval = window.setInterval(playBuiltinAlarm, 1800);
    }
    alarmStopTimeout = window.setTimeout(() => {
      stopAlarm();
      if (announceEnd) showStatus(t("alarm.testDone"));
    }, durationMs);
  } catch (error) {
    if (playbackId !== alarmPlaybackId) return;
    console.error("Unable to play the study alarm.", error);
    stopAlarm();
    showStatus(t("alarm.unavailable"));
  }
}

function saveScratchpad() {
  try {
    localStorage.setItem(SCRATCHPAD_KEY, scratchpad);
  } catch (error) {
    console.error("Unable to save scratchpad notes.", error);
    showStatus(t("data.saveError"));
  }
}

function timerDuration(mode) {
  return (mode === "focus" ? timerSettings.focusMinutes : timerSettings.breakMinutes) * 60 * 1000;
}

function saveTimerSettings(settings) {
  try {
    localStorage.setItem(TIMER_SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch (error) {
    console.error("Unable to save timer duration settings.", error);
    showStatus(t("data.saveError"));
    return false;
  }
}

function showStatus(message) {
  const status = document.querySelector("#status-message");
  status.textContent = message;
  window.clearTimeout(statusTimer);
  statusTimer = window.setTimeout(() => { status.textContent = ""; }, 3800);
}

function render() {
  const query = document.querySelector("#search-input").value.trim().toLocaleLowerCase(locale());
  const visibleLessons = lessons.filter((lesson) =>
    `${lesson.title} ${lesson.subject}`.toLocaleLowerCase(locale()).includes(query));
  const list = document.querySelector("#lesson-list");
  list.replaceChildren(...visibleLessons.map(createLessonCard));
  const empty = document.querySelector("#empty-state");
  empty.hidden = visibleLessons.length > 0;
  document.querySelector("#empty-title").textContent = t(lessons.length === 0
    ? "lessons.emptyTitle" : "lessons.noResults");
  document.querySelector("#empty-description").textContent = t(lessons.length === 0
    ? "lessons.emptyDescription" : "lessons.noResultsDescription");
  document.querySelector("#stat-lessons").textContent = formatNumber(lessons.length);
  document.querySelector("#visible-count").textContent = lessons.length
    ? `(${formatNumber(visibleLessons.length)})` : "";
  renderStats();
}

function createLessonCard(lesson) {
  const card = document.createElement("article");
  card.className = "lesson-card";
  const completedCount = lesson.tasks.filter((task) => task.completed).length;
  const percent = lesson.tasks.length ? Math.round(completedCount / lesson.tasks.length * 100) : 0;
  const heading = document.createElement("div");
  heading.className = "card-heading";
  const titleWrap = document.createElement("div");
  titleWrap.className = "card-title-wrap";
  if (lesson.subject) {
    const subject = document.createElement("span");
    subject.className = "card-subject";
    subject.textContent = lesson.subject;
    titleWrap.append(subject);
  }
  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = lesson.title;
  titleWrap.append(title);
  const deleteLesson = document.createElement("button");
  deleteLesson.className = "delete-lesson";
  deleteLesson.type = "button";
  deleteLesson.dataset.deleteLesson = "";
  deleteLesson.dataset.lessonId = lesson.id;
  deleteLesson.setAttribute("aria-label", t("lessons.delete", { title: lesson.title }));
  deleteLesson.title = t("lessons.delete", { title: lesson.title });
  deleteLesson.textContent = "×";
  heading.append(titleWrap, deleteLesson);
  card.append(heading);

  const progressRow = document.createElement("div");
  progressRow.className = "card-progress";
  const track = document.createElement("div");
  track.className = "progress-track";
  track.setAttribute("role", "progressbar");
  track.setAttribute("aria-label", t("lessons.progress", { title: lesson.title }));
  track.setAttribute("aria-valuemin", "0");
  track.setAttribute("aria-valuemax", "100");
  track.setAttribute("aria-valuenow", String(percent));
  const fill = document.createElement("div");
  fill.className = "progress-fill";
  fill.style.width = `${percent}%`;
  track.append(fill);
  const progressLabel = document.createElement("span");
  progressLabel.className = "progress-label";
  progressLabel.textContent = lesson.tasks.length
    ? t("lessons.completedCount", { done: formatNumber(completedCount), total: formatNumber(lesson.tasks.length) })
    : t("lessons.firstTask");
  progressRow.append(track, progressLabel);
  card.append(progressRow);

  const taskList = document.createElement("ul");
  taskList.className = "task-list";
  lesson.tasks.forEach((task) => taskList.append(createTaskRow(lesson, task)));
  card.append(taskList);
  const taskForm = document.createElement("form");
  taskForm.className = "task-form";
  taskForm.dataset.taskForm = "";
  taskForm.dataset.lessonId = lesson.id;
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.maxLength = 150;
  taskInput.placeholder = t("lessons.newTask");
  taskInput.setAttribute("aria-label", t("lessons.newTaskLabel", { title: lesson.title }));
  taskInput.dataset.taskInput = lesson.id;
  taskInput.required = true;
  const addTask = document.createElement("button");
  addTask.className = "add-task-button";
  addTask.type = "submit";
  addTask.setAttribute("aria-label", t("lessons.addTask"));
  addTask.title = t("lessons.addTask");
  addTask.textContent = "+";
  taskForm.append(taskInput, addTask);
  card.append(taskForm);

  const footer = document.createElement("div");
  footer.className = "card-footer";
  const date = document.createElement("span");
  date.className = "card-date";
  const createdAt = new Date(lesson.createdAt);
  date.textContent = Number.isNaN(createdAt.getTime()) ? ""
    : dateFormatter().format(createdAt);
  const clearButton = document.createElement("button");
  clearButton.className = "clear-completed";
  clearButton.type = "button";
  clearButton.dataset.clearCompleted = "";
  clearButton.dataset.lessonId = lesson.id;
  clearButton.disabled = completedCount === 0;
  clearButton.textContent = t("lessons.clearButton");
  footer.append(date, clearButton);
  card.append(footer);
  return card;
}

function createTaskRow(lesson, task) {
  const row = document.createElement("li");
  row.className = task.completed ? "task-row completed" : "task-row";
  const checkbox = document.createElement("input");
  checkbox.className = "task-checkbox";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.dataset.taskCheckbox = "";
  checkbox.dataset.lessonId = lesson.id;
  checkbox.dataset.taskId = task.id;
  checkbox.setAttribute("aria-label", t("lessons.taskComplete", { text: task.text }));
  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.text;
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-task";
  deleteButton.type = "button";
  deleteButton.dataset.deleteTask = "";
  deleteButton.dataset.lessonId = lesson.id;
  deleteButton.dataset.taskId = task.id;
  deleteButton.setAttribute("aria-label", t("lessons.taskDelete", { text: task.text }));
  deleteButton.title = t("lessons.taskDelete", { text: task.text });
  deleteButton.textContent = "×";
  row.append(checkbox, text, deleteButton);
  return row;
}

function renderStats() {
  const lessonCompleted = lessons.reduce((total, lesson) =>
    total + lesson.tasks.filter((task) => task.completed).length, 0);
  const plannerCompleted = plannerTasks.filter((task) => task.completed).length;
  const currentFocusSeconds = timer.mode === "focus" && timer.runningSince !== null
    ? Math.max(0, (Date.now() - timer.runningSince) / 1000) : 0;
  const totalMinutes = Math.floor((progress.studySeconds + currentFocusSeconds) / 60);
  document.querySelector("#stat-completed").textContent = formatNumber(lessonCompleted + plannerCompleted);
  document.querySelector("#stat-study-time").textContent = totalMinutes >= 60
    ? `${formatNumber(Math.floor(totalMinutes / 60))} ${t("stats.hours")} ${formatNumber(totalMinutes % 60)} ${t("stats.minutes")}`
    : `${formatNumber(totalMinutes)} ${t("stats.minutes")}`;
  document.querySelector("#stat-sessions").textContent = formatNumber(progress.focusSessions);
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isDateKey(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && toDateKey(date) === value;
}

function startOfWeek(date) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7);
  return monday;
}

function getWeekDates() {
  const monday = startOfWeek(new Date());
  monday.setDate(monday.getDate() + weekOffset * 7);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

function changeWeek(amount) {
  weekOffset += amount;
  const weekDates = getWeekDates();
  setSelectedDate(toDateKey(weekDates[0]));
  renderPlanner();
}

function renderPlanner() {
  const dates = getWeekDates();
  const first = dates[0];
  const last = dates[6];
  const rangeFormat = new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" });
  document.querySelector("#week-label").textContent =
    `${rangeFormat.format(first)} – ${rangeFormat.format(last)}`;
  const dateInput = document.querySelector("#planner-date");
  dateInput.value = selectedDate;
  dateInput.min = toDateKey(first);
  dateInput.max = toDateKey(last);
  const dayButtons = dates.map((date) => {
    const key = toDateKey(date);
    const button = document.createElement("button");
    button.className = key === selectedDate ? "day-chip selected" : "day-chip";
    button.type = "button";
    button.dataset.date = key;
    button.setAttribute("aria-pressed", String(key === selectedDate));
    const name = document.createElement("span");
    name.textContent = weekdayFormatter().format(date);
    const day = document.createElement("strong");
    day.textContent = formatNumber(date.getDate());
    const count = plannerTasks.filter((task) => task.dueDate === key && !task.completed).length;
    const pending = document.createElement("span");
    pending.textContent = count ? formatNumber(count) : " ";
    button.append(name, day, pending);
    return button;
  });
  document.querySelector("#week-days").replaceChildren(...dayButtons);

  const todaysTasks = plannerTasks.filter((task) => task.dueDate === selectedDate);
  const list = document.querySelector("#planner-list");
  list.replaceChildren(...todaysTasks.map((task) => {
    const row = document.createElement("li");
    row.className = task.completed ? "planner-item completed" : "planner-item";
    const check = document.createElement("input");
    check.className = "planner-check";
    check.type = "checkbox";
    check.checked = task.completed;
    check.dataset.plannerCheckbox = "";
    check.dataset.taskId = task.id;
    check.setAttribute("aria-label", t("planner.completed", { text: task.text }));
    const text = document.createElement("span");
    text.className = "planner-text";
    text.textContent = task.text;
    const date = document.createElement("time");
    date.className = "planner-date";
    date.dateTime = task.dueDate;
    date.textContent = dateFormatter().format(new Date(`${task.dueDate}T12:00:00`));
    const remove = document.createElement("button");
    remove.className = "delete-planner";
    remove.type = "button";
    remove.dataset.deletePlanner = "";
    remove.dataset.taskId = task.id;
    remove.setAttribute("aria-label", t("planner.delete", { text: task.text }));
    remove.textContent = "×";
    row.append(check, text, date, remove);
    return row;
  }));
  document.querySelector("#planner-empty").hidden = todaysTasks.length > 0;
}

function currentTimerRemaining() {
  if (timer.runningSince === null) return timer.remainingMs;
  return Math.max(0, timer.remainingMs - (Date.now() - timer.runningSince));
}

function renderTimer() {
  const remaining = currentTimerRemaining();
  const seconds = Math.ceil(remaining / 1000);
  const zero = formatNumber(0);
  document.querySelector("#timer-display").textContent =
    `${formatNumber(Math.floor(seconds / 60)).padStart(2, zero)}:${formatNumber(seconds % 60).padStart(2, zero)}`;
  document.querySelector("#timer-caption").textContent = t(timer.mode === "focus" ? "timer.focus" : "timer.break");
  const duration = timerDuration(timer.mode);
  const fraction = Math.min(1, Math.max(0, remaining / duration));
  document.querySelector("#timer-progress").style.strokeDasharray = String(ringCircumference);
  document.querySelector("#timer-progress").style.strokeDashoffset = String(ringCircumference * (1 - fraction));
  const running = timer.runningSince !== null;
  document.querySelector("#timer-toggle").textContent = t(running ? "timer.pause" : "timer.start");
  document.querySelector("#timer-toggle").setAttribute("aria-label", t(running ? "timer.pauseLabel" : "timer.startLabel"));
  document.querySelector("#focus-mode").classList.toggle("active", timer.mode === "focus");
  document.querySelector("#break-mode").classList.toggle("active", timer.mode === "break");
  document.querySelector("#focus-mode").setAttribute("aria-pressed", String(timer.mode === "focus"));
  document.querySelector("#break-mode").setAttribute("aria-pressed", String(timer.mode === "break"));
  document.querySelector("#focus-mode").textContent =
    t("timer.focusMode", { minutes: formatNumber(timerSettings.focusMinutes) });
  document.querySelector("#break-mode").textContent =
    t("timer.breakMode", { minutes: formatNumber(timerSettings.breakMinutes) });
  document.querySelector("#timer-sessions").textContent = progress.focusSessions
    ? t("timer.sessionCount", { count: formatNumber(progress.focusSessions) })
    : t("timer.sessionHint");
}

function setTimerMode(mode) {
  stopAlarm();
  if (timer.runningSince !== null) pauseTimer(false);
  timer.mode = mode;
  timer.remainingMs = timerDuration(mode);
  timer.runningSince = null;
  saveTimer();
  renderTimer();
}

function toggleTimer() {
  if (timer.runningSince !== null) {
    pauseTimer(true);
    return;
  }
  if (timer.remainingMs <= 0) timer.remainingMs = timerDuration(timer.mode);
  timer.runningSince = Date.now();
  saveTimer();
  renderTimer();
}

function pauseTimer(announce) {
  if (timer.runningSince === null) return;
  stopAlarm();
  const now = Date.now();
  const remaining = currentTimerRemaining();
  const elapsed = Math.max(0, timer.remainingMs - remaining);
  if (timer.mode === "focus" && elapsed > 0) {
    progress.studySeconds += Math.floor(elapsed / 1000);
    saveProgress();
  }
  timer.remainingMs = remaining;
  timer.runningSince = null;
  saveTimer();
  renderTimer();
  renderStats();
  if (announce) showStatus(t("timer.paused"));
}

function resetTimer() {
  stopAlarm();
  if (timer.runningSince !== null) pauseTimer(false);
  timer.remainingMs = timerDuration(timer.mode);
  timer.runningSince = null;
  saveTimer();
  renderTimer();
  showStatus(t("timer.resetStatus"));
}

async function resetAllData() {
  const resetError = document.querySelector("#factory-reset-error");
  resetError.hidden = true;
  resetError.textContent = "";
  const keys = [
    LESSONS_KEY, PLANNER_KEY, CARDS_KEY, PROGRESS_KEY, TIMER_KEY,
    LANGUAGE_KEY, THEME_KEY, PALETTE_KEY, CUSTOM_ACCENT_KEY,
    TIMER_SETTINGS_KEY, SCRATCHPAD_KEY, SELECTED_DATE_KEY, ALARM_SETTINGS_KEY,
  ];
  const hadCustomAlarmSound = Boolean(alarmSettings.customSoundName);
  let previousValues;
  try {
    previousValues = keys.map((key) => [key, localStorage.getItem(key)]);
    keys.forEach((key) => localStorage.removeItem(key));
    if (hadCustomAlarmSound) await deleteCustomAlarmDatabase();
  } catch (error) {
    console.error("Unable to reset all study data.", error);
    previousValues?.forEach(([key, value]) => {
      try {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch (rollbackError) {
        console.error(`Unable to restore study data (${key}) after reset failure.`, rollbackError);
      }
    });
    resetError.textContent = t("resetAll.error");
    resetError.hidden = false;
    return;
  }
  stopAlarm();
  isResettingAllData = true;
  window.clearTimeout(scratchpadSaveTimeout);
  window.clearInterval(timerInterval);
  document.querySelector("#factory-reset-dialog").close();
  window.location.reload();
}

function completeTimerPeriod() {
  if (alarmSettings.enabled) playAlarm();
  if (timer.mode === "focus") {
    progress.studySeconds += Math.ceil(timer.remainingMs / 1000);
    progress.focusSessions += 1;
    saveProgress();
    timer.mode = "break";
    timer.remainingMs = timerDuration("break");
    showStatus(t("timer.focusComplete"));
  } else {
    timer.mode = "focus";
    timer.remainingMs = timerDuration("focus");
    showStatus(t("timer.breakComplete"));
  }
  timer.runningSince = null;
  saveTimer();
}

function tickTimer() {
  const completed = timer.runningSince !== null && currentTimerRemaining() <= 0;
  if (completed) completeTimerPeriod();
  renderTimer();
  if (completed) renderStats();
}

function allCards() {
  return customCards.length ? customCards : language === "ar" ? starterCards : englishStarterCards;
}

function moveCard(amount) {
  flashcardIndex = (flashcardIndex + amount + allCards().length) % allCards().length;
  cardFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const cards = allCards();
  const card = cards[flashcardIndex];
  const button = document.querySelector("#flashcard");
  const deleteButton = document.querySelector("#card-delete");
  if (!card) {
    document.querySelector("#card-content").textContent = t("cards.emptyContent");
    document.querySelector("#card-face-label").textContent = t("cards.emptyTitle");
    document.querySelector("#card-position").textContent = t("cards.emptyPosition");
    button.disabled = true;
    deleteButton.hidden = true;
    return;
  }
  button.disabled = false;
  deleteButton.hidden = customCards.length === 0;
  document.querySelector("#card-content").textContent = cardFlipped ? card.answer : card.question;
  document.querySelector("#card-face-label").textContent = t(cardFlipped ? "cards.faceAnswer" : "cards.faceQuestion");
  document.querySelector("#card-position").textContent =
    t("cards.count", { current: formatNumber(flashcardIndex + 1), total: formatNumber(cards.length) });
}

function exportData() {
  const payload = {
    format: BACKUP_FORMAT,
    version: 1,
    exportedAt: new Date().toISOString(),
    lessons,
    plannerTasks,
    flashcards: customCards,
    progress,
    scratchpad,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `rafiq-study-backup-${toDateKey(new Date())}.json`;
  document.body.append(link);
  link.click();
  window.setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(url);
  }, 1000);
  showStatus(t("data.exported"));
}

async function importData(event) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  if (!file) return;
  const importButton = document.querySelector("#import-button");
  importButton.disabled = true;
  importButton.setAttribute("aria-busy", "true");
  try {
    const payload = JSON.parse(await file.text());
    const importedLessons = Array.isArray(payload) ? payload : payload?.lessons;
    if (!Array.isArray(importedLessons) || !importedLessons.every(isLesson)) {
      throw new Error(t("data.importInvalidLessons"));
    }
    const importedPlanner = Array.isArray(payload) ? [] : payload.plannerTasks ?? [];
    const importedCards = Array.isArray(payload) ? [] : payload.flashcards ?? [];
    const importedProgress = Array.isArray(payload) ? null : payload.progress;
    const importedScratchpad = Array.isArray(payload) || payload?.scratchpad === undefined
      ? null : payload.scratchpad;
    if (!Array.isArray(importedPlanner) || !importedPlanner.every(isPlannerTask)
      || !Array.isArray(importedCards) || !importedCards.every(isCard)
      || (importedScratchpad !== null
        && (typeof importedScratchpad !== "string" || importedScratchpad.length > 10000))
      || (importedProgress !== undefined && importedProgress !== null
        && !(Number.isFinite(importedProgress.studySeconds) && importedProgress.studySeconds >= 0
          && Number.isInteger(importedProgress.focusSessions) && importedProgress.focusSessions >= 0))) {
      throw new Error(t("data.importInvalid"));
    }
    const mergeById = (current, incoming) => {
      const knownIds = new Set(current.map((item) => item.id));
      return [...current, ...incoming.filter((item) => {
        if (knownIds.has(item.id)) return false;
        knownIds.add(item.id);
        return true;
      })];
    };
    const mergedLessons = mergeById(lessons, importedLessons);
    const mergedPlanner = mergeById(plannerTasks, importedPlanner);
    const mergedCards = mergeById(customCards, importedCards);
    const mergedProgress = importedProgress ? {
      studySeconds: Math.max(progress.studySeconds, importedProgress.studySeconds),
      focusSessions: Math.max(progress.focusSessions, importedProgress.focusSessions),
    } : progress;
    const restoredScratchpad = !scratchpad.trim() && typeof importedScratchpad === "string"
      ? importedScratchpad : null;
    if (!window.confirm(t("data.importConfirm"))) return;
    if (!saveImportedData(
      mergedLessons, mergedPlanner, mergedCards, importedProgress ? mergedProgress : null, restoredScratchpad,
    )) return;
    lessons.splice(0, lessons.length, ...mergedLessons);
    plannerTasks = mergedPlanner;
    customCards = mergedCards;
    progress = mergedProgress;
    if (restoredScratchpad !== null) {
      scratchpad = restoredScratchpad;
      document.querySelector("#scratchpad-input").value = scratchpad;
    }
    render();
    renderPlanner();
    renderFlashcard();
    showStatus(t("data.imported"));
  } catch (error) {
    console.error("Unable to import study backup.", error);
    showStatus(t("data.importError", { error: error.message }));
  } finally {
    input.value = "";
    importButton.disabled = false;
    importButton.removeAttribute("aria-busy");
  }
}

function saveImportedData(importedLessons, importedPlanner, importedCards, importedProgress, importedScratchpad) {
  const entries = [
    [LESSONS_KEY, importedLessons],
    [PLANNER_KEY, importedPlanner],
    [CARDS_KEY, importedCards],
  ];
  if (importedProgress) entries.push([PROGRESS_KEY, importedProgress]);
  if (importedScratchpad !== null) entries.push([SCRATCHPAD_KEY, importedScratchpad]);
  let previousValues;
  try {
    previousValues = entries.map(([key]) => [key, localStorage.getItem(key)]);
    entries.forEach(([key, value]) => localStorage.setItem(
      key, key === SCRATCHPAD_KEY ? value : JSON.stringify(value),
    ));
    return true;
  } catch (error) {
    console.error("Unable to save imported study data.", error);
    previousValues?.forEach(([key, value]) => {
      try {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch (rollbackError) {
        console.error(`Unable to restore saved data (${key}) after import failure.`, rollbackError);
      }
    });
    showStatus(t("data.importSaveError"));
    return false;
  }
}

render();
renderPlanner();
renderTimer();
renderFlashcard();
document.querySelector("#planner-date").value = selectedDate;
timerInterval = window.setInterval(() => {
  if (timer.runningSince !== null) tickTimer();
}, 1000);
