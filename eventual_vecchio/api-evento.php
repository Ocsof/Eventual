<?php
require_once 'bootstrap.php';

$result = array("result" => "Errore! Pagina non trovata");



if(isset($_GET["page"])){
    if($_GET["page"]==="home" || $_GET["page"]==="archivio"){
        if($_GET["page"]==="home"){
            $result = $dbh->getEvents(2);
        }
        else{
            $result = $dbh->getEvents();
        }
        for($i = 0; $i < count($result); $i++){
            $result[$i]["imgevento"] = IMG_DIR.$result[$i]["imgevento"];
        }
    }
}


header('Content-Type: application/json');
echo json_encode($result);

?>