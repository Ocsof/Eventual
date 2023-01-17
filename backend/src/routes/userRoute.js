const controller = require('../controllers/userController.js');

module.exports =  (server)=>{
    server.route('/signup')
        .post(controller.create_user)

    server.route('/login')
        .get(controller.log_user)
}