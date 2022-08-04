<div class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2>Il miei eventi</h2>
    <?php if(isset($templateParams["emptycart"])):?>
        <p class="text-info py-3"><?php echo $templateParams["emptycart"]; ?></p>
    <?php endif; ?>
    <?php if(!isset($templateParams["emptycart"])):?>
        <table>
            <tr>
                <th id="titoloevento" scope="col">Evento</th>
                <th id="dataevento" scope="col">Data evento</th>
                <th id="luogoevento" scope="col">Luogo evento</th>
                <th id="prezzo" scope="col">Prezzo (€)</th>
                <th id="statoevento" scope="col">Stato evento</th>
            </tr>
            <?php foreach($templateParams["evento"] as $eventiutente): ?>
            <tr>
                <td><?php echo $eventiutente["titoloevento"];?></td>
                <td><?php echo $eventiutente["dataevento"];?></td>
                <td><?php echo $eventiutente["luogoevento"];?></td>
                <td><?php echo $eventiutente["prezzo"];?></td>
                <td><?php echo $eventiutente["statoevento"];?></td>
            </tr>
            <a class="btn btn-light" href="#">Visualizza più informazioni.</a>
            <?php endforeach;?>
        </table>
<?php endif; ?>
</div>