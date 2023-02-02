<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
$templateParams["titolo"] = "Eventual - Gestione utenti";
$templateParams["nome"] = "visualizza-utenti.php";


if(!isUserLoggedIn()){
    header("location: login.php");
} else {
    if(isUserAdmin()){
        require 'template/base-admin.php';
    }
    if(isUserPromoter()){
        require 'template/base-organizzatore.php';
    }
}

?>