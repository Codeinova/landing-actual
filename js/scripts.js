jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');
    
    menuBtn.click(function() {

        if( menu.hasClass('show') ) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }

    })
 
});

$( ".navigation ul li" ).click(function() { 
    //Quitamos la clase de todos los items
    $( ".navigation ul li" ).removeClass( "nav-link-active" );

    //Agregamos la clase al item clickeado
    $(this).addClass( "nav-link-active" );
});





jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon-animado'),
        menu = $('.navigation ul');
    
    menuBtn.click(function() {

        if( menu.hasClass('show') ) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }

    })
 
});


// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
} else {
	document.body.classList.remove('dark');
}






/*
    Carousel Images
*/
$('#carousel-example-1').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('#carousel-example-1 .carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carousel-example-1 .carousel-item').eq(i).appendTo('#carousel-example-1 .carousel-inner');
            }
            else {
                $('#carousel-example-1 .carousel-item').eq(0).appendTo('#carousel-example-1 .carousel-inner');
            }
        }
    }
});

/*
    Carousel Cards
*/
$('#carousel-example-2').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('#carousel-example-2 .carousel-item').length;
  
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carousel-example-2 .carousel-item').eq(i).appendTo('#carousel-example-2 .carousel-inner');
            }
            else {
                $('#carousel-example-2 .carousel-item').eq(0).appendTo('#carousel-example-2 .carousel-inner');
            }
        }
    }
});



$(document).ready(function(){
	var altura = $('.brand-nav').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.brand-nav').addClass('brand-nav-scroll');
		} else {
			$('.brand-nav').removeClass('brand-nav-scroll');
		}
	});

    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.logo').addClass('logo-scroll');
		} else {
			$('.logo').removeClass('logo-scroll');
		}
	});

    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.logo-nav-container').addClass('logo-nav-container-scroll');
		} else {
			$('.logo-nav-container').removeClass('logo-nav-container-scroll');
		}
	});

});