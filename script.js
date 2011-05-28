(function($, undefined) {

  var slideSwitch = function() {
    $('div.slideshow').each(function() {
      var $this = $(this);

      var $active = $('img.active', $this);

      if ($active.length == 0) $active = $('img:last', $this);

      var $next = $active.next().length ? $active.next()
        : $('img:first', $this);

      $active.addClass('last-active');

      $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
        })
    });
  };

  $(document).ready(function() {
    setInterval(slideSwitch, 5000);
  });

})(jQuery);
