/*global assert, categorizr, ender*/

if (typeof module == 'object' && typeof require == 'function') {
  var buster = require('buster');
}

buster.testCase('static properties', {
  'ender exists on window': function () {
    assert(!!window['$'])
    assert(!!window['ender'])
  }
, 'categorizr exists on ender': function () {
    assert(!!window['$'])
    assert(!!window['ender'])
    assert(!!window['ender']['categorizr'])
    assert(window['ender']['categorizr'] === categorizr)
  }

  // categorizr static properties.
  // right now I'm only running tests on desktop browsers
, 'ender.isDesktop -> true': function () {
    assert(ender.isDesktop)
  }
, 'ender.isTv -> false': function () {
    assert(!ender.isTv)
  }
, 'ender.isTablet -> false': function () {
    assert(!ender.isTablet)
  }
, 'ender.isMobile -> false': function () {
    assert(!ender.isMobile)
  }
})

buster.testCase('api::getter', {
  'ender.categorizr() should return desktop': function () {
    assert(ender.categorizr() === 'desktop')
  }
, 'ender.isDeviceType("desktop") should return true': function () {
    assert(ender.isDeviceType("desktop"))
  }
, 'ender.categorizr.is("desktop") should return true': function () {
    assert(ender.categorizr.is('desktop'))
  }
})

buster.testCase('api::setter', {
  'set as tablet': function () {
    assert(ender.categorizr('tablet') === 'tablet')
    assert(ender.categorizr() === 'tablet')
    assert(ender.categorizr.isDesktop === false)
    assert(ender.categorizr.isMobile === false)
    assert(ender.categorizr.isTv === false)
    assert(ender.categorizr.isTablet === true)
  }
, 'set as mobile': function () {
    assert(ender.categorizr('mobile') === 'mobile')
    assert(ender.categorizr() === 'mobile')
    assert(ender.isDesktop === false)
    assert(ender.isTablet === false)
    assert(ender.isTv === false)
    assert(ender.isMobile === true)
  }
, 'set as tv': function () {
    assert(ender.categorizr('tv') === 'tv')
    assert(ender.categorizr() === 'tv')
    assert(ender.isTv === true)
    assert(ender.isDesktop === false)
    assert(ender.isTablet === false)
    assert(ender.isMobile === false)
  }

, 'set tvs as desktops': function () {
    ender.categorizr('tv')
    ender.categorizr('tv', 'desktop')
    assert(ender.categorizr() === 'desktop')
    assert(ender.isDesktop === true)
    assert(ender.isMobile === false)
    assert(ender.isTv === false)
    assert(ender.isTablet === false)
  }
})

buster.testCase('events', {
  prepare: function () {
    ender.categorizr('mobile')
  }
, conclude: function () {
    ender(window).unbind('deviceChange')
  }
, 'changing deviceType should trigger an event': function (done) {

    ender(window).bind('deviceChange', function(device) {
      console.log("deviceChange", arguments)
      assert(device.type === 'tablet')
      done()
    })

    ender.categorizr('tablet')
  }
})


