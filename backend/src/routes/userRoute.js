const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    server.route('/signup')
        .get(controller.sign_user)

    server.route('/login')
        .get(controller.log_user)

    server.route('/myevents')
        .get(controller.read_myEvent)
}