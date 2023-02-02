<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "Eventual - Acquisto Carrello";

 

$templateParams["eventicarrello"] = $dbh->getEventsInTheCart($_SESSION["idutente"]);
$carrello = $dbh->getCarrelloUser($_SESSION["idutente"]);
if($_GET["action"]==1){     //acquisto di tutti dal carrello
    foreach($templateParams["eventicarrello"] as $eventocarrello){
        $dbh->acquistaEvento($eventocarrello["idevento"], $_SESSION["idutente"]);
        $dbh->togliEventoSulCarrello($carrello[0]["idcarrello"], $eventocarrello["idevento"]);
        $templateParams["nome"] = 'acquisto-successo.php';
    }
}
else if($_GET["action"]==2){    //rimozione di tutti dal carrello
    foreach($templateParams["eventicarrello"] as $eventocarrello){
        $dbh->togliEventoSulCarrello($carrello[0]["idcarrello"], $eventocarrello["idevento"]);
        $templateParams["nome"] = 'rimozione-da-carrello-avvenuta.php';
    }
}
else if($_GET["action"]==3){        //acquisto diretto di un evento
    $evento = (int)$_GET["id"];
    $dbh->acquistaEvento($evento, $_SESSION["idutente"]);
    $dbh->togliEventoSulCarrello($carrello[0]["idcarrello"], $evento);
    $templateParams["nome"] = 'acquisto-successo.php';
}

else if($_GET["action"]==4){    //rimozione da carrello
    $evento = (int)$_GET["id"];
    var_dump($evento);
    $dbh->togliEventoSulCarrello($carrello[0]["idcarrello"], $evento);
    $templateParams["nome"] = 'rimozione-da-carrello-avvenuta.php';
}
//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);

require 'template/base-user.php';
?>