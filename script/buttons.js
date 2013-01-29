( function() {"use strict";

				var active = $('.slideshow .slide.active');
				var totalSlides = $('.slide');
				
				
			$(document).keydown(function(e){
			    if (e.keyCode == 37) { 
			     var prev = active.prev();
					if (prev.length) {
						active.removeClass('active');
						prev.addClass('active');
						active = prev;
						if(active[0] == totalSlides[0]){
							document.getElementById("prev-button").className = "hidden";
						}
						if(active[0] != totalSlides[totalSlides.length-1]){
							document.getElementById("next-button").className = "";
						}
						
					}
			    }
			    if(e.keyCode==39){
			    	
			    	var next = active.next();
					if (next.length) {
						active.removeClass('active');
						next.addClass('active');
						active = next;
						if(active[0] != totalSlides[0]){
							document.getElementById("prev-button").className = "";
						}
						if(active[0] == totalSlides[totalSlides.length-1]){
							document.getElementById("next-button").className = "hidden";
						}
					}
			    }
			});	
			
				$('#prev-button').on('click', function() {
					var prev = active.prev();
					if (prev.length) {
						active.removeClass('active');
						prev.addClass('active');
						active = prev;
						if(active[0] == totalSlides[0]){
							document.getElementById("prev-button").className = "hidden";
						}
						if(active[0] != totalSlides[totalSlides.length-1]){
							document.getElementById("next-button").className = "";
						}
						
					}
				});
				$('#next-button').on('click', function() {
					var next = active.next();
					if (next.length) {
						active.removeClass('active');
						next.addClass('active');
						active = next;
						if(active[0] != totalSlides[0]){
							document.getElementById("prev-button").className = "";
						}
						if(active[0] == totalSlides[totalSlides.length-1]){
							document.getElementById("next-button").className = "hidden";
						}
					}
				});

}());
