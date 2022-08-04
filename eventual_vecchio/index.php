<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["titolo"] = "Eventual - Benvenuto";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");

require 'template/benvenuto.php';
?>