<?php 
    //Equivalente della home, stampa gli articoli nella variabile, vedere se si può riuscire a sfruttare la funzione UpdateContent("Home");
    if(isset($templateParams["titolo_pagina"])): ?>
    <h3 class="title"><?php echo $templateParams["titolo_pagina"]; ?></h2>
    <?php endif;?>
    <?php foreach($templateParams["eventi"] as $evento): ?>
        <article class="bg-white border mt-4 mb-4 px-4 py-3">
            <header>
                <div class="text-center">
                    <img class="img-fluid text-center" src="<?php echo IMG_DIR.$evento["imgevento"]; ?>" alt="<?php echo $evento["imgevento"]?>" />
                </div>
                <h2 class="px-5"><?php echo $evento["titoloevento"]; ?></h2>
                <p class="px-5"><?php echo $evento["dataevento"]; ?> - <?php echo $evento["organizzatore"]; ?></p>
            </header>
            <section class="px-5">
                <p><?php echo $evento["anteprimaevento"]; ?></p>
            </section>
            <footer class="text-right pb-4 px-5">
                <a class="btn btn-light" href="evento.php?id=<?php echo $evento["idevento"]; ?>">Leggi tutto</a>
            </footer>
        </article>
    <?php endforeach; 
?>