const controller = require('../controllers/eventController');

module.exports =  (server)=>{
    server.route('/events')
        .get(controller.read_tenMostRecentEvents)
        .post(controller.new_event) //solo admin e organizzatori

    server.route('/allevents')
        .get(controller.read_allevents)


    server.route('/events/:_id')
        //esempio di richiesta http: id user come parametro, tutti gli altri campi nel body
        // ----> localhost:8082/events/63d52785ded7e6aac542fe64
        .get(controller.read_event)
        .put(controller.update_event) //quando l'evento cambia, oppure a seguito di una iscrizione
        .delete(controller.delete_event); //solo admin e organizzatori, nel body http non ci va niente!!

    // ----> localhost:8082/category/party
    server.route('/categories/:category')
        .get(controller.read_eventsByCategory)


    server.route('/myusers/:_id')
        .get(controller.read_myUsers)

}