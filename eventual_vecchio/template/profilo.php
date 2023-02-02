<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h3 class="title">Il tuo profilo </h3>
        <?php if(isset($templateParams["formmsg"])):?>
        <p><?php echo $templateParams["formmsg"]; ?></p>
        <?php endif; ?>

        
        <?php foreach($templateParams["user_info"] as $info): ?>
            <?php echo $info; ?></br> 
        <?php endforeach; ?>
        </p>
        
    <footer class="text-right pb-4 px-5">
            <a class="btn btn-light" href="logout.php" >Logout</a>
    </footer>
</section>