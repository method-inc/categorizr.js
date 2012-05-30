/*global assert*/
(function (name, context, definition) {

  if (typeof module !== 'undefined') module.exports = definition(name, context);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);

}('categorizr', this, function(name, context) {

  var buster = require('buster')
    , categorizr = require('./../')
    , desktops = require('./ua-strings/desktop.js')
    , tablets = require('./ua-strings/tablet.js')
    , mobiles = require('./ua-strings/mobile.js')

  buster.testCase('Test UA\'s report expected device type', {
    'all desktops UA\'s report as desktops': function () {
      desktops.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'desktop')
      })
    }
  , 'all tablet UA\'s report as desktops': function () {
      tablets.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'tablet')
      })
    }
  , 'all mobile UA\'s report as desktops': function () {
      mobiles.forEach(function (ua, i) {
        assert(categorizr.test(ua) === 'mobile')
      })
    }
  })

}))
