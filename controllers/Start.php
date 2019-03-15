<?php 

namespace Controllers;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Start extends \System\Base 
{
    
    public function __construct()
    {
        parent::__construct();
        $this->loadModel('start');
    }
    
    function index()
    {
        $this->cache->setViewCache('test',3000);
        $post =  $this->models{'start'}->getBodyText();
        $this->view('test',$post);
    }
}



