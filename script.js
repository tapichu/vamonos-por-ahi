(function($, undefined) {

  var slideSwitch = function() {
    var $active = $('.slideshow img.active');

    if ($active.length == 0) $active = $('.slideshow img:last-child');

    var $next = $active.next().length ? $active.next()
      : $('.slideshow img:first-child');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
      });
  };

  $(document).ready(function() {
    setInterval(slideSwitch, 4000);
  });

})(jQuery);
