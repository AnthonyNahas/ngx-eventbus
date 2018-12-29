<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-eventbus/master/demo/src/assets/logo.svg">
</p>

# ngx-eventbus - ngx-eventbus is an angular open source library that simplifies the communication between angular directives and components - reuse the events instead of duplicating the code &lt;3 - Angular V7 supported

[![npm version](https://badge.fury.io/js/ngx-eventbus.svg)](https://badge.fury.io/js/ngx-eventbus),
[![Build Status](https://travis-ci.org/anthonynahas/ngx-eventbus.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-eventbus)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-eventbus/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-eventbus?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-eventbus/status.svg)](https://david-dm.org/anthonynahas/ngx-eventbus)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-eventbus/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-eventbus#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-eventbus.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-eventbus

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-eventbus` via:
```shell
npm install --save ngx-eventbus
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-eventbus`:
```js
map: {
  'ngx-eventbus': 'node_modules/ngx-eventbus/bundles/ngx-eventbus.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-eventbus';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-eventbus';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-eventbus';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

