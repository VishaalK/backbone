var Router = Backbone.Router.extend({
    routes: {
        ''              :   'index',
        'projects/:id'  :   'show'
    },
    initialize: function() {
        alert('heyo');
    },
    start: function() {
        Backbone.history.start({ pushState : true });
    },

    index: function() {
        alert('index');
    },
    
    show: function(id) {
        alert(id);
    }
});

var router = new Router();

router.start();
