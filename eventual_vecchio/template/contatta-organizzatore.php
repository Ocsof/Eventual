<?php $evento = $templateParams["evento"]; ?>
<div class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2 class = "title">Contatta organizzatore di <?php echo $evento["titoloevento"] ?></h2>
    <article class="bg-white border mt-4 mb-4">
    <form action="invio-notifica.php" method="POST" enctype="multipart/form-data" >
        <label for="notifica">Testo Notifica</label><input type="text" name="notifica" id="notifica" required/>
        <input type="submit" name="submit" value="invionotifica" />
        <input type="hidden" name="mittente" value="<?php echo $_SESSION["idutente"]?>" />
        <input type="hidden" name="destinatario" value="<?php echo $evento["organizzatore"]?>" />
    </form>

    </article>
    <footer class="text-right pb-4 px-5">
        <a class="btn btn-light" href="gestione-eventi.php" >Indietro</a>
    </footer>
<div>