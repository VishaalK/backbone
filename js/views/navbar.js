var NavBarView = Backbone.View.extend({
	initialize: function() {
		this.render();
		//this.bindEvents();
		

	},

	events: {
		'click #searchBtn'			: 'setBusy',
		'click #searchBtnWaiting'	: 'alert'
	},

	alert: function() {
		alert("Other ways of doing this!");
	},

	setBusy: function() {
		$('#searchBtn').toggleClass('hidden');
		$('#searchBtnWaiting').toggleClass('hidden');
	},


	render: function() {
		var template = _.template( $("#NavBarTemplate").html(), {});
		this.$el.html( template );
	},

	bindEvents: function() {
		var view = this;

		$("#searchBtn").on('click', function() {
			$('#searchBtn').toggleClass('hidden');
			$('#searchBtnWaiting').toggleClass('hidden');
		});
	}


});

var navbar_view = new NavBarView({ el: $("#NavBarContainer") });