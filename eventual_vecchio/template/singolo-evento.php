<?php if(count($templateParams["evento"])==0): ?>
    <article class="bg-white border mt-4 mb-4 px-4 py-3">
        <p>Evento non presente</p>
    </article>
    <?php 
        else:
            $evento = $templateParams["evento"][0];
    ?>
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
        <footer class="text-right align-items pb-4 px-5">
            <?php echo $templateParams["bottoni"]; ?>
        </footer>
    </article>
 <?php endif; ?>