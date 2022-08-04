<form class="bg-white border mt-4 mb-4 px-5 py-4" action="#" method="POST">
        <h2>Login</h2>
        <?php if(isset($templateParams["errorelogin"])): ?>
            <p class="text-danger font-weight-bold"><?php echo $templateParams["errorelogin"]; ?></p>
        <?php endif; ?>
        <div class="form-group row text-center">
            <label for="email" class="col-6">Email</label>
            <input type="email" class="form-control col-6" id="email" name="email" aria-describedby="emailHelp" placeholder="Inserisci email">
        </div>
        <div class="form-group row text-center">
            <label for="password"  class="col-6">Password</label>
            <input type="password" class="form-control col-6" id="password" name="password" placeholder="Inserisci Password">
        </div>
        <div class="form-group text-right">
            <button type="submit" class="btn btn-light">Invia</button>
        </div>
        <p><a href="#">Non ricordo la mia password.</a></p>
        <p><a href="signup.php">Clicca qui se non sei ancora iscritto!</a></p>
 </form>
    