$(document).ready(function() {

	var div = $('#cabecalho');
    var start = $(div).offset().top;
    var factor = 2;
 
    var logoWidth = $(".logo").width();
    var halfLogoWidth = (logoWidth / 2)*(-1);


    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();
        $(div).css('position',((p)>start) ? 'fixed' : 'static');
        $(div).css('top',((p)>start) ? '0px' : '');
        $(div).css('z-index',((p)>start) ? '999' : '');
        $(div).css('left',((p)>start) ? '50%' : '');
        $(div).css('margin-left',((p)>start) ? '-510px' : '');

		$(".container").css('margin-top',((p)>start) ? '333px' : '');
        
		mudaTamanhoLogo( (p)>start );                   
    });
	
    function mudaTamanhoLogo( estado ) {

    	if (estado == true) {
    		$(".logo").stop().animate({
        		backgroundSize: "50%",
        		height: "120px"
        	}, 'easyInOut');    
    	} else {
    		$(".logo").stop().animate({
        		backgroundSize: "100%",
        		height: "238px"
        	}, 'easyOutIn');      		
    	}
    }


    $('#navMenu').scrollspy();

	$('#navMenu a').click(function() {
		var areaId = $(this).attr('href');

		$('#navMenu a').parent().removeClass('active'); //reset all
		$(this).parent().addClass('active');			//add on current	

		$('body').scrollTo( areaId, 1000, { offset: -230 } );//add or deduct from the final position	
	});    

	$('.logo').click(function() {		
		var areaId = $(this).attr('href');

		$('#navMenu a').parent().removeClass('active'); //reset all
		$('body').scrollTo( 0 , 800 );
	});


});
