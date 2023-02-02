<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
$templateParams["titolo"] = "Eventual - Inserimento nuovo evento";
$templateParams["nome"] = "inserimento-page.php";

if(isset($_GET["action"]) && isset($_GET["id"])) {
    $templateParams["modifica"] = "modifica";
    if ($_GET["action"] == 5){
        $templateParams["evento"] = $dbh->getEventById($_GET["id"])[0];
        $templateParams["idevento"] = $_GET["id"];
    }
} else {
    $templateParams["evento"] = getEmptyArticle();
}


require 'template/base-organizzatore.php';
?>