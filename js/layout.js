			$(function() {
			  $('.menu').on('click',function(){
				if(!$('.mainWrap').hasClass('open')){
					$('.mainWrap').addClass('open');
				}else{
					$('.mainWrap').removeClass('open');
				}    
			  });
			  $(window).scroll(function(){
				if($(this).scrollTop() > 100){
					$('.btn-up').stop().animate({ 'bottom': '10px', 'opacity': .7 }, 300, "swing");
					$('header').addClass('sticky');
				}else{
					$('.btn-up').stop().animate({ 'bottom': '-80px', 'opacity': 0 }, 300, "swing");
					$('header').removeClass('sticky');
				}							
				
				//스크롤 스크립트
				$st = $(this).scrollTop();				//현재 스크롤 위치 0
				$wh = $(window).height();				//전체화면 높이	 1500
				console.log('전체 스크롤'+$ts);
				console.log('현재 스크롤'+$st);
				console.log('전체화면 높이'+$wh);				
				$ss = $wh - $ts;						//스크롤 비율			
				$sbp = -100+($st/$ss * 100) +'%';
				//$('.scrollbar').css('left',$sbp);
				$('.scrollbar').stop();
				$('.scrollbar').animate({left:$sbp},500);
			  });
			  $ts = $('body').prop("scrollHeight");	
		  });		
		  $(document).ready(function(){
			$( '.btn-up' ).click( function() {
			  $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
			  return false;
			} );		  
		  });