$(document).ready(function(){

var currentWidth = 5;
var width=203;
var spriteWidth = 2500; 
var image = $("#cgXXX");
var repeatCount = 1;
var times = 3  
var interval = 70; 
i=14; 
function animate() {
		var currentWidth =  - width*i; 
		if (currentWidth*-1 >= spriteWidth) { 
			i = 1; 
			repeatCount++;
		}
		image.css('background','url(cg.png) '+currentWidth+'px 0'); 
		i++; 
		ti = setTimeout(animate, interval); 
		if (repeatCount==times) { 
			clearTimeout(ti); 
			repeatCount=0;
		}
};
animate(); 
});

