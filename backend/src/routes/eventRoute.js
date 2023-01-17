const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/new_event')
        .post(controller.new_event)

    server.route('/events/:category') //todo: cambiare sicuramente l'url
        .get(controller.read_eventsByCategory)

    server.route('/home')
        .get(controller.read_tenMostRecentEvents)

}