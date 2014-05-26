var Router = Backbone.Router.extend({
    routes: {
        "help"          :   "help",
        "projects/:id"  :   "getProject"
    },

    help: function() {
        alert('help me?');
    },

    getProject: function(id) {
        alert(id);
    }
});

var router = new Router();


