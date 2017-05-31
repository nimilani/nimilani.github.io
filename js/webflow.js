/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
(function () {
  'use strict';

  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

  /*!
   * tram.js v0.8.2-global
   * Cross-browser CSS3 transitions in JavaScript
   * https://github.com/bkwld/tram
   * MIT License
   */
  window.tram=function(a){function b(a,b){var c=new M.Bare;return c.init(a,b)}function c(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function d(a){var b=parseInt(a.slice(1),16),c=b>>16&255,d=b>>8&255,e=255&b;return[c,d,e]}function e(a,b,c){return"#"+(1<<24|a<<16|b<<8|c).toString(16).slice(1)}function f(){}function g(a,b){j("Type warning: Expected: ["+a+"] Got: ["+typeof b+"] "+b)}function h(a,b,c){j("Units do not match ["+a+"]: "+b+", "+c)}function i(a,b,c){if(void 0!==b&&(c=b),void 0===a)return c;var d=c;return $.test(a)||!_.test(a)?d=parseInt(a,10):_.test(a)&&(d=1e3*parseFloat(a)),0>d&&(d=0),d===d?d:c}function j(a){U.debug&&window&&window.console.warn(a)}function k(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}var l=function(a,b,c){function d(a){return"object"==typeof a}function e(a){return"function"==typeof a}function f(){}function g(h,i){function j(){var a=new k;return e(a.init)&&a.init.apply(a,arguments),a}function k(){}i===c&&(i=h,h=Object),j.Bare=k;var l,m=f[a]=h[a],n=k[a]=j[a]=new f;return n.constructor=j,j.mixin=function(b){return k[a]=j[a]=g(j,b)[a],j},j.open=function(a){if(l={},e(a)?l=a.call(j,n,m,j,h):d(a)&&(l=a),d(l))for(var c in l)b.call(l,c)&&(n[c]=l[c]);return e(n.init)||(n.init=h),j},j.open(i)}return g}("prototype",{}.hasOwnProperty),m={ease:["ease",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-2.75*f*e+11*e*e+-15.5*f+8*e+.25*a)}],"ease-in":["ease-in",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-1*f*e+3*e*e+-3*f+2*e)}],"ease-out":["ease-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(.3*f*e+-1.6*e*e+2.2*f+-1.8*e+1.9*a)}],"ease-in-out":["ease-in-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(2*f*e+-5*e*e+2*f+2*e)}],linear:["linear",function(a,b,c,d){return c*a/d+b}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(a,b,c,d){return c*(a/=d)*a+b}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(a,b,c,d){return-c*(a/=d)*(a-2)+b}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(a,b,c,d){return c*(a/=d)*a*a+b}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(a,b,c,d){return c*(a/=d)*a*a*a+b}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(a,b,c,d){return c*(a/=d)*a*a*a*a+b}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(a,b,c,d){return 0===a?b:a===d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}]},n={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},o=document,p=window,q="bkwld-tram",r=/[\-\.0-9]/g,s=/[A-Z]/,t="number",u=/^(rgb|#)/,v=/(em|cm|mm|in|pt|pc|px)$/,w=/(em|cm|mm|in|pt|pc|px|%)$/,x=/(deg|rad|turn)$/,y="unitless",z=/(all|none) 0s ease 0s/,A=/^(width|height)$/,B=" ",C=o.createElement("a"),D=["Webkit","Moz","O","ms"],E=["-webkit-","-moz-","-o-","-ms-"],F=function(a){if(a in C.style)return{dom:a,css:a};var b,c,d="",e=a.split("-");for(b=0;b<e.length;b++)d+=e[b].charAt(0).toUpperCase()+e[b].slice(1);for(b=0;b<D.length;b++)if(c=D[b]+d,c in C.style)return{dom:c,css:E[b]+a}},G=b.support={bind:Function.prototype.bind,transform:F("transform"),transition:F("transition"),backface:F("backface-visibility"),timing:F("transition-timing-function")};if(G.transition){var H=G.timing.dom;if(C.style[H]=m["ease-in-back"][0],!C.style[H])for(var I in n)m[I][0]=n[I]}var J=b.frame=function(){var a=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return a&&G.bind?a.bind(p):function(a){p.setTimeout(a,16)}}(),K=b.now=function(){var a=p.performance,b=a&&(a.now||a.webkitNow||a.msNow||a.mozNow);return b&&G.bind?b.bind(a):Date.now||function(){return+new Date}}(),L=l(function(b){function d(a,b){var c=k((""+a).split(B)),d=c[0];b=b||{};var e=Y[d];if(!e)return j("Unsupported property: "+d);if(!b.weak||!this.props[d]){var f=e[0],g=this.props[d];return g||(g=this.props[d]=new f.Bare),g.init(this.$el,c,e,b),g}}function e(a,b,c){if(a){var e=typeof a;if(b||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==e&&b)return this.timer=new S({duration:a,context:this,complete:h}),void(this.active=!0);if("string"==e&&b){switch(a){case"hide":o.call(this);break;case"stop":l.call(this);break;case"redraw":p.call(this);break;default:d.call(this,a,c&&c[1])}return h.call(this)}if("function"==e)return void a.call(this,this);if("object"==e){var f=0;u.call(this,a,function(a,b){a.span>f&&(f=a.span),a.stop(),a.animate(b)},function(a){"wait"in a&&(f=i(a.wait,0))}),t.call(this),f>0&&(this.timer=new S({duration:f,context:this}),this.active=!0,b&&(this.timer.complete=h));var g=this,j=!1,k={};J(function(){u.call(g,a,function(a){a.active&&(j=!0,k[a.name]=a.nextStyle)}),j&&g.$el.css(k)})}}}function f(a){a=i(a,0),this.active?this.queue.push({options:a}):(this.timer=new S({duration:a,context:this,complete:h}),this.active=!0)}function g(a){return this.active?(this.queue.push({options:a,args:arguments}),void(this.timer.complete=h)):j("No active transition timer. Use start() or wait() before then().")}function h(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var a=this.queue.shift();e.call(this,a.options,!0,a.args)}}function l(a){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var b;"string"==typeof a?(b={},b[a]=1):b="object"==typeof a&&null!=a?a:this.props,u.call(this,b,v),t.call(this)}function m(a){l.call(this,a),u.call(this,a,w,x)}function n(a){"string"!=typeof a&&(a="block"),this.el.style.display=a}function o(){l.call(this),this.el.style.display="none"}function p(){this.el.offsetHeight}function r(){l.call(this),a.removeData(this.el,q),this.$el=this.el=null}function t(){var a,b,c=[];this.upstream&&c.push(this.upstream);for(a in this.props)b=this.props[a],b.active&&c.push(b.string);c=c.join(","),this.style!==c&&(this.style=c,this.el.style[G.transition.dom]=c)}function u(a,b,e){var f,g,h,i,j=b!==v,k={};for(f in a)h=a[f],f in Z?(k.transform||(k.transform={}),k.transform[f]=h):(s.test(f)&&(f=c(f)),f in Y?k[f]=h:(i||(i={}),i[f]=h));for(f in k){if(h=k[f],g=this.props[f],!g){if(!j)continue;g=d.call(this,f)}b.call(this,g,h)}e&&i&&e.call(this,i)}function v(a){a.stop()}function w(a,b){a.set(b)}function x(a){this.$el.css(a)}function y(a,c){b[a]=function(){return this.children?A.call(this,c,arguments):(this.el&&c.apply(this,arguments),this)}}function A(a,b){var c,d=this.children.length;for(c=0;d>c;c++)a.apply(this.children[c],b);return this}b.init=function(b){if(this.$el=a(b),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,U.keepInherited&&!U.fallback){var c=W(this.el,"transition");c&&!z.test(c)&&(this.upstream=c)}G.backface&&U.hideBackface&&V(this.el,G.backface.css,"hidden")},y("add",d),y("start",e),y("wait",f),y("then",g),y("next",h),y("stop",l),y("set",m),y("show",n),y("hide",o),y("redraw",p),y("destroy",r)}),M=l(L,function(b){function c(b,c){var d=a.data(b,q)||a.data(b,q,new L.Bare);return d.el||d.init(b),c?d.start(c):d}b.init=function(b,d){var e=a(b);if(!e.length)return this;if(1===e.length)return c(e[0],d);var f=[];return e.each(function(a,b){f.push(c(b,d))}),this.children=f,this}}),N=l(function(a){function b(){var a=this.get();this.update("auto");var b=this.get();return this.update(a),b}function c(a,b,c){return void 0!==b&&(c=b),a in m?a:c}function d(a){var b=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return(b?e(b[1],b[2],b[3]):a).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var f={duration:500,ease:"ease",delay:0};a.init=function(a,b,d,e){this.$el=a,this.el=a[0];var g=b[0];d[2]&&(g=d[2]),X[g]&&(g=X[g]),this.name=g,this.type=d[1],this.duration=i(b[1],this.duration,f.duration),this.ease=c(b[2],this.ease,f.ease),this.delay=i(b[3],this.delay,f.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=A.test(this.name),this.unit=e.unit||this.unit||U.defaultUnit,this.angle=e.angle||this.angle||U.defaultAngle,U.fallback||e.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+B+this.duration+"ms"+("ease"!=this.ease?B+m[this.ease][0]:"")+(this.delay?B+this.delay+"ms":""))},a.set=function(a){a=this.convert(a,this.type),this.update(a),this.redraw()},a.transition=function(a){this.active=!0,a=this.convert(a,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==a&&(a=b.call(this))),this.nextStyle=a},a.fallback=function(a){var c=this.el.style[this.name]||this.convert(this.get(),this.type);a=this.convert(a,this.type),this.auto&&("auto"==c&&(c=this.convert(this.get(),this.type)),"auto"==a&&(a=b.call(this))),this.tween=new R({from:c,to:a,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.get=function(){return W(this.el,this.name)},a.update=function(a){V(this.el,this.name,a)},a.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,V(this.el,this.name,this.get()));var a=this.tween;a&&a.context&&a.destroy()},a.convert=function(a,b){if("auto"==a&&this.auto)return a;var c,e="number"==typeof a,f="string"==typeof a;switch(b){case t:if(e)return a;if(f&&""===a.replace(r,""))return+a;c="number(unitless)";break;case u:if(f){if(""===a&&this.original)return this.original;if(b.test(a))return"#"==a.charAt(0)&&7==a.length?a:d(a)}c="hex or rgb string";break;case v:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit)";break;case w:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit or %)";break;case x:if(e)return a+this.angle;if(f&&b.test(a))return a;c="number(deg) or string(angle)";break;case y:if(e)return a;if(f&&w.test(a))return a;c="number(unitless) or string(unit or %)"}return g(c,a),a},a.redraw=function(){this.el.offsetHeight}}),O=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),u))}}),P=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.animate=this.fallback},a.get=function(){return this.$el[this.name]()},a.update=function(a){this.$el[this.name](a)}}),Q=l(N,function(a,b){function c(a,b){var c,d,e,f,g;for(c in a)f=Z[c],e=f[0],d=f[1]||c,g=this.convert(a[c],e),b.call(this,d,g,e)}a.init=function(){b.init.apply(this,arguments),this.current||(this.current={},Z.perspective&&U.perspective&&(this.current.perspective=U.perspective,V(this.el,this.name,this.style(this.current)),this.redraw()))},a.set=function(a){c.call(this,a,function(a,b){this.current[a]=b}),V(this.el,this.name,this.style(this.current)),this.redraw()},a.transition=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease});var c,d={};for(c in this.current)d[c]=c in b?b[c]:this.current[c];this.active=!0,this.nextStyle=this.style(d)},a.fallback=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.update=function(){V(this.el,this.name,this.style(this.current))},a.style=function(a){var b,c="";for(b in a)c+=b+"("+a[b]+") ";return c},a.values=function(a){var b,d={};return c.call(this,a,function(a,c,e){d[a]=c,void 0===this.current[a]&&(b=0,~a.indexOf("scale")&&(b=1),this.current[a]=this.convert(b,e))}),d}}),R=l(function(b){function c(a){1===n.push(a)&&J(g)}function g(){var a,b,c,d=n.length;if(d)for(J(g),b=K(),a=d;a--;)c=n[a],c&&c.render(b)}function i(b){var c,d=a.inArray(b,n);d>=0&&(c=n.slice(d+1),n.length=d,c.length&&(n=n.concat(c)))}function j(a){return Math.round(a*o)/o}function k(a,b,c){return e(a[0]+c*(b[0]-a[0]),a[1]+c*(b[1]-a[1]),a[2]+c*(b[2]-a[2]))}var l={ease:m.ease[1],from:0,to:1};b.init=function(a){this.duration=a.duration||0,this.delay=a.delay||0;var b=a.ease||l.ease;m[b]&&(b=m[b][1]),"function"!=typeof b&&(b=l.ease),this.ease=b,this.update=a.update||f,this.complete=a.complete||f,this.context=a.context||this,this.name=a.name;var c=a.from,d=a.to;void 0===c&&(c=l.from),void 0===d&&(d=l.to),this.unit=a.unit||"","number"==typeof c&&"number"==typeof d?(this.begin=c,this.change=d-c):this.format(d,c),this.value=this.begin+this.unit,this.start=K(),a.autoplay!==!1&&this.play()},b.play=function(){this.active||(this.start||(this.start=K()),this.active=!0,c(this))},b.stop=function(){this.active&&(this.active=!1,i(this))},b.render=function(a){var b,c=a-this.start;if(this.delay){if(c<=this.delay)return;c-=this.delay}if(c<this.duration){var d=this.ease(c,0,1,this.duration);return b=this.startRGB?k(this.startRGB,this.endRGB,d):j(this.begin+d*this.change),this.value=b+this.unit,void this.update.call(this.context,this.value)}b=this.endHex||this.begin+this.change,this.value=b+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},b.format=function(a,b){if(b+="",a+="","#"==a.charAt(0))return this.startRGB=d(b),this.endRGB=d(a),this.endHex=a,this.begin=0,void(this.change=1);if(!this.unit){var c=b.replace(r,""),e=a.replace(r,"");c!==e&&h("tween",b,a),this.unit=c}b=parseFloat(b),a=parseFloat(a),this.begin=this.value=b,this.change=a-b},b.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=f};var n=[],o=1e3}),S=l(R,function(a){a.init=function(a){this.duration=a.duration||0,this.complete=a.complete||f,this.context=a.context,this.play()},a.render=function(a){var b=a-this.start;b<this.duration||(this.complete.call(this.context),this.destroy())}}),T=l(R,function(a,b){a.init=function(a){this.context=a.context,this.update=a.update,this.tweens=[],this.current=a.current;var b,c;for(b in a.values)c=a.values[b],this.current[b]!==c&&this.tweens.push(new R({name:b,from:this.current[b],to:c,duration:a.duration,delay:a.delay,ease:a.ease,autoplay:!1}));this.play()},a.render=function(a){var b,c,d=this.tweens.length,e=!1;for(b=d;b--;)c=this.tweens[b],c.context&&(c.render(a),this.current[c.name]=c.value,e=!0);return e?void(this.update&&this.update.call(this.context)):this.destroy()},a.destroy=function(){if(b.destroy.call(this),this.tweens){var a,c=this.tweens.length;for(a=c;a--;)this.tweens[a].destroy();this.tweens=null,this.current=null}}}),U=b.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!G.transition,agentTests:[]};b.fallback=function(a){if(!G.transition)return U.fallback=!0;U.agentTests.push("("+a+")");var b=new RegExp(U.agentTests.join("|"),"i");U.fallback=b.test(navigator.userAgent)},b.fallback("6.0.[2-5] Safari"),b.tween=function(a){return new R(a)},b.delay=function(a,b,c){return new S({complete:b,duration:a,context:c})},a.fn.tram=function(a){return b.call(null,this,a)};var V=a.style,W=a.css,X={transform:G.transform&&G.transform.css},Y={color:[O,u],background:[O,u,"background-color"],"outline-color":[O,u],"border-color":[O,u],"border-top-color":[O,u],"border-right-color":[O,u],"border-bottom-color":[O,u],"border-left-color":[O,u],"border-width":[N,v],"border-top-width":[N,v],"border-right-width":[N,v],"border-bottom-width":[N,v],"border-left-width":[N,v],"border-spacing":[N,v],"letter-spacing":[N,v],margin:[N,v],"margin-top":[N,v],"margin-right":[N,v],"margin-bottom":[N,v],"margin-left":[N,v],padding:[N,v],"padding-top":[N,v],"padding-right":[N,v],"padding-bottom":[N,v],"padding-left":[N,v],"outline-width":[N,v],opacity:[N,t],top:[N,w],right:[N,w],bottom:[N,w],left:[N,w],"font-size":[N,w],"text-indent":[N,w],"word-spacing":[N,w],width:[N,w],"min-width":[N,w],"max-width":[N,w],height:[N,w],"min-height":[N,w],"max-height":[N,w],"line-height":[N,y],"scroll-top":[P,t,"scrollTop"],"scroll-left":[P,t,"scrollLeft"]},Z={};G.transform&&(Y.transform=[Q],Z={x:[w,"translateX"],y:[w,"translateY"],rotate:[x],rotateX:[x],rotateY:[x],scale:[t],scaleX:[t],scaleY:[t],skew:[x],skewX:[x],skewY:[x]}),G.transform&&G.backface&&(Z.z=[w,"translateZ"],Z.rotateZ=[x],Z.scaleZ=[t],Z.perspective=[v]);var $=/ms/,_=/s|\./;return a.tram=b}(window.jQuery);

  var require$$0$1 = {};

  var underscoreCustom = __commonjs(function (module) {
  // Include tram for frame-throttling
  var $ = window.$;
  var tram = require$$0$1 && $.tram;

  /*eslint-disable */

  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  module.exports = (function() {
    var _ = {};

    // Current version.
    _.VERSION = '1.6.0-Webflow';

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var
      push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
      nativeForEach      = ArrayProto.forEach,
      nativeMap          = ArrayProto.map,
      nativeReduce       = ArrayProto.reduce,
      nativeReduceRight  = ArrayProto.reduceRight,
      nativeFilter       = ArrayProto.filter,
      nativeEvery        = ArrayProto.every,
      nativeSome         = ArrayProto.some,
      nativeIndexOf      = ArrayProto.indexOf,
      nativeLastIndexOf  = ArrayProto.lastIndexOf,
      nativeIsArray      = Array.isArray,
      nativeKeys         = Object.keys,
      nativeBind         = FuncProto.bind;

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
      /* jshint shadow:true */
      if (obj == null) return obj;
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, length = obj.length; i < length; i++) {
          if (iterator.call(context, obj[i], i, obj) === breaker) return;
        }
      } else {
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
          if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        }
      }
      return obj;
    };

    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
      var results = [];
      if (obj == null) return results;
      if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
      each(obj, function(value, index, list) {
        results.push(iterator.call(context, value, index, list));
      });
      return results;
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, predicate, context) {
      var result;
      any(obj, function(value, index, list) {
        if (predicate.call(context, value, index, list)) {
          result = value;
          return true;
        }
      });
      return result;
    };

    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, predicate, context) {
      var results = [];
      if (obj == null) return results;
      if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
      each(obj, function(value, index, list) {
        if (predicate.call(context, value, index, list)) results.push(value);
      });
      return results;
    };

    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, predicate, context) {
      predicate || (predicate = _.identity);
      var result = false;
      if (obj == null) return result;
      if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
      each(obj, function(value, index, list) {
        if (result || (result = predicate.call(context, value, index, list))) return breaker;
      });
      return !!result;
    };

    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
      if (obj == null) return false;
      if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
      return any(obj, function(value) {
        return value === target;
      });
    };

    // Function (ahem) Functions
    // --------------------

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
      var args = slice.call(arguments, 2);
      return setTimeout(function(){ return func.apply(null, args); }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
      return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered once every
    // browser animation frame - using tram's requestAnimationFrame polyfill.
    _.throttle = function(func) {
      var wait, args, context;
      return function() {
        if (wait) return;
        wait = true;
        args = arguments;
        context = this;
        tram.frame(function() {
          wait = false;
          func.apply(context, args);
        });
      };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
      var timeout, args, context, timestamp, result;

      var later = function() {
        var last = _.now() - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            context = args = null;
          }
        }
      };

      return function() {
        context = this;
        args = arguments;
        timestamp = _.now();
        var callNow = immediate && !timeout;
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }

        return result;
      };
    };

    // Object Functions
    // ----------------

    // Fill in a given object with default properties.
    _.defaults = function(obj) {
      if (!_.isObject(obj)) return obj;
      for (var i = 1, length = arguments.length; i < length; i++) {
        var source = arguments[i];
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
      return obj;
    };

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function(obj) {
      if (!_.isObject(obj)) return [];
      if (nativeKeys) return nativeKeys(obj);
      var keys = [];
      for (var key in obj) if (_.has(obj, key)) keys.push(key);
      return keys;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
      return hasOwnProperty.call(obj, key);
    };

    // Is a given variable an object?
    _.isObject = function(obj) {
      return obj === Object(obj);
    };

    // Utility Functions
    // -----------------

    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function() { return new Date().getTime(); };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
      evaluate    : /<%([\s\S]+?)%>/g,
      interpolate : /<%=([\s\S]+?)%>/g,
      escape      : /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
      "'":      "'",
      '\\':     '\\',
      '\r':     'r',
      '\n':     'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function(match) {
      return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function(text, settings, oldSettings) {
      if (!settings && oldSettings) settings = oldSettings;
      settings = _.defaults({}, settings, _.templateSettings);

      // Combine delimiters into one regular expression via alternation.
      var matcher = RegExp([
        (settings.escape || noMatch).source,
        (settings.interpolate || noMatch).source,
        (settings.evaluate || noMatch).source
      ].join('|') + '|$', 'g');

      // Compile the template source, escaping string literals appropriately.
      var index = 0;
      var source = "__p+='";
      text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escaper, escapeChar);
        index = offset + match.length;

        if (escape) {
          source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        } else if (interpolate) {
          source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        } else if (evaluate) {
          source += "';\n" + evaluate + "\n__p+='";
        }

        // Adobe VMs need the match returned to produce the correct offest.
        return match;
      });
      source += "';\n";

      // If a variable is not specified, place data values in local scope.
      if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

      source = "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        source + 'return __p;\n';

      try {
        var render = new Function(settings.variable || 'obj', '_', source);
      } catch (e) {
        e.source = source;
        throw e;
      }

      var template = function(data) {
        return render.call(this, data, _);
      };

      // Provide the compiled source as a convenience for precompilation.
      var argument = settings.variable || 'obj';
      template.source = 'function(' + argument + '){\n' + source + '}';

      return template;
    };

    // Export underscore
    return _;
  }());

  /* eslint-enable */
  });

  var require$$1 = (underscoreCustom && typeof underscoreCustom === 'object' && 'default' in underscoreCustom ? underscoreCustom['default'] : underscoreCustom);

  var webflowLib = __commonjs(function (module) {
  /**
   * Webflow: Core site library
   */

  var Webflow = {};
  var modules = {};
  var primary = [];
  var secondary = window.Webflow || [];
  var $ = window.jQuery;
  var $win = $(window);
  var $doc = $(document);
  var isFunction = $.isFunction;
  var _ = Webflow._ = require$$1;
  var tram = require$$0$1 && $.tram;
  var domready = false;
  var destroyed = false;
  var Modernizr = window.Modernizr;
  tram.config.hideBackface = false;
  tram.config.keepInherited = true;

  /**
   * Webflow.define - Define a named module
   * @param  {string} name
   * @param  {function} factory
   * @param  {object} options
   * @return {object}
   */
  Webflow.define = function(name, factory, options) {
    if (modules[name]) unbindModule(modules[name]);
    var instance = modules[name] = factory($, _, options) || {};
    bindModule(instance);
    return instance;
  };

  /**
   * Webflow.require - Require a named module
   * @param  {string} name
   * @return {object}
   */
  Webflow.require = function(name) {
    return modules[name];
  };

  function bindModule(module) {
    // If running in Webflow app, subscribe to design/preview events
    if (Webflow.env()) {
      isFunction(module.design) && $win.on('__wf_design', module.design);
      isFunction(module.preview) && $win.on('__wf_preview', module.preview);
    }
    // Subscribe to front-end destroy event
    isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
    // Look for ready method on module
    if (module.ready && isFunction(module.ready)) {
      addReady(module);
    }
  }

  function addReady(module) {
    // If domready has already happened, run ready method
    if (domready) {
      module.ready();
      return;
    }
    // Otherwise add ready method to the primary queue (only once)
    if (_.contains(primary, module.ready)) return;
    primary.push(module.ready);
  }

  function unbindModule(module) {
    // Unsubscribe module from window events
    isFunction(module.design) && $win.off('__wf_design', module.design);
    isFunction(module.preview) && $win.off('__wf_preview', module.preview);
    isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);
    // Remove ready method from primary queue
    if (module.ready && isFunction(module.ready)) {
      removeReady(module);
    }
  }

  function removeReady(module) {
    primary = _.filter(primary, function(readyFn) {
      return readyFn !== module.ready;
    });
  }

  /**
   * Webflow.push - Add a ready handler into secondary queue
   * @param {function} ready  Callback to invoke on domready
   */
  Webflow.push = function(ready) {
    // If domready has already happened, invoke handler
    if (domready) {
      isFunction(ready) && ready();
      return;
    }
    // Otherwise push into secondary queue
    secondary.push(ready);
  };

  /**
   * Webflow.env - Get the state of the Webflow app
   * @param {string} mode [optional]
   * @return {boolean}
   */
  Webflow.env = function(mode) {
    var designFlag = window.__wf_design;
    var inApp = typeof designFlag !== 'undefined';
    if (!mode) return inApp;
    if (mode === 'design') return inApp && designFlag;
    if (mode === 'preview') return inApp && !designFlag;
    if (mode === 'slug') return inApp && window.__wf_slug;
    if (mode === 'editor') return window.WebflowEditor;
    if (mode === 'test') return false || window.__wf_test;
    if (mode === 'frame') return window !== window.top;
  };

  // Feature detects + browser sniffs  ಠ_ಠ
  var userAgent = navigator.userAgent.toLowerCase();
  var appVersion = navigator.appVersion.toLowerCase();
  var touch = Webflow.env.touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
  var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(appVersion.match(/chrome\/(\d+)\./)[1], 10);
  var ios = Webflow.env.ios = Modernizr && Modernizr.ios;
  Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;

  // Maintain current touch target to prevent late clicks on touch devices
  var touchTarget;
  // Listen for both events to support touch/mouse hybrid devices
  touch && $doc.on('touchstart mousedown', function(evt) {
    touchTarget = evt.target;
  });

  /**
   * Webflow.validClick - validate click target against current touch target
   * @param  {HTMLElement} clickTarget  Element being clicked
   * @return {Boolean}  True if click target is valid (always true on non-touch)
   */
  Webflow.validClick = touch ? function(clickTarget) {
    return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
  } : function() { return true; };

  /**
   * Webflow.resize, Webflow.scroll - throttled event proxies
   */
  var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
  var scrollEvents = 'scroll.webflow ' + resizeEvents;
  Webflow.resize = eventProxy($win, resizeEvents);
  Webflow.scroll = eventProxy($win, scrollEvents);
  Webflow.redraw = eventProxy();

  // Create a proxy instance for throttled events
  function eventProxy(target, types) {

    // Set up throttled method (using custom frame-based _.throttle)
    var handlers = [];
    var proxy = {};
    proxy.up = _.throttle(function(evt) {
      _.each(handlers, function(h) { h(evt); });
    });

    // Bind events to target
    if (target && types) target.on(types, proxy.up);

    /**
     * Add an event handler
     * @param  {function} handler
     */
    proxy.on = function(handler) {
      if (typeof handler !== 'function') return;
      if (_.contains(handlers, handler)) return;
      handlers.push(handler);
    };

    /**
     * Remove an event handler
     * @param  {function} handler
     */
    proxy.off = function(handler) {
      // If no arguments supplied, clear all handlers
      if (!arguments.length) {
        handlers = [];
        return;
      }
      // Otherwise, remove handler from the list
      handlers = _.filter(handlers, function(h) {
        return h !== handler;
      });
    };

    return proxy;
  }

  // Webflow.location - Wrap window.location in api
  Webflow.location = function(url) {
    window.location = url;
  };

  if (Webflow.env()) {
    // Webflow.location - Re-route location change to trigger an event
    Webflow.location = function(url) {
      window.dispatchEvent(new CustomEvent('__wf_location', { detail: url }));
    };
  }

  // Webflow.ready - Call primary and secondary handlers
  Webflow.ready = function() {
    domready = true;

    // Restore modules after destroy
    if (destroyed) {
      restoreModules();

    // Otherwise run primary ready methods
    } else {
      _.each(primary, callReady);
    }

    // Run secondary ready methods
    _.each(secondary, callReady);

    // Trigger resize
    Webflow.resize.up();
  };

  function callReady(readyFn) {
    isFunction(readyFn) && readyFn();
  }

  function restoreModules() {
    destroyed = false;
    _.each(modules, bindModule);
  }

  /**
   * Webflow.load - Add a window load handler that will run even if load event has already happened
   * @param  {function} handler
   */
  var deferLoad;
  Webflow.load = function(handler) {
    deferLoad.then(handler);
  };

  function bindLoad() {
    // Reject any previous deferred (to support destroy)
    if (deferLoad) {
      deferLoad.reject();
      $win.off('load', deferLoad.resolve);
    }
    // Create deferred and bind window load event
    deferLoad = new $.Deferred();
    $win.on('load', deferLoad.resolve);
  }

  // Webflow.destroy - Trigger a destroy event for all modules
  Webflow.destroy = function(options) {
    options = options || {};
    destroyed = true;
    $win.triggerHandler('__wf_destroy');

    // Allow domready reset for tests
    if (options.domready != null) {
      domready = options.domready;
    }

    // Unbind modules
    _.each(modules, unbindModule);

    // Clear any proxy event handlers
    Webflow.resize.off();
    Webflow.scroll.off();
    Webflow.redraw.off();

    // Clear any queued ready methods
    primary = [];
    secondary = [];

    // If load event has not yet fired, replace the deferred
    if (deferLoad.state() === 'pending') bindLoad();
  };

  // Listen for domready
  $(Webflow.ready);

  // Listen for window.onload and resolve deferred
  bindLoad();

  // Export commonjs module
  module.exports = window.Webflow = Webflow;
  });

  var require$$0 = (webflowLib && typeof webflowLib === 'object' && 'default' in webflowLib ? webflowLib['default'] : webflowLib);

  var webflowBrand = __commonjs(function (module) {
  /**
   * Webflow: Brand pages on the subdomain
   */

  var Webflow = require$$0;

  Webflow.define('brand', module.exports = function($) {
    var api = {};
    var $html = $('html');
    var $body = $('body');
    var namespace = '.w-webflow-badge';
    var location = window.location;
    var isPhantom = /PhantomJS/i.test(navigator.userAgent);
    var brandElement;

    // -----------------------------------
    // Module methods

    api.ready = function() {
      var shouldBrand = $html.attr('data-wf-status');
      var publishedDomain = $html.attr('data-wf-domain') || '';
      if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
        shouldBrand = true;
      }
      if (shouldBrand && !isPhantom) {
        brandElement = brandElement || createBadge();
        ensureBrand();
        setTimeout(ensureBrand, 500);
      }
    };

    function createBadge() {
      var $brand = $('<a class="w-webflow-badge"></a>')
      .attr('href', 'https://webflow.com?utm_campaign=brandjs');

      var $logoArt = $('<img>')
      .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg')
      .css({
        marginRight: '8px',
        width: '16px',
      });

      var $logoText = $('<img>')
      .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg');

      $brand.append($logoArt, $logoText);
      return $brand[0];
    }

    function ensureBrand() {
      var found = $body.children(namespace);
      var match = found.length && found.get(0) === brandElement;
      var inEditor = Webflow.env('editor');
      if (match) {
        // Remove brand when Editor is active
        if (inEditor) {
          found.remove();
        }
        // Exit early, brand is in place
        return;
      }
      // Remove any invalid brand elements
      if (found.length) {
        found.remove();
      }
      // Append the brand (unless Editor is active)
      if (!inEditor) {
        $body.append(brandElement);
      }
    }

    // Export module
    return api;
  });
  });

  var webflowEdit = __commonjs(function (module) {
  /**
   * Webflow: Editor loader
   */

  var Webflow = require$$0;

  Webflow.define('edit', module.exports = function($, _, options) {
    options = options || {};

    // Exit early in test env or when inside an iframe
    if (Webflow.env('test') || Webflow.env('frame')) {
      // Allow test fixtures to continue
      if (!options.fixture) {
        return {exit: 1};
      }
    }

    var api = {};
    var $win = $(window);
    var $html = $(document.documentElement);
    var location = document.location;
    var hashchange = 'hashchange';
    var loaded;
    var loadEditor = options.load || load;
    var hasLocalStorage = false;

    try {
      // Check localStorage for editor data
      hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
    } catch (e) {
      // SecurityError: browser storage has been disabled
    }

    if (hasLocalStorage) {
      loadEditor();

    } else if (location.search) {
      // Check url query for `edit` parameter or any url ending in `?edit`
      if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
        loadEditor();
      }

    } else {
      // Check hash fragment to support `#hash?edit`
      $win.on(hashchange, checkHash).triggerHandler(hashchange);
    }

    function checkHash() {
      if (loaded) return;
      // Load editor when hash contains `?edit`
      if (/\?edit/.test(location.hash)) loadEditor();
    }

    function load() {
      loaded = true;
      // Predefine global immediately to benefit Webflow.env
      window.WebflowEditor = true;
      $win.off(hashchange, checkHash);
      $.ajax({
        url: cleanSlashes("https://editor-api.webflow.com" + '/api/editor/view'),
        data: { siteId: $html.attr('data-wf-site') },
        xhrFields: { withCredentials: true },
        dataType: 'json',
        crossDomain: true,
        success: success
      });
    }

    function success(data) {
      if (!data) {
        console.error('Could not load editor data');
        return;
      }
      getScript(prefix(data.scriptPath), function () {
        window.WebflowEditor(data);
      });
    }

    function getScript(url, done) {
      $.ajax({ type: 'GET', url: url, dataType: 'script', cache: true }).then(done, error);
    }

    function error(jqXHR, textStatus, errorThrown) {
      console.error('Could not load editor script: ' + textStatus);
      throw errorThrown;
    }

    function prefix(url) {
      return (url.indexOf('//') >= 0) ? url : cleanSlashes("https://editor-api.webflow.com" + url);
    }

    function cleanSlashes(url) {
      return url.replace(/([^:])\/\//g, '$1/');
    }

    // Export module
    return api;
  });
  });

  var webflowLinks = __commonjs(function (module) {
  /**
   * Webflow: Auto-select links to current page or section
   */

  var Webflow = require$$0;

  Webflow.define('links', module.exports = function($, _) {
    var api = {};
    var $win = $(window);
    var designer;
    var inApp = Webflow.env();
    var location = window.location;
    var tempLink = document.createElement('a');
    var linkCurrent = 'w--current';
    var validHash = /^#[a-zA-Z][\w:.-]*$/;
    var indexPage = /index\.(html|php)$/;
    var dirList = /\/$/;
    var anchors;
    var slug;

    // -----------------------------------
    // Module methods

    api.ready = api.design = api.preview = init;

    // -----------------------------------
    // Private methods

    function init() {
      designer = inApp && Webflow.env('design');
      slug = Webflow.env('slug') || location.pathname || '';

      // Reset scroll listener, init anchors
      Webflow.scroll.off(scroll);
      anchors = [];

      // Test all links for a selectable href
      var links = document.links;
      for (var i = 0; i < links.length; ++i) {
        select(links[i]);
      }

      // Listen for scroll if any anchors exist
      if (anchors.length) {
        Webflow.scroll.on(scroll);
        scroll();
      }
    }

    function select(link) {
      var href = (designer && link.getAttribute('href-disabled')) || link.getAttribute('href');
      tempLink.href = href;

      // Ignore any hrefs with a colon to safely avoid all uri schemes
      if (href.indexOf(':') >= 0) return;

      var $link = $(link);

      // Check for valid hash links w/ sections and use scroll anchor
      if (href.indexOf('#') === 0 && validHash.test(href)) {
        var $section = $(href);
        $section.length && anchors.push({ link: $link, sec: $section, active: false });
        return;
      }

      // Ignore empty # links
      if (href === '#') return;

      // Determine whether the link should be selected
      var match = (tempLink.href === location.href) || (href === slug) || (indexPage.test(href) && dirList.test(slug));
      setClass($link, linkCurrent, match);
    }

    function scroll() {
      var viewTop = $win.scrollTop();
      var viewHeight = $win.height();

      // Check each anchor for a section in view
      _.each(anchors, function(anchor) {
        var $link = anchor.link;
        var $section = anchor.sec;
        var top = $section.offset().top;
        var height = $section.outerHeight();
        var offset = viewHeight * 0.5;
        var active = ($section.is(':visible') &&
          top + height - offset >= viewTop &&
          top + offset <= viewTop + viewHeight);
        if (anchor.active === active) return;
        anchor.active = active;
        setClass($link, linkCurrent, active);
        if (designer) $link[0].__wf_current = active;
      });
    }

    function setClass($elem, className, add) {
      var exists = $elem.hasClass(className);
      if (add && exists) return;
      if (!add && !exists) return;
      add ? $elem.addClass(className) : $elem.removeClass(className);
    }

    // Export module
    return api;
  });
  });

  var webflowMaps = __commonjs(function (module) {
  /**
   * Webflow: Maps widget
   */

  var Webflow = require$$0;

  Webflow.define('maps', module.exports = function($, _) {
    var api = {};
    var $doc = $(document);
    var google = null;
    var $maps;
    var namespace = '.w-widget-map';
    // The API key is injected here from the Webflow Integrations tab on the site's dashboard
    var googleMapsApiKey = 'AIzaSyAJGLrCPnaHlPHQEkhb5xuEKMENotz8Nf4';

    // -----------------------------------
    // Module methods

    api.ready = function() {
      // Init Maps on the front-end
      if (!Webflow.env()) initMaps();
    };

    api.destroy = removeListeners;

    // -----------------------------------
    // Private methods

    function initMaps() {
      $maps = $doc.find(namespace);
      if (!$maps.length) return;

      if (google === null) {
        $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=' + googleMapsApiKey);
        window._wf_maps_loaded = mapsLoaded;
      } else {
        mapsLoaded();
      }

      function mapsLoaded() {
        window._wf_maps_loaded = function() {};
        google = window.google;
        $maps.each(renderMap);
        removeListeners();
        addListeners();
      }
    }

    function removeListeners() {
      Webflow.resize.off(resizeMaps);
      Webflow.redraw.off(resizeMaps);
    }

    function addListeners() {
      Webflow.resize.on(resizeMaps);
      Webflow.redraw.on(resizeMaps);
    }

    // Render map onto each element
    function renderMap(i, el) {
      var data = $(el).data();
      getState(el, data);
    }

    function resizeMaps() {
      $maps.each(resizeMap);
    }

    // Resize map when window changes
    function resizeMap(i, el) {
      var state = getState(el);
      google.maps.event.trigger(state.map, 'resize');
      state.setMapPosition();
    }

    // Store state on element data
    var store = 'w-widget-map';
    function getState(el, data) {

      var state = $.data(el, store);
      if (state) return state;

      var $el = $(el);
      state = $.data(el, store, {
        // Default options
        latLng: '51.511214,-0.119824',
        tooltip: '',
        style: 'roadmap',
        zoom: 12,

        // Marker
        marker: new google.maps.Marker({
          draggable: false
        }),

        // Tooltip infowindow
        infowindow: new google.maps.InfoWindow({
          disableAutoPan: true
        })
      });

      // LatLng center point
      var latLng = data.widgetLatlng || state.latLng;
      state.latLng = latLng;
      var coords = latLng.split(',');
      var latLngObj = new google.maps.LatLng(coords[0], coords[1]);
      state.latLngObj = latLngObj;

      // Disable touch events
      var mapDraggable = !(Webflow.env.touch && data.disableTouch);

      // Map instance
      state.map = new google.maps.Map(el, {
        center: state.latLngObj,
        zoom: state.zoom,
        maxZoom: 18,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        scrollwheel: !data.disableScroll,
        draggable: mapDraggable,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeId: state.style
      });
      state.marker.setMap(state.map);

      // Set map position and offset
      state.setMapPosition = function() {
        state.map.setCenter(state.latLngObj);
        var offsetX = 0;
        var offsetY = 0;
        var padding = $el.css(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']);
        offsetX -= parseInt(padding.paddingLeft, 10);
        offsetX += parseInt(padding.paddingRight, 10);
        offsetY -= parseInt(padding.paddingTop, 10);
        offsetY += parseInt(padding.paddingBottom, 10);
        if (offsetX || offsetY) {
          state.map.panBy(offsetX, offsetY);
        }
        $el.css('position', ''); // Remove injected position
      };

      // Fix position after first tiles have loaded
      google.maps.event.addListener(state.map, 'tilesloaded', function() {
        google.maps.event.clearListeners(state.map, 'tilesloaded');
        state.setMapPosition();
      });

      // Set initial position
      state.setMapPosition();
      state.marker.setPosition(state.latLngObj);
      state.infowindow.setPosition(state.latLngObj);

      // Draw tooltip
      var tooltip = data.widgetTooltip;
      if (tooltip) {
        state.tooltip = tooltip;
        state.infowindow.setContent(tooltip);
        if (!state.infowindowOpen) {
          state.infowindow.open(state.map, state.marker);
          state.infowindowOpen = true;
        }
      }

      // Map style - options.style
      var style = data.widgetStyle;
      if (style) {
        state.map.setMapTypeId(style);
      }

      // Zoom - options.zoom
      var zoom = data.widgetZoom;
      if (zoom != null) {
        state.zoom = zoom;
        state.map.setZoom(Number(zoom));
      }

      // Click marker to open in google maps
      google.maps.event.addListener(state.marker, 'click', function() {
        window.open('https://maps.google.com/?z=' + state.zoom + '&daddr=' + state.latLng);
      });

      return state;
    }

    // Export module
    return api;
  });
  });

  var webflowIxEvents = __commonjs(function (module) {
  'use strict';

  /**
   * Webflow: IX Event triggers for other modules
   */

  var $ = window.jQuery;
  var api = {};
  var eventQueue = [];
  var namespace = '.w-ix';

  var eventTriggers = {
    reset: function(i, el) {
      el.__wf_intro = null;
    },
    intro: function(i, el) {
      if (el.__wf_intro) return;
      el.__wf_intro = true;
      $(el).triggerHandler(api.types.INTRO);
    },
    outro: function(i, el) {
      if (!el.__wf_intro) return;
      el.__wf_intro = null;
      $(el).triggerHandler(api.types.OUTRO);
    }
  };

  api.triggers = {};

  api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
  };

  // Trigger any events in queue + restore trigger methods
  api.init = function() {
    var count = eventQueue.length;
    for (var i = 0; i < count; i++) {
      var memo = eventQueue[i];
      memo[0](0, memo[1]);
    }
    eventQueue = [];
    $.extend(api.triggers, eventTriggers);
  };

  // Replace all triggers with async wrapper to queue events until init
  api.async = function() {
    for (var key in eventTriggers) {
      var func = eventTriggers[key];
      if (!eventTriggers.hasOwnProperty(key)) continue;

      // Replace trigger method with async wrapper
      api.triggers[key] = function(i, el) {
        eventQueue.push([func, el]);
      };
    }
  };

  // Default triggers to async queue
  api.async();

  module.exports = api;
  });

  var require$$0$2 = (webflowIxEvents && typeof webflowIxEvents === 'object' && 'default' in webflowIxEvents ? webflowIxEvents['default'] : webflowIxEvents);

  var webflowNavbar = __commonjs(function (module) {
  /**
   * Webflow: Navbar component
   */

  var Webflow = require$$0;
  var IXEvents = require$$0$2;

  Webflow.define('navbar', module.exports = function($, _) {
    var api = {};
    var tram = $.tram;
    var $win = $(window);
    var $doc = $(document);
    var $body;
    var $navbars;
    var designer;
    var inApp = Webflow.env();
    var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
    var namespace = '.w-nav';
    var buttonOpen = 'w--open';
    var menuOpen = 'w--nav-menu-open';
    var linkOpen = 'w--nav-link-open';
    var ix = IXEvents.triggers;
    var menuSibling = $();

    // -----------------------------------
    // Module methods

    api.ready = api.design = api.preview = init;

    api.destroy = function() {
      menuSibling = $();
      removeListeners();
      if ($navbars && $navbars.length) {
        $navbars.each(teardown);
      }
    };

    // -----------------------------------
    // Private methods

    function init() {
      designer = inApp && Webflow.env('design');
      $body = $(document.body);

      // Find all instances on the page
      $navbars = $doc.find(namespace);
      if (!$navbars.length) return;
      $navbars.each(build);

      // Wire events
      removeListeners();
      addListeners();
    }

    function removeListeners() {
      Webflow.resize.off(resizeAll);
    }

    function addListeners() {
      Webflow.resize.on(resizeAll);
    }

    function resizeAll() {
      $navbars.each(resize);
    }

    function build(i, el) {
      var $el = $(el);

      // Store state in data
      var data = $.data(el, namespace);
      if (!data) data = $.data(el, namespace, { open: false, el: $el, config: {} });
      data.menu = $el.find('.w-nav-menu');
      data.links = data.menu.find('.w-nav-link');
      data.dropdowns = data.menu.find('.w-dropdown');
      data.button = $el.find('.w-nav-button');
      data.container = $el.find('.w-container');
      data.outside = outside(data);

      // Remove old events
      data.el.off(namespace);
      data.button.off(namespace);
      data.menu.off(namespace);

      // Set config from data attributes
      configure(data);

      // Add events based on mode
      if (designer) {
        removeOverlay(data);
        data.el.on('setting' + namespace, handler(data));
      } else {
        addOverlay(data);
        data.button.on('tap' + namespace, toggle(data));
        data.menu.on('click' + namespace, 'a', navigate(data));
      }

      // Trigger initial resize
      resize(i, el);
    }

    function teardown(i, el) {
      var data = $.data(el, namespace);
      if (data) {
        removeOverlay(data);
        $.removeData(el, namespace);
      }
    }

    function removeOverlay(data) {
      if (!data.overlay) return;
      close(data, true);
      data.overlay.remove();
      data.overlay = null;
    }

    function addOverlay(data) {
      if (data.overlay) return;
      data.overlay = $(overlay).appendTo(data.el);
      data.parent = data.menu.parent();
      close(data, true);
    }

    function configure(data) {
      var config = {};
      var old = data.config || {};

      // Set config options from data attributes
      var animation = config.animation = data.el.attr('data-animation') || 'default';
      config.animOver = /^over/.test(animation);
      config.animDirect = /left$/.test(animation) ? -1 : 1;

      // Re-open menu if the animation type changed
      if (old.animation !== animation) {
        data.open && _.defer(reopen, data);
      }

      config.easing = data.el.attr('data-easing') || 'ease';
      config.easing2 = data.el.attr('data-easing2') || 'ease';

      var duration = data.el.attr('data-duration');
      config.duration = duration != null ? Number(duration) : 400;

      config.docHeight = data.el.attr('data-doc-height');

      // Store config in data
      data.config = config;
    }

    function handler(data) {
      return function(evt, options) {
        options = options || {};
        var winWidth = $win.width();
        configure(data);
        options.open === true && open(data, true);
        options.open === false && close(data, true);
        // Reopen if media query changed after setting
        data.open && _.defer(function() {
          if (winWidth !== $win.width()) reopen(data);
        });
      };
    }

    function reopen(data) {
      if (!data.open) return;
      close(data, true);
      open(data, true);
    }

    function toggle(data) {
      // Debounce toggle to wait for accurate open state
      return _.debounce(function() {
        data.open ? close(data) : open(data);
      });
    }

    function navigate(data) {
      return function(evt) {
        var link = $(this);
        var href = link.attr('href');

        // Avoid late clicks on touch devices
        if (!Webflow.validClick(evt.currentTarget)) {
          evt.preventDefault();
          return;
        }

        // Close when navigating to an in-page anchor
        if (href && href.indexOf('#') === 0 && data.open) {
          close(data);
        }
      };
    }

    function outside(data) {
      // Unbind previous tap handler if it exists
      if (data.outside) $doc.off('tap' + namespace, data.outside);

      // Close menu when tapped outside, debounced to wait for state
      return _.debounce(function(evt) {
        if (!data.open) return;
        var menu = $(evt.target).closest('.w-nav-menu');
        if (!data.menu.is(menu)) {
          close(data);
        }
      });
    }

    function resize(i, el) {
      var data = $.data(el, namespace);
      // Check for collapsed state based on button display
      var collapsed = data.collapsed = data.button.css('display') !== 'none';
      // Close menu if button is no longer visible (and not in designer)
      if (data.open && !collapsed && !designer) close(data, true);
      // Set max-width of links + dropdowns to match container
      if (data.container.length) {
        var updateEachMax = updateMax(data);
        data.links.each(updateEachMax);
        data.dropdowns.each(updateEachMax);
      }
      // If currently open, update height to match body
      if (data.open) {
        setOverlayHeight(data);
      }
    }

    var maxWidth = 'max-width';
    function updateMax(data) {
      // Set max-width of each element to match container
      var containMax = data.container.css(maxWidth);
      if (containMax === 'none') containMax = '';
      return function(i, link) {
        link = $(link);
        link.css(maxWidth, '');
        // Don't set the max-width if an upstream value exists
        if (link.css(maxWidth) === 'none') link.css(maxWidth, containMax);
      };
    }

    function open(data, immediate) {
      if (data.open) return;
      data.open = true;
      data.menu.addClass(menuOpen);
      data.links.addClass(linkOpen);
      data.button.addClass(buttonOpen);
      var config = data.config;
      var animation = config.animation;
      if (animation === 'none' || !tram.support.transform) immediate = true;
      var bodyHeight = setOverlayHeight(data);
      var menuHeight = data.menu.outerHeight(true);
      var menuWidth = data.menu.outerWidth(true);
      var navHeight = data.el.height();
      var navbarEl = data.el[0];
      resize(0, navbarEl);
      ix.intro(0, navbarEl);
      Webflow.redraw.up();

      // Listen for tap outside events
      if (!designer) $doc.on('tap' + namespace, data.outside);

      // No transition for immediate
      if (immediate) return;

      var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;

      // Add menu to overlay
      if (data.overlay) {
        menuSibling = data.menu.prev();
        data.overlay.show().append(data.menu);
      }

      // Over left/right
      if (config.animOver) {
        tram(data.menu)
        .add(transConfig)
        .set({ x: config.animDirect * menuWidth, height: bodyHeight }).start({ x: 0 });
        data.overlay && data.overlay.width(menuWidth);
        return;
      }

      // Drop Down
      var offsetY = navHeight + menuHeight;
      tram(data.menu)
        .add(transConfig)
        .set({ y: -offsetY }).start({ y: 0 });
    }

    function setOverlayHeight(data) {
      var config = data.config;
      var bodyHeight = config.docHeight ? $doc.height() : $body.height();
      if (config.animOver) {
        data.menu.height(bodyHeight);
      } else if (data.el.css('position') !== 'fixed') {
        bodyHeight -= data.el.height();
      }
      data.overlay && data.overlay.height(bodyHeight);
      return bodyHeight;
    }

    function close(data, immediate) {
      if (!data.open) return;
      data.open = false;
      data.button.removeClass(buttonOpen);
      var config = data.config;
      if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) immediate = true;
      ix.outro(0, data.el[0]);

      // Stop listening for tap outside events
      $doc.off('tap' + namespace, data.outside);

      if (immediate) {
        tram(data.menu).stop();
        complete();
        return;
      }

      var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
      var menuHeight = data.menu.outerHeight(true);
      var menuWidth = data.menu.outerWidth(true);
      var navHeight = data.el.height();

      // Over left/right
      if (config.animOver) {
        tram(data.menu)
          .add(transConfig)
          .start({ x: menuWidth * config.animDirect }).then(complete);
        return;
      }

      // Drop Down
      var offsetY = navHeight + menuHeight;
      tram(data.menu)
        .add(transConfig)
        .start({ y: -offsetY }).then(complete);

      function complete() {
        data.menu.height('');
        tram(data.menu).set({ x: 0, y: 0 });
        data.menu.removeClass(menuOpen);
        data.links.removeClass(linkOpen);
        if (data.overlay && data.overlay.children().length) {
          // Move menu back to parent at the original location
          menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
          data.overlay.attr('style', '').hide();
        }

        // Trigger event so other components can hook in (dropdown)
        data.el.triggerHandler('w-close');
      }
    }

    // Export module
    return api;
  });
  });

  var webflowScroll = __commonjs(function (module) {
  /**
   * Webflow: Smooth scroll
   */

  var Webflow = require$$0;

  Webflow.define('scroll', module.exports = function($) {
    var $doc = $(document);
    var win = window;
    var loc = win.location;
    var history = inIframe() ? null : win.history;
    var validHash = /^[a-zA-Z0-9][\w:.-]*$/;

    function inIframe() {
      try {
        return Boolean(win.frameElement);
      } catch (e) {
        return true;
      }
    }

    function ready() {
      // If hash is already present on page load, scroll to it right away
      if (loc.hash) {
        findEl(loc.hash.substring(1));
      }

      // The current page url without the hash part.
      var locHref = loc.href.split('#')[0];

      // When clicking on a link, check if it links to another part of the page
      $doc.on('click', 'a', function(e) {
        if (Webflow.env('design')) {
          return;
        }

        // Ignore links being used by jQuery mobile
        if (window.$.mobile && $(e.currentTarget).hasClass('ui-link')) return;

        // Ignore empty # links
        if (this.getAttribute('href') === '#') {
          e.preventDefault();
          return;
        }

        // The href property always contains the full url so we can compare
        // with the document’s location to only target links on this page.
        var parts = this.href.split('#');
        var hash = parts[0] === locHref ? parts[1] : null;
        if (hash) {
          findEl(hash, e);
        }
      });
    }

    function findEl(hash, e) {
      if (!validHash.test(hash)) return;

      var el = $('#' + hash);
      if (!el.length) {
        return;
      }

      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Push new history state
      if (
        loc.hash !== hash &&
        history && history.pushState &&
        // Navigation breaks Chrome when the protocol is `file:`.
        !(Webflow.env.chrome && loc.protocol === 'file:')
      ) {
        var oldHash = history.state && history.state.hash;
        if (oldHash !== hash) {
          history.pushState({ hash: hash }, '', '#' + hash);
        }
      }

      // If a fixed header exists, offset for the height
      var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
      var header = $('header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])');
      var offset = header.css('position') === 'fixed' ? header.outerHeight() : 0;

      win.setTimeout(function() {
        scroll(el, offset);
      }, e ? 0 : 300);
    }

    function scroll(el, offset){
      var start = $(win).scrollTop();
      var end = el.offset().top - offset;

      // If specified, scroll so that the element ends up in the middle of the viewport
      if (el.data('scroll') === 'mid') {
        var available = $(win).height() - offset;
        var elHeight = el.outerHeight();
        if (elHeight < available) {
          end -= Math.round((available - elHeight) / 2);
        }
      }

      var mult = 1;

      // Check for custom time multiplier on the body and the element
      $('body').add(el).each(function() {
        var time = parseFloat($(this).attr('data-scroll-time'), 10);
        if (!isNaN(time) && (time === 0 || time > 0)) {
          mult = time;
        }
      });

      // Shim for IE8 and below
      if (!Date.now) {
        Date.now = function() { return new Date().getTime(); };
      }

      var clock = Date.now();
      var animate = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || function(fn) { win.setTimeout(fn, 15); };
      var duration = (472.143 * Math.log(Math.abs(start - end) +125) - 2000) * mult;

      var step = function() {
        var elapsed = Date.now() - clock;
        win.scroll(0, getY(start, end, elapsed, duration));

        if (elapsed <= duration) {
          animate(step);
        }
      };

      step();
    }

    function getY(start, end, elapsed, duration) {
      if (elapsed > duration) {
        return end;
      }

      return start + (end - start) * ease(elapsed / duration);
    }

    function ease(t) {
      return t<0.5 ? 4 * t * t * t : (t-1) * (2 * t-2) * (2 * t-2)+1;
    }

    // Export module
    return { ready: ready };
  });
  });

  var webflowSlider = __commonjs(function (module) {
  /**
   * Webflow: Slider component
   */

  var Webflow = require$$0;
  var IXEvents = require$$0$2;

  Webflow.define('slider', module.exports = function($, _) {
    var api = {};
    var tram = $.tram;
    var $doc = $(document);
    var $sliders;
    var designer;
    var inApp = Webflow.env();
    var namespace = '.w-slider';
    var dot = '<div class="w-slider-dot" data-wf-ignore />';
    var ix = IXEvents.triggers;
    var fallback;
    var inRedraw;

    // -----------------------------------
    // Module methods

    api.ready = function() {
      designer = Webflow.env('design');
      init();
    };

    api.design = function() {
      designer = true;
      init();
    };

    api.preview = function() {
      designer = false;
      init();
    };

    api.redraw = function() {
      inRedraw = true;
      init();
    };

    api.destroy = removeListeners;

    // -----------------------------------
    // Private methods

    function init() {
      // Find all sliders on the page
      $sliders = $doc.find(namespace);
      if (!$sliders.length) return;
      $sliders.filter(':visible').each(build);
      inRedraw = null;
      if (fallback) return;

      removeListeners();
      addListeners();
    }

    function removeListeners() {
      Webflow.resize.off(renderAll);
      Webflow.redraw.off(api.redraw);
    }

    function addListeners() {
      Webflow.resize.on(renderAll);
      Webflow.redraw.on(api.redraw);
    }

    function renderAll() {
      $sliders.filter(':visible').each(render);
    }

    function build(i, el) {
      var $el = $(el);

      // Store slider state in data
      var data = $.data(el, namespace);
      if (!data) {
        data = $.data(el, namespace, {
          index: 0,
          depth: 1,
          el: $el,
          config: {}
        });
      }
      data.mask = $el.children('.w-slider-mask');
      data.left = $el.children('.w-slider-arrow-left');
      data.right = $el.children('.w-slider-arrow-right');
      data.nav = $el.children('.w-slider-nav');
      data.slides = data.mask.children('.w-slide');
      data.slides.each(ix.reset);
      if (inRedraw) data.maskWidth = 0;

      // Disable in old browsers
      if (!tram.support.transform) {
        data.left.hide();
        data.right.hide();
        data.nav.hide();
        fallback = true;
        return;
      }

      // Remove old events
      data.el.off(namespace);
      data.left.off(namespace);
      data.right.off(namespace);
      data.nav.off(namespace);

      // Set config from data attributes
      configure(data);

      // Add events based on mode
      if (designer) {
        data.el.on('setting' + namespace, handler(data));
        stopTimer(data);
        data.hasTimer = false;
      } else {
        data.el.on('swipe' + namespace, handler(data));
        data.left.on('tap' + namespace, previousFunction(data));
        data.right.on('tap' + namespace, next(data));

        // Start timer if autoplay is true, only once
        if (data.config.autoplay && !data.hasTimer) {
          data.hasTimer = true;
          data.timerCount = 1;
          startTimer(data);
        }
      }

      // Listen to nav events
      data.nav.on('tap' + namespace, '> div', handler(data));

      // Remove gaps from formatted html (for inline-blocks)
      if (!inApp) {
        data.mask.contents().filter(function() {
          return this.nodeType === 3;
        }).remove();
      }

      // Run first render
      render(i, el);
    }

    function configure(data) {
      var config = {};

      config.crossOver = 0;

      // Set config options from data attributes
      config.animation = data.el.attr('data-animation') || 'slide';
      if (config.animation === 'outin') {
        config.animation = 'cross';
        config.crossOver = 0.5;
      }
      config.easing = data.el.attr('data-easing') || 'ease';

      var duration = data.el.attr('data-duration');
      config.duration = duration != null ? parseInt(duration, 10) : 500;

      if (isAttrTrue(data.el.attr('data-infinite'))) {
        config.infinite = true;
      }

      if (isAttrTrue(data.el.attr('data-disable-swipe'))) {
        config.disableSwipe = true;
      }

      if (isAttrTrue(data.el.attr('data-hide-arrows'))) {
        config.hideArrows = true;
      } else if (data.config.hideArrows) {
        data.left.show();
        data.right.show();
      }

      if (isAttrTrue(data.el.attr('data-autoplay'))) {
        config.autoplay = true;
        config.delay = parseInt(data.el.attr('data-delay'), 10) || 2000;
        config.timerMax = parseInt(data.el.attr('data-autoplay-limit'), 10);
        // Disable timer on first touch or mouse down
        var touchEvents = 'mousedown' + namespace + ' touchstart' + namespace;
        if (!designer) {
          data.el.off(touchEvents).one(touchEvents, function() {
            stopTimer(data);
          });
        }
      }

      // Use edge buffer to help calculate page count
      var arrowWidth = data.right.width();
      config.edge = arrowWidth ? arrowWidth + 40 : 100;

      // Store config in data
      data.config = config;
    }

    function isAttrTrue(value) {
      return value === '1' || value === 'true';
    }

    function previousFunction(data) {
      return function() {
        change(data, { index: data.index - 1, vector: -1 });
      };
    }

    function next(data) {
      return function() {
        change(data, { index: data.index + 1, vector: 1 });
      };
    }

    function select(data, value) {
      // Select page based on slide element index
      var found = null;
      if (value === data.slides.length) {
        init(); layout(data); // Rebuild and find new slides
      }
      _.each(data.anchors, function(anchor, index) {
        $(anchor.els).each(function(i, el) {
          if ($(el).index() === value) found = index;
        });
      });
      if (found != null) change(data, { index: found, immediate: true });
    }

    function startTimer(data) {
      stopTimer(data);
      var config = data.config;
      var timerMax = config.timerMax;
      if (timerMax && data.timerCount++ > timerMax) return;
      data.timerId = window.setTimeout(function() {
        if (data.timerId == null || designer) return;
        next(data)();
        startTimer(data);
      }, config.delay);
    }

    function stopTimer(data) {
      window.clearTimeout(data.timerId);
      data.timerId = null;
    }

    function handler(data) {
      return function(evt, options) {
        options = options || {};
        var config = data.config;

        // Designer settings
        if (designer && evt.type === 'setting') {
          if (options.select === 'prev') return previousFunction(data)();
          if (options.select === 'next') return next(data)();
          configure(data);
          layout(data);
          if (options.select == null) return;
          select(data, options.select);
          return;
        }

        // Swipe event
        if (evt.type === 'swipe') {
          if (config.disableSwipe) return;
          if (Webflow.env('editor')) return;
          if (options.direction === 'left') return next(data)();
          if (options.direction === 'right') return previousFunction(data)();
          return;
        }

        // Page buttons
        if (data.nav.has(evt.target).length) {
          change(data, { index: $(evt.target).index() });
        }
      };
    }

    function change(data, options) {
      options = options || {};
      var config = data.config;
      var anchors = data.anchors;

      // Set new index
      data.previous = data.index;
      var index = options.index;
      var shift = {};
      if (index < 0) {
        index = anchors.length - 1;
        if (config.infinite) {
          // Shift first slide to the end
          shift.x = -data.endX;
          shift.from = 0;
          shift.to = anchors[0].width;
        }
      } else if (index >= anchors.length) {
        index = 0;
        if (config.infinite) {
          // Shift last slide to the start
          shift.x = anchors[anchors.length - 1].width;
          shift.from = -anchors[anchors.length - 1].x;
          shift.to = shift.from - shift.x;
        }
      }
      data.index = index;

      // Select page nav
      var active = data.nav.children().eq(data.index).addClass('w-active');
      data.nav.children().not(active).removeClass('w-active');

      // Hide arrows
      if (config.hideArrows) {
        data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
        data.index === 0 ? data.left.hide() : data.left.show();
      }

      // Get page offset from anchors
      var lastOffsetX = data.offsetX || 0;
      var offsetX = data.offsetX = -anchors[data.index].x;
      var resetConfig = { x: offsetX, opacity: 1, visibility: '' };

      // Transition slides
      var targets = $(anchors[data.index].els);
      var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
      var others = data.slides.not(targets);
      var animation = config.animation;
      var easing = config.easing;
      var duration = Math.round(config.duration);
      var vector = options.vector || (data.index > data.previous ? 1 : -1);
      var fadeRule = 'opacity ' + duration + 'ms ' + easing;
      var slideRule = 'transform ' + duration + 'ms ' + easing;

      // Trigger IX events
      if (!designer) {
        targets.each(ix.intro);
        others.each(ix.outro);
      }

      // Set immediately after layout changes (but not during redraw)
      if (options.immediate && !inRedraw) {
        tram(targets).set(resetConfig);
        resetOthers();
        return;
      }

      // Exit early if index is unchanged
      if (data.index === data.previous) return;

      // Cross Fade / Out-In
      if (animation === 'cross') {
        var reduced = Math.round(duration - duration * config.crossOver);
        var wait = Math.round(duration - reduced);
        fadeRule = 'opacity ' + reduced + 'ms ' + easing;
        tram(prevTargs)
          .set({ visibility: '' })
          .add(fadeRule)
          .start({ opacity: 0 });
        tram(targets)
          .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
          .add(fadeRule)
          .wait(wait)
          .then({ opacity: 1 })
          .then(resetOthers);
        return;
      }

      // Fade Over
      if (animation === 'fade') {
        tram(prevTargs)
          .set({ visibility: '' })
          .stop();
        tram(targets)
          .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
          .add(fadeRule)
          .start({ opacity: 1 })
          .then(resetOthers);
        return;
      }

      // Slide Over
      if (animation === 'over') {
        resetConfig = { x: data.endX };
        tram(prevTargs)
          .set({ visibility: '' })
          .stop();
        tram(targets)
          .set({ visibility: '', zIndex: data.depth++, x: offsetX + anchors[data.index].width * vector })
          .add(slideRule)
          .start({ x: offsetX })
          .then(resetOthers);
        return;
      }

      // Slide - infinite scroll
      if (config.infinite && shift.x) {
        tram(data.slides.not(prevTargs))
          .set({ visibility: '', x: shift.x })
          .add(slideRule)
          .start({ x: offsetX });
        tram(prevTargs)
          .set({ visibility: '', x: shift.from })
          .add(slideRule)
          .start({ x: shift.to });
        data.shifted = prevTargs;

      } else {
        if (config.infinite && data.shifted) {
          tram(data.shifted).set({ visibility: '', x: lastOffsetX });
          data.shifted = null;
        }

        // Slide - basic scroll
        tram(data.slides)
          .set({ visibility: '' })
          .add(slideRule)
          .start({ x: offsetX });
      }

      // Helper to move others out of view
      function resetOthers() {
        targets = $(anchors[data.index].els);
        others = data.slides.not(targets);
        if (animation !== 'slide') resetConfig.visibility = 'hidden';
        tram(others).set(resetConfig);
      }
    }

    function render(i, el) {
      var data = $.data(el, namespace);
      if (maskChanged(data)) return layout(data);
      if (designer && slidesChanged(data)) layout(data);
    }

    function layout(data) {
      // Determine page count from width of slides
      var pages = 1;
      var offset = 0;
      var anchor = 0;
      var width = 0;
      var maskWidth = data.maskWidth;
      var threshold = maskWidth - data.config.edge;
      if (threshold < 0) threshold = 0;
      data.anchors = [{ els: [], x: 0, width: 0 }];
      data.slides.each(function(i, el) {
        if (anchor - offset > threshold) {
          pages++;
          offset += maskWidth;
          // Store page anchor for transition
          data.anchors[pages - 1] = { els: [], x: anchor, width: 0 };
        }
        // Set next anchor using current width + margin
        width = $(el).outerWidth(true);
        anchor += width;
        data.anchors[pages - 1].width += width;
        data.anchors[pages - 1].els.push(el);
      });
      data.endX = anchor;

      // Build dots if nav exists and needs updating
      if (designer) data.pages = null;
      if (data.nav.length && data.pages !== pages){
        data.pages = pages;
        buildNav(data);
      }

      // Make sure index is still within range and call change handler
      var index = data.index;
      if (index >= pages) index = pages - 1;
      change(data, { immediate: true, index: index });
    }

    function buildNav(data) {
      var dots = [];
      var $dot;
      var spacing = data.el.attr('data-nav-spacing');
      if (spacing) spacing = parseFloat(spacing) + 'px';
      for (var i = 0; i < data.pages; i++) {
        $dot = $(dot);
        if (data.nav.hasClass('w-num')) $dot.text(i + 1);
        if (spacing != null) {
          $dot.css({
            'margin-left': spacing,
            'margin-right': spacing
          });
        }
        dots.push($dot);
      }
      data.nav.empty().append(dots);
    }

    function maskChanged(data) {
      var maskWidth = data.mask.width();
      if (data.maskWidth !== maskWidth) {
        data.maskWidth = maskWidth;
        return true;
      }
      return false;
    }

    function slidesChanged(data) {
      var slidesWidth = 0;
      data.slides.each(function(i, el) {
        slidesWidth += $(el).outerWidth(true);
      });
      if (data.slidesWidth !== slidesWidth) {
        data.slidesWidth = slidesWidth;
        return true;
      }
      return false;
    }

    // Export module
    return api;
  });
  });

  var webflowTouch = __commonjs(function (module) {
  /**
   * Webflow: Touch events
   */

  var Webflow = require$$0;

  Webflow.define('touch', module.exports = function($) {
    var api = {};
    var fallback = !document.addEventListener;
    var getSelection = window.getSelection;

    // Fallback to click events in old IE
    if (fallback) {
      $.event.special.tap = { bindType: 'click', delegateType: 'click' };
    }

    api.init = function(el) {
      if (fallback) return null;
      el = typeof el === 'string' ? $(el).get(0) : el;
      return el ? new Touch(el) : null;
    };

    function Touch(el) {
      var active = false;
      var dirty = false;
      var useTouch = false;
      var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
      var startX;
      var startY;
      var lastX;

      el.addEventListener('touchstart', start, false);
      el.addEventListener('touchmove', move, false);
      el.addEventListener('touchend', end, false);
      el.addEventListener('touchcancel', cancel, false);
      el.addEventListener('mousedown', start, false);
      el.addEventListener('mousemove', move, false);
      el.addEventListener('mouseup', end, false);
      el.addEventListener('mouseout', cancel, false);

      function start(evt) {
        // We don’t handle multi-touch events yet.
        var touches = evt.touches;
        if (touches && touches.length > 1) {
          return;
        }

        active = true;
        dirty = false;

        if (touches) {
          useTouch = true;
          startX = touches[0].clientX;
          startY = touches[0].clientY;
        } else {
          startX = evt.clientX;
          startY = evt.clientY;
        }

        lastX = startX;
      }

      function move(evt) {
        if (!active) return;

        if (useTouch && evt.type === 'mousemove') {
          evt.preventDefault();
          evt.stopPropagation();
          return;
        }

        var touches = evt.touches;
        var x = touches ? touches[0].clientX : evt.clientX;
        var y = touches ? touches[0].clientY : evt.clientY;

        var velocityX = x - lastX;
        lastX = x;

        // Allow swipes while pointer is down, but prevent them during text selection
        if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
          triggerEvent('swipe', evt, { direction: velocityX > 0 ? 'right' : 'left' });
          cancel();
        }

        // If pointer moves more than 10px flag to cancel tap
        if (Math.abs(x - startX) > 10 || Math.abs(y - startY) > 10) {
          dirty = true;
        }
      }

      function end(evt) {
        if (!active) return;
        active = false;

        if (useTouch && evt.type === 'mouseup') {
          evt.preventDefault();
          evt.stopPropagation();
          useTouch = false;
          return;
        }

        if (!dirty) triggerEvent('tap', evt);
      }

      function cancel() {
        active = false;
      }

      function destroy() {
        el.removeEventListener('touchstart', start, false);
        el.removeEventListener('touchmove', move, false);
        el.removeEventListener('touchend', end, false);
        el.removeEventListener('touchcancel', cancel, false);
        el.removeEventListener('mousedown', start, false);
        el.removeEventListener('mousemove', move, false);
        el.removeEventListener('mouseup', end, false);
        el.removeEventListener('mouseout', cancel, false);
        el = null;
      }

      // Public instance methods
      this.destroy = destroy;
    }

    // Wrap native event to supoprt preventdefault + stopPropagation
    function triggerEvent(type, evt, data) {
      var newEvent = $.Event(type, { originalEvent: evt });
      $(evt.target).trigger(newEvent, data);
    }

    // Listen for touch events on all nodes by default.
    api.instance = api.init(document);

    // Export module
    return api;
  });
  });

}());

