<?php if(isUserAdmin()):?>
<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h3 class="title">Gestione amministratore</h3>
        <?php if(isset($templateParams["formmsg"])):?>
        <p><?php echo $templateParams["formmsg"]; ?></p>
        <?php endif; ?>
        
        <a href="gestione-eventi.php">Gestione eventi</br></a>
        <a href="gestione-utenti.php">Gestione utenti </br></a>
</section>
<?php endif;?>
<?php if(isUserPromoter()):?>
<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h3 class="title">Gestione organizzatore</h3>
        <?php if(isset($templateParams["formmsg"])):?>
        <p><?php echo $templateParams["formmsg"]; ?></p>
        <?php endif; ?>
        
        <a href="inserimento-evento.php">Inserisci nuovo evento </br></a>
        <a href="gestione-eventi.php">I tuoi eventi </br></a>
</section>
<?php endif;?>
