 /*===========================================
portfolio
===========================================*/

$(window).on('load', function() {
    $('#isotope-container').isotope({

    });
    $("#isotope-filters").on('click','button', function() {
       // get filter value
       var filtervalue = $(this).attr('data-filter');

       //filter portfolio
       $(' #isotope-container').isotope({
            filter : filtervalue
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active")
    $(this).addClass("active")

    });
});


/*===========================================
navigation
===========================================*/

$(function () {
    showHideNav();
    $(window).scroll(function (){

        showHideNav();
    })


    function showHideNav() {

        if ( $(window).scrollTop() >160){

            //show white nav
            $("nav").addClass("white-nav-top");
            $(".navbar-brand").css("color", "black");
    
            // Show dark logo
            // $(".navbar-brand img").attr("src","img/solo-images/logo/logo-dark.png");

             // Show back to top button
             $("#back-to-top").fadeIn();
            
        } else{

             //show white nav
             $("nav").removeClass("white-nav-top");
             $(".navbar-brand").css("color", "#fff");
            
            //  $("nav").removeClass("ul.navbar-nav > li > a");
    
             // Show dark logo
            //  $(".navbar-brand img").attr("src","img/solo-images/logo/logo.png");

              // Hide back to top button
            $("#back-to-top").fadeOut();
        }



    }
})

$("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(section_id).offset().top - 40
    }, 1250, "easeInOutExpo");

});

 
 /*===========================================
typed js
===========================================*/
    
var typed2 = new Typed('#typed2', {
    strings: ['developer', 'designer', 'programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    // fadeOut: true,
    loop: true
  });


  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
        enabled: true
      },
  });