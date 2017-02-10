var assert = require('assert')
var luhn = require('../..')

module.exports = {
  luhn: {
    check: {
      'accepts a good Visa number': function () {
        assert.ok(luhn.check('4111111111111111'))
      },
      'fails a bad Visa number': function () {
        assert.ok(!luhn.check('4111111111111110'))
      }
    }
  }
}
