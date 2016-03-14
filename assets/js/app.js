
	$(document).ready(function(){


	console.log("loading");



	$("#header").find("h1")
		.css("font-size", "3em");
		

	if($(window).width() > 980){

	// var splashSF = "https://images.unsplash.com/photo-1423068728938-
	// 				d506c096081e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=
	// 				e341c6befccdfd9ac529d4e1f52c2cb6";

	var $welcomeButton = $('<a href="#" class="button">See More</a>');
	var overlayStyles = {	
	 						"width":"100%", 
	 						"z-index":"10",
	 						"background-repeat": "no-repeat",
	 						"background-size":"cover",
	 						"display": "flex"
	 					 };
	 var $profileImage = $('.image.avatar');
	 var $button;



	 		$profileImage.hide();
			$('#header').append($welcomeButton);
			$('#header').css(overlayStyles);



			$('#header').on('click' ,'.button', function(){
				


			$(this).hide(2000);
			$("#header").find("h1").animate({"font-size": "1.25em"},2000);

				if($(window).width() < 1440){

					$('#header').animate({
											width:'30%',"z-index": "", 
											"font-size": " 1.25em",
											"background-image": "url('images/overlay.png')"+","+
											"url('../../images/bg.jpg')"

										}, 2000, function(){

					$profileImage.show(800);
					
					});

				}
				else{
						$('#header').animate({
											width:'30%',"z-index": "", 
											"font-size": " 1.25em",
											"background-image": "url('images/overlay.png')"+","+
											"url('../../images/bg.jpg')"

											}, 2000, function(){

						$profileImage.show(800);
					
					});

				}


			})
			
			
		}

	})


