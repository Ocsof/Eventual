const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    //esempio di richiesta http, tutti i campi van messi nel body ----> localhost:8082/signup
    server.route('/signup')
        .post(controller.sign_user)

    //esempio di richiesta http, nel body van messi solo email e password ----> localhost:8082/login
    server.route('/login')
        .post(controller.log_user)

    //esempio di richiesta http: id user come parametro, tutti gli altri campi nel body
    // ----> localhost:8082/user/63d52785ded7e6aac542fe64
    server.route('/user/:_id') //modifica dell'utente, quando ad esempio iscrizione a evento
        .put(controller.update_user)
        .delete(controller.delete_user) //solo admin, gli admin non possono essere eliminati, nel body http non ci va niente!!

    server.route('/users')
        .get(controller.read_allusers)

    //esempio di richiesta http: id user come parametro, tutti gli altri campi nel body
    // ----> localhost:8082/myinscriptions/63d52785ded7e6aac542fe64
    server.route('/myinscriptions/:_id') //Leggere tutte le iscrizioni di uno specifico utente passando l'id come parametro
        .get(controller.read_myinscriptions)

    //esempio di richiesta http: id user come parametro, tutti gli altri campi nel body
    // ----> localhost:8082/myorganizations/63d52785ded7e6aac542fe64
    server.route('/myorganizations/:_id') //Leggere tutti gli eventi organizzati da uno specifico utente passando il suo id come parametro
        .get(controller.read_myorganizations)
}