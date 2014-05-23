var ProjectView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	events: { 
		"click #searchBtn" : "setBusy"
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


	setBusy: function() {
		alert('fjajfsajd');
		$("#searchBtn").addClass('hidden');
		$("#searchBtnWaiting").removeClass('hidden');
	}

});

var projectView = new ProjectView({ el :  $("#ProjectContainer") });