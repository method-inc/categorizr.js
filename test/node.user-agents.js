/*global assert*/
(function (name, context, definition) {

  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);

}('categorizr', this, function(name, context) {

  var buster = require('buster')
    , categorizr = require('./../')
    , uas = require('./user-agents.js')

  buster.testCase('Test UA\'s report expected device type', {
    'all desktops UA\'s report as desktops': function () {
      uas.desktop.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'desktop')
      })
    }
  , 'all tablet UA\'s report as desktops': function () {
      uas.tablet.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'mobile')
      })
    }
  , 'all mobile UA\'s report as desktops': function () {
      uas.mobile.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'mobile')
      })
    }
  })

}))
