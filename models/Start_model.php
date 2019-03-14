<?php 

namespace Models;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Start_model
{
    public function __construct() {}
    
    function getBodyText()
    {
       global $post;
       $data = array(
           'link' => get_permalink($post->ID),
           'title' => get_the_title($post->ID)
       );
       return $data;
    }
}




