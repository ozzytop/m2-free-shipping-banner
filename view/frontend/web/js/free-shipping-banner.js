define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'underscore'
], function(
    ko,
    Component,
    customerData,
    _
) {
    'use strict';


    return Component.extend({

        // Properties could be like variables of the component
        defaults: {
            subtotal: 0,
            message: 'Free Shipping Message',
            template: 'Ozzytop_FreeShippingPromo/free-shipping-banner',
            tracks: {
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

            cart.subscribe(function(){
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


        },
        formatCurrency: function(value) {
            return '$' + value.toFixed(2);
            //without tracks:
            //return '$' + value().toFixed(2);
        }

    });

})
