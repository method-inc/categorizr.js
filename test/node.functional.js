/*global assert*/
(function (name, context, definition) {

  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);

}('categorizr', this, function(name, context) {
  // faking a request
  context.request = {
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) RockMelt/0.8.34.841 Chrome/6.0.472.63 Safari/534.3'
      }
    }

  var buster = require('buster')
    , categorizr = require('./../')

  buster.testCase('properties', {
    'categorizr loaded': function () {
      assert(!!categorizr)
    }
  , 'isWindow test returns false': function () {
      assert(context != null)
      assert(context !== context.window)
    }
  , 'isNode test returns false': function () {
      assert(context != null)
      assert(context !== context.window)
    }
  })

}))
