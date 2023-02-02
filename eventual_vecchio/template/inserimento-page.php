<?php 
    $evento = $templateParams["evento"]; 
    if(isset($templateParams["idevento"])){
        $idevento = $templateParams["idevento"];
    }
?>
<section class="bg-white border mt-4 mb-4 px-4 py-3">
<form action="processa-evento.php" method="POST" enctype="multipart/form-data">
<h2 class="title">Gestisci Evento</h2>
<?php if($evento==null): ?>
<p>Evento non trovato</p>
<?php else: ?>
    <p>
        Assicurati di compilare tutti i campi e selezionare almeno una categoria per inserire il nuovo evento con successo.
    </p>
<ul>
    <li>
        <label for="titoloevento">Titolo:</label><input type="text" id="titoloevento" name="titoloevento" value="<?php echo $evento["titoloevento"]; ?>" required/>
    </li>
    <li>
        <label for="testoevento">Testo Evento:</label><textarea id="testoevento" name="testoevento" ><?php echo $evento["testoevento"]; ?></textarea>
    </li>
    <li>
        <label for="dataevento">Data Evento</label><input type="date" name="dataevento" id="dataevento" value="<?php echo $evento["dataevento"]; ?>" required/>
    </li>
    <li>
        <label for="luogoevento">Luogo Evento</label><input type="text" name="luogoevento" id="luogoevento" value="<?php echo $evento["luogoevento"]; ?>" required/>
    </li>
    <li>
        <label for="anteprimaevento">Anteprima Evento:</label><textarea id="anteprimaevento" name="anteprimaevento"><?php echo $evento["anteprimaevento"]; ?></textarea>
    </li>
    <li>
        <label for="imgevento">Immagine Evento</label><input type="file" name="imgevento" id="imgevento" required/>
    </li>
    <li>
        <label for="prezzo">Prezzo Evento</label><input type="text" name="prezzo" id="prezzo" value="<?php echo $evento["prezzo"]; ?>" required/>
    </li>
    <li>
        <label for="capienza">Capienza Evento</label><input type="text" name="capienza" id="capienza" value="<?php echo $evento["capienza"]; ?>" required/>
    </li>
    <li>
        <?php foreach($templateParams["categorie"] as $categoria): ?>
        <input type="checkbox" id="<?php echo $categoria["idcategoria"]; ?>" name="categoria_<?php echo $categoria["idcategoria"]; ?>" /><label for="<?php echo $categoria["idcategoria"]; ?>"><?php echo $categoria["nomecategoria"]; ?></label>
        <?php endforeach; ?>
    </li>
    <li>
        <?php if(isset($templateParams["modifica"])):?>
            <label for="notifica">Notifica automatica modifica</label><input type="text" name="notificamodficaevento" id="notificamodficaevento" required/>
        <?php endif;?>
        <?php if(!isset($templateParams["modifica"])):?>
            <input type="hidden" name="notificanuovoevento" />
        <?php endif;?>
    </li>
    <li>
        <?php if(isset($templateParams["modifica"])):?>
        <input type="submit" name="submit" value="Modifica" />
        <input type="hidden" name="action" value="2" />
        <input type="hidden" name="idevento" value="<?php echo $idevento; ?>" />
        <?php endif;?>
        <?php if(!isset($templateParams["modifica"])):?>
        <input type="submit" name="submit" value="Inserisci" />
        <input type="hidden" name="action" value="1" />
        <?php endif;?>
        <a href="gestione.php">Annulla</a>
    </li>
</ul>
<?php endif;?>
</form>
</section>