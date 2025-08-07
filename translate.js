const defaultLang = 'da';

async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();
  document.documentElement.lang = lang;
  document.title = translations.pageTitle || document.title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      el.setAttribute('placeholder', translations[key]);
    }
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[key]) {
      el.setAttribute('alt', translations[key]);
    }
  });
  document.querySelectorAll('[data-setlang]').forEach(btn => {
    const active = btn.getAttribute('data-setlang') === lang;
    btn.classList.toggle('bg-[#407d5e]', active);
    btn.classList.toggle('underline', active);
  });
}

document.querySelectorAll('[data-setlang]').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-setlang')));
});

setLanguage(defaultLang);
