const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/')
        .get(controller.update_hit)

}