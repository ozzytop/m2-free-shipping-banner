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




