$(document).ready(function(){

	$('#btn-menu-blue').click(function(){
		if( $('.btn-menu span').attr('class') == 'close-menu' ){
			$('.btn-menu span').removeClass('close-menu').addClass('fas fa-times').css({'color':'#000F2C'});
			$("#logo").attr("src","img/logoA.png");
			$('.flexslider').css({'display':'none'});
			$('.full-menu').css({'left':'0'});
			$('.btn-menu').css({'color':'#fff'});
			if( $('section').attr('id') == 'manifiesto' ){
				$('#linkmanifiesto').css({'text-decoration':'underline'});
			}
			if( $('section').attr('id') == 'nosotros' ){
				$('#linknosotros').css({'text-decoration':'underline'});
			}
		}else{
			$('.btn-menu span').removeClass('fas fa-times').addClass('close-menu').css({'color':'#fff'});
			$('.full-menu').css({'left':'-100%'});
			$("#logo").attr("src","img/logoB.png");
			$('.flexslider').css({'display':'flex'});
		}
	});
	$('#btn-menu-white').click(function(){

		if( $('.btn-menu span').attr('class') == 'close-menu' ){

			$('.btn-menu span').removeClass('close-menu').addClass('fas fa-times').css({'color':'#000F2C'});
			$("#logo").attr("src","img/logoA.png");
			$('.flexslider').css({'display':'none'});
			$('.full-menu').css({'left':'0'}); 
			$('.btn-menu').css({'color':'#fff'});
			if( $('section').attr('id') == 'servicios' ){
				$('#linkservicios').css({'text-decoration':'underline'});
			}
			if( $('section').attr('id') == 'contacto' ){
				$('#linkcontacto').css({'text-decoration':'underline'});
			}
		}else{
			$('.btn-menu span').removeClass('fas fa-times').addClass('close-menu').css({'color':'#000F2C'});
			$('.full-menu').css({'left':'-100%'});
			$("#logo").attr("src","img/logoA.png");
			$('.flexslider').css({'display':'flex'});
            $('.btn-menu').css({'color':'#000F2C'});
		}

	});			 
	/* flex slider */
	$('.flexslider').flexslider({
        animationLoop:false,
        slideshow:false,
        // multipleKeyboard: true,
        directionNav:false,
        keyboard: true,
        mousewheel: true,
    });
	
});