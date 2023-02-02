<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
$templateParams["titolo"] = "Eventual - SignUp";

if( isset($_POST["inputName"]) && isset($_POST["inputSurname"]) && isset($_POST["inputTelefono"]) 
    && isset($_POST["inputBirthday"]) && isset($_POST["inputEmail"]) && isset($_POST["inputPassword"])
    && isset($_POST["inputAddress"]) && isset($_POST["inputCity"]) && isset($_POST["inputState"])) {
        //verifico se c'è qualcuno registrato con stessa email 
        $login_result = $dbh->checkSignUp($_POST["inputEmail"]); 
        if(count($login_result)==0){
            //se non cè nessuno con questa email ci si può registrare
            $templateParams["erroreSignUp"] = "";
            $dbh->insertNewUser();
            $templateParams["nome"] = "signup-successo.php";
        } else {
            $templateParams["erroreSignUp"] = "Errore! Email associata ad un account già registrato!";
        }
} else {
    $templateParams["nome"] = "signup-form.php";
}

require 'template/base.php';
?>