app.collections.users = Backbone.Collection.extend({
	model: app.models.user,
	url: function() {
		return '/users';
	}
});