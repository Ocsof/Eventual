<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
$templateParams["titolo"] = "Eventual - Gestione eventi";
$templateParams["nome"] = "visualizza-eventi.php";


if(!isUserLoggedIn()){
    header("location: login.php");
} 

if(isUserAdmin()){
    $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
    require 'template/base-admin.php';
}
if(isUserPromoter()){
    $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
    require 'template/base-organizzatore.php';
}
if(isNormalUser()){
    $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
    require 'template/base-user.php';
}

?>