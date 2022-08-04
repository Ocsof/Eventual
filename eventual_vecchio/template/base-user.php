<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta targs-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title class="title"><?php echo $templateParams["titolo"]; ?></title>
    <!-- Bootestrap css ----->
    <!-- <link rel="stylesheet" href="css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <?php
    if(isset($templateParams["js"])):
        foreach($templateParams["js"] as $script):
    ?>
        <script src="<?php echo $script; ?>"></script>
    <?php
        endforeach;
    endif;
    ?>
</head>
<body> 
    <!-----------     nav  ---------->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">  <!-- colore nav e nav fissato in alto -->
        <div class="container">  <!-- per rendere centrato il nav-->
            <a class="navbar-brand" href="#">Eventual</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
            </button>
            <form method="post" action="cerca.php">
                <input type="text" name="testo" placeholder="Es:compleanno di Marco " /><input  class="btn-primary" type="submit" value="CERCA"  />
            </form>
            <div class="collapse navbar-collapse navbar-toggler-right" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <a class="nav-link text-center text-white home" href="home-user.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-center text-white" href="archivio.php">Archivio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-center text-white" href="notifiche.php">Notifiche</a>
                    </li>
                    <li class="nav-item">
                     <a class="nav-link text-center text-white" href="carrello.php">Carrello</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-center text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Il mio account
                      </a>
                      <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                          <a class="nav-link dropdown-item text-white" href="home-user.php">Il mio profilo</a>
                          <a class="nav-link dropdown-item text-white" href="logout.php">Logout</a>
                      </div>
                    </li>                  
                  <!--- QUESTO E' IL MAGICO CARRELLINO
                  <li class="nav-item">
                     <a class="nav-link text-center text-white" href="#"><img class="img-fluid" src="./img/cart.jpeg" alt="carrello" /></a>
                  </li>
                  -->
                </ul>
            </div>
        </div>
    </nav>

    <!----------fine nav ------------->

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1"></div>
            <!--------------------------------- main  -------------------------------->
            <div class="container-fluid-lg col-12 col-md-6">
                <main>
                    <?php
                        if(isset($templateParams["nome"])){
                            require($templateParams["nome"]);
                        }
                    ?>
                </main>
            </div>
            <div class="col-12 col-md-4">
                <aside class="bg-white border mt-4 px-5 py-3">  
                    <section>
                        <h2>Eventi Popolari</h2>
                            <ul class="nav flex-column">
                            <?php foreach($templateParams["eventicasuali"] as $eventocasuale): ?>
                                <li class="nav-item">
                                    <img src="<?php echo IMG_DIR.$eventocasuale["imgevento"]; ?>" alt="img.<?php echo $eventocasuale["idevento"]?>" />
                                    <a href="evento.php?id=<?php echo $eventocasuale["idevento"]; ?>"><?php echo $eventocasuale["titoloevento"]; ?></a>
                                </li>
                            <?php endforeach; ?>
                            </ul>
                    </section>
                    <section>
                        <h2>Categorie</h2>
                        <ul class="nav flex-column">
                        <?php foreach($templateParams["categorie"] as $categoria): ?>
                            <li><a href="eventi-categoria.php?id=<?php echo $categoria["idcategoria"]; ?>"><?php echo $categoria["nomecategoria"]; ?></a></li>
                        <?php endforeach; ?>
                        </ul>
                    </section>
                </aside>
            </div>
            <div class="col-md-1"></div>
        </div>
        <!------------------------------------ footer ------------------------------------->
        <footer class="row footer text-white bg-dark" id="prova">
            <div class="col-12">
                <span class="text-center text-white py3">
                    Copyright - 2020 Francesco Foschini, Alessia Rocco, Angela Cortecchia
                </span>
            </div>
        </footer> 
    </div>
</body>
</html>