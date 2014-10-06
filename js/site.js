$(document).ready(function() {

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  var offset = 60;
  $('a.page-scroll').bind('click', function(event) {
    $('.collapse').collapse('hide');
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - offset
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // pull in news
  var renderTweets = function(tweets) {
    var html = '';
    for (var i = 0; i < tweets.length; i++) {
      html += '<div class="col-lg-3"><div class="bg-component"><div class="well well-sm">';
      html += tweets[i];
      html += '</div></div></div>';
    }
    $('#news-content').html(html);
    $(window).resize();
  }
  var twitterConfig = {
    'id': '491688851551711232',
    'domId': '',
    'maxTweets': 10,
    'showInteraction': false,
    'customCallback': renderTweets
  };
  twitterFetcher.fetch(twitterConfig);
});