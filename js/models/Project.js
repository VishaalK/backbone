Project = Backbone.Model.extend({ 

	// obj.get("key") and obj.key are different!

	// but obj[key] and obj.key are the same !

	urlRoot: 'project',
	defaults: {
		name : "Dan",
		date : new Date(),
		maxSignups: 5,
	},	

	initialize: function() {
		alert("A project was just created!");
	},

	/**
	 * bind events that might happen to this specific Model, might better be bound as the dialogs 
	 * @author vishaalk
	 */
	bindEvents: function() {
		this.on("change:name", function (model) {
			alert("Changed name to " + model.get("name"));
		});
	}

});

var proj = new Project();
proj.bindEvents();
proj.save({}, { 
	success: function() { alert('success!'); },
	error: function() { alert('error!'); }
});

