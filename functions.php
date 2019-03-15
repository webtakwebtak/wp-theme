<?php


add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );
function my_theme_enqueue_scripts() {
    wp_enqueue_script( 'bundle', get_stylesheet_directory_uri() . '/assets/dist/js/bundle.js','', 1, false );
    
}



