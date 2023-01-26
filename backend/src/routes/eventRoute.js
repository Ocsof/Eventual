const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/events')
        .get(controller.read_tenMostRecentEvents)
        .post(controller.new_event)

    server.route('/events/:id')
        .get(controller.read_event)
        .put(controller.update_event)
        .delete(controller.delete_event); //solo admin e organizzatori

    server.route('/events/:category') //todo: cambiare sicuramente l'url
        .get(controller.read_eventsByCategory)


    server.route('/myusers')
        .get(controller.read_myUsers)

}