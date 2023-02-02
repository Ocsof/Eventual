<section class="bg-white border mt-4 mb-4 px-4 py-3">
    <h2 class="title">Il tuo profilo</h2>
    <?php  $info = $dbh->getInfobyUserId($_SESSION["idutente"]); ?>
    <table>
        <tr>
            <th scope="col">Email</th>
            <td><?php echo $info[0]["email"]; ?></td>
            <form action="#">
            <td><input type="email" id="newEmail" name="newEmail" placeholder="modifica mail"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Password</th>
            <form action="#" >
            <td><!...<?php echo $info[0]["password"]; ?>--></td>
            <td><input type="password" id="newPassword" name="newPassword" placeholder="modifica password"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Nome</th>
            <td><?php echo $info[0]["nome"]; ?></td>
            <form action="#" >
            <td><input type="text" id="newName" name="newName" placeholder="modifica nome"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Cognome</th>
            <td><?php echo $info[0]["cognome"]; ?></td>
            <form action="#">
            <td><input type="text" id="newSurname" name="newSurname" placeholder="modifica cognome"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Compleanno</th>
            <form action="#">
            <td><?php echo $info[0]["data_nascita"]; ?></td>
            <td><input type="date" id="newBirhday" name="newBirthday" placeholder="modifica compleanno"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Indirizzo</th>
            <form action="#">
            <td><?php echo $info[0]["indirizzo"]; ?></td>
            <td><input type="text" id="newAddress" name="newAddress" placeholder="modifica indirizzo"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Citta&grave;</th>
            <form action="#">
            <td><?php echo $info[0]["citta"]; ?></td>
            <td><input type="date" id="newCity" name="newCity" placeholder="modifica città"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Stato</th>
            <form action="#">
            <td><?php echo $info[0]["stato"]; ?></td>
            <td><input type="text" id="newState" name="newBirthday" placeholder="modifica stato"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
        <tr>
            <th scope="col">Telefono</th>
            <form action="#">
            <td><?php echo $info[0]["numero_telefono"]; ?></td>
            <td><input type="tel" id="newTel" name="newTel" placeholder="modifica telefono"></td>
            <td>
                <button type="submit" class="btn btn-primary  align-items-right"> Modifica </button>
                <button type="reset" class="btn btn-primary align-items-right"> Cancella </button>
            </td>
            </form>
        </tr>
    </table>
</section>
<footer  class="text-right mt-5 mb-5">
    <?php if(isUserAdmin()): ?>
        <a class="btn btn-light" href="home-admin.php" >Indietro</a>
    <?php endif; ?>
    <?php if(isUserPromoter()): ?>
        <a class="btn btn-light" href="home-promoter.php" >Indietro</a>
    <?php endif; ?>
    <?php if(isNormalUser()): ?>
        <a class="btn btn-light" href="home-user.php" >Indietro</a>
    <?php endif; ?>
</footer>
