var $grid = $('.stories').isotope({
  // options
  itemSelector: '.story',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

$(function() {
  $(".story").on("click", function() {
    $(this).children(".postModal").show();
  });

  $(".postModal").on("click", function(event) {
    event.stopPropagation();
    $(this).hide();
  });

  $("\
      .postModal>.post>.head,\
      .postModal>.post>.text,\
      .postModal>.post>figure,\
      .postModal>.post>.comments\
    ").on("click", function(event) {
    event.stopPropagation();
  });

  $(".filter .tag").on("click", function() {
    if ($(this).hasClass("active")) {
      $(".filter .tag").removeClass("active");
      $grid.isotope({ filter: '*' });
    } else {
      $(".filter .tag").removeClass("active");
      $(this).addClass("active");
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: ".filter, ." + filterValue });
    }
  });

  $(".filter #search").on("input", function() {
    $(".filter .tag").removeClass("active");
    if ($(this).val() == "") {
      $(".filter .tag").removeClass("active");
      $grid.isotope({ filter: '*' });
    } else {
      var filterValue = $(this).val()
      $grid.isotope({ filter: ".filter, ." + filterValue });
    }
  });
});