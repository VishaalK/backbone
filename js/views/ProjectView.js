// The Project has to be loaded into JS prior to this
var ProjectView = Backbone.View.extend({
	className: 'row',

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	events: {
		'dblclick .well' : 'alert'
	},

	alert: function() {
		alert('clicky');
	},

	template: _.template('<div class="col-md-6 col-md-offset-3 well"><h4><%= title %><a class="pull-right" href="projects/1">Heyo</a></h4><p><%= description %></p></div>'),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});
