<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Eventual - Cerca";
$templateParams["nome"] = "cerca-page.php";


//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();

if(isUserLoggedIn()){
    
    if(isUserPromoter()){
        $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
        require 'template/base-organizzatore.php';
    }
    if(isNormalUser()){
        $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
        require 'template/base-user.php';
    }
    if(isUserAdmin()){
        $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
        require 'template/base-admin.php';
    }
} else {
    $templateParams["eventicasuali"] = $dbh->getEvents(2);
    require 'template/base.php';
}

?>