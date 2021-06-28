define([
    'uiComponent'
], function(
    Component
) {
    'use strict';


    return Component.extend({

        // This is called when the component is initialized
        initialize: function() {

            // call the initialize function of the Component class. Imporntant to have the core functionality
            this._super();
            console.log('free shipping banner has been loaded');

        }
    });

})
