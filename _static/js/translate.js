import { get_translations } from './prepare_text.js';

const translations = await get_translations();

console.log(translations)

/** @type {HTMLButtonElement} */
const set_thai_btn = document.getElementById("set-thai");

/** @type {HTMLButtonElement} */
const set_eng_btn = document.getElementById("set-eng");

/**
 * Set Language.
 * @param {*} lang 
 */

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    elem.textContent = translations[lang][key];
  });

  if (lang == "en") {
    set_thai_btn.disabled = false
    set_eng_btn.disabled = true
  } else if (lang == "th") {
    set_thai_btn.disabled = true
    set_eng_btn.disabled = false
  }

  localStorage.setItem("lang", lang);
}

set_eng_btn.addEventListener("click", () => {
    setLang("en")
});
set_thai_btn.addEventListener("click", () => {
    setLang("th")
});