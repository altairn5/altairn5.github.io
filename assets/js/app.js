
(function($){


	console.log("loading");

	if($(window).width() >= 1280){

	$("#header").find("h1")
		.css({"font-size": "3em","color":"#fffff"});


		var $welcomeButton = $('<a href="#" class="button">See More</a>');
		var overlayStyles = {	
							"position":"fixed",
							"top": "0",
	 						"width":"100%", 
	 						"z-index":"10",
	 						"text-align":"center",
	 						"background-image":"url('images/sfMe.jpg')",
	 						"background-repeat": "no-repeat",
	 						"background-size":"cover",
	 					 };
	 	var $profileImage = $('.image.avatar');
	 	var $button;
	
	 	$profileImage.hide();
	 		// Initial Bottom Adjust space with Flex properties
			$('#header').append($welcomeButton.css({'margin-top':'auto', 'color':'#ffffff', 'align-self':'center'}));
			$('#header').css(overlayStyles);



			$('#header').on('click' ,'.button', function(){
				


			$(this).hide(2000);
			$("#header").find("h1").animate({"font-size": "1.35em"},2000, function(){
				
				$("#header").find("h1").removeAttr('style');

			});
	
				if($(window).width() < 1440){


					$('#header').animate({
											width:'30%',"z-index": "", 
											// "font-size": " 1.35em",
											// "background-size":"cover",
											// "align-items": "center",
    							// 			"justify-content": "flex-start",
										}, 2000, function(){

					$('#header').removeAttr('style')
					
					});

				}
				else{
						$('#header').animate({
											width:'35%',"z-index": "", 
											// "font-size": " 1.35em",
											// "background-size":"cover",
											// "align-items": "center",
    							// 			"justify-content": "flex-start",
											}, 2000, function(){

						$('#header').removeAttr('style')
					
					});

				}


			})
			
			
		}

		

	}(jQuery));


