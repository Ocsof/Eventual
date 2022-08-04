<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Eventual - Notifiche";

 

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
$templateParams["nome"] = 'visualizza-notifiche.php'; 

$templateParams["notifiche"] = $dbh->getNotifichePerEventi($_SESSION["idutente"]);
$notifiche_eventi = 1;

if(isUserPromoter()){ 
    $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
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