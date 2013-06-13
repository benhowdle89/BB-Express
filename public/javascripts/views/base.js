app.views.base = Backbone.View.extend({

    // clean up before removing the view
    unset: function() {
        // turn off all bindings on the view
        this.off();

        // remove self from the page
        this.remove();
    },

    render: function() {
        if (this.template) {
            var template = Handlebars.compile(this.template);
            this.$el.html(template());
        }
        return this;
    }

});