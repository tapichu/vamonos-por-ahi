(function($, Raphael, undefined) {

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

  var fontAnimation = function(set) {
    for (var i = 0, ii = set.length; i < ii; i++) {
      set[i].animate({fill: Raphael.getColor()}, 3000, function() {
        set.animate({rotation: 360}, 1000);
      });
    }
  };

  $(document).ready(function() {
    // Animate slideshows
    setInterval(slideSwitch, 5000);

    var p1 = Raphael('title1', 560, 50);
    var p2 = Raphael('title2', 560, 50);
    var p3 = Raphael('title3', 560, 50);

    var font = p1.getFont('whoa');

    var slp = p1.print(5, 30, 'San Luis Potosi', font, 30)
        .attr({fill: '#fff'});
    var scdlc = p2.print(5, 30, 'San Cristobal de las Casas', font, 30)
        .attr({fill: '#fff'});
    var taxco = p3.print(5, 30, 'Taxco', font, 30)
        .attr({fill: '#fff'});

    fontAnimation(slp);
    fontAnimation(scdlc);
    fontAnimation(taxco);
  });

})(jQuery, Raphael);
