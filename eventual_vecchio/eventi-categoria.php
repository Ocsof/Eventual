<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
//Eventi Categoria Template
$idcategoria = -1;
if(isset($_GET["id"])){
    $idcategoria = $_GET["id"];
}
$nomecategoria = $dbh->getCategoryById($idcategoria);
if(count($nomecategoria)>0){
    $templateParams["titolo_pagina"] = "Eventi della categoria ".$nomecategoria[0]["nomecategoria"];
    $templateParams["eventi"] = $dbh->getEventByCategory($idcategoria);
    $templateParams["nome"] = "stampa-eventi.php";
} else {
    $templateParams["titolo_pagina"] = "Categoria non trovata"; 
    $templateParams["eventi"] = array();   
}

if(isUserLoggedIn()){
    $templateParams["titolo"] = "Eventual - Eventi Categoria";
    //$templateParams["user_info"] = $dbh->getInfobyUserId($_SESSION["idutente"]);

    if(isUserPromoter()){ 
        $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
        $templateParams["eventi"] = $dbh->getEventByCategoryOfPromoter($idcategoria, $_SESSION["idutente"]);
        require 'template/base-organizzatore.php';
    } 

    if(isUserAdmin()){ 
        $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
        $templateParams["eventi"] = $dbh->getEventByCategory($idcategoria);
        require 'template/base-admin.php';
    } 

    if(isNormalUser()){ 
        $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
        $templateParams["eventi"] = $dbh->getMyEventByCategory($idcategoria, $_SESSION["idutente"]);
        require 'template/base-user.php';
    } 

    if(isset($_GET["formmsg"])){
        $templateParams["formmsg"] = $_GET["formmsg"];
    }
    
} else{
    require 'template/base.php';
}
?>