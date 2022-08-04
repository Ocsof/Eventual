<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["titolo"] = "Eventual - Admin";
$templateParams["nome"] = "gestione-permessi.php";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
if(isset($_GET["formmsg"])){
    $templateParams["formmsg"] = $_GET["formmsg"];
}

if(isUserAdmin()){
    $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
    require 'template/base-admin.php';
}
if(isUserPromoter()){
    $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
    require 'template/base-organizzatore.php';
}

?>