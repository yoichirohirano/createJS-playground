!function(l){function e(e){for(var t,n,r=e[0],i=e[1],a=e[2],o=0,u=[];o<r.length;o++)n=r[o],c[n]&&u.push(c[n][0]),c[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(f&&f(e);u.length;)u.shift()();return d.push.apply(d,a||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(d.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},c={0:0},d=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=r;d.push([3,1]),s()}([,,,function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var r=n(1),i=n.n(r),a=n(2),o=n.n(a),u=n(0),l=(n(5),n(6),function(){function e(){i()(this,e),this.stage=new u.Stage("canvas"),this.stage.addChild(e.getFilledEllipse()),this.stage.addChild(e.getRect()),this.stage.addChild(e.getStar()),this.stage.addChild(e.getText("TEST")),this.stage.addChild(e.getImage("https://www.cssdesignawards.com/imgs/cssda-monogram-wotd.svg")),this.stage.update()}return o()(e,null,[{key:"getFilledEllipse",value:function(){var e=new u.Shape;return e.graphics.beginFill("#ff0000"),e.graphics.drawCircle(0,0,100),e.x=200,e.y=200,e.scaleX=.5,e.rotation=45,e.alpha=.5,e}},{key:"getRect",value:function(){var e=new u.Shape;return e.graphics.beginStroke("#00ff00"),e.graphics.setStrokeStyle(5),e.graphics.drawRect(0,0,200,100),e.x=400,e.y=100,e}},{key:"getStar",value:function(){var e=new u.Shape;return e.graphics.beginFill("#0000ff"),e.graphics.drawPolyStar(0,0,75,5,.6,-90),e.x=800,e.y=100,e}},{key:"getText",value:function(e){return new u.Text(e,"24px serif","#000000")}},{key:"getImage",value:function(e){var t=new u.Bitmap(e);return t.regX=100,t.regY=100,t}}]),e}());window.addEventListener("DOMContentLoaded",function(){window.DEV_ENV_MODEL=window.DEV_ENV_MODEL||{},window.DEV_ENV_MODEL.INDEX=window.DEV_ENV_MODEL.INDEX||new l})},,function(e,t,n){}]);