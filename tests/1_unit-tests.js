const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

  test('Translate Mangoes are my favorite fruit.', done => {
    const text = 'Mangoes are my favorite fruit.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  });

  test('Translate I ate yogurt for breakfast.', done => {
    const text = 'I ate yogurt for breakfast.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });

  test('Translate We had a party at my friend\'s condo.', done => {
    const text = 'We had a party at my friend\'s condo.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    done();
  });

  // test('Translate Can you toss this in the trashcan for me?', done => {
  //   const text = 'Can you toss this in the trashcan for me?';
  //   const translation = translator.translate(text, 'american-to-british');
  //   assert.equal(translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
  //   done();
  // });

  test('Translate The parking lot was full.', done => {
    const text = 'The parking lot was full.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'The <span class="highlight">car park</span> was full.');
    done();
  });

  test('Translate Like a high tech Rube Goldberg machine.', done => {
    const text = 'Like a high tech Rube Goldberg machine.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    done();
  });

  test('Translate To play hooky means to skip class or work.', done => {
    const text = 'To play hooky means to skip class or work.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    done();
  });

  test('Translate No Mr. Bond, I expect you to die.', done => {
    const text = 'No Mr. Bond, I expect you to die.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    done();
  });

  test('Translate Dr. Grosh will see you now.', done => {
    const text = 'Dr. Grosh will see you now.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, '<span class="highlight">Dr</span> Grosh will see you now.');
    done();
  });

  test('Translate Lunch is at 12:15 today.', done => {
    const text = 'Lunch is at 12:15 today.';
    const translation = translator.translate(text, 'american-to-british');
    assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
    done();
  });

  test('Translate We watched the footie match for a while.', done => {
    const text = 'We watched the footie match for a while.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });

  // test('Translate Paracetamol takes up to an hour to work.', done => {
  //   const text = 'Paracetamol takes up to an hour to work.';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
  //   done();
  // });

  test('Translate First, caramelise the onions.', done => {
    const text = 'First, caramelise the onions.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'First, <span class="highlight">caramelize</span> the onions.');
    done();
  });

  // test('Translate I spent the bank holiday at the funfair.', done => {
  //   const text = 'I spent the bank holiday at the funfair.';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, 'I spent the bank holiday at the <span class="highlight">carnival</span>.');
  //   done();
  // });

  // test('Translate I had a bicky then went to the chippy.', done => {
  //   const text = 'I had a bicky then went to the chippy.';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
  //   done();
  // });

  test('Translate I\'ve just got bits and bobs in my bum bag.', done => {
    const text = 'I\'ve just got bits and bobs in my bum bag.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    done();
  });

  test('Translate The car boot sale at Boxted Airfield was called off.', done => {
    const text = 'The car boot sale at Boxted Airfield was called off.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    done();
  });

  // test('Translate Have you met Mrs Kalyani?', done => {
  //   const text = 'Have you met Mrs Kalyani?';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
  //   done();
  // });

  test('Translate Prof Joyner of King\'s College, London.', done => {
    const text = 'Prof Joyner of King\'s College, London.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    done();
  });

  test('Translate Tea time is usually around 4 or 4.30.', done => {
    const text = 'Tea time is usually around 4 or 4.30.';
    const translation = translator.translate(text, 'british-to-american');
    assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    done();
  });

  // test('Translate ', done => {
  //   const text = '';
  //   const translation = translator.translate(text, 'american-to-british');
  //   assert.equal(translation, '<span class="highlight"></span>');
  //   done();
  // });

  // test('Translate ', done => {
  //   const text = '';
  //   const translation = translator.translate(text, 'american-to-british');
  //   assert.equal(translation, '<span class="highlight"></span>');
  //   done();
  // });

  // test('Translate ', done => {
  //   const text = '';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, '<span class="highlight"></span>');
  //   done();
  // });

  // test('Translate ', done => {
  //   const text = '';
  //   const translation = translator.translate(text, 'british-to-american');
  //   assert.equal(translation, '<span class="highlight"></span>');
  //   done();
  // });

});
