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

  $(".filter #searchTag").on("input", function() {
    $(".filter .tag").removeClass("hide");
    if ($(this).val() == "") {
      $(".filter .tag").removeClass("hide");
    } else {
      var filterValue = $(this).val()
      $(".filter .tag").each(function(index) {
        if ($(this).attr("data-filter") == filterValue) {

        } else {
          $(this).addClass("hide");
        }
      });
    }
  });

  $(".accountTabs .timelineBut").on("click", function(event) {
    event.preventDefault();
    $(".accountContent > div").slideUp(500);
    $(".accountTabs a").removeClass("active");

    $(".accountContent div.timeline").delay(500).slideDown(500);
    $(this).addClass("active");
  });

  $(".accountTabs .mapBut").on("click", function(event) {
    event.preventDefault();
    $(".accountContent > div").slideUp(500);
    $(".accountTabs a").removeClass("active");

    $(".accountContent div.map").delay(500).slideDown(500);
    $(this).addClass("active");
  });

  $(".accountTabs .postsBut").on("click", function(event) {
    event.preventDefault();
    $(".accountContent > div").slideUp(500);
    $(".accountTabs a").removeClass("active");

    $(".accountContent div.posts").delay(500).slideDown(500);
    $(this).addClass("active");
    $grid.delay(1200).isotope('layout');
  });

  $(".accountTabs .lovedBut").on("click", function(event) {
    event.preventDefault();
    $(".accountContent > div").slideUp(500);
    $(".accountTabs a").removeClass("active");

    $(".accountContent div.loved").delay(500).slideDown(500);
    $(this).addClass("active");
    $grid.delay(1200).isotope('layout');
  });
});