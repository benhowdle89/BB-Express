window.app = {
	views: {},
	collections: {},
	models: {},
	routers: {},
	utils: {},
	init: function() {
		app.router = new app.routers.app();
		Backbone.history.start();
	}
};

$(document).ready(function() {
	app.init();
});