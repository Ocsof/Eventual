<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
//Home Template
$idarticolo = -1;
if(isset($_GET["id"])){
    $idevento = $_GET["id"];
}
$templateParams["evento"] = $dbh->getEventById($idevento);
$templateParams["bottoni"]='';
$templateParams["nome"] = "singolo-evento.php";

if(isUserLoggedIn()){
    $templateParams["titolo"] = "Eventual - Evento";

    if(isUserPromoter()){ 
        //$templateParams["bottone1"] = "Acquista";
        //$templateParams["bottone2"] = "Aggiungi al carrello";
        $templateParams["bottoni"]='<a class="btn btn-light" href="#">Modifica</a>
                                    <a class="btn btn-light" href="#">Elimina</a>';
        require 'template/base-organizzatore.php';
    } 

    if(isUserAdmin()){ 
        $templateParams["bottoni"]='<a class="btn btn-light" href="#">Elimina</a>';
        require 'template/base-admin.php';
    } 

    if(isNormalUser()){ 
        $templateParams["bottoni"]='<a class="btn btn-light" href="#">Contatta Organizzatore</a>';
        require 'template/base-user.php';
    } 

    if(isset($_GET["formmsg"])){
        $templateParams["formmsg"] = $_GET["formmsg"];
    }
    
} else{
    $templateParams["titolo"] = "Eventual - Devi Loggarti";
    require 'template/base.php';
}

?>