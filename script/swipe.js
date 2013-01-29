var hammer = new Hammer(document.getElementsByClassName("slideshow")[0]);
 hammer.onswipe = function(ev) {
 	var direction = ev.direction;
 	var active = $('.slideshow .slide.active');
	var totalSlides = $('.slide');
			    
			    if (direction == "right") { //left moving
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
			    if(direction=="left"){ //right moving
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
 	 };

 
 