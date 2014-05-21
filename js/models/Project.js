Project = Backbone.Model.extend({ 

	// obj.get("key") and obj.key are different!

	// but obj[key] and obj.key are the same !

	urlRoot: 'project',
	defaults: {
		name : "Dan",
		date : new Date(),
		maxSignups: 5,
	},	

	validate: function(attributes) {
		if (attributes.name === "") {
			return "Name cannot be empty!";
		}
	},

	initialize: function() {
		alert("A project was just created!");
	},

	/**
	 * bind events that might happen to this specific Model, might better be bound as the dialogs 
	 * @author vishaalk
	 */
	bindEvents: function() {
		// alert of any changes
		this.on("change:name", function (model) {
			alert("Changed name to " + model.get("name"));
		});

		// alert on invalid
		this.on("invalid", function(model, error) {
			alert(error);
		});
	}

});

var proj = new Project();

proj.bindEvents();

proj.set({ name: "" });

proj.save({}, { 
	success: function() { alert('success!'); },
	error: function() { alert('error!'); }
});

