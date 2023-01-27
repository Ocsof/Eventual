const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/events')
        .get(controller.read_tenMostRecentEvents)
        .post(controller.new_event) //solo admin e organizzatori

    server.route('/allevents')
        .get(controller.read_allevents)

    server.route('/events/:id')
        .get(controller.read_event)
        .put(controller.update_event) //quando l'evento cambia, oppure a seguito di una iscrizione
        .delete(controller.delete_event); //solo admin e organizzatori

    server.route('/events/:category')
        .get(controller.read_eventsByCategory)


    server.route('/events/myusers')
        .get(controller.read_myUsers)

}