<?php
require_once 'bootstrap.php';


$templateParams["titolo"] = "Eventual - Login";
$templateParams["nome"] = "logout-section.php";

//sec_session_start();
// Elimina tutti i valori della sessione.
$_SESSION = array();
// Recupera i parametri di sessione.
$params = session_get_cookie_params();
// Cancella i cookie attuali.
setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
// Cancella la sessione.
session_destroy();


//Base Template
$templateParams["titolo"] = "Eventual - Benvenuto";
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);

require 'template/base.php';
?>