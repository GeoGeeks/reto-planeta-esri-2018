// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/esri_tileinfo.json":'{\r\n  "rows": 256,\r\n  "cols": 256,\r\n  "dpi": 96,\r\n  "compressionQuality": 75,\r\n  "origin": {\r\n   "x": -2.0037508342787E7,\r\n   "y": 2.0037508342787E7\r\n  },\r\n  "spatialReference": {\r\n   "wkid": 102100,\r\n   "latestWkid": 3857\r\n  },\r\n  "lods": [\r\n   {\r\n    "level": 0,\r\n    "resolution": 156543.03392800014,\r\n    "scale": 5.91657527591555E8\r\n   },\r\n   {\r\n    "level": 1,\r\n    "resolution": 78271.51696399994,\r\n    "scale": 2.95828763795777E8\r\n   },\r\n   {\r\n    "level": 2,\r\n    "resolution": 39135.75848200009,\r\n    "scale": 1.47914381897889E8\r\n   },\r\n   {\r\n    "level": 3,\r\n    "resolution": 19567.87924099992,\r\n    "scale": 7.3957190948944E7\r\n   },\r\n   {\r\n    "level": 4,\r\n    "resolution": 9783.93962049996,\r\n    "scale": 3.6978595474472E7\r\n   },\r\n   {\r\n    "level": 5,\r\n    "resolution": 4891.96981024998,\r\n    "scale": 1.8489297737236E7\r\n   },\r\n   {\r\n    "level": 6,\r\n    "resolution": 2445.98490512499,\r\n    "scale": 9244648.868618\r\n   },\r\n   {\r\n    "level": 7,\r\n    "resolution": 1222.992452562495,\r\n    "scale": 4622324.434309\r\n   },\r\n   {\r\n    "level": 8,\r\n    "resolution": 611.4962262813797,\r\n    "scale": 2311162.217155\r\n   },\r\n   {\r\n    "level": 9,\r\n    "resolution": 305.74811314055756,\r\n    "scale": 1155581.108577\r\n   },\r\n   {\r\n    "level": 10,\r\n    "resolution": 152.87405657041106,\r\n    "scale": 577790.554289\r\n   },\r\n   {\r\n    "level": 11,\r\n    "resolution": 76.43702828507324,\r\n    "scale": 288895.277144\r\n   },\r\n   {\r\n    "level": 12,\r\n    "resolution": 38.21851414253662,\r\n    "scale": 144447.638572\r\n   },\r\n   {\r\n    "level": 13,\r\n    "resolution": 19.10925707126831,\r\n    "scale": 72223.819286\r\n   },\r\n   {\r\n    "level": 14,\r\n    "resolution": 9.554628535634155,\r\n    "scale": 36111.909643\r\n   },\r\n   {\r\n    "level": 15,\r\n    "resolution": 4.77731426794937,\r\n    "scale": 18055.954822\r\n   },\r\n   {\r\n    "level": 16,\r\n    "resolution": 2.388657133974685,\r\n    "scale": 9027.977411\r\n   },\r\n   {\r\n    "level": 17,\r\n    "resolution": 1.1943285668550503,\r\n    "scale": 4513.988705\r\n   },\r\n   {\r\n    "level": 18,\r\n    "resolution": 0.5971642835598172,\r\n    "scale": 2256.994353\r\n   },\r\n   {\r\n    "level": 19,\r\n    "resolution": 0.29858214164761665,\r\n    "scale": 1128.497176\r\n   },\r\n   {\r\n    "level": 20,\r\n    "resolution": 0.14929107082380833,\r\n    "scale": 564.248588\r\n   },\r\n   {\r\n    "level": 21,\r\n    "resolution": 0.07464553541190416,\r\n    "scale": 282.124294\r\n   },\r\n   {\r\n    "level": 22,\r\n    "resolution": 0.03732276770595208,\r\n    "scale": 141.062147\r\n   },\r\n   {\r\n    "level": 23,\r\n    "resolution": 0.01866138385297604,\r\n    "scale": 70.5310735\r\n   }\r\n  ]\r\n }'}});
define("dojo/_base/lang dojo/Deferred dojo/json dojo/_base/array dojo/promise/all esri/SpatialReference jimu/portalUtils jimu/shared/basePortalUrlUtils esri/request dojo/text!./esri_tileinfo.json".split(" "),function(g,k,p,m,v,q,l,w,x,y){function r(a){if(!a)return null;var b=a.indexOf("?");return 0===a.search(/http|\/\//)&&-1!==b?a.slice(0,b).replace(/\/*$/g,""):a}function f(a){return a?w.removeProtocol(r(a)):""}function z(a){var b=new k;l.getPortalSelfInfo(a).then(g.hitch(this,function(c){var d=
c.basemapGalleryGroupQuery;!0===c.useVectorBasemaps&&c.vectorBasemapGalleryGroupQuery&&(d=c.vectorBasemapGalleryGroupQuery);e.getBasemapGalleryGroup(a,d).then(g.hitch(this,function(a){a.queryItems({start:1,num:100,f:"json",q:l.webMapQueryStr}).then(g.hitch(this,function(a){b.resolve(a)}),g.hitch(this,function(){b.reject()}))}),g.hitch(this,function(){b.reject()}))}));return b}function t(a){return x({url:a,content:{f:"json"},handleAs:"text",callbackParamName:"callback"}).then(function(a){try{return p.parse(a)}catch(c){return null}},
function(){return null})}var e={},A=p.parse(y);e._loadPortalBaseMaps=function(a,b){var c=new k,d=[];z(a).then(function(a){m.forEach(a.results,function(a){var c=new k,n=f(a.thumbnailUrl);d.push(c);a.getItemData().then(function(d){e._getBasemapSpatialReference(a,d).then(g.hitch(this,function(h){var u=d.baseMap.baseMapLayers;e.isBasemapCompatibleWithMap(h,u,b).then(g.hitch(this,function(b){b?c.resolve({layers:u,title:a.title||d.baseMap.title,thumbnailUrl:n,spatialReference:h}):c.resolve({})}))}))})});
v(d).then(function(a){a=m.filter(a,function(a){return a&&a.title?!0:!1},this);c.resolve(a)})},function(a){c.reject(a)});return c};e.isBasemapCompatibleWithMap=function(a,b,c){var d=new k,n=c.spatialReference,h=c.width>c.height?c.width:c.height;if(!n||!b||0>=b.length||!a||!n.equals(new q(+a.wkid)))return d.resolve(!1),d;0===c.getNumLevels()?"OpenStreetMap"===b[0].layerType||b[0].layerType&&-1<b[0].layerType.indexOf("BingMaps")||"WebTiledLayer"===b[0].layerType||"VectorTileLayer"===b[0].layerType||
"ArcGISImageServiceVectorLayer"===b[0].layerType||"ArcGISTiledImageServiceLayer"===b[0].layerType?d.resolve(!1):d.resolve(!0):b[0].layerType&&0===b[0].layerType.indexOf("ArcGIS")&&b[0].url?t(b[0].url).then(function(a){(b[0].serviceInfoResponse=a)&&a.tileInfo?d.resolve(e.tilingSchemeCompatible(c.__tileInfo,a.tileInfo,h)):a&&a.capabilities&&(0<=a.capabilities.indexOf("Map")||0<=a.capabilities.indexOf("Image"))?d.resolve(!0):d.resolve(!1)}):"WMS"===b[0].layerType?d.resolve(!0):e.isNoUrlLayerMap(b)||
"VectorTileLayer"===b[0].layerType?d.resolve(e.tilingSchemeCompatible(c.__tileInfo,A,h)):d.resolve(e.tilingSchemeCompatible(c.__tileInfo,b[0].tileInfo,h));return d};e.tilingSchemeCompatible=function(a,b,c){if(a&&b){var d=!1,e=!1,h,f;for(h=0;h<a.lods.length;h++){var g=a.lods[h].scale;a.dpi!==b.dpi&&(g=a.lods[h].scale/a.dpi);for(f=0;f<b.lods.length;f++){var k=b.lods[f].scale;a.dpi!==b.dpi&&(k=b.lods[f].scale/b.dpi);if(Math.abs(k-g)/k<1/c)if(d){e=!0;break}else d=!0;if(k<g)break}if(e)break}a=e?!0:!d||
1!==a.lods.length&&1!==b.lods.length?!1:!0;return a}return!0};e.isSameBasemapLayer=function(a,b){if(a.layerType&&b.layerType){if(a.layerType!==b.layerType)return!1;if("ArcGISImageServiceVectorLayer"===a.layerType||"ArcGISTiledImageServiceLayer"===a.layerType||"ArcGISTiledMapServiceLayer"===a.layerType||"ArcGISMapServiceLayer"===a.layerType||"ArcGISImageServiceLayer"===a.layerType)return a=f(a.url||""),b=f(b.url||""),a.toLowerCase()===b.toLowerCase();if("BingMapsAerial"===a.layerType||"BingMapsRoad"===
a.layerType||"BingMapsHybrid"===a.layerType||"OpenStreetMap"===a.layerType)return!0;if("VectorTileLayer"===a.layerType)return a=f(a.styleUrl||""),b=f(b.styleUrl||""),a.toLowerCase()===b.toLowerCase();if("WMS"===a.layerType)return a=f(a.mapUrl||""),b=f(b.mapUrl||""),a.toLowerCase()===b.toLowerCase();if("WebTiledLayer"===a.layerType){if(a.templateUrl&&b.templateUrl)return a=f(a.templateUrl||""),b=f(b.templateUrl||""),a.toLowerCase()===b.toLowerCase();if(a.wmtsInfo&&b.wmtsInfo)return a=f(a.wmtsInfo.url||
""),b=f(b.wmtsInfo.url||""),a.toLowerCase()===b.toLowerCase()}}else return a=f(a.url||""),b=f(b.url||""),a.toLowerCase()===b.toLowerCase();return!1};e.compareSameBasemapByOrder=function(a,b){a=a.layers;b=b.layers;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(!e.isSameBasemapLayer(a[c],b[c]))return!1;return!0};e.isBingMap=function(a){if(!a||!a.layers)return!1;for(var b=0;b<a.layers.length;b++)if("BingMapsAerial"===a.layers[b].type||"BingMapsRoad"===a.layers[b].type||"BingMapsHybrid"===
a.layers[b].type)return!0;return!1};e.isNoUrlLayerMap=function(a){for(var b=0;b<a.length;b++)if("BingMapsAerial"===a[b].type||"BingMapsRoad"===a[b].type||"BingMapsHybrid"===a[b].type||"OpenStreetMap"===a[b].type)return!0;return!1};e.getToken=function(a){a=l.getPortal(a);a.updateCredential();return a.credential?"?token\x3d"+a.credential.token:""};e.removeUrlQuery=function(a){return r(a)};e.getStanderdUrl=function(a){return f(a)};e.getUniqueTitle=function(a,b){if(!b||0===b.length)return a;b=m.filter(b,
function(b){return b===a?!0:0===b.indexOf(a)?(b=b.substr(a.length+1),!isNaN(+b)):!1});if(0===b.length)return a;b=m.map(b,function(b){return b===a?0:+b.substr(a.length+1)});b=b.sort();return a+" "+(b[b.length-1]+1)};e.getBasemapInfo=function(a,b){var c,d;return l.getPortal(a).getItemById(b).then(function(a){c=a;return a.getItemData()}).then(function(a){d=a;return e._getBasemapSpatialReference(c,a)}).then(function(a){return{thumbnailUrl:c.thumbnailUrl,title:c.title||d.baseMap.title,layers:d.baseMap.baseMapLayers,
spatialReference:new q(a)}})};e.getBasemapGalleryGroup=function(a,b){var c=new k;a=l.getPortal(a);var d=b.indexOf("esri_");if(0<=d){var d=b.slice(d,d+7),e="esri_"+dojoConfig.locale.slice(0,2);b=b.replace(d,e)}a.queryGroups({f:"json",q:b}).then(g.hitch(this,function(a){0<a.results.length?c.resolve(a.results[0]):c.reject()}),g.hitch(this,function(){c.reject()}));return c};e._getBasemapSpatialReference=function(a,b){var c=null,d=!1,f=new k;if(a.owner&&0===a.owner.indexOf("esri_")||e.isNoUrlLayerMap(b.baseMap.baseMapLayers))c=
{wkid:"102100"};else if(b.spatialReference||a.spatialReference)c=b.spatialReference||a.spatialReference;else if(b.baseMap.baseMapLayers&&b.baseMap.baseMapLayers[0])if(a=b.baseMap.baseMapLayers[0],a.url&&0<a.url.indexOf("rest/services"))d=!0,t(b.baseMap.baseMapLayers[0].url).then(g.hitch(this,function(a){a&&a.spatialReference&&(c=a.spatialReference);f.resolve(c)}),function(a){console.error(a);f.resolve(null)});else if("VectorTileLayer"===a.layerType)c={wkid:"102100"};else if(b=a.fullExtent||a.initialExtent)c=
b.spatialReference;d||f.resolve(c);return f};return e});