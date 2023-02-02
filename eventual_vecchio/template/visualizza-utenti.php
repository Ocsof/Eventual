<div class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2 class="title mb-5">Tutti gli utenti</h2>
    <?php $utenti=$dbh->getUsers(); ?>
    <article>
        <table class="text-center"> 
            <th class="m-2" scope="col">EMAIL</th>
            <th class="m-2" scope="col">NOME</th>
            <th class="m-2" scope="col">COGNOME</th>
            <th class="m-2" scope="col">TELEFONO</th>
            <th class="m-2" scope="col">RUOLO</th>
            <th class="m-2" scope="col">ATTIVO</th>
            <th colspan="2" scope="col">GESTISCI</TH>
            <?php foreach ($utenti as $utente): ?>
                <tr>
                    <td class="m-2"><?php echo $utente["email"]?></td>
                    <td class="m-2"><?php echo $utente["nome"]?></td> 
                    <td class="m-2"><?php echo $utente["cognome"]?></td>
                    <td class="m-2"><?php echo $utente["numero_telefono"]?></td>
                    <td class="m-2"><?php echo $utente["ruolo"]?></td>
                    <td class="m-2"><?php echo $utente["attivo"]?></td>
                    <td class="m-2">
                        <a class="btn btn-light" href="azioni.php?id=<?php echo $utente["idutente"]; ?>&action=1">Attiva</a>
                        <a class="btn btn-light" href="azioni.php?id=<?php echo $utente["idutente"]; ?>&action=2">Disattiva</a>
                        <a class="btn btn-light" href="mailto:<?php echo $utente["email"]?>?subject=Eventual">Mail</a>

                    </td>
                </tr>
            <?php endforeach;?>
        </table>
    </article>

    <footer class="text-right mt-5 mb-5">
        <a class="btn btn-light" href="home-admin.php" >Indietro</a>
    </footer>
</div>