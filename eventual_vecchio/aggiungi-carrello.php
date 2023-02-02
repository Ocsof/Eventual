<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
$templateParams["titolo"] = "Eventual - Aggiungi Carrello";


$carrello = $dbh->getCarrelloUser($_SESSION["idutente"]);
$evento = $_GET["id"];
$dbh->addEventToCart($carrello[0]["idcarrello"], $evento);
$templateParams["nome"] = "carrello-aggiungi.php";

require 'template/base-user.php';
?>