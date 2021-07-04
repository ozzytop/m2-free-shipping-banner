define([
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'underscore',
    'knockout'
], function(
    Component,
    customerData,
    _,
    ko
) {
    'use strict';


    return Component.extend({

        // Properties could be like variables of the component
        defaults: {
            freeShippingThreshold: 100,
            subtotal: 0,
            // the second $ sign, indicates the current object
            //message: `${ $.messageDefault }`,
            // it doens't work with template literals the following line
            //message: '${ $.messageDefault }',
            template: 'Ozzytop_FreeShippingPromo/free-shipping-banner',
            tracks: {
            //    message:true,
                subtotal:true
            }
            //without tracks:
            //subtotal: ko.observable(33.00)

        },

        // This is called when the component is initialized
        initialize: function() {

            // Call the initialize function of the Component class. Important to have the core functionality
            this._super();
            var self = this;
            var cart = customerData.get('cart');

            customerData.getInitCustomerData().done(function(){
                if(!_.isEmpty(cart()) && !_.isUndefined(cart().subtotalAmount)){
                    self.subtotal = parseFloat(cart().subtotalAmount);
                }

            });

            cart.subscribe(function(cart){
                if(!_.isEmpty(cart) && !_.isUndefined(cart.subtotalAmount)){
                    self.subtotal = parseFloat(cart.subtotalAmount);
                }
            })

            //window.setTimeout(function(){

                //without tracks:
                //self.subtotal(35.00);

                //with tracks:
            //    self.subtotal = 35.00;

            //}, 2000);

            // A computed property reacts to any change to the variable within this component.
            // Este callback de computed, va a ser ejecutado cada vez que la variable reactiva dentro del callback
            // sea modificada
            self.message = ko.computed(function() {

                // subtotal == 0, return messageDefault
                if(_.isUndefined(self.subtotal) || self.subtotal === 0) {
                    return self.messageDefault;
                }

                // subtotal > 0 or < 100, return messageItemsInCart
                if(self.subtotal > 0 &&  self.subtotal < self.freeShippingThreshold) {
                    var subtotalRemaining = self.freeShippingThreshold - self.subtotal;
                    var formattedSubtotalRemaining = self.formatCurrency(subtotalRemaining);

                    // we will replace $XX.XX

                    return self.messageItemsInCart.replace('$XX.XX', formattedSubtotalRemaining);
                }

                // subtotal > 100, return message freeShipping
                if(self.subtotal > self.freeShippingThreshold) {
                    return self.messageFreeShipping;
                }

            })

        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
            //without tracks:
            //return '$' + value().toFixed(2);
        }

    });

})
