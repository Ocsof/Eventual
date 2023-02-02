<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
$templateParams["titolo"] = "Eventual - Conferma acquisto";


$idevento = $_GET["id"];
$templateParams["nome"] = "conferma-acquisto-page.php";

require 'template/base-user.php';
?>