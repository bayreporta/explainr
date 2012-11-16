//_________________________________________________________//
//														   //
//						Explainr 						   //
//														   //	
//														   //
//---------------------------------------------------------//

// This is the code to use if you want to have a project that involves different slides and arrow-based navigation through those slides by hiding/showing DIVS, and you also want scrollover tooltip interactivity //


// ESTABLISHES CURRENT SLIDE VARIABLE //
	var curSlide = 1; // starts at Slide 1 //



//_________________________________________________________//
//					ARROW INTERACTIVITY					   //
//---------------------------------------------------------//

// This code gives the arrows that you use interactivity: when you hover over the arrow, it brightens up //


// LIGHT UP/DARKEN THE RIGHT ARROW //
	
	$(document).ready(function(){			

		$('.right_arrow').hover(function(){
			$(this).css({'opacity':'1'});
		}, function(){
			$(this).css('opacity', '0.7');
		});

	});

// LIGHT UP/DARKEN THE LEFT ARROW //

	$(document).ready(function(){			

		$('.left_arrow').hover(function(){
			$(this).css({'opacity':'1'});
		}, function(){
			$(this).css('opacity', '0.7');
		});

	});

/*-----------------------------------------------*/

// This code hides the left arrow on the first slide, and the right arrow on the last slide //

// ARROW HIDE 1ST and LAST --> ONLOAD IN BODY //

	function arrowCleaning() {
		// hide left arrow, first slide // 
		if (curSlide ==1) {
			document.getElementById('left_arrow').style.display = "none";
		}
		else {
			document.getElementById('left_arrow').style.display = "block";
		}
		
		// hide right arrow, last slide // 
		if (curSlide == 6) { 	// change this VALUE to whatever your last slide will be //
			document.getElementById('right_arrow').style.display = "none";
		}
		else {
			document.getElementById('right_arrow').style.display = "block";
		}
	}


//_________________________________________________________//
//					SLIDE TRANSITIONS					   //
//---------------------------------------------------------//

// This code is the main code that hides and shows the current DIV or "slide." It's set for SIX SLIDES, but can easily be reduced or expanded to meet needs //

// CODE TO ADVANCE SLIDES //
function slideNext() {
	if (curSlide == 1) {
		document.getElementById('slide_1').style.display = "none";
		document.getElementById('slide_2').style.display = "block";
		curSlide = 2;
	}
	else if (curSlide == 2) {
		document.getElementById('slide_2').style.display = "none";
		document.getElementById('slide_3').style.display = "block";
		curSlide = 3;
	}
	else if (curSlide == 3) {
		document.getElementById('slide_3').style.display = "none";
		document.getElementById('slide_4').style.display = "block";
		curSlide = 4;
	}
	else if (curSlide == 4) {
		document.getElementById('slide_4').style.display = "none";
		document.getElementById('slide_5').style.display = "block";
		curSlide = 5;
	}
	else if (curSlide == 5) {
		document.getElementById('slide_5').style.display = "none";
		document.getElementById('slide_6').style.display = "block";
		curSlide = 6;
	}
}

// CODE TO MOVE BACK SLIDES //
function slideBefore() {
	if (curSlide == 6) {
		document.getElementById('slide_6').style.display = "none";
		document.getElementById('slide_5').style.display = "block";
		curSlide = 5;
	}
	else if (curSlide == 5) {
		document.getElementById('slide_5').style.display = "none";
		document.getElementById('slide_4').style.display = "block";
		curSlide = 4;
	}
	else if (curSlide == 4) {
		document.getElementById('slide_4').style.display = "none";
		document.getElementById('slide_3').style.display = "block";
		curSlide = 3;
	}
	else if (curSlide == 3) {
		document.getElementById('slide_3').style.display = "none";
		document.getElementById('slide_2').style.display = "block";
		curSlide = 2;
	}
	else if (curSlide == 2) {
		document.getElementById('slide_2').style.display = "none";
		document.getElementById('slide_1').style.display = "block";
		curSlide = 1;
	}

}

//_________________________________________________________//
//					TOOLTIP CODE						   //
//---------------------------------------------------------//

// This code allows you to tag objects as "interactive" thereby allowing the user to scrollover it, change its opacity, and display a tooltip. The tooltip popup code is a modified version of the Queness simple tooltip code found here (http://www.queness.com/post/92/create-a-simple-cssjavascript-tooltip-with-jquery) //

/* ESTABLISHES SELECTABLE CLASS AS INTERACTIVE */
$(document).ready(function(){			
	
	$('.selectable').hover(function(){
		$(this).css({'opacity':'0.7'});
	}, function(){
		$(this).css('opacity', '1');
	});
	
});

/* TOOLBAR POPUP */

	$(document).ready(function() {

		//Select all anchor tag with rel set to tooltip
		$('a[rel=tooltip]').mouseover(function(e) {
			//Grab the title attribute's value and assign it to a variable
			var tip = $(this).attr('title');	

			//Remove the title attribute's to avoid the native tooltip from the browser
			$(this).attr('title','');

			//Append the tooltip template and its value
			$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		

			//Show the tooltip with fadeIn effect
			$('#tooltip').fadeIn('500');
			$('#tooltip').fadeTo('10',0.9);

		}).mousemove(function(e) {
			// calculates proxmity to right edge to prevent tooltip from going outside bounds // 
			if(860 - e.pageX < 185){
				var posX = e.pageX - 180;
			} else {
				var posX = e.pageX + 20;
			}
			
			// calculates proxmity to bottom edge to prevent tooltip from going outside bounds...MAY REQUIRE TWEAKING BASED ON SIDE OF TOOLTIP // 
			if(640 - e.pageY < 200){
				var posY = e.pageY - 200;
			} else {
				var posY = e.pageY + 10;
			}
	
			//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
			$('#tooltip').css('top', posY );
			$('#tooltip').css('left', posX );
			console.log(e);

		}).mouseout(function() {

			//Put back the title attribute's value
			$(this).attr('title',$('.tipBody').html());

			//Remove the appended tooltip template
			$(this).children('div#tooltip').remove();
		});
	});

/*-----------------------------------------------*/



