# M2 Free Shipping Banner


Magento 2 module. It shows a banner on the header if you are eligible to Free Shipping.

To be eligible your cart should summarize more than 100$.

Main Purpose: refresh Ui Components concepts.

### Ui components Debugging

Type in the console: 

```require('uiRegistry').get(function(uiItem){console.log(uiItem)});```

or with arrow function:

```require('uiRegistry').get( uiItem => {console.log(uiItem)});```

Some important attributes:
name, parentName

Naming convention: namespace(ns) + parent ui + name of specific ui component

Check the names:

```require('uiRegistry').get( uiItem => {console.log(uiItem.name)});```

Check specific uiComponent:

```require('uiRegistry').get('free-shipping-banner');```

Set properties:

as string
```require('uiRegistry').get('free-shipping-banner').set('hello','world');```

as object
```require('uiRegistry').get('free-shipping-banner').set('welcome',{ to: {my: 'world'} });```

Get Property:

```require('uiRegistry').get('free-shipping-banner').get('hello');```

Remove Property

speficic property
```require('uiRegistry').get('free-shipping-banner').remove('welcome.to.my');```

```require('uiRegistry').get('free-shipping-banner').remove('welcome');```

Change value of property:

```require('uiRegistry').get('free-shipping-banner').subtotal(40);```


## Tracks instead adding ko observables

When you use a UiCompoenent, you can set the properties as observables calling ko. You will 
have to add ko as a dependency and convert all the properties in functions.

Instead doing that, we can use "tracks" as a properrty and add each property that we want to 
be an observable. And there is no need to convert the observables as functions around the component.

Track is a sintactic sugar, provided by knockout plugin called ES5
