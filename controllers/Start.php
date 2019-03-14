<?php 

namespace Controllers;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Start extends \System\Base 
{
    public function __construct()
    {
        parent::__construct();
        $this->model->loadModel('start');
    }
    
    function index()
    {
       // $this->cache->setViewCache('test',3000);
        $post =  $this->model->models['start']->getBodyText();
       // $data = array('test' => $post);
        $this->view('test',$post);
    }
}




