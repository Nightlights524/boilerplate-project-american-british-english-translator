const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const britishToAmericanSpelling = keyValueStringSwap(americanToBritishSpelling);
const britishToAmericanTitles = keyValueStringSwap(americanToBritishTitles);

class Translator {
  translate(text, locale) {
    let translation = text;
    let translationObjects;
    
    if (locale === "american-to-british") {
      translationObjects = [americanOnly, americanToBritishSpelling, americanToBritishTitles];
      translation = translation.replace(/([0-9]{1,2}):([0-9]{1,2})/, '<span class="highlight">$1.$2</span>');
    }
    else {
      translationObjects = [britishOnly, britishToAmericanSpelling, britishToAmericanTitles];
      translation = translation.replace(/([0-9]{1,2}).([0-9]{1,2})/, '<span class="highlight">$1:$2</span>');
    }

    for (const object of translationObjects) {
      for (const key in object) {
        const regex = new RegExp(key, "gi");
        translation = translation.replace(regex, '<span class="highlight">' + object[key] + '</span>');
      }
    }
    
    return translation;
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