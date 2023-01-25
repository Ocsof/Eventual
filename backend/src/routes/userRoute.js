const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    server.route('/signup')
        .post(controller.sign_user)

    server.route('/login')
        .get(controller.log_user)

    server.route('/myevents')
        .get(controller.read_myEvent)
}