app.routers.app = Backbone.Router.extend({

	routes: {
		'': 'home',
		'/': 'home',
		'home': 'home'
	},

	initialize: function() {
		this.registerStatic();
	},

	registerStatic: function() {
		app.utils.viewManager.addRegion('content', '#jsRegion-content');
	},

	home: function() {
		app.users = new app.collections.users();
		app.users.fetch({
			success: function() {
				app.utils.viewManager.swap('content', new app.views.home());
			}
		});
	}

});