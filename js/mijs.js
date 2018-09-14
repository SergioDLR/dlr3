$(document).ready(function() {



		$(window).scroll(function(){


				var posicionDeLaPantalla = $(window).scrollTop();
				var home = $(".seccion2").offset();

				home = home.top;


				if(posicionDeLaPantalla >= home +200 ){
					$( "#Movimiento" ).animate({
						opacity: '1',
					  }, 1000, function() {
						
					  });

				}

				var skills = $(".curriculum").offset();
				skills = skills.top;

				if(posicionDeLaPantalla >= skills-200  ){
					$( ".progress-bar1" ).animate({
						width: "81%"
					  }, 1000, function() {
						
					  });

				}

				if(posicionDeLaPantalla >= skills-200  ){
					$( ".progress-bar2" ).animate({
						width: "60%"
					  }, 1000, function() {
						
					  });

				}
				if(posicionDeLaPantalla >= skills-200  ){
					$( ".progress-bar3" ).animate({
						width: "90%"
					  }, 1000, function() {
						
					  });

				}
				if(posicionDeLaPantalla >= skills-200  ){
					$( ".progress-bar4" ).animate({
						width: "70%"
					  }, 1000, function() {
						
					  });

				}


		});

});
