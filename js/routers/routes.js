var Router = Backbone.Router.extend({
    routes: {
        "projects/:id"  :   "show"
    },

    initialize: function(options) {
        this.projectList = options.projectList;
    },

    show: function(id) {
        alert(id);
    }
});

var router = new Router();


