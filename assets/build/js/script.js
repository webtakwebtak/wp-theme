import $ from 'jquery';
import jQuery from 'jquery'
import 'slick-carousel';
require('./wp-responsive-images.js');

$( document ).ready(function() {
	
    $( ".porta" ).click(function() {
        var data = {
            'action': 'my_action',
            'whatever': ajax_object.we_value
        };
        $.post(ajax_object.ajax_url, data, function(response) {
            console.log('Got this from the server: ' + response);
        });
     });
    
    $(".slider-wrapper").slick({     		
    	dots: true,
    	  infinite: false,
    	  speed: 300,
    });
    
    
    $.fn.isInViewport = function() {
    	var elementTop = $(this).offset().top;
    	var elementBottom = elementTop + $(this).outerHeight();
    	var viewportTop = $(window).scrollTop();
    	var viewportBottom = viewportTop + $(window).height();
    	if( elementBottom > viewportTop && elementTop < viewportBottom ){

    		//get image
    		var url 		= $(this).attr('src');
    		var lastslash	= url.lastIndexOf('/');
    		var fullname 	= url.substring(lastslash+1);
    		var lasthyphen 	= fullname.lastIndexOf('-');
    		var shortname 	= fullname.substring(0,lasthyphen);
    		
    		console.log("shortname:"+shortname);
    		
    		//slick
    		//if($(this).parent().hasClass('slide') && !$(this).closest(".slick-slide").hasClass('slick-active')){
    		//	return false;
    		//}
    		
    		//if low res img
			if( fullname.includes("x") ){
	
	    			//get agttributes img
					var path 		= url.substring(0,lastslash)+'/';
		    		var lasthyphen 	= fullname.lastIndexOf('-');
		    		var lastdot 	= fullname.lastIndexOf('.');
		    		var size 		= fullname.substring(lasthyphen+1,lastdot);
		    		var ext 		= fullname.substring(lastdot+1);
		    		var sizes 		= size.split("x");
		    		var imgwidth	= $(this).width();
		    		var imgratio	= sizes[0]/sizes[1];
		    		var oriwidth	= $(this).data('media-width');
		    		var oriheight	= $(this).data('media-height');
		    		var imgratio	= oriwidth/oriheight;
		    		var breakpoint  = null;
		    		var breakpoints = [];
		    		breakpoints[0] 	= 1140;
		    		breakpoints[1] 	= 960;
		    		breakpoints[2] 	= 720;
		    		breakpoints[3] 	= 540;
		    		breakpoints[4] 	= 300;
		    		
		    		if (imgwidth >= breakpoints[0] ) { breakpoint = null; } else
		    			if (imgwidth >= breakpoints[1] && oriwidth >= breakpoints[0] ) { breakpoint = 0 } else
		    				if (imgwidth >= breakpoints[2] && oriwidth >= breakpoints[1] ) { breakpoint = 1; } else
		    					if (imgwidth >= breakpoints[3] && oriwidth >= breakpoints[2] ) { breakpoint = 2; } else
		    						if (imgwidth >= breakpoints[4] && oriwidth >= breakpoints[3] ) { breakpoint = 3; } 
		    
		    		if( breakpoint == null){
		    			var imgname		= shortname+'.'+ext;
		    		}
		    		else{
		    			var newheight	= Math.round(breakpoints[breakpoint]/imgratio);
			    		var imgname		= shortname+'-'+breakpoints[breakpoint]+'x'+newheight+'.'+ext;
			    		$(this).attr("src", path+imgname);
			    		$(this).addClass("loaded");
		    		}
		    		
		    		/*
		    		console.log("url:"+url);
		    		console.log("fullname:"+fullname);
		    		console.log("shortname:"+shortname);
		    		console.log("size:"+size);
		    		console.log("width:"+sizes[0]);
		    		console.log("height:"+sizes[1]);
		    		console.log("ext:"+ext);
		    		console.log("display-width:"+imgwidth);
		    		console.log("imgratio:"+imgratio);
		    		console.log("newheight:"+newheight);
		    		console.log("imgname:"+imgname);
		    		*/
			}
			
    	}
    };
    

    //scroll
	$(window).on("scroll", function() {
		 $("img").not('.loaded,.notfirst').each(function() {  
			$(this).isInViewport();
	     }); 
	});	
	
	 //resize alleen als scherm groter
	$(window).on("scroll", function() {
		//remove loaded
		 $("img").not('.loaded,.notfirst').each(function() {  
			$(this).isInViewport();
	     }); 
	});	
	
    //load
	 $("img").not('.loaded,.notfirst').each(function() {  
		 $(this).isInViewport();
     }); 
	 
	// On before slide change
	 $(".slider-wrapper").on('afterChange', function(event, slick, currentSlide){
		 $(this).find('.slick-current img').isInViewport();
	 });
	
});
