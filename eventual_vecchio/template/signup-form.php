<form class="bg-white border mt-4 mb-4 px-5 py-4" action="#" method="POST">
        <h2>Registrati!</h2>
        <?php if(isset($templateParams["erroreSignUp"])): ?>
            <p><?php echo $templateParams["erroreSignUp"]; ?></p>
        <?php endif; ?>
        <div class="form row">
            <div class="form-group col-md-6">
                <label for="inputName">Nome</label>
                <input type="text" class="form-control" id="inputName" name="inputName" placeholder="Nome" required>
            </div>
            <div class="form-group col-md-6">
                <label for="inputSurname">Cognome</label>
                <input type="text" class="form-control" id="inputSurname" name="inputSurname" placeholder="Cognome" required>
            </div>
        </div>
        <div class="form row">
            <div class="form-group col-md-6">
                <label for="inputTelefono">Numero di telefono</label>
                <input type="tel" class="form-control" id="inputTelefono" name="inputTelefono" placeholder="Numero di telefono" required>
            </div>
            <div class="form-group col-md-4">
                <label for="inputBirthday">Data di Nascita</label>
                <input type="date" class="form-control" id="inputBirthday" name="inputBirthday" placeholder="Data di Nascita" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Inserisci email" required>
            </div>
            <div class="form-group col-md-6">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" name="inputPassword" placeholder="Inserisci password" required>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Indirizzo</label>
            <input type="text" class="form-control" id="inputAddress" name="inputAddress" placeholder="Via, numero" required>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Città</label>
                <input type="text" class="form-control" id="inputCity" name="inputCity" placeholder="Inserisci città" required>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">Stato</label>
            <select id="inputState" name="inputState" class="form-control" required>
                <option>...</option>
                <option>Francia</option>
                <option>Germania</option>
                <option>Inghilterra</option>
                <option>Italia</option>
                <option>Olanda</option>
                <option>Spagna</option>
                <option>Altro</option>
            </select>
        </div>       
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radios-input" id="client" value="U" checked>
                <label class="form-check-label" for="client">
                    Cliente
                </label>
             </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radios-input" id="organiser" value="O">
                <label class="form-check-label" for="organiser">
                    Organizzatore
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radios-input" id="admin" value="A">
                <label class="form-check-label" for="admin">
                    Amministratore
                </label>
            </div>
        </div>
        <div class="form-row">
            <button type="submit" class="btn btn-primary  align-items-right"> Sign in </button>
            <button type="reset" class="btn btn-primary align-items-right"> Reset </button>
        </div>
        <p><a href="login.php">Sei già registrato?</a></p>
    </form>  