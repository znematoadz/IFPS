$(window).scroll(function() {
    $(".container .row .card").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass("animated fadeInUp");
            }
            if (scroll < 100) {
                $(this).removeClass("animated fadeInUp");
            }
            });
    });

    $(".smooth-scroll").click(function() {
        var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 800);
            });


    