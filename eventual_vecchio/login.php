<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();

if(isset($_POST["email"]) && isset($_POST["password"])){
    $attivo_result = $dbh->checkActive($_POST["email"]);
    if(count($attivo_result)==0){
        $templateParams["errorelogin"] = "Errore! Controllare email o password!";
    } elseif($attivo_result[0]["attivo"] == 0){
        $templateParams["errorelogin"] = "Errore! Il tuo account è disattivo, contatta l'assistenza!";   
    } else {
        $login_result = $dbh->checkLogin($_POST["email"], $_POST["password"]);
        if(count($login_result)==0){
            //Login fallito
            $templateParams["errorelogin"] = "Errore! Controllare email o password!";
        }
        else{
            registerLoggedUser($login_result[0]);
        }
    }    
}


if(isUserLoggedIn()){
    
    $templateParams["nome"] = "login-con-successo.php";

    if(isUserPromoter()){ 
        $templateParams["titolo"] = "Eventual - User";
        $templateParams["eventicasuali"] = $dbh->getEventByPromoterId(( $_SESSION["idutente"]));
        $templateParams["homeTipoUtente"] = "home-promoter.php";
        require 'template/base-organizzatore.php'; 
    } 

    if(isUserAdmin()){ 
        $templateParams["titolo"] = "Eventual - User";
        $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
        $templateParams["homeTipoUtente"] = "home-admin.php";
        require 'template/base-admin.php'; 
    } 

    if(isNormalUser()){ 
        $templateParams["titolo"] = "Eventual - User";
        $templateParams["eventicasuali"] = $dbh->getEventByUserId( $_SESSION["idutente"]);
        $templateParams["homeTipoUtente"] = "home-user.php";
        require 'template/base-user.php'; 
    } 

    if(isset($_GET["formmsg"])){
        $templateParams["formmsg"] = $_GET["formmsg"];
    } 
}

else{  //se non sei loggato
    $templateParams["titolo"] = "Eventual - Login";
    $templateParams["nome"] = "login-form.php";
    $templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
    require 'template/base.php'; 
}
?>