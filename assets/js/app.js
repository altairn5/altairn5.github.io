
	$(document).ready(function(){


	console.log("loading");

	$('.pic').on('click',function(){

		console.log('clicked');

		$(window).location = "https://ga-gameon.herokuapp.com/";


	});

		

	if($(window).width() > 1180){

	$("#header").find("h1")
		.css({"font-size": "3em","color":"#fffff"});


		var $welcomeButton = $('<a href="#" class="button">See More</a>');
		var overlayStyles = {	
							"position":"fixed",
							"top": "0",
	 						"width":"100%", 
	 						"z-index":"10",
	 						"background-image":"url('images/sfMe.jpg')",
	 						"background-repeat": "no-repeat",
	 						"background-size":"cover",
	 						"flex-direction": "column",
							"display": "flex",
							"flex-wrap": "wrap",
							"align-items": "center",
							"justify-content": "center",
	 					 };
	 	var $profileImage = $('.image.avatar');
	 	var $button;
	
	 	$profileImage.hide();
	 		// Initial Bottom Adjust space with Flex properties
			$('#header').append($welcomeButton.css('margin-top','auto'));
			$('#header').css(overlayStyles);



			$('#header').on('click' ,'.button', function(){
				


			$(this).hide(2000);
			$("#header").find("h1").animate({"font-size": "1.25em"},2000, function(){
				
				$("#header").find("h1").removeAttr('style');

			});
	
				if($(window).width() < 1440){


					$('#header').animate({
											width:'30%',"z-index": "", 
											"font-size": " 1.25em",
											"background-size":"cover",
											"align-items": "center",
    										"justify-content": "flex-start",
										}, 2000, function(){

					$('#header').removeAttr('style')
					
					});

				}
				else{
						$('#header').animate({
											width:'35%',"z-index": "", 
											"font-size": " 1.25em",
											"background-size":"cover",
											"align-items": "center",
    										"justify-content": "flex-start",
											}, 2000, function(){

						$('#header').removeAttr('style')
					
					});

				}


			})
			
			
		}

	})


