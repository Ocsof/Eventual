<?php
require_once 'bootstrap.php';


$templateParams["titolo"] = "Eventual - Profilo";
$templateParams["nome"] = "visualizza-profilo.php";


//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();


if(isUserLoggedIn()){
    $templateParams["user_info"] = $dbh->getInfobyUserId($_SESSION["idutente"]);

    if(isUserPromoter()){ 
        $templateParams["eventi"] = $dbh->getEventByPromoterId($_SESSION["idutente"]);
        $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
        require 'template/base-organizzatore.php';
    } 

    if(isUserAdmin()){ 
        $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
        require 'template/base-admin.php';
    } 

    if(isNormalUser()){ 
        $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
        $templateParams["eventi"] = $dbh->getEventByUserId($_SESSION["idutente"]);
        require 'template/base-user.php';
    } 

    if(isset($_GET["formmsg"])){
        $templateParams["formmsg"] = $_GET["formmsg"];
    }
    
} else{
    $templateParams["titolo"] = "Eventual - Login";
    $templateParams["nome"] = "login-form.php";
    require 'template/base.php'; //SE USA QUESTO C'E' UN PROBLEMA
}
?>