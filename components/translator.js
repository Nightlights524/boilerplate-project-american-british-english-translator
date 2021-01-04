const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const britishToAmericanSpelling = {foo: "foo"};
const britishToAmericanTitles = {foo: "foo"};

class Translator {
  translate(text, locale) {
    let translation = text;
    let translationObjects = [americanOnly, americanToBritishSpelling, americanToBritishTitles];

    if (locale === "british-to-american") {
      translationObjects = [britishOnly, britishToAmericanSpelling, britishToAmericanTitles];
    }

    for (const object of translationObjects) {
      for (const key in object) {
        const regex = new RegExp(key, "g");
        translation = translation.replace(regex, '<span class="highlight">' + object[key] + '</span>');
      }
    }
    
    return translation;
  }
}

module.exports = Translator;