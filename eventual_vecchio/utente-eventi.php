<?php
require_once 'bootstrap.php';

$templateParams["titolo"] = "I miei eventi";

if(isUserLoggedIn()){   
    if(isNormalUser()){    
        $templateParams["nome"] = "eventi-utente.php";
        //$templateParams["eventi"] = $dbh->getEventsInTheCart();
        $templateParams["eventiutente"] = $dbh->getUserEvents($id);
    }
    else{
        $templateParams["nome"] = "carrello-vietato.php";
            
    }  
    
} else {
    $templateParams["nome"] = "devi-loggarti.php";
}

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);

require 'template/base-utente.php';
?>