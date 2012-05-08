(function (name, context, definition) {
  if (typeof module !== 'undefined') module.exports = definition(name, context, true);
  else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  else context[name] = definition(name, context);
}('categorizr', this, function(name, context, isNode) {

  var ua = navigator.userAgent
    , docElement = isNode ? null : document.documentElement
    , isBrowser = !isNode

                // smart tv
    , device =  ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? 'tv'
                // tv-based gaming console
              : ua.match(/Xbox|PLAYSTATION.3|Wii/i) ? 'tv'
                // tablet
              : ua.match(/iP(a|ro)d/i) || ua.match(/tablet/i) && !ua.match(/RX-34/i) || ua.match(/FOLIO/i) ? 'tablet'
                // android tablet
              : ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ? 'tablet'
                // Kindle or Kindle Fire
              : ua.match(/Kindle/i) || ua.match(/Mac.OS/i) && ua.match(/Silk/i) ? 'tablet'
                // pre Android 3.0 Tablet
              : ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || ua.match(/MB511/i) && ua.match(/RUTEM/i) ? 'tablet'
                // unique Mobile User Agent
              : ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i) ? 'mobile'
                // odd Opera User Agent - http://goo.gl/nK90K
              : ua.match(/Opera/i) && ua.match(/Windows.NT.5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? 'mobile'
                // Windows Desktop
              : ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i) ? 'desktop'
                // Mac Desktop
              : ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i) ? 'desktop'
                // Linux Desktop
              : ua.match(/Linux/i) && ua.match(/X11/i) ? 'desktop'
                // Solaris, SunOS, BSD Desktop
              : ua.match(/Solaris|SunOS|BSD/i) ? 'desktop'
                // Desktop BOT/Crawler/Spider
              : ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !ua.match(/Mobile/i) ? 'desktop'
                // assume it is a Mobile Device (mobile-first)
              : 'mobile'
    , is = function (type) {
        return device === type
      }
    , isDesktop = function () {
        return is('desktop')
      }
    , isTablet = function () {
        return is('tablet')
      }
    , isTV = function () {
        return is('tv')
      }
    , isMobile = function () {
        return is('mobile')
      }
    , categorizr = {
        is: is
      , isDesktop: isDesktop
      , isTablet: isTablet
      , isTV: isTV
      , isMobile: isMobile
      , categorizeType: function (real, faked) {
          if (device === real) {
            device = faked
            setClassName()
          }
        }
      , setType: function(type) {
          device = type
          setClassName()
        }
      , getType: function () {
          return device
        }
      }

  function setClassName() {
    if (isBrowser) {
      docElement.className = docElement.className.replace(/(^|\s)desktop|tablet|tv|mobile(\s|$)/, '$1$2') + (' ' + device)
    }
  }

  setClassName()
  return categorizr;

}));



