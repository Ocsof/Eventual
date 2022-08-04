<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h3 class="title">Le tue notifiche</h3>
    <?php if(isset($templateParams["formmsg"])):?>
    <p><?php echo $templateParams["formmsg"]; ?></p>
    <?php endif; ?>
    
    <a href="notifiche-solo-te.php">Notifiche solo per te </br></a>
    <a href="notifiche-eventi.php">Notifiche legate ad eventi</br></a>
</section>
