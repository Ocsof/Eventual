<?php
class DatabaseHelper{
    private $db;

    public function __construct($servername, $username, $password, $dbname){
        $this->db = new mysqli($servername, $username, $password, $dbname);
        if ($this->db->connect_error) {
            die("Connection failed: " . $db->connect_error);
        }        
    }

    public function cerca($testo){
        $query = "SELECT * FROM evento  WHERE (titoloevento LIKE '%" . $testo . "%') OR (testoevento LIKE '%" . $testo . "%') ";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }
    public function updateAttivo($idutente, $attivo){
        $query = "UPDATE utente SET attivo=? WHERE idutente=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$attivo, $idutente);
        $stmt->execute();
    }

    public function insertEvento($titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento, $imgevento, $organizzatore, $prezzo, $capienza){
        $query = "INSERT INTO `evento` (`idevento`, `titoloevento`, `testoevento`, `dataevento`, `luogoevento`, `anteprimaevento`, `imgevento`, `organizzatore`, 
        `prezzo`, `capienza`) VALUES (NULL, ?,?,?,?,?,?,?,?,?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ssssssiii', $titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento, $imgevento, $organizzatore, $prezzo, $capienza);
        $stmt -> execute();
        return $stmt->insert_id;
    }

    public function updateEvento($idevento, $titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento, $imgevento, $organizzatore, $prezzo, $capienza){
        $query = "UPDATE `evento` SET titoloevento=?, testoevento=?, dataevento=?, luogoevento=?, anteprimaevento=?, imgevento=?, 
                    organizzatore=?, prezzo=?, capienza=? WHERE idevento=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ssssssiiii', $titoloevento, $testoevento, $dataevento, $luogoevento, $anteprimaevento, $imgevento, $organizzatore, $prezzo, $capienza, $idevento);
        $stmt -> execute();
    }

    public function insertEventoCategoria($idevento, $categoria){
        $query = "INSERT INTO `evento_categoria` (`evento`, `categoria`) VALUES (?,?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii', $idevento, $categoria);
        $stmt -> execute();
    }

    public function deleteEvento($idevento){
        //evento_utente
        $query = "DELETE FROM evento_utente WHERE evento=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$idevento);
        $stmt->execute();

        //evento_notifica
        $query = "DELETE FROM evento_notifica WHERE evento=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$idevento);
        $stmt->execute();

        //evento_categoria
        $query = "DELETE FROM evento_categoria WHERE evento=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$idevento);
        $stmt->execute();
        
        //evento
        $query = "DELETE FROM evento WHERE idevento=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$idevento);
        $stmt->execute();
    }

