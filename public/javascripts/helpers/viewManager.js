app.utils.viewManager = (function() {
    var _regions = {};

    return {
        // register a region
        // name: a unique name for this region
        // selector: a DOM selector for this region
        addRegion: function(name, selector) {
            _regions[name] = {
                el: $(selector)
            };
        },

        // render a new view in a region
        // region: the name of the region
        // newView: the Backbone view object to render
        swap: function(region, newView) {
            region = _regions[region];

            if (!region) {
                return false;
            }

            // if a current view exists in region, unset and remove it
            if (region.view) {
                region.view.unset();
            }

            // set the new view as current for the region
            region.view = newView;

            // render the new view into the region
            region.el.empty().html(newView.render().el);
        }
    };
})();