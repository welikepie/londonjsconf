$(window).load(function() {
	$('.featuredropcopter, .featuredropghost, .featuredropphoto').addClass('hidden');

	$( ".copter" ).click(function() {
  $(".featuredropcopter").toggleClass( "hidden" );
  $(".featuredropghost").addClass( "hidden" );
  $(".featuredropphoto").addClass( "hidden" );
  });

  $( ".ghost" ).click(function() {
  $(".featuredropghost").toggleClass( "hidden" );
  $(".featuredropcopter").addClass( "hidden" );
  $(".featuredropphoto").addClass( "hidden" );
  });

  $( ".photo" ).click(function() {
  $(".featuredropphoto").toggleClass( "hidden" );
  $(".featuredropcopter").addClass( "hidden" );
  $(".featuredropghost").addClass( "hidden" );
  });

});