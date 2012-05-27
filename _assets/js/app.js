/*global _gaq*/
(function() {
  var $ = require('ender')

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // quick little tab controls
  var tabs = $('#main-menu a')
    , tabWindows = $('.tab-window')
  $('body')
    .delegate('#main-menu a', 'click', function(e) {
      var self = $(this)
      tabs.removeClass('active')
      tabWindows.hide()

      self.addClass('active')
      $(self.attr('href')).show('block')
    })

    .delegate('#toggler', 'change', function(e) {
      // manually set the type
      $.categorizr(this.value.toLowerCase())
      _gaq.push(['_trackEvent', 'categorize.manual', $.categorizr()])
    })

  var toggler = $('#toggler')
  toggler.find('option[value='+$.categorizr()+']').attr('selected')
  toggler.val(capitalize($.categorizr()))
  setTimeout(function pageLoadGaq() {
    return (_gaq === undefined)
      ? setTimeout(function () {pageLoadGaq() }, 10)
      : _gaq.push(['_trackEvent', 'categorize.pageload', $.categorizr()])
  }, 10)

}());
