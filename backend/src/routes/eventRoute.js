const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/events')
        .post(controller.new_event)

    server.route('/events/:category')
        .get(controller.read_eventsByCategory)

}