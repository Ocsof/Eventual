function stampaEventi(eventi){
    let result = "";

    for(let i=0; i < eventi.length; i++){
        let evento = `
        <article class="bg-white border mt-4 mb-4">
            <header>
                <div class="text-center">
                    <img class="img-fluid text-center" src="${eventi[i]["imgevento"]}" alt="" />
                </div>
                <h2 class="px-5"> ${eventi[i]["titoloevento"]}</h2>
                <p class="px-5"> ${eventi[i]["nome"]} - ${eventi[i]["dataevento"]}</p>
            </header>
            <section class="px-5">
                <p>${eventi[i]["anteprimaevento"]}</p>
            </section>
            <footer class="text-right pb-4 px-5">
                <a class="btn btn-light" href="evento.php?id=${eventi[i]["idevento"]}">Leggi tutto</a>
            </footer>
        </article>
        `;
        result += evento;
    }
    return result;
}



/*

function stampaFormForgotPassword() {
    let result = `
    <form class="bg-white border mt-4 mb-4 px-5 py-4">
        <h2>Recupero password</h2>
        <div class="form-group row text-center">
            <label for="telephonenumber" class="col-sm-6 col-md-5 col-lg-6">Inserisci il numero di telefono con il quale ti sei registrato</label>
            <input type="telephonenumber" class="form-control col-md-3 offset-md-3" id="telephonenumber" aria-describedby="emailHelp" placeholder="Numero di telefono">
        </div>
        <div class="form-group text-right">
            <button type="submit" class="btn btn-light">Invia</button> <!--LEGGI SOTTO-->
        </div>
        <!--fare in modo che all'invio si venga reindirizzati in una pagina nuova se il numero è corretto, altrimenti messaggio di errore-->
        <p><a class="nav-link" href="#">Clicca qui se non sei ancora iscritto!</a></p>
    </form> `;
    
    return result;
}

*/

function updateContent(page){
    let content;
    switch(page){
        case "Home":
            $.getJSON("api-evento.php?page=home", function(data){
                content = stampaEventi(data);
                $("main").html(content);
            });
            break;
        case "Archivio":
            $.getJSON("api-evento.php?page=archivio", function(data){
                content = stampaEventi(data);
                $("main").html(content);
            });
            break;
        /*
        case "Non ricordo la mia password.":
            console.log("ok");
            content = stampaFormForgotPassword();
            $("main").html(content);
        break;
        case "Clicca qui se non sei ancora iscritto!":
            console.log("ok");
            content = stampaFormSignUp();
            $("main").html(content);
        break;
        case "Sei già registrato?":
            console.log("ok");
            content = stampaFormLogin();
            $("main").html(content);
        break;
        */
    }
   
}