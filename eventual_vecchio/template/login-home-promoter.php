<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h3 class="title">Area riservata: organizzatore</h3>
        <?php if(isset($templateParams["formmsg"])):?>
        <p><?php echo $templateParams["formmsg"]; ?></p>
        <?php endif; ?>
        
        <a href="profilo.php">Visualizza il tuo profilo </br></a>
        <a href="inserimento-evento.php">Inserisci nuovo evento </br></a>
        <a href="gestione-eventi.php">I tuoi eventi </br></a>
        <a href="notifiche.php">Le tue notifiche </br></a>

    <footer class="text-right pb-4 px-5">
            <a class="btn btn-light" href="logout.php" >Logout</a>
    </footer>
</section>