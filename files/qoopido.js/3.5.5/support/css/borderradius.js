/*!
* Qoopido.js library v3.5.5, 2014-9-30
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(r){window.qoopido.register("support/css/borderradius",r,["../../support"])}(function(r){"use strict";return r.support.addTest("/css/borderradius",function(s){r.support.supportsCssProperty("border-radius")?s.resolve(r.support.getCssProperty("border-radius")):s.reject()})});