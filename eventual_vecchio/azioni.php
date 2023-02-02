<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Azioni";
$templateParams["nome"] = "azioni-page.php";

$azione = $_GET["action"];
$id = $_GET["id"];

if(isUserAdmin()){
    if($azione == 1){
        $attivo = 1;
        $dbh->updateAttivo($id,$attivo);
    }
    if($azione == 2){
        $attivo = 0;
        $dbh->updateAttivo($id,$attivo);
    }
    if($azione == 3){
        $idnotifica = 7;
        $dbh->insertNotificaEvento($idnotifica, $id);
    }
    if($azione == 4){
        $dbh->deleteEvento($id);
        if(isUserAdmin()){
            $dbh->insertNotificaEvento(8,$id);
        }
    }
}
if(isUserPromoter()){
    if($azione == 4){
        $dbh->deleteEvento($id);
        if(isUserAdmin()){
            $dbh->insertNotificaEvento(8,$id);
        }
    }
    if($azione == 5){
        $dbh->deleteEvento($id);
        if(isUserAdmin()){
            $dbh->insertNotificaEvento(8,$id);
        }
    }
}

if(isNormalUser()){
    if($azione==1){
        $templateParams["nome"]="contatta-organizzatore.php";
        $templateParams["evento"] = $dbh->getEventById($id)[0];
    }
}

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);

if(isUserAdmin()){
    require 'template/base-admin.php';
}

if(isUserPromoter()){
    require 'template/base-organizzatore.php';
}

if(isNormalUser()){
    require 'template/base-organizzatore.php';
}

?>