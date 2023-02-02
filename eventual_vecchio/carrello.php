<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Eventual - Carrello";

 
$templateParams["nome"] = "carrello-page.php";

$templateParams["eventicarrello"] = $dbh->getEventsInTheCart($_SESSION["idutente"]);
if(count($templateParams["eventicarrello"])==0){
    $templateParams["emptycart"] = "Il tuo carrello è vuoto per ora!";
}
$count = 0;

foreach($templateParams["eventicarrello"] as $eventocarrello){

    $numeroPartecipanti = $dbh->getNumeroPartecipanti($eventocarrello["idevento"]);
    $eventocarrello["capienza"] = $eventocarrello["capienza"] - $numeroPartecipanti[0]["NumPar"];
    if(count($eventocarrello["capienza"])==0){
        $templateParams["eventicarrello"][$count]["capienza"]  = "Sold out!";
    }
    else{
        $templateParams["eventicarrello"][$count]["capienza"] = "Biglietti disponibili!";
    }
    $count++;
}


//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);

require 'template/base-user.php';
?>