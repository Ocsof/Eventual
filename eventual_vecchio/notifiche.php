<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Eventual - Notifiche";

$templateParams["nome"] = "notifiche-page.php";   

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();

$templateParams["nome"] = "notifiche-page.php";

/*
$templateParams["notifichePerEventi"] = $dbh->getNotifichePerEventi($_SESSION["idutente"]);
$templateParams["notificheSoloPerTe"] = $dbh->getNotificheSoloPerTe($_SESSION["idutente"]);
*/
if(isUserPromoter()){ 
    $templateParams["eventicasuali"] = $dbh->getEventByPromoterId( $_SESSION["idutente"]);
    require 'template/base-organizzatore.php';
} 

if(isUserAdmin()){ 
    $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
    require 'template/base-admin.php';
} 

if(isNormalUser()){ 
    $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
    require 'template/base-user.php';
} 

if(isset($_GET["formmsg"])){
    $templateParams["formmsg"] = $_GET["formmsg"];
}
    
?>