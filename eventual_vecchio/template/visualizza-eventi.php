<section class="bg-white border mt-4 mb-4 px-4 py-3">
<h2 class="title">Tutti gli eventi per categorie</h2>
<?php foreach($templateParams["categorie"] as $categoria): ?>
<h3 class="title"><?php echo $categoria["nomecategoria"]?></h3>
<?php 
    if(isUserAdmin()){
        $eventi = $dbh->getEventByCategory($categoria["idcategoria"]);
    }
    if(isUserPromoter()){
        $eventi = $dbh->getEventByCategoryOfPromoter($categoria["idcategoria"], $_SESSION["idutente"]);
    }
    if(isNormalUser()){
        $eventi = $dbh->getMyEventByCategory($categoria["idcategoria"], $_SESSION["idutente"]);
    }
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
        <p><?php echo $evento["anteprimaevento"]; ?></p>
    </section>
    <footer class="text-right pb-4 px-5">
        <?php if(isUserAdmin()): ?>
            <a class="btn btn-light" href="azioni.php?id=<?php echo $evento["idevento"]; ?>&action=3">Segnala Evento</a>
            <a class="btn btn-light" href="azioni.php?id=<?php echo $evento["idevento"]; ?>&action=4">Elimina Evento</a>
        <?php endif; ?>
        <?php if(isUserPromoter()): ?>
            <a class="btn btn-light" href="inserimento-evento.php?id=<?php echo $evento["idevento"]; ?>&action=5">Modifica Evento</a>
            <a class="btn btn-light" href="azioni.php?id=<?php echo $evento["idevento"]; ?>&action=4">Elimina Evento</a>
        <?php endif; ?>
        <?php if(isNormalUser()): ?>
            <a class="btn btn-light" href="azioni.php?id=<?php echo $evento["idevento"]; ?>&action=1">Contatta Organizzatore</a>
        <?php endif; ?>
    </footer>
</article>
<?php endforeach;?>
<?php endforeach;?>
</section>

<footer class="text-right pb-4 px-5">
<?php if(isUserAdmin()): ?>
    <a class="btn btn-light" href="home-admin.php" >Indietro</a>
<?php endif; ?>
<?php if(isUserPromoter()): ?>
    <a class="btn btn-light" href="gestione.php" >Indietro</a>
<?php endif; ?>
<?php if(isNormalUser()): ?>
    <a class="btn btn-light" href="home-user.php" >Indietro</a>
<?php endif; ?>
</footer>
