<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["titolo"] = "Eventual - Promoter";
$templateParams["nome"] = "login-home-promoter.php";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));

require 'template/base-organizzatore.php';
?>