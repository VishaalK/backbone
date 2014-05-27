var ProjectListView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addOne);
	},

	render: function() {
		this.collection.forEach(this.addOne, this);
		return this;
	},

	addOne: function(proj) {
		var projView = new ProjectView({ model: proj });
		console.log(projView.el);
		projView.render();
		this.$el.append(projView.el)
	}

});

var projectListView = new ProjectListView({ collection: projectList, el : $('#ProjectContainer') });
projectListView.addOne(project);