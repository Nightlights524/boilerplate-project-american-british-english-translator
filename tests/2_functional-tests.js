const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

// let Translator = require('../components/translator.js');

suite('Functional Tests ->', () => {

  test('Translation with text and locale fields', done => {
    const text = 'Mangoes are my favorite fruit.';
    const translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    const locale = 'american-to-british';
    chai.request(server)
      .post('/api/translate')
      .send({text, locale})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {text, translation});
        done();
      });
  });

  test('Translation with text and invalid locale field', done => {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'americaaaan-to-british';
    chai.request(server)
      .post('/api/translate')
      .send({text, locale})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {error: 'Invalid value for locale field'});
        done();
      });
  });

  test('Translation with missing text field', done => {
    const locale = 'american-to-british';
    chai.request(server)
      .post('/api/translate')
      .send({locale})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {error: 'Required field(s) missing'});
        done();
      });
  });

  test('Translation with missing locale field', done => {
    const text = 'Mangoes are my favorite fruit.';
    chai.request(server)
      .post('/api/translate')
      .send({text})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {error: 'Required field(s) missing'});
        done();
      });
  });

  test('Translation with empty text', done => {
    const text = '';
    const locale = 'american-to-british';
    chai.request(server)
      .post('/api/translate')
      .send({text, locale})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {error: 'No text to translate'});
        done();
      });
  });

  test('Translation with text that needs no translation', done => {
    const text = 'Mangoes are my favourite fruit.';
    const translation = 'Everything looks good to me!';
    const locale = 'american-to-british';
    chai.request(server)
      .post('/api/translate')
      .send({text, locale})
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {text, translation});
        done();
      });
  });

});
