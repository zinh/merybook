
$(document).ready(function(){

  var $container = $('#portfolio');

  function resize(){
    var content_width = $(window).width() - 60;

    if ( $(window).width() > 1024 ){var post_width = content_width / 3;}

    if ( $(window).width() < 1024 ){
      var content_width = $(window).width() - 40;
      var post_width = content_width / 2;
    }

    if ( $(window).width() < 480 ){var post_width = content_width + 20;}


    $('.post').width(post_width - 21);
    $('.video_post').each(function(){$(this).find('iframe').width($(this).width());})
    $('.audio_post').each(function(){$(this).find('iframe').width($(this).width());})

    $container.isotope({
      itemSelector : '.post',
      layoutMode : 'masonry'
    });
  }

  function fix_pieces(){
    $('.portfolio_piece').each(function(){
      $(this).find('img').hide();
      $(this).find('img').first().show();
      $(this).find('img').each(function(){
        if ( $(this).find('.img').is(":visible") ){
          $(this).remove();
        }
      })
      $(this).find('.caption').hide();
      var title = $(this).find('.caption h1').text();
      $(this).find('.hover span').text(title);
      $(this).imagesLoaded(function(){
        $(this).animate({opacity:1},100);
        $container.isotope({
          itemSelector : '.post',
          layoutMode : 'masonry'
        });
      })
    })
  }

  resize();
  $(window).resize(function(){resize()});

  $('#about_link').click(function(){
    $("html, body").animate({ scrollTop: $('#about').offset().top - 60 }, 600);
  })

  $container.isotope({
    itemSelector : '.post',
    layoutMode : 'masonry'
  });

  fix_pieces();

    $container.infinitescroll({
        navSelector: '#pagination', // selector for the paged navigation
        nextSelector: '#next_page', // selector for the NEXT link (to page 2)
        itemSelector: '#portfolio .post', // selector for all items you'll retrieve
    bufferPx     : 500
    },function (newElements) {
        // Hide new items while they are loading
        var $newElems = $(newElements).css({opacity: 0});

    resize();
    $('.portfolio_piece').each(function(){
      $(this).find('img').hide();
      $(this).find('.caption').hide();
      $(this).find('img').first().show();
      var title = $(this).find('.caption h1').text();
      $(this).find('.hover span').text(title);
    })

        // Ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function () {
            // Show elems now they're ready
            $newElems.animate({opacity: 1});
        $container.isotope( 'insert', $newElems );
        });

    });

  $container.infinitescroll('pause');

  $(window).scroll(function(){
    var ajax_trigger = $('footer').offset().top - $(window).height();
    console.log(ajax_trigger);
    if ( $(window).scrollTop() > ajax_trigger){
      $container.infinitescroll('resume');
    }else{
      $container.infinitescroll('pause');
    }
  })

  $('.post').each(function(){
    if ( $(this).hasClass('portfolio_piece') ){
    }else{
      $(this).animate({opacity: 1});
    }
  })

  $('.mobile_nav_toggle').click(function(e){
    e.preventDefault();
    $('#mobile_nav_toggle').fadeToggle(100);
    $('#mobile_navigation').slideToggle(200);
  })

  $("#portfolio").on("mouseenter", ".portfolio_piece", function(){
    $(this).find('.hover').width($(this).width()).height($(this).height()).stop().fadeIn(200);
  });

  $("#portfolio").on("mouseleave", ".portfolio_piece", function(){
    $(this).find('.hover').stop().fadeOut(200);
  });

  $('#filter_list a').click(function(e){
    e.preventDefault();
    var selector = $(this).attr('data-filter').toLowerCase();
    console.log(selector)
    $('#filters a').removeClass('current');
    $(this).addClass('current');
    $('#portfolio').isotope({ filter: selector });
    $("html, body").animate({ scrollTop: $('#portfolio').offset().top - 100 }, 400);
  })

})