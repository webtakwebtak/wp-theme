<?php 

namespace Models;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Start_model
{
    public function __construct() {}
    
    function getBodyText()
    {
       global $post;
       return get_permalink($post->ID);
    }
}




