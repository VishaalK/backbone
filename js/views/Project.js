var ProjectView = Backbone.View.extend({
	initialize: function() {
		this.render();

	},

	render: function() {
		//second value is an options hash
		var template = _.template( $("#ProjectTemplate").html(), {});
       	// Load the compiled HTML into the Backbone "el"
       	// all views come with an $el
       	// defaulted to an empty div
       	// so we must bind it when we initialize it
        this.$el.html( template );
	},


});

var projectView = new ProjectView({ el :  $("#ProjectContainer") });