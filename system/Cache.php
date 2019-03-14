<?php 

namespace System;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Cache
{
    var $cacheOn = false;
    
    public function __construct() {}
    
    public function readDbCache() {}
    
    public function setDbCache() {}
    
    public function readViewCache($template,$duration)
    {
        $template = str_replace("/",".",$template);
        $cache_file = BASE_PATH . "/cache/views/" . $template . '.cache';
        if (file_exists($cache_file) && (filemtime($cache_file) > (time() - $duration ))) {
            $output = file_get_contents($cache_file, 'w');
            return $output;
        }
        return false;
    }
    
    public function createViewCache($template,$output)
    {
        $template = str_replace("/",".",$template);
        $file = BASE_PATH."/cache/views/" . $template . '.cache';
        file_put_contents($file,$output);
    }
    
    public function setViewCache($template,$duration = 3000)
    {
        $this->cacheOn = true;
        if($output = $this->readViewCache($template,$duration)){
            echo $output;
            exit;
        }
    }
}


