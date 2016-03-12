$(document).ready(function(){


var $profileImage;
var $overlay=$("<div id='profile'></div>");
var $photo= $("<img>");
var $caption = $("<p></p>");
var $mobile = $( window ).width();

var $navbar = $(" <button type = 'button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"
              + "   <span class='sr-only'>Toggle navigation'</span> " 
              + "   <span class='icon-bar'></span> "
              + "   <span class='icon-bar'></span> "
              + "   <span class='icon-bar'></span> "
              + " </button> ");

$overlay.hide();
$('body').append($overlay);
$overlay.append($caption);
$overlay.append($photo);


function clickOnimage(e){

	e.preventDefault();

	console.log('gere');

	$profileImage = $(this);

	var capText = $profileImage.children('img').attr('atl');

	var picturePath = $profileImage.attr('href');

	$caption.text(capText)
	$caption.css('color','white');
 	
 	$photo.attr('src', picturePath);	

 	$overlay.show();

 	$profileImage.hide();


};


$('.js-aboutme').on('click',clickOnimage);




$overlay.on('click', function(){

	$(this).hide();
	$profileImage.show();
	// $overlay.hide();
})


if($mobile< 768){

	// $('.js-navbar-ul').hide();

	// $('.js-navbar').append($navbar);

}


	
})


