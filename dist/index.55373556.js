var t,e,n,r,o,a,i,c,s,u,l,f,p,d,h,m,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},y={},b={},w=function(t){return t&&t.Math==Math&&t};b=w("object"==typeof globalThis&&globalThis)||w("object"==typeof window&&window)||w("object"==typeof self&&self)||w("object"==typeof v&&v)||function(){return this}()||b||Function("return this")();var E={},S={};E=!(S=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},j={};j=!S(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});"use strict";var k=Function.prototype.call;T=j?k.bind(k):function(){return k.apply(k,arguments)};var P={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;e=M&&!P.call({1:2},1)?function(t){var e=M(this,t);return!!e&&e.enumerable}:P;var O={};O=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var x={},$={},I={},_=Function.prototype,A=_.call,C=j&&_.bind.bind(A,A),N={},F=(I=j?C:function(t){return function(){return A.apply(t,arguments)}})({}.toString),B=I("".slice);N=function(t){return B(F(t),8,-1)};var D=Object,H=I("".split);$=S(function(){return!D("z").propertyIsEnumerable(0)})?function(t){return"String"==N(t)?H(t,""):D(t)}:D;var z={},U={};U=function(t){return null==t};var q=TypeError;z=function(t){if(U(t))throw q("Can't call method on "+t);return t},x=function(t){return $(z(t))};var G={},R={},Z={},V={},W={},Y="object"==typeof document&&document.all,K=(W={all:Y,IS_HTMLDDA:void 0===Y&&void 0!==Y}).all;V=W.IS_HTMLDDA?function(t){return"function"==typeof t||t===K}:function(t){return"function"==typeof t};var J=W.all;Z=W.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:V(t)||t===J}:function(t){return"object"==typeof t?null!==t:V(t)};var Q={},X={};X=function(t,e){var n;return arguments.length<2?V(n=b[t])?n:void 0:b[t]&&b[t][e]};var tt={};tt=I({}.isPrototypeOf);var te={},tn={},tr={},to={};to="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ta=b.process,ti=b.Deno,tc=ta&&ta.versions||ti&&ti.version,ts=tc&&tc.v8;ts&&(r=(n=ts.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&to&&(!(n=to.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=to.match(/Chrome\/(\d+)/))&&(r=+n[1]),tr=r;var tu=b.String;te=(tn=!!Object.getOwnPropertySymbols&&!S(function(){var t=Symbol();return!tu(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&tr&&tr<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tl=Object;Q=te?function(t){return"symbol"==typeof t}:function(t){var e=X("Symbol");return V(e)&&tt(e.prototype,tl(t))};var tf={},tp={},td={},th=String;td=function(t){try{return th(t)}catch(t){return"Object"}};var tm=TypeError;tp=function(t){if(V(t))return t;throw tm(td(t)+" is not a function")},tf=function(t,e){var n=t[e];return U(n)?void 0:tp(n)};var tg={},tv=TypeError;tg=function(t,e){var n,r;if("string"===e&&V(n=t.toString)&&!Z(r=T(n,t))||V(n=t.valueOf)&&!Z(r=T(n,t))||"string"!==e&&V(n=t.toString)&&!Z(r=T(n,t)))return r;throw tv("Can't convert object to primitive value")};var ty={},tb={};tb=!1;var tw={},tL={},tE=Object.defineProperty;tL=function(t,e){try{tE(b,t,{value:e,configurable:!0,writable:!0})}catch(n){b[t]=e}return e};var tS="__core-js_shared__";tw=b[tS]||tL(tS,{}),(ty=function(t,e){return tw[t]||(tw[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.31.1",mode:tb?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"});var tT={},tj={},tk=Object;tj=function(t){return tk(z(t))};var tP=I({}.hasOwnProperty);tT=Object.hasOwn||function(t,e){return tP(tj(t),e)};var tM={},tO=0,tx=Math.random(),t$=I(1..toString);tM=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t$(++tO+tx,36)};var tI=b.Symbol,t_=ty("wks"),tA=te?tI.for||tI:tI&&tI.withoutSetter||tM,tC=TypeError,tN=function(t){return tT(t_,t)||(t_[t]=tn&&tT(tI,t)?tI[t]:tA("Symbol."+t)),t_[t]}("toPrimitive");R=function(t,e){if(!Z(t)||Q(t))return t;var n,r=tf(t,tN);if(r){if(void 0===e&&(e="default"),!Z(n=T(r,t,e))||Q(n))return n;throw tC("Can't convert object to primitive value")}return void 0===e&&(e="number"),tg(t,e)},G=function(t){var e=R(t,"string");return Q(e)?e:e+""};var tF={},tB={},tD=b.document,tH=Z(tD)&&Z(tD.createElement);tB=function(t){return tH?tD.createElement(t):{}},tF=!E&&!S(function(){return 7!=Object.defineProperty(tB("div"),"a",{get:function(){return 7}}).a});var tz=Object.getOwnPropertyDescriptor;t=E?tz:function(t,n){if(t=x(t),n=G(n),tF)try{return tz(t,n)}catch(t){}if(tT(t,n))return O(!T(e,t,n),t[n])};var tU={},tq={};tq=E&&S(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tG={},tR=String,tZ=TypeError;tG=function(t){if(Z(t))return t;throw tZ(tR(t)+" is not an object")};var tV=TypeError,tW=Object.defineProperty,tY=Object.getOwnPropertyDescriptor,tK="enumerable",tJ="configurable",tQ="writable";o=E?tq?function(t,e,n){if(tG(t),e=G(e),tG(n),"function"==typeof t&&"prototype"===e&&"value"in n&&tQ in n&&!n[tQ]){var r=tY(t,e);r&&r[tQ]&&(t[e]=n.value,n={configurable:tJ in n?n[tJ]:r[tJ],enumerable:tK in n?n[tK]:r[tK],writable:!1})}return tW(t,e,n)}:tW:function(t,e,n){if(tG(t),e=G(e),tG(n),tF)try{return tW(t,e,n)}catch(t){}if("get"in n||"set"in n)throw tV("Accessors not supported");return"value"in n&&(t[e]=n.value),t},tU=E?function(t,e,n){return o(t,e,O(1,n))}:function(t,e,n){return t[e]=n,t};var tX={},t0={},t1=Function.prototype,t4=E&&Object.getOwnPropertyDescriptor,t2=tT(t1,"name")&&(!E||E&&t4(t1,"name").configurable),t3={},t7=I(Function.toString);V(tw.inspectSource)||(tw.inspectSource=function(t){return t7(t)}),t3=tw.inspectSource;var t5={},t9={},t8=b.WeakMap;t9=V(t8)&&/native code/.test(String(t8));var t6={},et=ty("keys");t6=function(t){return et[t]||(et[t]=tM(t))};var ee={};ee={};var en="Object already initialized",er=b.TypeError,eo=b.WeakMap;if(t9||tw.state){var ea=tw.state||(tw.state=new eo);ea.get=ea.get,ea.has=ea.has,ea.set=ea.set,a=function(t,e){if(ea.has(t))throw er(en);return e.facade=t,ea.set(t,e),e},i=function(t){return ea.get(t)||{}},c=function(t){return ea.has(t)}}else{var ei=t6("state");ee[ei]=!0,a=function(t,e){if(tT(t,ei))throw er(en);return e.facade=t,tU(t,ei,e),e},i=function(t){return tT(t,ei)?t[ei]:{}},c=function(t){return tT(t,ei)}}var ec=(t5={set:a,get:i,has:c,enforce:function(t){return c(t)?i(t):a(t,{})},getterFor:function(t){return function(e){var n;if(!Z(e)||(n=i(e)).type!==t)throw er("Incompatible receiver, "+t+" required");return n}}}).enforce,es=t5.get,eu=String,el=Object.defineProperty,ef=I("".slice),ep=I("".replace),ed=I([].join),eh=E&&!S(function(){return 8!==el(function(){},"length",{value:8}).length}),em=String(String).split("String"),eg=t0=function(t,e,n){"Symbol("===ef(eu(e),0,7)&&(e="["+ep(eu(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!tT(t,"name")||t2&&t.name!==e)&&(E?el(t,"name",{value:e,configurable:!0}):t.name=e),eh&&n&&tT(n,"arity")&&t.length!==n.arity&&el(t,"length",{value:n.arity});try{n&&tT(n,"constructor")&&n.constructor?E&&el(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=ec(t);return tT(r,"source")||(r.source=ed(em,"string"==typeof e?e:"")),t};Function.prototype.toString=eg(function(){return V(this)&&es(this).source||t3(this)},"toString"),tX=function(t,e,n,r){r||(r={});var a=r.enumerable,i=void 0!==r.name?r.name:e;if(V(n)&&t0(n,i,r),r.global)a?t[e]=n:tL(e,n);else{try{r.unsafe?t[e]&&(a=!0):delete t[e]}catch(t){}a?t[e]=n:o(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var ev={},ey={},eb={},ew={},eL={},eE={},eS=Math.ceil,eT=Math.floor;eE=Math.trunc||function(t){var e=+t;return(e>0?eT:eS)(e)},eL=function(t){var e=+t;return e!=e||0===e?0:eE(e)};var ej=Math.max,ek=Math.min;ew=function(t,e){var n=eL(t);return n<0?ej(n+e,0):ek(n,e)};var eP={},eM={},eO=Math.min;eM=function(t){return t>0?eO(eL(t),9007199254740991):0},eP=function(t){return eM(t.length)};var ex=function(t){return function(e,n,r){var o,a=x(e),i=eP(a),c=ew(r,i);if(t&&n!=n){for(;i>c;)if((o=a[c++])!=o)return!0}else for(;i>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}},e$={includes:ex(!0),indexOf:ex(!1)}.indexOf,eI=I([].push);eb=function(t,e){var n,r=x(t),o=0,a=[];for(n in r)!tT(ee,n)&&tT(r,n)&&eI(a,n);for(;e.length>o;)tT(r,n=e[o++])&&(~e$(a,n)||eI(a,n));return a};var e_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");s=Object.getOwnPropertyNames||function(t){return eb(t,e_)},u=Object.getOwnPropertySymbols;var eA=I([].concat);ey=X("Reflect","ownKeys")||function(t){var e=s(tG(t));return u?eA(e,u(t)):e},ev=function(e,n,r){for(var a=ey(n),i=0;i<a.length;i++){var c=a[i];tT(e,c)||r&&tT(r,c)||o(e,c,t(n,c))}};var eC={},eN=/#|\.prototype\./,eF=function(t,e){var n=eD[eB(t)];return n==ez||n!=eH&&(V(e)?S(e):!!e)},eB=eF.normalize=function(t){return String(t).replace(eN,".").toLowerCase()},eD=eF.data={},eH=eF.NATIVE="N",ez=eF.POLYFILL="P";eC=eF,y=function(e,n){var r,o,a,i,c,s=e.target,u=e.global,l=e.stat;if(r=u?b:l?b[s]||tL(s,{}):(b[s]||{}).prototype)for(o in n){if(i=n[o],a=e.dontCallGetSet?(c=t(r,o))&&c.value:r[o],!eC(u?o:s+(l?".":"#")+o,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;ev(i,a)}(e.sham||a&&a.sham)&&tU(i,"sham",!0),tX(r,o,i,e)}};var eU={},eq={},eG=Function.prototype,eR=eG.apply,eZ=eG.call;eq="object"==typeof Reflect&&Reflect.apply||(j?eZ.bind(eR):function(){return eZ.apply(eR,arguments)});var eV={},eW={},eY=(eW=function(t){if("Function"===N(t))return I(t)})(eW.bind);eV=function(t,e){return tp(t),void 0===e?t:j?eY(t,e):function(){return t.apply(e,arguments)}};var eK={};eK=X("document","documentElement");var eJ={};eJ=I([].slice);var eQ={},eX=TypeError;eQ=function(t,e){if(t<e)throw eX("Not enough arguments");return t};var e0={};e0=/(?:ipad|iphone|ipod).*applewebkit/i.test(to);var e1={},e4={},e2=e4={};function e3(){throw Error("setTimeout has not been defined")}function e7(){throw Error("clearTimeout has not been defined")}function e5(t){if(l===setTimeout)return setTimeout(t,0);if((l===e3||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:e3}catch(t){l=e3}try{f="function"==typeof clearTimeout?clearTimeout:e7}catch(t){f=e7}}();var e9=[],e8=!1,e6=-1;function nt(){e8&&p&&(e8=!1,p.length?e9=p.concat(e9):e6=-1,e9.length&&ne())}function ne(){if(!e8){var t=e5(nt);e8=!0;for(var e=e9.length;e;){for(p=e9,e9=[];++e6<e;)p&&p[e6].run();e6=-1,e=e9.length}p=null,e8=!1,function(t){if(f===clearTimeout)return clearTimeout(t);if((f===e7||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}(t)}}function nn(t,e){this.fun=t,this.array=e}function nr(){}e2.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];e9.push(new nn(t,e)),1!==e9.length||e8||e5(ne)},nn.prototype.run=function(){this.fun.apply(null,this.array)},e2.title="browser",e2.browser=!0,e2.env={},e2.argv=[],e2.version="",e2.versions={},e2.on=nr,e2.addListener=nr,e2.once=nr,e2.off=nr,e2.removeListener=nr,e2.removeAllListeners=nr,e2.emit=nr,e2.prependListener=nr,e2.prependOnceListener=nr,e2.listeners=function(t){return[]},e2.binding=function(t){throw Error("process.binding is not supported")},e2.cwd=function(){return"/"},e2.chdir=function(t){throw Error("process.chdir is not supported")},e2.umask=function(){return 0},e1=void 0!==e4&&"process"==N(e4);var no=b.setImmediate,na=b.clearImmediate,ni=b.process,nc=b.Dispatch,ns=b.Function,nu=b.MessageChannel,nl=b.String,nf=0,np={},nd="onreadystatechange";S(function(){d=b.location});var nh=function(t){if(tT(np,t)){var e=np[t];delete np[t],e()}},nm=function(t){return function(){nh(t)}},ng=function(t){nh(t.data)},nv=function(t){b.postMessage(nl(t),d.protocol+"//"+d.host)};no&&na||(no=function(t){eQ(arguments.length,1);var e=V(t)?t:ns(t),n=eJ(arguments,1);return np[++nf]=function(){eq(e,void 0,n)},h(nf),nf},na=function(t){delete np[t]},e1?h=function(t){ni.nextTick(nm(t))}:nc&&nc.now?h=function(t){nc.now(nm(t))}:nu&&!e0?(g=(m=new nu).port2,m.port1.onmessage=ng,h=eV(g.postMessage,g)):b.addEventListener&&V(b.postMessage)&&!b.importScripts&&d&&"file:"!==d.protocol&&!S(nv)?(h=nv,b.addEventListener("message",ng,!1)):h=nd in tB("script")?function(t){eK.appendChild(tB("script"))[nd]=function(){eK.removeChild(this),nh(t)}}:function(t){setTimeout(nm(t),0)});var ny=(eU={set:no,clear:na}).clear;y({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==ny},{clearImmediate:ny});"use strict";var nb=eU.set,nw={},nL={};nL="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var nE=b.Function,nS=/MSIE .\./.test(to)||nL&&function(){var t=b.Bun.version.split(".");return t.length<3||0==t[0]&&(t[1]<3||3==t[1]&&0==t[2])}();nw=function(t,e){var n=e?2:1;return nS?function(r,o){var a=eQ(arguments.length,1)>n,i=V(r)?r:nE(r),c=a?eJ(arguments,n):[],s=a?function(){eq(i,this,c)}:i;return e?t(s,o):t(s)}:t};var nT=b.setImmediate?nw(nb,!1):nb;y({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==nT},{setImmediate:nT});const nj=document.querySelector(".form-group-auto-location"),nk={latitude:"",longitude:"",map:map,allStations:[],currentMarker:"",currentPage:1,radius:300,mapZoom:16},nP=async function(){return new Promise(function(t,e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){nk.latitude=e.coords.latitude,nk.longitude=e.coords.longitude,t()},function(t){alert("Could not get your position. Try using post code."),nj.style.display="none",e(`${t.message}`)}):alert("Could not get your position. Try using post code.")})},nM=async function(t){try{let e=await fetch(`https://api.postcodes.io/postcodes/${t}`),n=await e.json();if(!e.ok)throw Error(`${n.error}`);nk.latitude=n.result.latitude,nk.longitude=n.result.longitude}catch(t){alert(t)}},nO=async function(){let t=await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${nk.latitude}&lon=${nk.longitude}&stopTypes=NaptanPublicBusCoachTram,NaptanRailStation,NaptanFerryPort,NaptanMetroStation&radius=${nk.radius}`),e=await t.json(),n=e.stopPoints;nk.allStations=n.filter(t=>0!==t.lines.length)},nx=async function(){try{let t=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4385fe1353574335bc6142923230506&q=${nk.latitude},${nk.longitude}`),e=await t.json();return e}catch(t){throw console.error(t),Error("Failed to fetch weather data")}},n$=new L.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),nI=new L.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),n_=new L.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),nA=new L.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),nC=document.getElementById("stations-list"),nN=function(){nk.map=L.map("map").setView([nk.latitude,nk.longitude],16),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(nk.map),L.marker([nk.latitude,nk.longitude]).addTo(nk.map)},nF=function(t){L.marker([t.lat,t.lon],{icon:n_}).addTo(nk.map).bindPopup(`${t.modes[0][0].toUpperCase()+t.modes[0].slice(1)}: ${t.commonName}. Distance: ${Math.trunc(t.distance)}m.`)},nB=function(t){let e=[];t.modes?.forEach(t=>e.push(t)),L.marker([t.lat,t.lon],{icon:n$}).addTo(nk.map).bindPopup(`${e.map(t=>t[0].toUpperCase()+t.slice(1).replace("-"," "))}: ${t.commonName}. Distance: ${Math.trunc(t.distance)}m.`)},nD=function(t){let e=[];t.modes?.forEach(t=>e.push(t));let n=e.map(t=>t[0].toUpperCase()+t.slice(1).replace("-"," "));L.marker([t.lat,t.lon],{icon:nI}).addTo(nk.map).bindPopup(`${n}: ${t.commonName}. Distance: ${Math.trunc(t.distance)}m.`)},nH=function(){nk.map.removeLayer(nk.currentMarker)};nC.addEventListener("click",function(t){let e=t.target.closest(".station");if(!e)return;document.querySelectorAll(".station").forEach(t=>t.classList.remove("current-preview")),e.classList.add("current-preview");let n=nk.allStations.find(t=>t.id===e.dataset.id);console.log(n),nk.currentMarker&&nH(),nk.map.setView([n.lat,n.lon],18),nk.currentMarker=L.marker([n.lat,n.lon],{icon:nA}).addTo(nk.map).bindPopup(`${n.commonName}. Distance: ${Math.trunc(n.distance)}m.`).openPopup()});const nz=document.getElementById("stations-list"),nU=function(t){let e=[];t.lines.forEach(t=>e.push(t.name));let n=`
        <ul>
          <li class="station" data-id="${t.id}">
            <span class="station-distance">${Math.trunc(t.distance)}m.</span>
            <span class="station-name">${t.commonName}(${t.indicator})</span>
            <span class="station-mode">Mode: ${t.modes[0][0].toUpperCase()+t.modes[0].slice(1)}</span>
            <span class="station-buses">Buses:${e} </span>
            <span class="station-towards">${t.additionalProperties[1]?.key}: ${t.additionalProperties[1]?.value}</span>
            
          </li>
        </ul>
          `;nz.insertAdjacentHTML("afterbegin",n)},nq=function(t){let e=[];t.lines.forEach(t=>e.push(t.name));let n=`
        <ul>
          <li class="station" data-id="${t.id}">
            <span class="station-distance">${Math.trunc(t.distance)}m.</span>
            <span class="station-name">${t.commonName}</span>
            <span class="station-mode">Mode: ${t.modes[0][0].toUpperCase()+t.modes[0].slice(1).replace("-"," ")}</span>
            <span class="station-buses">Lines:${e} </span>
          </li>
        </ul>
          `;nz.insertAdjacentHTML("afterbegin",n)},nG=function(t){let e=[],n=[];t.modes?.forEach(t=>n.push(t)),t.lines.forEach(t=>e.push(t.name));let r=n.map(t=>t[0].toUpperCase()+t.slice(1).replace("-"," ")),o=`
        <ul>
          <li class="station" data-id="${t.id}">
            <span class="station-distance">${Math.trunc(t.distance)}m.</span>
            <span class="station-name">${t.commonName}</span>
            <span class="station-mode">Modes: ${r}</span>
            <span class="station-buses">Lines:${e} </span>
          </li>
        </ul>
          `;nz.insertAdjacentHTML("afterbegin",o)},nR=document.getElementById("weather-alerts"),nZ=document.querySelector(".weather-advice"),nV=function(t,e){let{icon:n}=t.condition,r=e.daily_chance_of_rain>40?"Today might be raining. You should probably take your umbrella.":e.mintemp_c<10?"Today is expected to be cool. You might want to take or wear warmer clothes.":"Enjoy good weather today!",o=`<h4>${r}</h4>`,a=`
          <div class="current-weather">
            <img src="${n}" alt="Weather Icon" />
            <div class="weather-details">
              <div class="weather-field">
                <span class="field-label">Temperature:</span>
                <span class="field-value">${t.temp_c}C</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Feels Like:</span>
                <span class="field-value">${t.feelslike_c}</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Wind:</span>
                <span class="field-value">${t.wind_kph} km/h</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Humidity:</span>
                <span class="field-value">${t.humidity}%</span>
              </div>
            </div>
          </div>
          <div class="expected-today">
            <h3>Expected Today:</h3>
            <div class="weather-field">
              <span class="field-label">Min Temperature:</span>
              <span class="field-value">${e.mintemp_c}\xb0C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Max Temperature:</span>
              <span class="field-value">${e.maxtemp_c}\xb0C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Chance of Rain:</span>
              <span class="field-value">${e.daily_chance_of_rain}%</span>
            </div>
          </div>
      `;nR.innerHTML=a,nZ.innerHTML=o},nW=document.getElementById("pagination"),nY=document.getElementById("prev-page"),nK=document.getElementById("next-page"),nJ=function(){let t=Math.ceil(nk.allStations.length/4);nK.innerHTML="",nY.innerHTML="",nK.classList.contains("hidden")||nK.classList.add("hidden"),nY.classList.contains("hidden")||nY.classList.add("hidden");let e=`
          <span>Page ${nk.currentPage+1}</span>
        `,n=`
          <span>Page ${nk.currentPage-1}</span>
        `;1===nk.currentPage&&t>1&&(nK.dataset.goto=`${nk.currentPage+1}`,nK.insertAdjacentHTML("afterbegin",e),nK.classList.remove("hidden")),nk.currentPage,t===nk.currentPage&&t>1&&(nY.dataset.goto=`${nk.currentPage-1}`,nY.insertAdjacentHTML("afterbegin",n),nY.classList.remove("hidden")),nk.currentPage<t&&1!==nk.currentPage&&(nK.dataset.goto=`${nk.currentPage+1}`,nK.insertAdjacentHTML("afterbegin",e),nK.classList.remove("hidden"),nY.dataset.goto=`${nk.currentPage-1}`,nY.insertAdjacentHTML("afterbegin",n),nY.classList.remove("hidden"))};nW.addEventListener("click",function(t){let e=t.target.closest(".btn");if(!e)return;let n=+e.dataset.goto;rt(n)});var nQ=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,n,r,a){var i,c,s=Object.create((n&&n.prototype instanceof g?n:g).prototype);return o(s,"_invoke",{value:(i=new M(a||[]),c=p,function(n,o){if(c===d)throw Error("Generator is already running");if(c===h){if("throw"===n)throw o;return x()}for(i.method=n,i.arg=o;;){var a=i.delegate;if(a){var s=function t(n,r){var o=r.method,a=n.iterator[o];if(a===e)return r.delegate=null,"throw"===o&&n.iterator.return&&(r.method="return",r.arg=e,t(n,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+o+"' method")),m;var i=f(a,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var c=i.arg;return c?c.done?(r[n.resultName]=c.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):c:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,m)}(a,i);if(s){if(s===m)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===p)throw c=h,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=d;var u=f(t,r,i);if("normal"===u.type){if(c=i.done?h:"suspendedYield",u.arg===m)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(c=h,i.method="throw",i.arg=u.arg)}})}),s}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",d="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};u(b,i,function(){return this});var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==n&&r.call(E,i)&&(b=E);var S=y.prototype=g.prototype=Object.create(b);function T(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var n;o(this,"_invoke",{value:function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var s=f(t[o],t,a);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(l).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}}(o,a,n,i)})}return n=n?n.then(i,i):i()}})}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:e,done:!0}}return v.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},T(j.prototype),u(j.prototype,c,function(){return this}),t.AsyncIterator=j,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new j(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},T(S),u(S,s,"Generator"),u(S,i,function(){return this}),u(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else if(u){if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return(i.type=t,i.arg=e,a)?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}({});try{regeneratorRuntime=nQ}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=nQ:Function("r","regeneratorRuntime = r")(nQ)}const nX=document.getElementById("post-code"),n0=document.querySelector("#form-group-input"),n1=document.getElementById("submit-button"),n4=document.getElementById("post-code-input"),n2=document.getElementById("stations-list"),n3=document.querySelector(".hamburger"),n7=window.matchMedia("(max-width: 420px"),n5=document.querySelector("#sidebar"),n9=document.querySelector(".tfl-results");let n8=document.getElementById("lazy-walker"),n6=document.getElementById("good-walker");const rt=async function(t){await nO(),n2.innerHTML="",(function(t,e=nk.currentPage){return nk.currentPage=e,t.slice((e-1)*4,4*e)})(nk.allStations,t).sort((t,e)=>e.distance-t.distance).forEach(t=>{1===t.modes.length&&"bus"===t.modes[0]?(nF(t),nU(t)):1===t.modes.length&&"tube"===t.modes[0]?(nB(t),nq(t)):1===t.modes.length&&"river-bus"===t.modes[0]?(nB(t),nq(t)):1===t.modes.length&&"national-rail"===t.modes[0]?(nB(t),nq(t)):t.lines.length>0&&(nD(t),nG(t))}),nJ()},re=async function(){try{let t=await nx(),e=t.current,n=t.forecast.forecastday[0].day;nV(e,n)}catch(t){console.error(t)}};nX.addEventListener("change",function(){n4.style.display=this.checked?"block":"none",n1.style.display=this.checked?"block":"none"}),n0.addEventListener("submit",async function(t){t.preventDefault(),await nM(n4.value),nk.map?(nk.map.setView([nk.latitude,nk.longitude],nk.mapZoom),L.marker([nk.latitude,nk.longitude]).addTo(nk.map),await re(),await rt(),n4.value=""):(renderMap(),await re(),await rt(),n4.style.display="none")}),n8.addEventListener("change",function(){this.checked&&(n6.checked&&(n6.checked=!1),nk.radius=200,nk.mapZoom=16,n2.innerHTML="",rt(),nJ(),nk.map.setView([nk.latitude,nk.longitude],nk.mapZoom))}),n6.addEventListener("change",function(){this.checked&&(n8.checked&&(n8.checked=!1),nk.radius=800,nk.mapZoom=15,n2.innerHTML="",rt(),nJ(),nk.map.setView([nk.latitude,nk.longitude],nk.mapZoom))}),n3.addEventListener("click",function(){n3.classList.toggle("is-active"),n7.matches&&(n3.classList.contains("is-active")?(n9.style.display="none",n5.style.display="flex"):(n9.style.display="flex",n5.style.display="none"))});const rn=async function(){try{await nP(),nN(),re(),await rt()}catch(t){console.error(t)}};rn();
//# sourceMappingURL=index.55373556.js.map
