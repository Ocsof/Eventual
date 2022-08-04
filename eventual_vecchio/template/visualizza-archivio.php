<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2 class="title">Tutti gli eventi per categorie</h2>
    <?php foreach($templateParams["categorie"] as $categoria): ?>
        <h3 class="title"><?php echo $categoria["nomecategoria"]?></h4>
    <?php 
        $eventi = $dbh->getEventByCategory($categoria["idcategoria"]);
    foreach($eventi as $evento): ?>
    <article class="bg-white border mt-4 mb-4">
        <header>
            <div class="text-center">
                <img class="img-fluid text-center" src="<?php echo IMG_DIR.$evento["imgevento"]; ?>" alt="<?php echo $evento["imgevento"]?>" />
            </div>
        <h2 class="px-5"><?php echo $evento["titoloevento"]; ?></h2>
            <p class="px-5"><?php echo $evento["dataevento"]; ?> - <?php echo $evento["organizzatore"]; ?></p>
        </header>
        <section class="px-5">
            <p><?php echo $evento["testoevento"]; ?></p>
        </section>
        <footer class="text-right pb-4 px-5">
            <?php if(isUserAdmin()): ?>
                
            <?php endif; ?>
            <?php if(isUserPromoter()): ?>

            <?php endif; ?>
            <?php if(isNormalUser()): ?>
                <a class="btn btn-primary" href="conferma-acquisto.php?id=<?php echo $evento["idevento"];?>"> Acquista</a>
                <a class="btn btn-light" href="aggiungi-carrello.php?id=<?php echo $evento["idevento"];?>">Aggiungi al carrello</a>
            <?php endif; ?>
        </footer>
    </article>
    <?php endforeach;?>
    <?php endforeach;?>
</section>