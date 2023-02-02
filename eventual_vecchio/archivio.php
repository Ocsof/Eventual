<?php
require_once 'bootstrap.php';


$templateParams["titolo"] = "Eventual - Archivio";
$templateParams["nome"] = "visualizza-archivio.php";


//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();


if(!isUserLoggedIn()){
    header("location: login.php");
} else {
    if(isNormalUser()){
        $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
        require 'template/base-user.php';
    }
    else if(isUserPromoter()){
        $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
        require 'template/base-organizzatore.php';
    }
    else if(isUserAdmin()){
        $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
        require 'template/base-admin.php';
    }
}
?>