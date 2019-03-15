<?php

//load MVC for front-end
if(!is_admin()){
    define('BASE_PATH', realpath(dirname(__FILE__)));
    require('lib/autoload.php');
    require('system/MVC.php');
}