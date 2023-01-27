const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    server.route('/signup')
        .post(controller.sign_user)

    server.route('/login')
        .get(controller.log_user)


    server.route('/user/:id') //modifica dell'utente, quando ad esempio iscrizione a evento
        .put(controller.update_user)

    server.route('/myinscriptions/:id') //Leggere tutte le iscrizioni di uno specifico utente passando l'id come parametro
        .get(controller.read_myinscriptions)

    //Leggere tutti gli eventi organizzati da uno specifico utente passando il suo id come parametro
    server.route('/myorganizations/:id')
        .get(controller.read_myorganizations)
}