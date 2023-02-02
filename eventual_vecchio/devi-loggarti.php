

<?php
require_once 'bootstrap.php';

//Base Template
$templateParams["js"] = array("js/jquery-3.4.1.min.js","js/functions.js","js/logica.js", "js/bootstrap.min.js");
$templateParams["categorie"] = $dbh->getCategories();
$templateParams["eventicasuali"] = $dbh->getRandomEvents(2);
$templateParams["nome"] = '
                            <article class="bg-white border mt-4 mb-4">         
                                <section class="px-5">
                                    <p>Devi prima loggarti!</p>
                                </section>
                                <footer class="text-right pb-4 px-5">
                                    <a class="btn btn-light" href="login.php">Login</a>
                                </footer>
                            </article>
                        ';

require 'template/base.php';
?>