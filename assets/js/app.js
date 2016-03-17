
	$(document).ready(function(){


	console.log("loading");

	$('.pic').on('click',function(){

		console.log('clicked');

		$(window).location = "https://ga-gameon.herokuapp.com/";


	});

		

	if($(window).width() > 980){

	$("#header").find("h1")
		.css("font-size", "3em");

	// var splashSF = "https://images.unsplash.com/photo-1423068728938-
	// 				d506c096081e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=
	// 				e341c6befccdfd9ac529d4e1f52c2cb6";

	var $welcomeButton = $('<a href="#" class="button">See More</a>');
	var overlayStyles = {	
	 						"width":"100%", 
	 						"z-index":"10",
	 						"background-repeat": "no-repeat",
	 						"background-position": "80% 100%"+,
	 						"background-size":"cover",
	 					 };
	 var $profileImage = $('.image.avatar');
	 var $button;
	 var defaultStyling = { 
		"background-color": "#1f1815",
		"background-attachment": "scroll",
	
		"background-image": "url('../../images/sfMe.jpg')",
		"background-position": "80% 100%!important",
	"	background-repeat": "repeat"	,						
		"background-size": "auto",						
	"	color": "rgba(255, 255, 255, 0.5)",
		"height": "100%",
		"left": "0",
		"overflow":"hidden",
		"padding": "8em 4em 0 0",
		"position": "fixed",
		"text-align": "center",
		"top": "0",
		"width": "35%",
		};



	 		$profileImage.hide();
	 		// Initial Bottom Adjust space with Flex properties
			$('header').addClass('header');
			$('header').append($welcomeButton.css('margin-top','auto'));
			$("header[class='header").css(overlayStyles);



			$('.header').on('click' ,'.button', function(){
				


			$(this).hide(2000);
			$(".header").find("h1").animate({"font-size": "1.25em"},2000);
			// $("header").removeClass('header');

				if($(window).width() < 1440){


					$("header[class='header").animate({
											width:'30%',"z-index": "", 
											"font-size": " 1.25em",
											
										}, 2000, function(){

					// $profileImage.show(800);
					
					});

				}
				else{
						$("header[class='header").animate({
											width:'35%',"z-index": "", 
											"font-size": " 1.25em",
											}, 2000, function(){

						// $profileImage.show(800);
					
					});

				}


			})
			
			
		}

	})


