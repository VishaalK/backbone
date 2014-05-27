var Router = Backbone.Router.extend({
    routes: {
        ""              :    "index",
        "projects/:id"  :    "show"
    },

    index: function() {
        alert('index');
    },

    initialize: function(options) {
        alert('initialized');
        this.projectList = options.projectList;
    },

    show: function(id) {
        alert(id);
    }
});

Backbone.history.start({ pushState : true });
var router = new Router({ projectList : projectList });


