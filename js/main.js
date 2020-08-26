$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'fa fa-ellipsis-v' ){

			$('.btn-menu span').removeClass('fa fa-ellipsis-v').addClass('fa fa-close').css({'color':'#000'});
			$("#logo").attr("src","img/logoA.png");
			$('.flexslider').css({'display':'none'});
			$('.full-menu').css({'left':'0'});
			$('.title-menu').css({'display':'block'});
		}else{
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-ellipsis-v').css({'color':'#fff'});
			$('.full-menu').css({'left':'-100%'});
			$("#logo").attr("src","img/logoA.png");
			$('.flexslider').css({'display':'flex'});
			$('.title-menu').css({'display':'none'});
		}

	});

	$('.flexslider').flexslider({
		animationLoop:false,
		slideshow:false,
		touch:true,
		mousewheel:true,
		directionNav:false,
	});

});