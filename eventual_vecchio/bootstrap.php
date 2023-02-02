<?php
session_start();
define("IMG_DIR", "./img/");
require_once("utils/functions.php");
require_once("db/database.php");
$dbh = new DatabaseHelper("localhost", "root", "", "eventual");
?>