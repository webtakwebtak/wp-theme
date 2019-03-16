<?php
namespace Library;

/**
 * Add common WordPress theme support tags
 *
 * @link https://developer.wordpress.org/reference/functions/add_theme_support/
 */
class Theme
{
    /**
     * ThemeSupportExtend constructor.
     */
    public function __construct()
    {
        //add bundje for js/css
        add_action( 'wp_enqueue_scripts', array( $this, 'theme_enqueue_scripts' ));
        
        //ajax
        add_action( 'wp_ajax_my_action', array( $this, 'my_action' ));
        add_action( 'wp_ajax_nopriv_my_action', array( $this, 'my_action' ));
    }

    public function theme_enqueue_scripts() {
        wp_enqueue_script( 'bundle', get_stylesheet_directory_uri() . '/assets/dist/js/bundle.js','', 1, false );
        wp_localize_script( 'bundle', 'ajax_object',array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 'we_value' => 1234 ) ); 
    }
    
    public function my_action() {
        $whatever = intval( $_POST['whatever'] );
        $whatever += 10;
        echo $whatever;
        wp_die();
    }
}

new \Library\Theme;
