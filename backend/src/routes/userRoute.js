const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    server.route('/signup')
        .post(controller.sign_user)

    server.route('/login')
        .get(controller.log_user)

    server.route('/user')
        .put(controller.update_user) //modifica dell'utente, quando ad esempio iscrizione a evento


    server.route('/myinscriptions')
        .get(controller.read_myEvent)
}