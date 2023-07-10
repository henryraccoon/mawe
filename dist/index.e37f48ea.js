// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderResults", ()=>renderResults);
var _model = require("./model");
var _mapView = require("./views/mapView");
var _tflResultsView = require("./views/tflResultsView");
var _weatherView = require("./views/weatherView");
var _paginationView = require("./views/paginationView");
var _config = require("./config");
const postCodeCheckbox = document.getElementById("post-code");
const formInput = document.querySelector("#form-group-input");
const searchButton = document.getElementById("submit-button");
const postCodeInput = document.getElementById("post-code-input");
const transportContainer = document.getElementById("stations-list");
let checkboxLazyWalker = document.getElementById("lazy-walker");
let checkboxGoodWalker = document.getElementById("good-walker");
const renderResults = async function(page) {
    await _model.nearestStops();
    transportContainer.innerHTML = "";
    _paginationView.getSearchResultsPage(allStations, page).sort((a, b)=>b.distance - a.distance).forEach((point)=>{
        if (point.modes.length === 1 && point.modes[0] === "bus") {
            _mapView.addBusMarker(point);
            _tflResultsView.displayBusResults(point);
        } else if (point.modes.length === 1 && point.modes[0] === "tube") {
            _mapView.addTrainTubeMarker(point);
            _tflResultsView.displayTrainTubeResults(point);
        } else if (point.modes.length === 1 && point.modes[0] === "national-rail") {
            _mapView.addTrainTubeMarker(point);
            _tflResultsView.displayTrainTubeResults(point);
        } else if (point.lines.length > 0) {
            _mapView.addJoinedMarker(point);
            _tflResultsView.displayJoinedResults(point);
        }
    });
    _paginationView.paginationButtons();
};
/// weather
const renderWeather = async function() {
    try {
        const data = await _model.fetchWeatherData();
        const currentWeather = data.current;
        const forecastWeather = data.forecast.forecastday[0].day;
        // Call the view function to render the weather data
        _weatherView.renderWeatherView(currentWeather, forecastWeather);
    } catch (error) {
        console.error(error);
    }
};
// event handlers
// enter postcode check box
postCodeCheckbox.addEventListener("change", function() {
    postCodeInput.style.display = this.checked ? "block" : "none";
    searchButton.style.display = this.checked ? "block" : "none";
});
formInput.addEventListener("submit", async function(e) {
    e.preventDefault();
    await _model.getLocationByPostcode(postCodeInput.value);
    if (!_model.state.map) {
        renderMap();
        await renderWeather();
        await renderResults();
        postCodeInput.style.display = "none";
    } else {
        _model.state.map.setView([
            _model.state.latitude,
            _model.state.longitude
        ], _config.MAPZOOM);
        const marker = L.marker([
            _model.state.latitude,
            _model.state.longitude
        ]).addTo(_model.state.map);
        await renderWeather();
        await renderResults();
        postCodeInput.value = "";
    }
});
checkboxLazyWalker.addEventListener("change", function() {
    if (this.checked) {
        if (checkboxGoodWalker.checked) checkboxGoodWalker.checked = false;
        _config.RADIUS = 200;
        _config.MAPZOOM = 16;
        transportContainer.innerHTML = "";
        renderResults();
        _paginationView.paginationButtons();
        _model.state.map.setView([
            _model.state.latitude,
            _model.state.longitude
        ], _config.MAPZOOM);
    }
});
checkboxGoodWalker.addEventListener("change", function() {
    if (this.checked) {
        if (checkboxLazyWalker.checked) checkboxLazyWalker.checked = false;
        _config.RADIUS = 800;
        _config.MAPZOOM = 15;
        transportContainer.innerHTML = "";
        renderResults();
        _paginationView.paginationButtons();
        _model.state.map.setView([
            _model.state.latitude,
            _model.state.longitude
        ], _config.MAPZOOM);
    }
});
const init = async function() {
    try {
        await _model.getGeolocation();
        _mapView.renderMap();
        renderWeather();
        await renderResults();
    } catch (err) {
        console.error(err);
    }
};
init();

},{"./model":"Y4A21","./views/mapView":"b2AA2","./views/tflResultsView":"gnEnQ","./views/weatherView":"jcuJR","./views/paginationView":"6z7bi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config":"k5Hzs"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getGeolocation", ()=>getGeolocation);
parcelHelpers.export(exports, "getLocationByPostcode", ()=>getLocationByPostcode);
parcelHelpers.export(exports, "nearestStops", ()=>nearestStops);
parcelHelpers.export(exports, "fetchWeatherData", ()=>fetchWeatherData);
var _config = require("./config");
const autoLocationCheckbox = document.querySelector(".form-group-auto-location");
const state = {
    latitude: 51.4192772,
    longitude: -0.3246571,
    map,
    allStations: [],
    currentMarker: "",
    currentPage: 1
};
const getGeolocation = async function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(position) {
            state.latitude = position.coords.latitude;
            state.longitude = position.coords.longitude;
            resolve();
        }, function(err) {
            alert("could not get your position. try using post code.");
            autoLocationCheckbox.style.display = "none";
            reject(`${err.message}`);
        }) : alert("could not get your position. try using post code.");
    });
};
const getLocationByPostcode = async function(postcode) {
    try {
        const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.error}`);
        state.latitude = data.result.latitude;
        state.longitude = data.result.longitude;
    } catch (err) {
        alert(err);
    }
};
const nearestStops = async function() {
    const tflStops = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${state.latitude}&lon=${state.longitude}&stopTypes=NaptanPublicBusCoachTram,NaptanRailStation,NaptanFerryPort,NaptanMetroStation&radius=${(0, _config.RADIUS)}`);
    const tflData = await tflStops.json();
    const allStationsRaw = tflData.stopPoints;
    allStations = allStationsRaw.filter((station)=>station.lines.length !== 0);
};
const fetchWeatherData = async function() {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${(0, _config.API_KEY_WEATHER)}&q=${state.latitude},${state.longitude}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch weather data");
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY_WEATHER", ()=>API_KEY_WEATHER);
parcelHelpers.export(exports, "RADIUS", ()=>RADIUS);
parcelHelpers.export(exports, "MAPZOOM", ()=>MAPZOOM);
const API_KEY_WEATHER = "4385fe1353574335bc6142923230506";
let RADIUS = 300; // metres
let MAPZOOM = 16;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"b2AA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMap", ()=>renderMap);
parcelHelpers.export(exports, "addBusMarker", ()=>addBusMarker);
parcelHelpers.export(exports, "addTrainTubeMarker", ()=>addTrainTubeMarker);
parcelHelpers.export(exports, "addJoinedMarker", ()=>addJoinedMarker);
parcelHelpers.export(exports, "moveToPopup", ()=>moveToPopup);
parcelHelpers.export(exports, "removeMarker", ()=>removeMarker);
var _helpers = require("../helpers");
var _config = require("../config");
var _model = require("../model");
const transportContainer = document.getElementById("stations-list");
const renderMap = function() {
    (0, _model.state).map = L.map("map").setView([
        (0, _model.state).latitude,
        (0, _model.state).longitude
    ], (0, _config.MAPZOOM));
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo((0, _model.state).map);
    const marker = L.marker([
        (0, _model.state).latitude,
        (0, _model.state).longitude
    ]).addTo((0, _model.state).map);
};
const addBusMarker = function(responseData) {
    L.marker([
        responseData.lat,
        responseData.lon
    ], {
        icon: _helpers.redIcon
    }).addTo((0, _model.state).map).bindPopup(`${responseData.modes[0]}: ${responseData.commonName}. Distance: ${Math.trunc(responseData.distance)}m.`);
};
const addTrainTubeMarker = function(responseData) {
    const modes = [];
    responseData.modes?.forEach((mode)=>modes.push(mode));
    L.marker([
        responseData.lat,
        responseData.lon
    ], {
        icon: _helpers.goldIcon
    }).addTo((0, _model.state).map).bindPopup(`${modes}: ${responseData.commonName}. Distance: ${Math.trunc(responseData.distance)}m.`);
};
const addJoinedMarker = function(responseData) {
    const modes = [];
    responseData.modes?.forEach((mode)=>modes.push(mode));
    L.marker([
        responseData.lat,
        responseData.lon
    ], {
        icon: _helpers.greenIcon
    }).addTo((0, _model.state).map).bindPopup(`${modes}: ${responseData.commonName}. Distance: ${Math.trunc(responseData.distance)}m.`);
};
const moveToPopup = function(event) {
    const stationElement = event.target.closest(".station");
    if (!stationElement) return;
    document.querySelectorAll(".station").forEach((el)=>el.classList.remove("current-preview"));
    stationElement.classList.add("current-preview");
    const currentStation = allStations.find((station)=>station.id === stationElement.dataset.id);
    if ((0, _model.state).currentMarker) removeMarker();
    (0, _model.state).map.setView([
        currentStation.lat,
        currentStation.lon
    ], 18);
    (0, _model.state).currentMarker = L.marker([
        currentStation.lat,
        currentStation.lon
    ], {
        icon: _helpers.greyIcon
    }).addTo((0, _model.state).map).bindPopup(`${currentStation.commonName}. Distance: ${Math.trunc(currentStation.distance)}m.`).openPopup();
};
const removeMarker = function() {
    (0, _model.state).map.removeLayer((0, _model.state).currentMarker);
};
// event handlers
transportContainer.addEventListener("click", moveToPopup);

},{"../helpers":"hGI1E","../config":"k5Hzs","../model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "goldIcon", ()=>goldIcon);
parcelHelpers.export(exports, "greenIcon", ()=>greenIcon);
parcelHelpers.export(exports, "redIcon", ()=>redIcon);
parcelHelpers.export(exports, "greyIcon", ()=>greyIcon);
const goldIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
const greenIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
const redIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});
const greyIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    shadowSize: [
        41,
        41
    ]
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnEnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayBusResults", ()=>displayBusResults);
parcelHelpers.export(exports, "displayTrainTubeResults", ()=>displayTrainTubeResults);
parcelHelpers.export(exports, "displayJoinedResults", ()=>displayJoinedResults);
const transportContainer = document.getElementById("stations-list");
const displayBusResults = function(responseData) {
    let buses = [];
    responseData.lines.forEach((line)=>buses.push(line.name));
    const markup = `
        <ul>
          <li class="station" data-id="${responseData.id}">
            <span class="station-distance">${Math.trunc(responseData.distance)}m.</span>
            <span class="station-name">${responseData.commonName}</span>
            <span class="station-mode">Mode:${responseData.modes[0]}</span>
            <span class="station-buses">Buses:${buses} </span>
            <span class="station-towards">${responseData.additionalProperties[1]?.key}: ${responseData.additionalProperties[1]?.value}</span>
            
          </li>
        </ul>
          `;
    transportContainer.insertAdjacentHTML("afterbegin", markup);
};
const displayTrainTubeResults = function(responseData) {
    let lines = [];
    responseData.lines.forEach((line)=>lines.push(line.name));
    const markup = `
        <ul>
          <li class="station" data-id="${responseData.id}">
            <span class="station-distance">${Math.trunc(responseData.distance)}m.</span>
            <span class="station-name">${responseData.commonName}</span>
            <span class="station-mode">Mode:${responseData.modes[0]}</span>
            <span class="station-buses">Lines:${lines} </span>
          </li>
        </ul>
          `;
    transportContainer.insertAdjacentHTML("afterbegin", markup);
};
const displayJoinedResults = function(responseData) {
    let lines = [];
    let modes = [];
    responseData.modes?.forEach((mode)=>modes.push(mode));
    responseData.lines.forEach((line)=>lines.push(line.name));
    const markup = `
        <ul>
          <li class="station" data-id="${responseData.id}">
            <span class="station-distance">${Math.trunc(responseData.distance)}m.</span>
            <span class="station-name">${responseData.commonName}</span>
            <span class="station-mode">Mode:${modes}</span>
            <span class="station-buses">Lines:${lines} </span>
          </li>
        </ul>
          `;
    transportContainer.insertAdjacentHTML("afterbegin", markup);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcuJR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderWeatherView", ()=>renderWeatherView);
const weatherContainer = document.getElementById("weather-alerts");
const adviceContainer = document.querySelector(".weather-advice");
const renderWeatherView = function(currentWeather, forecastWeather) {
    const { icon } = currentWeather.condition;
    // Advice logic
    const adviceLogic = forecastWeather.daily_chance_of_rain > 40 ? "Today might be raining. You should probably take your umbrella." : forecastWeather.mintemp_c < 10 ? "Today is expected to be cool. You might want to take or wear warmer clothes." : "Enjoy good weather today!";
    const adviceMarkup = `<h4>${adviceLogic}</h4>`;
    const markup = `
        <div id="weather-alerts">
          <div class="current-weather">
            <img src="${icon}" alt="Weather Icon" />
            <div class="weather-details">
              <div class="weather-field">
                <span class="field-label">Temperature:</span>
                <span class="field-value">${currentWeather.temp_c}C</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Feels Like:</span>
                <span class="field-value">${currentWeather.feelslike_c}</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Wind:</span>
                <span class="field-value">${currentWeather.wind_kph} km/h</span>
              </div>
              <div class="weather-field">
                <span class="field-label">Humidity:</span>
                <span class="field-value">${currentWeather.humidity}%</span>
              </div>
            </div>
          </div>
          <div class="expected-today">
            <h3>Expected Today:</h3>
            <div class="weather-field">
              <span class="field-label">Min Temperature:</span>
              <span class="field-value">${forecastWeather.mintemp_c}°C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Max Temperature:</span>
              <span class="field-value">${forecastWeather.maxtemp_c}°C</span>
            </div>
            <div class="weather-field">
              <span class="field-label">Chance of Rain:</span>
              <span class="field-value">${forecastWeather.daily_chance_of_rain}%</span>
            </div>
          </div>
        </div>
      `;
    // Update the weather container with the rendered markup
    weatherContainer.innerHTML = markup;
    adviceContainer.innerHTML = adviceMarkup;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "paginationButtons", ()=>paginationButtons);
var _controller = require("../controller");
var _model = require("../model");
const buttonContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");
const getSearchResultsPage = function(arrayOfStations, page = (0, _model.state).currentPage) {
    (0, _model.state).currentPage = page;
    const start = (page - 1) * 4;
    const end = page * 4;
    return arrayOfStations.slice(start, end);
};
const paginationButtons = function() {
    const numPages = Math.ceil(allStations.length / 4);
    nextButton.innerHTML = "";
    prevButton.innerHTML = "";
    if (!nextButton.classList.contains("hidden")) nextButton.classList.add("hidden");
    if (!prevButton.classList.contains("hidden")) prevButton.classList.add("hidden");
    const markupNext = `
          <span>Page ${(0, _model.state).currentPage + 1}</span>
        `;
    const markupPrev = `
          <span>Page ${(0, _model.state).currentPage - 1}</span>
        `;
    // page 1, and there are other pages
    if ((0, _model.state).currentPage === 1 && numPages > 1) {
        nextButton.dataset.goto = `${(0, _model.state).currentPage + 1}`;
        nextButton.insertAdjacentHTML("afterbegin", markupNext);
        nextButton.classList.remove("hidden");
    }
    (0, _model.state).currentPage === 1 && numPages;
    // last page
    if (numPages === (0, _model.state).currentPage && numPages > 1) {
        prevButton.dataset.goto = `${(0, _model.state).currentPage - 1}`;
        prevButton.insertAdjacentHTML("afterbegin", markupPrev);
        prevButton.classList.remove("hidden");
    }
    // other page
    if ((0, _model.state).currentPage < numPages && (0, _model.state).currentPage !== 1) {
        nextButton.dataset.goto = `${(0, _model.state).currentPage + 1}`;
        nextButton.insertAdjacentHTML("afterbegin", markupNext);
        nextButton.classList.remove("hidden");
        prevButton.dataset.goto = `${(0, _model.state).currentPage - 1}`;
        prevButton.insertAdjacentHTML("afterbegin", markupPrev);
        prevButton.classList.remove("hidden");
    }
};
buttonContainer.addEventListener("click", function(e) {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const goToPage = +btn.dataset.goto;
    (0, _controller.renderResults)(goToPage);
});

},{"../controller":"aenu9","../model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequiree2f9")

//# sourceMappingURL=index.e37f48ea.js.map
