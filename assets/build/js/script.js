import $ from 'jquery';
window.jQuery = $;
window.$ = $;
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

    //call responsive-image-plugin
    $(window).replaceImagesViewport({
    	debug: true,
		classloaded: 'loaded', 
		classexclude: 'excluded', 
		responsive: [
			 {
				 breakpoint: 1140,
				 imagesize: 'full'
			 },
			 {
				 breakpoint: 960,
				 imagesize: 'full'
			 },
			 {
				 breakpoint: 720,
				 imagesize: 960
			 },
			 {
				 breakpoint: 540,
				 imagesize: 720
			 },
			 {
				 breakpoint: 400,
				 imagesize: 540
			 }
	     ]	
    });
      
});
