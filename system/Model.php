<?php

namespace System;

defined('BASE_PATH') OR exit('No direct script access allowed');

class Model
{
    var $models;
    
    public function __construct() {}
    
    public function loadModel($name)
    {
        $modelname = ucfirst($name).'_model';
        $classname = '\\Models\\'.$modelname;
        $this->models[$name] = new $classname;
    }
}