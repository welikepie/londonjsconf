$(window).load(function() {
	$('.featuredropcoffee, .featuredropghost, .featuredroptour').addClass('hidden');

	$( ".coffee" ).click(function() {
  $(".featuredropcoffee").toggleClass( "hidden" );
  $(".featuredropghost").addClass( "hidden" );
  $(".featuredroptour").addClass( "hidden" );
  });

  $( ".ghost" ).click(function() {
  $(".featuredropghost").toggleClass( "hidden" );
  $(".featuredropcoffee").addClass( "hidden" );
  $(".featuredroptour").addClass( "hidden" );
  });

  $( ".tour" ).click(function() {
  $(".featuredroptour").toggleClass( "hidden" );
  $(".featuredropcoffee").addClass( "hidden" );
  $(".featuredropghost").addClass( "hidden" );
  });

});