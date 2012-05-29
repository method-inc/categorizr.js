/*global assert, categorizr*/

//var buster = require('buster')
//var categorizr = require('categorizr')
if (typeof module == 'object' && typeof require == 'function') {
  var buster = require('buster');
}

buster.testCase('static properties', {
  'categorizr exists on the window': function () {
    assert(!!window['categorizr'])
    assert(window['categorizr'] === categorizr)
  }

  // categorizr static properties.
  // right now I'm only running tests on desktop browsers
, 'categorizr.isDesktop -> true': function () {
    assert(categorizr.isDesktop)
  }
, 'categorizr.isTv -> false': function () {
    assert(!categorizr.isTv)
  }
, 'categorizr.isTablet -> false': function () {
    assert(!categorizr.isTablet)
  }
, 'categorizr.isMobile -> false': function () {
    assert(!categorizr.isMobile)
  }
})

buster.testCase('api::getter', {
  'should return desktop': function () {
    assert(categorizr() === 'desktop')
  }
})

buster.testCase('api::setter', {
  'set as tablet': function () {
    assert(categorizr('tablet') === 'tablet')
    assert(categorizr() === 'tablet')
    assert(categorizr.isDesktop === false)
    assert(categorizr.isMobile === false)
    assert(categorizr.isTv === false)
    assert(categorizr.isTablet === true)
  }
, 'set as mobile': function () {
    assert(categorizr('mobile') === 'mobile')
    assert(categorizr() === 'mobile')
    assert(categorizr.isDesktop === false)
    assert(categorizr.isTablet === false)
    assert(categorizr.isTv === false)
    assert(categorizr.isMobile === true)
  }
, 'set as tv': function () {
    assert(categorizr('tv') === 'tv')
    assert(categorizr() === 'tv')
    assert(categorizr.isTv === true)
    assert(categorizr.isDesktop === false)
    assert(categorizr.isTablet === false)
    assert(categorizr.isMobile === false)
  }

, 'set tvs as desktops': function () {
    categorizr('tv')
    categorizr('tv', 'desktop')
    console.log(categorizr())
    assert(categorizr() === 'desktop')
    assert(categorizr.isDesktop === true)
    assert(categorizr.isMobile === false)
    assert(categorizr.isTv === false)
    assert(categorizr.isTablet === false)
  }

})

