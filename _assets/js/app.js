/*global _gaq*/
(function() {
  var $ = require('ender')

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
  _gaq.push(['_trackEvent', 'categorize.pageload', $.categorizr()])

}());
