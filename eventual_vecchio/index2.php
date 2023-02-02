<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["titolo"] = "Eventual";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);

require 'template/base.php';
?>