import $ from 'jquery';
import 'slick-carousel';

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
    
});