<?php
/**
 * Nothing more then a require_once document for all functions.
 */

if(! is_admin() ){
    echo '<center><img width="50%" src="'.get_bloginfo('stylesheet_directory').'/screenshot.png"></center>';
}