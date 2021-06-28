define([
    'uiComponent'
], function(
    Component
) {
    'use strict';


    return Component.extend({

        // Properties could be like variables of the component
        defaults: {
            message: 'Free Shipping Message'
        },

        // This is called when the component is initialized
        initialize: function() {

            // Call the initialize function of the Component class. Important to have the core functionality
            this._super();
            console.log('free shipping banner has been loaded');

            console.log(this.message);

        }
    });

})
