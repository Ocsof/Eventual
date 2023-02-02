<section class="bg-white border mt-4 mb-4 px-4 py-3">
<h2 class="intestazione">Risultati della tua ricerca</h2>
<?php 
//recupero quello che hanno scritto
$testo = $_POST['testo'];

//query mysql
$trovati = $dbh->cerca($testo);

//se ci sono risultati
if(count($trovati)!=0): ?>
<p class='desc'>Trovate voci per il termine <b> <?php echo$testo;?>.</b></p></br>
<?php foreach($trovati as $trovato):?>
    <p><?php echo $trovato['titoloevento'] ?></p>
<?php endforeach;?>
<?php endif;?>
<?php if(count($trovati)==0): ?>
    <p>Al momento non sono stati pubblicati post/articoli che contengano i termini cercati.</p>
<?php endif;?>
</section>