    public function getRandomEvents($n){
        $stmt = $this->db->prepare("SELECT idevento, titoloevento, imgevento FROM evento ORDER BY RAND() LIMIT ?");
        $stmt->bind_param('i',$n);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getCategories(){
        $stmt = $this->db->prepare("SELECT * FROM categoria");
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEvents($n=-1){
        $query = "SELECT idevento, titoloevento, imgevento ,anteprimaevento, dataevento, nome FROM evento, utente WHERE organizzatore=idutente ORDER BY dataevento DESC";
        if($n > 0){
            $query .= " LIMIT ?";
        }
        $stmt = $this->db->prepare($query);
        if($n > 0){
            $stmt->bind_param('i',$n);
        }
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getUsers(){
        $query = "SELECT * FROM utente ORDER BY nome";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEventById($id){
        $query = "SELECT idevento, titoloevento, imgevento, testoevento, dataevento, organizzatore, luogoevento, 
                    prezzo, capienza, anteprimaevento
                    FROM evento, utente WHERE idevento=? AND organizzatore=idutente";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getCategoryById($idcategory){
        $stmt = $this->db->prepare("SELECT nomecategoria FROM categoria WHERE idcategoria=?");
        $stmt->bind_param('i',$idcategory);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEventByCategory($idcategory){
        $query = "SELECT idevento, titoloevento, imgevento, anteprimaevento, dataevento, organizzatore, testoevento FROM evento, utente, evento_categoria WHERE categoria=? AND organizzatore=idutente AND idevento=evento";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$idcategory);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEventByCategoryArchivio($idcategory, $idutente){
        $query = "SELECT idevento, titoloevento, imgevento, anteprimaevento, dataevento, organizzatore 
                    FROM evento E, utente U, evento_categoria EC, evento_utente EU WHERE categoria=? AND EU.partecipante != ? 
                    AND E.idevento=EU.evento AND EC.evento = E.idevento";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idcategory, $idutente);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }
    public function getEventByCategoryOfPromoter($idcategory, $idpromoter){
        $query = "SELECT idevento, titoloevento, imgevento, anteprimaevento, dataevento, organizzatore FROM evento, utente, evento_categoria WHERE categoria=? AND organizzatore=? AND organizzatore=idutente AND idevento=evento";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idcategory, $idpromoter);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getMyEventByCategory($idcategory, $iduser){
        $query = "SELECT idevento, titoloevento, imgevento, anteprimaevento, dataevento, organizzatore FROM evento E, evento_utente EU, evento_categoria EC WHERE EC.categoria=? AND E.idevento=EC.evento AND EU.evento=E.idevento AND EU.partecipante=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idcategory, $iduser);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }
    
    public function checkActive($email){
        $query = "SELECT attivo FROM utente WHERE email=? ";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }  

    public function checkLogin($username, $password){
        $query = "SELECT salt FROM utente WHERE email=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('s', $username); // esegue il bind del parametro '$email'.
        $stmt->execute(); // esegue la query appena creata.
        $salt = $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0]["salt"]; 
        $password1 = hash('sha512', $password.$salt);
        $query = "SELECT idutente, email, nome, ruolo FROM utente WHERE attivo=1 AND email=? AND password=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ss',$username, $password1);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }  

    public function checkSignUp($email){
        $query = "SELECT * FROM utente WHERE email = ? ";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEventByPromoterId($id){
        $query = "SELECT idevento, titoloevento, imgevento FROM evento WHERE organizzatore=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getInfobyUserId($id){
        $query = "SELECT email, password, nome, cognome, data_nascita, indirizzo, stato, citta, numero_telefono, ruolo FROM utente WHERE idutente=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getEventByUserId($id){
        $query = "SELECT idevento, titoloevento, imgevento FROM evento, evento_utente WHERE partecipante=? AND evento = idevento";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

      /************ acquisti - carrello *******************/

      public function getCarrelloUser($idUtente){
        $query = "SELECT idcarrello FROM carrello WHERE utente = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i', $idUtente);
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    //eventi di un user nel carrello
    public function getEventsInTheCart($idUtente){
        $query = "SELECT idevento, titoloevento, dataevento, luogoevento, prezzo, capienza FROM carrello C, carrello_evento CE, evento E WHERE C.utente = ? AND C.idcarrello = CE.carrello AND CE.evento = E.idEvento";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i', $idUtente);
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getNumeroPartecipanti($idevento){
        $query = "SELECT COUNT(*) AS NumPar FROM evento_utente WHERE evento = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i', $idevento);
        $stmt->execute();
        $result = $stmt->get_result();
        
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function acquistaEvento($idevento, $idutente){
        $query = "INSERT INTO evento_utente (evento, partecipante) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idevento, $idutente);
        $stmt->execute();
    }

    public function togliEventoSulCarrello($idcarrello, $idevento){
        var_dump($idevento);
        $query = "DELETE FROM carrello_evento WHERE carrello = ? AND evento = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idcarrello, $idevento);
        $stmt->execute();
    }

    public function addEventToCart($idcarrello, $idevento){
        $query = "INSERT INTO carrello_evento (carrello, evento) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idcarrello, $idevento);
        $stmt->execute();
    }



    /*********** fine acquisti-carrello ***********/
    
    public function getUserEvents($id){
        $query = "SELECT evento FROM evento_utente, evento WHERE titoloevento = evento AND partecipante = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result;
    }

    public function getUserEventInfo($id){
        $query = "SELECT titoloevento, dataevento, luogoevento, prezzo FROM evento, evento_utente WHERE titoloevento = evento AND partecipante = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function insertNewUser(){
        $name = $_POST["inputName"];
        $surname =$_POST["inputSurname"];
        $tel = $_POST["inputTelefono"];
        $date = $_POST["inputBirthday"];
        $email = $_POST["inputEmail"];
        $password = $_POST["inputPassword"];
        $address = $_POST["inputAddress"];
        $city = $_POST["inputCity"];
        $state = $_POST["inputState"];
        $user = $_POST["radios-input"];
    
        if ($user == 'U'){
            $stato = 1;
        } else {
            $stato = 0;            
        }
        // Crea una chiave casuale
        $random_salt = hash('sha512', uniqid(mt_rand(1, mt_getrandmax()), true));
        // Crea una password usando la chiave appena creata.
        $password1 = hash('sha512', $password.$random_salt);
        // Inserisci a questo punto il codice SQL per eseguire la INSERT nel tuo database
        // Assicurati di usare statement SQL 'prepared'.
        
        $query = "INSERT INTO `utente` (`idutente`, `email`, `password`, `salt`, `nome`, `cognome`, `data_nascita`, 
        `indirizzo`, `stato`, `citta`, `numero_telefono`, `ruolo`, `attivo`) VALUES (NULL, ?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('sssssssssisi', $email, $password1, $random_salt, $name, $surname, $date, $address, $state,  $city, $tel, $user, $stato);
        $stmt -> execute();

        /* invio notifica automatica nel caso di registrazione di un amministratore o organizzatore */
        if ($user!='U'){
            $this->insertNotificaAdmin(1,6,1);
        }
    }


     /*************** funzioni per le notifiche  ****************************/

     public function getNotifichePerEventi($id){
        $query = "SELECT testo, titoloevento
                  FROM notifica N, evento_utente EU, evento_notifica EN, evento E
                  WHERE EU.partecipante = ? AND EU.evento = EN.evento AND notifica=N.idnotifica AND EU.evento=E.idEvento
                  ORDER BY N.idnotifica DESC";

        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    /* restituisce: datanotifica, testo, nome.
    nome è del mittente*/
    public function getNotificheSoloPerTe($id){
        $query = "SELECT testo, nome, email
                  FROM notifica N, utente_notifica UN, utente U 
                  WHERE UN.destinatario = ? AND UN.notifica = N.idnotifica AND UN.mittente = U.idutente 
                  ORDER BY N.idnotifica DESC";
                  
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$id);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function getLastIdNotifica(){
        $query = "SELECT idnotifica FROM notifica ORDER BY idnotifica DESC LIMIT 1";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function insertNotifica($testo){
        $query = "INSERT INTO notifica (testo) VALUES (?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('s',$testo);
        $stmt->execute();
        return $stmt->insert_id;
    }

    public function insertNotificaUtente($idnotifica, $destinatario, $mittente){
        $query = "INSERT INTO utente_notifica (destinatario, notifica, mittente) VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('iii', $destinatario, $idnotifica, $mittente);
        $stmt->execute();
    }

    public function insertNotificaEvento($idnotifica, $idevento){
        //$this->insertNotifica($testo);
        $idLastNotifica = $this->getLastIdNotifica();
        
        $query = "INSERT INTO evento_notifica (evento, notifica) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii', $idevento, $idnotifica);
        $stmt->execute();
    }

    public function insertNotificaAdmin($destinatario, $idnotifica, $mittente){
        $query = "INSERT INTO utente_notifica (destinatario, notifica, mittente) VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('iii', $destinatario, $idnotifica, $mittente);
        $stmt->execute();
    }
    /*
    public function getPostByIdAndAuthor($id, $idauthor){
        $query = "SELECT idarticolo, anteprimaarticolo, titoloarticolo, imgarticolo, testoarticolo, dataarticolo, (SELECT GROUP_CONCAT(categoria) FROM articolo_ha_categoria WHERE articolo=idarticolo GROUP BY articolo) as categorie FROM articolo WHERE idarticolo=? AND autore=?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$id, $idauthor);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function insertArticle($titoloarticolo, $testoarticolo, $anteprimaarticolo, $dataarticolo, $imgarticolo, $autore){
        $query = "INSERT INTO articolo (titoloarticolo, testoarticolo, anteprimaarticolo, dataarticolo, imgarticolo, autore) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('sssssi',$titoloarticolo, $testoarticolo, $anteprimaarticolo, $dataarticolo, $imgarticolo, $autore);
        $stmt->execute();
        
        return $stmt->insert_id;
    }

    public function updateArticleOfAuthor($idarticolo, $titoloarticolo, $testoarticolo, $anteprimaarticolo, $imgarticolo, $autore){
        $query = "UPDATE articolo SET titoloarticolo = ?, testoarticolo = ?, anteprimaarticolo = ?, imgarticolo = ? WHERE idarticolo = ? AND autore = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ssssii',$titoloarticolo, $testoarticolo, $anteprimaarticolo, $imgarticolo, $idarticolo, $autore);
        
        return $stmt->execute();
    }

    public function deleteArticleOfAuthor($idarticolo, $autore){
        $query = "DELETE FROM articolo WHERE idarticolo = ? AND autore = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$idarticolo, $autore);
        $stmt->execute();
        var_dump($stmt->error);
        return true;
    }

    public function insertCategoryOfArticle($articolo, $categoria){
        $query = "INSERT INTO articolo_ha_categoria (articolo, categoria) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$articolo, $categoria);
        return $stmt->execute();
    }

    public function deleteCategoryOfArticle($articolo, $categoria){
        $query = "DELETE FROM articolo_ha_categoria WHERE articolo = ? AND categoria = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('ii',$articolo, $categoria);
        return $stmt->execute();
    }

    public function deleteCategoriesOfArticle($articolo){
        $query = "DELETE FROM articolo_ha_categoria WHERE articolo = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i',$articolo);
        return $stmt->execute();
    }

    public function getAuthors(){
        $query = "SELECT username, nome, GROUP_CONCAT(DISTINCT nomecategoria) as argomenti FROM categoria, articolo, autore, articolo_ha_categoria WHERE idarticolo=articolo AND categoria=idcategoria AND autore=idautore AND attivo=1 GROUP BY username, nome";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }
    */
}