<!-- AZIONI DELL'ADMIN -->
<?php if($azione == 1 || $azione == 2): ?>
<article class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2>Gestione Utenti</h2>
    <section class="px-5">
        <p>Attivazione utente cambiata con successo</p>
    </section>
    <footer class="text-right pb-4 px-5">
        <a class="btn btn-light" href="gestione-utenti.php">indietro</a>
    </footer>
</article>
<?php endif; ?>
<?php if($azione == 3): ?>
<article class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2>Gestione Eventi</h2>
    <section class="px-5">
        <p>Segnalazione dell'evento avvenuta con successo</p>
    </section>
    <footer class="text-right pb-4 px-5">
        <?php if(isUserAdmin()): ?>
        <a class="btn btn-light" href="gestione-eventi.php">indietro</a>
        <?php endif; ?>
    </footer>
</article>
<?php endif; ?>
<!-- AZIONE SIA PER ADMIN CHE PER ORGANIZZATORE -->
<?php if($azione == 4): ?>
<article class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2>Gestione Eventi</h2>
    <section class="px-5">
        <p>Eliminazione dell'evento avvenuta con successo</p>
    </section>
    <footer class="text-right pb-4 px-5">
        <a class="btn btn-light" href="gestione-eventi.php">indietro</a>
    </footer>
</article>
<?php endif; ?>