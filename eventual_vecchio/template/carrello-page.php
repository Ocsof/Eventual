<div class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2>Il mio carrello</h2>
    <?php if(!isset($templateParams["emptycart"])): ?>
        <div>
            <a class="btn btn-info" href="acquisto-carrello.php?action=1">Acquista tutto</a>
            <a class="btn btn-light" href="acquisto-carrello.php?action=2">Rimuovi tutto</a>
        </div>
    <?php endif; ?>
    <div class="table-carrello">
        <table>
        <tr>
            <th id="titoloevento" scope="col">Evento</th>
            <th id="dataevento" scope="col">Data evento</th>
            <th id="luogoevento" scope="col">Luogo evento</th>
            <th id="prezzo" scope="col">Prezzo (€)</th>
            <th id="statoevento" scope="col">Stato evento</th>
            <th> </th>
        </tr>
        <?php foreach($templateParams["eventicarrello"] as $eventocarrello): ?>
        <tr>
            <td><?php echo $eventocarrello["titoloevento"];?></td>
            <td><?php echo $eventocarrello["dataevento"];?></td>
            <td><?php echo $eventocarrello["luogoevento"];?></td>
            <td><?php echo $eventocarrello["prezzo"];?></td>
            <td><?php echo $eventocarrello["capienza"];?></td>
            <?php $_GET["idevento"]=$eventocarrello["idevento"]; ?>
            <td> <a class="btn btn-info" href="acquisto-carrello.php?action=3&id=<?php echo $_GET["idevento"];?>"> Acquista</a>  <a class="btn btn-light" href="acquisto-carrello.php?action=4&id=<?php echo $_GET["idevento"];?>"> Rimuovi</a></td>
        </tr>
        <?php endforeach;?>
        </table>
    </div>
    
    <?php if(isset($templateParams["emptycart"])):?>
        <p class="text-info py-3"><?php echo $templateParams["emptycart"]; ?></p>
    <?php endif; ?>
    <?php if(!isset($templateParams["emptycart"])): ?>
        <div>
            <a class="btn btn-info" href="acquisto-carrello.php?action=1">Acquista tutto</a>
            <a class="btn btn-light" href="acquisto-carrello.php?action=2">Rimuovi tutto</a>
        </div>
    <?php endif; ?>
</div>