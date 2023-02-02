<?php
require_once 'bootstrap.php';

if(!isUserLoggedIn()){
    header("location: login.php");
}

$titoloevento = $_POST["titoloevento"];
$testoevento = $_POST["testoevento"];
$dataevento = $_POST["dataevento"];
$luogoevento = $_POST["luogoevento"];
$anteprimaevento = $_POST["anteprimaevento"];
$organizzatore = $_SESSION["idutente"];
$prezzo = $_POST["prezzo"];
$capienza = $_POST["capienza"];

list($result, $msg) = uploadImage(IMG_DIR, $_FILES["imgevento"]);
$categorie = $dbh->getCategories();
$categorie_inserite = array();
foreach($categorie as $categoria){
    if(isset($_POST["categoria_".$categoria["idcategoria"]])){
        array_push($categorie_inserite, $categoria["idcategoria"]);
    }
}


$imgevento = $msg;

if($_POST["action"]==1){
    $idevento = $dbh->insertEvento($titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento,$imgevento, $organizzatore, $prezzo, $capienza);
    foreach($categorie_inserite as $categoria){
        $dbh->insertEventoCategoria($idevento, $categoria);
    }
}
if($_POST["action"]==2){
    $idevento = $_POST["idevento"];
    var_dump($idevento);
    $dbh->updateEvento($idevento, $titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento,$imgevento, $organizzatore, $prezzo, $capienza);
    foreach($categorie_inserite as $categoria){
        $dbh->insertEventoCategoria($idevento, $categoria);
    }
}

if(isset($idevento)){
    if($_POST["action"]==1){
        $msg = "Inserimento avvenuto con successo!";
        /* invio notifica automatica all'admin */
        $dbh->insertNotificaUtente(2, 1, $_SESSION["idutente"]);
    }
    if($_POST["action"]==2){
        $msg = "Modifica evento avvenuto con successo!";
        /* invio notifica automatica a tutti i partecipanti dell'evento */
        $idnotifica = $dbh->insertNotifica($_POST["notificamodficaevento"]);
        $dbh->insertNotificaEvento($idnotifica, $_POST["idevento"]);
    }
} else {
    if($_POST["action"]==1){
        $msg = "Ops! Inserimento del nuovo evento non riuscito!";
    }
    if($_POST["action"]==2){
        $msg = "Ops! Modifica dell'evento non riuscita!";
    }
}

header("location: gestione.php?formmsg=".$msg);
?>