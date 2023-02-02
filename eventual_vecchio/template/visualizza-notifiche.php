<div class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2 class = "title">Le tue notifiche</h2>
    <article class="bg-white border mt-4 mb-4">
    <table>
        <th scope="col">Testo Notifica</th>
        <?php if($notifiche_eventi==1):?>
            <th scope="col">Evento</th>
        <?php endif;?>
        <?php if($notifiche_eventi==0):?>
            <th scope="col">Mittente</th>
        <?php endif;?>

        <?php foreach($templateParams["notifiche"] as $notifica):?>
        <tr>
            <td><?php echo $notifica["testo"]?></td>
            <?php if($notifiche_eventi==1):?>
            <td> <?php echo $notifica["titoloevento"]?></td>
            <?php endif;?>
            <?php if($notifiche_eventi==0):?>
            <td><?php echo $notifica["email"]?></td>
            <?php endif;?>
        </tr>
        <?php endforeach;?>
    </table>
    </article>
    <footer class="text-right pb-4 px-5">
        <a class="btn btn-light" href="notifiche.php" >Indietro</a>
    </footer>
<div>