<?php

//load MVC for front-end
if(!is_admin()){
    require('library/autoload.php');
    require('system/MVC.php');
}