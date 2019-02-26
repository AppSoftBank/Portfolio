$(document).ready(function(){

	// Blur images on mouse over
	$(".portfolio a").hover( function(){ 
		$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
	}, function(){ 
		$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
	}); 
	
	// Initialize prettyPhoto plugin
	$(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});

	// Clone portfolio items to get a second collection for Quicksand plugin
	var $portfolioClone = $(".portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	$(".filter a").click(function(e){
		
		$(".filter li").removeClass("current");	
		// Get the class attribute value of the clicked link
		var $filterClass = $(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		
		// Call quicksand
		$(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeInOutQuad' 
		}, function(){
			
			// Blur newly cloned portfolio items on mouse over and apply prettyPhoto
			$(".portfolio a").hover( function(){ 
				$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
			}, function(){ 
				$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
			}); 
			
			$(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
				theme:'light_square', 
				autoplay_slideshow: false, 
				overlay_gallery: false, 
				show_title: false
			});
		});


		$(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault();
	})

	$(".filter li.webdesign a").trigger("click");

	$("#about").click(function (e) {

		if (!$("#wrap").hasClass("none") && !$("#content").hasClass("none"))
		{
			$("#wrap").addClass("none");
			$("#content").addClass("none");
		}

		if ($("#aboutus").hasClass("none"))
		{
			$("#aboutus").removeClass("none");
		}
	})

	$("#home").click(function (e) {
		if ($("#wrap").hasClass("none") && $("#content").hasClass("none"))
		{
			$("#wrap").removeClass("none");
			$("#content").removeClass("none");
		}

		if (!$("#aboutus").hasClass("none"))
		{
			$("#aboutus").addClass("none");
		}
	})

	$("#contact").click(function (e) {
		if ($("#wrap").hasClass("none") && $("#content").hasClass("none"))
		{
			$("#wrap").removeClass("none");
			$("#content").removeClass("none");
		}

		if (!$("#aboutus").hasClass("none"))
		{
			$("#aboutus").addClass("none");
		}
	})

});