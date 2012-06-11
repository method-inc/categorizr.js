(function ($) {
  var c = require('categorizr'), o = {}, k
  for (k in c) {
    if (Object.hasOwnProperty.call(c, k)) {
      o[k == 'test' ? 'testUserAgent' : k == 'is' ? 'isDeviceType' : k] = c[k]
    }
  }
  $.ender(o)
}(ender));