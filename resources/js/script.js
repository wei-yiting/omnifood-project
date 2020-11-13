$(document).ready(function() {

    // For sticky navigation 
    $('.js--section-feature').waypoint(function(direction){
        var menu =   $('.js--nav-menu');

        if(direction == "down"){
            $('nav').addClass('sticky popOut-bg-none');
        }else{
            $('nav').removeClass('sticky popOut-bg-none');
        }
    },
    { offset: '60px;'
    });

    // Scroll on button
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top},1000)
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top},1000)
    });


    // Navigation Scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
        )
      })

    //  Animation on Scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__fadeIn animate__animated');
    },
    {
        offset:'70%'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__fadeInUp animate__animated');
    },
    {
        offset:'70%'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__fadeIn animate__animated');
    },
    {
        offset:'70%'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__pulse animate__animated');
    },
    {
        offset:'70%'
    });


    // Mobile Navigation
    $('.js--mobile-nav-icon').click(function(){
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
      
        var menu =   $('.js--nav-menu');

        menu.toggleClass("popOut");
        

        var menuBtn = $('.js--mobile-nav-icon ion-icon');
        if( menuBtn.attr("name") === "menu-outline"){
            menuBtn.removeAttr("name");
            menuBtn.attr("name", "close-outline");
        }else{
            menuBtn.removeAttr("name");
            menuBtn.attr("name", "menu-outline");
        }
    });

});