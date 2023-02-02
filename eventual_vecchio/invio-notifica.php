<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["titolo"] = "Eventual - User";
$templateParams["nome"] = "invio-notifica-page.php";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
if (isset($_POST["notifica"])){
    $idnotifica = $dbh->insertNotifica($_POST["notifica"]);
    $dbh->insertNotificaUtente($idnotifica, $_POST["destinatario"], $_POST["mittente"]);
}

require 'template/base-user.php';
?>