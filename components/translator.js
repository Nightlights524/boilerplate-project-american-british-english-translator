const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const britishToAmericanSpelling = keyValueStringSwap(americanToBritishSpelling);
const britishToAmericanTitles = keyValueStringSwap(americanToBritishTitles);

class Translator {
  translate(text, locale, highlight = false) {
    let translation = text;
    let translationObjects;
    let titles;
    
    if (locale === "american-to-british") {
      translationObjects = [americanOnly, americanToBritishSpelling];
      titles = americanToBritishTitles;
      translation = translation.replace(/([0-9]{1,2}):([0-9]{1,2})/, '$1.$2');
    }
    else if (locale === "british-to-american")  {
      translationObjects = [britishOnly, britishToAmericanSpelling];
      titles = britishToAmericanTitles;
      translation = translation.replace(/([0-9]{1,2}).([0-9]{1,2})/, '$1:$2');
    }
    else {
      return "ERROR! INVALID LOCALE";
    }

    for (const object of translationObjects) {
      for (const key in object) {
        const testRegex = new RegExp(`\\b${key}\\b`, "gi");
        const keyRegex = new RegExp(`${key}`, 'gi');
        const replacement = highlight ? this.highlight(object[key]) : object[key];

        if (testRegex.test(translation)) {
          translation = translation.replace(keyRegex, `~${replacement}~`);
        }
      }
    }

    for (const key in titles) {
      const regexString = locale === 'american-to-british' ? `${key}` : `\\b${key}\\b`;
      const titleRegex = new RegExp(regexString, 'gi');
      const replacement = highlight ? this.highlight(titles[key]) : titles[key];

      translation = translation.replace(titleRegex, `~${replacement}~`);
    }

    translation = translation.replace(/~/g, '');
    return translation;
  }

  highlight(text) {
    return `<span class="highlight">${text}</span>`;
  }
}

module.exports = Translator;

//------------------------------------

function keyValueStringSwap(object) {
  const newObject = {};

  for (const key in object) {
    newObject[object[key]] = key;
  }

  return newObject;
}