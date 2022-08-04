<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta targs-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo $templateParams["titolo"]; ?></title>
    <!-- Bootestrap css ----->
    <!-- <link rel="stylesheet" href="css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <?php
    if(isset($templateParams["js"])):
        foreach($templateParams["js"] as $script):
    ?>
        <script src="<?php echo $script; ?>"></script>
    <?php
        endforeach;
    endif;
    ?>
    <?php 
        $nome_cookie = "numero_accessi";
        if(!isset($_COOKIE[$nome_cookie])){
          $valore_cookie = 1;
          setcookie($nome_cookie, $valore_cookie, time() + (60 * 60 * 24 * 30), "/");
        }else{
          $num_visite = $_COOKIE[$nome_cookie]+1;
          setcookie($nome_cookie, $num_visite, time() + (60 * 60 * 24 * 30), "/");
        }
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
             
            <div class="collapse navbar-collapse navbar-toggler-right" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link active text-center text-white" href="index.php">Benvenuto</a>   
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-center text-white" href="index2.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-center disabled" href="#">Archivio</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-center disabled" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Accedi
                      </a>
                      <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item disabled" href="login.php">Login</a>
                          <a class="dropdown-item disabled" href="logout.php">Sign Up</a>
                      </div>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
    <!---------------carosello------------------>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/compleanno.jpg" class="block w-100" alt="">
            <div class="carousel-caption">
              <h5>Compleanni</h5>
              <p>Organizza o partecipa a compleanni</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/concerto1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
              <h5>Concerti</h5>
              <p>Eventual ti permette di organizzare una data per un tuo concerto!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/sport2.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
              <h5>Eventi sportivi</h5>
              <p>Organizza o partecipa a eventi sportivi</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/cultura1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
              <h5>Eventi culturali</h5>
              <p>Organizza o partecipa a eventi culturali</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/disco1.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
              <h5>Disco</h5>
              <p>Organizzati con i tuoi amici per fare serata in un club del tuo territorio</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>

     <!------------------------------------ footer ------------------------------------->
     <div class="row">
      <div id="cookie" class="col-12 bg-secondary text-warning">
      <p class="text-center">Questo sito utilizza cookie.</p>
      <a data-toggle="collapse" href="#cookie" class="btn btn-info mx-auto ">Ho capito</a>

      
    </div>
  </div>
  <footer class="bg-dark py-3">
    <p class="text-center text-white">Copyright - 2020 Francesco Foschini, Alessia Rocco, Angela Cortecchia</p>
  </footer>

</body>
</html>