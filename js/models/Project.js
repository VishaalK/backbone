var Project = Backbone.Model.extend({
	defaults: {
		title: "Ann Arbor District Library Tutoring",
		description: "Demon Children"
	},

	//eventually do synchronization by saving to /projects/:id
});

var project = new Project();