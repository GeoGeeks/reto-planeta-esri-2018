// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/AttributeTable/utils":function(){define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/utils".split(" "),function(g,l,t,m,f,e,a,u,k,w,y,n){function v(p,c){if(!p||!p.length)return c||[];if(!c||!c.length)return p;for(var a=[],b=0,h=p.length;b<h;b++)for(var d=p[b],q=0,x=c.length;q<x;q++){var e=c[q];if(e.name===d.name){e.alias!==
d.alias&&(d.alias=e.alias);a.push(d);break}}return a}e.readLayerInfosObj=function(p){return t.getInstance(p,p.itemInfo)};e.readLayerInfosFromMap=function(p,c,a){var b=new m;t.getInstance(p,p.itemInfo).then(g.hitch(this,function(h){var d=[];c?h.traversalLayerInfosOfWebmap(function(b){d.push(b)}):h.traversal(function(b){d.push(b)});if(a){var q=[],p=h.getMapNotesLayerInfoArray();l.forEach(p,function(b){q.push(b.id);b.traversal(function(b){q.push(b.id)})});d=l.filter(d,function(b){return-1===q.indexOf(b.id)})}h=
h.getTableInfoArray();d=d.concat(h);b.resolve(d)}),g.hitch(this,function(h){console.error(h);b.reject(h)}));return b.promise};e.generateColumnsFromFields=function(p,c,a,b,h,d,q){function x(b){if(c&&w.isDefined(c.fieldInfos))for(var d=0,h=c.fieldInfos.length;d<h;d++){var q=c.fieldInfos[d];if(q.fieldName===b)return q.format}return null}var f={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,filed:"selection-handle-column",sortable:!1,_cache:{sortable:!1,statistics:!1}}};
l.forEach(a,g.hitch(e,function(c,a,k){a="field"+a;var r=!!c.domain,u="esriFieldTypeDate"===c.type,A=b&&c.name===b,m="esriFieldTypeDouble"===c.type||"esriFieldTypeSingle"===c.type||"esriFieldTypeInteger"===c.type||"esriFieldTypeSmallInteger"===c.type,n="esriFieldTypeString"===c.type,B=c.alias||c.name,z;z=1===k.length?!1:p&&p[a]?p[a].hidden:c?!c.show&&w.isDefined(c.show):!1;f[a]={label:B,className:a,hidden:z,unhidable:1===k.length?!1:!c.show&&w.isDefined(c.show)&&c._pk,field:c.name,sortable:!1,_cache:{sortable:!!d,
statistics:q&&!r&&m}};n?f[a].formatter=g.hitch(e,e.urlFormatter):u?f[a].formatter=g.hitch(e,e.dateFormatter,x(c.name)):m&&(f[a].formatter=g.hitch(e,e.numberFormatter,x(c.name)));r?f[a].get=g.hitch(e,function(b,d){return this.getCodeValue(b.domain,d[b.name])},c):A?f[a].get=g.hitch(e,function(b,d,h){return this.getTypeName(h[b.name],d)},c,h):r||u||A||(f[a].get=g.hitch(e,function(b,d,h,c){var q=null;d&&h&&0<h.length&&(h=(h=l.filter(h,g.hitch(e,function(b){return b.id===c[d]})))&&h[0]||null)&&h.domains&&
h.domains[b.name]&&h.domains[b.name].codedValues&&(q=this.getCodeValue(h.domains[b.name],c[b.name]));return(b=null!==q?q:c[b.name])||isFinite(b)?b:""},c,b,h))}));return f};e.getTypeName=function(a,c){return n.fieldFormatter.getTypeName(a,c)};e.getCodeValue=function(a,c){return n.fieldFormatter.getCodedValue(a,c)};e.urlFormatter=function(a){return n.fieldFormatter.getFormattedUrl(a)};e.dateFormatter=function(a,c){return n.fieldFormatter.getFormattedDate(c,a)};e.numberFormatter=function(a,c){return n.fieldFormatter.getFormattedNumber(c,
a)};e.readLayerObjectsFromMap=function(a,c,e){var b=new m,h=[];this.readLayerInfosFromMap(a,c,e).then(g.hitch(this,function(d){l.forEach(d,g.hitch(this,function(b){h.push(b.getLayerObject())}));f(h).then(g.hitch(this,function(d){b.resolve(d)}),g.hitch(this,function(d){b.reject(d);console.error(d)}))}),g.hitch(this,function(d){b.reject(d)}));return b.promise};e.readSupportTableInfoFromLayerInfos=function(a){var c=new m,p=[];l.forEach(a,g.hitch(this,function(b){p.push(b.getSupportTableInfo())}));f(p).then(g.hitch(this,
function(b){b=g.clone(b);l.forEach(b,function(b,d){b.id=a[d].id});c.resolve(b)}),function(b){c.reject(b)});return c.promise};e.readConfigLayerInfosFromMap=function(a,c,e){var b=new m,h=[];this.readLayerInfosFromMap(a,c,e).then(g.hitch(this,function(d){var c=[];l.forEach(d,function(b){h.push(b.getSupportTableInfo())});f(h).then(g.hitch(this,function(h){l.forEach(h,g.hitch(this,function(b,h){b.isSupportedLayer&&(d[h].name=d[h].title,c.push(d[h]))}));b.resolve(c)}),g.hitch(this,function(d){b.reject(d)}))}),
g.hitch(this,function(d){b.reject(d)}));return b.promise};e.getConfigInfosFromLayerInfos=function(a){return l.map(a,function(c){return e.getConfigInfoFromLayerInfo(c)})};e.getConfigInfoFromLayerInfo=function(a){var c={};c.name=a.name||a.title;c.id=a.id;c.show=a.isShowInMap();c.layer={url:a.getUrl()};var e=a.getPopupInfo();e&&!e.description&&(c.layer.fields=l.map(e.fieldInfos,function(b){return{name:b.fieldName,alias:b.label,show:b.visible,format:b.format}}),a=g.getObject("layerObject.fields",!1,a),
c.layer.fields=v(c.layer.fields,a),l.some(c.layer.fields,function(b){return b.show})||(c.layer.fields&&0<c.layer.fields.length?c.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return c};e.generateCacheStore=function(a,c,e,b,h){a=new y({layer:a,objectIds:a._objectIds||null,totalCount:c,batchCount:e,where:b||"1\x3d1",spatialFilter:h});c=new k;return new u(a,c,{})};e.generateMemoryStore=function(e,c){return new a(new k({data:e||[],idProperty:c}))};e.merge=function(a,c,e,b){for(var h=
l.map(c,function(b){return b[e]}),d=0,q=a.length;d<q;d++){var f=h.indexOf(a[d][e]);-1<f&&b(a[d],c[f])}};e.syncOrderWith=function(a,c,e){function b(b,d){return l.map(b,function(b){return b[d]})}if(!g.isArray(c)||!e)return a;for(var h=b(a,e),d=[],q=0,f=c.length;q<f;q++){var k=h.indexOf(c[q][e]);-1<k&&(d=d.concat(a.splice(k,1)),h=b(a,e))}return d.concat(a)}})},"dojo/store/Cache":function(){define(["../_base/lang","../when"],function(g,l){var t=function(m,f,e){e=e||{};return g.delegate(m,{query:function(a,
g){a=m.query(a,g);a.forEach(function(a){e.isLoaded&&!e.isLoaded(a)||f.put(a)});return a},queryEngine:m.queryEngine||f.queryEngine,get:function(a,e){return l(f.get(a),function(k){return k||l(m.get(a,e),function(e){e&&f.put(e,{id:a});return e})})},add:function(a,e){return l(m.add(a,e),function(k){f.add(k&&"object"==typeof k?k:a,e);return k})},put:function(a,e){f.remove(e&&e.id||this.getIdentity(a));return l(m.put(a,e),function(k){f.put(k&&"object"==typeof k?k:a,e);return k})},remove:function(a,e){return l(m.remove(a,
e),function(k){return f.remove(a,e)})},evict:function(a){return f.remove(a)}})};g.setObject("dojo.store.Cache",t);return t})},"widgets/AttributeTable/table/FeatureLayerQueryStore":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),function(g,l,t,m,f,e){return g(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(a){g.safeMixin(this,a);this.data=[];this._entityData=[];this.layer=
a.layer;this.objectIds=a.objectIds;this.where=a.where;this.orderByFields=a.orderByFields;this.totalCount=a.totalCount;this.batchCount=a.batchCount||25;this.idProperty=this.layer.objectIdField;this.spatialFilter=a.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new f(this.layer.url))},get:function(a){return this.data[a]},getIdentity:function(a){return a[this.idProperty]},query:function(a,f){var k=new m,g=f&&f.start||0,u=f._export_count||this.batchCount,n=null;"function"===typeof a?n=a(this._entityData):
"[object Array]"===Object.prototype.toString.call(a)&&(n=a);this.objectIds?(n=n?n:this.objectIds,k.objectIds=n.length>=g+this.batchCount?n.slice(g,g+u):n.slice(g)):(n&&0<n.length?k.objectIds=n.length>=g+this.batchCount?n.slice(g,g+u):n.slice(g):(k.start=g,k.num=u,k.where=this.where,k.geometry=this.spatialFilter,k.spatialRelationship=m.SPATIAL_REL_INTERSECTS),(a=f.sort)&&0<a.length&&(a=t.map(a,function(a){return a.attribute+" "+(a.descending?"DESC":"ASC")}),k.orderByFields=a));k.returnGeometry="esriGeometryPoint"===
this.layer.geometryType;k.outFields=["*"];var v=this.totalCount;a=null;a=!k.where;if(!(k.objectIds&&0<k.objectIds.length)&&a)return new e([]);a=this.queryTask?this.queryTask.execute(k):this.layer.queryFeatures(k);a.total=a.then(l.hitch(this,function(a){var c=0,e=this.layer.objectIdField;if(this.objectIds){if(!e)for(c=0;c<a.fields.length;c++)if("esriFieldTypeOID"===a.fields[c].type){e=a.fields[c].name;break}for(var b={},c=0;c<a.features.length;c++)b[a.features[c].attributes[e]]=a.features[c];a.features=
t.map(k.objectIds,function(a){return b[a]})}for(c=0;c<a.features.length;c++)if(a.features[c]){var h=a.features[c];a.features[c]=l.mixin(l.clone(h.attributes),{geometry:h.geometry});this.data[a.features[c][e]]=a.features[c];this._entityData.push(a.features[c])}a=a.features;return v}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");return 0});return new e(a)}})})},"widgets/AttributeTable/table/FeatureLayerQueryResult":function(){define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),
function(g,l,t,m){var f=function(e){function a(a){e[a]||(e[a]=function(){var g=arguments;return m.when(e,function(e){Array.prototype.unshift.call(g,e.features||e);return f(t[a].apply(t,g))})})}if(!e)return e;e.then&&(e=l.delegate(e));e.total||(e.total=m.when(e,function(a){return g._isDefined(a.total)?a.total:a.length||0}));a("forEach");a("filter");a("map");a("some");a("every");return e};return f})},"widgets/AttributeTable/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AttributeTable/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv class\x3d"instruction"\x3e\r\n    \x3cp\x3e${nls.instruction}\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos" class\x3d"table-layer-infos"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n    \x3cul\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"exportcsv" checked\r\n        data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.exportCSV}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"expand" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.expand}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterByMapExtent" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.filterByExtent}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"textSelection" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.allowTextSelection}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AttributeTable/setting/css/style.css":".jimu-widget-attributetable-setting{margin:0; padding:0; font-size:14px; width: 100%; height: 100%; position: relative; color: #596679;}.jimu-widget-attributetable-setting .instruction{font-size: 12px; margin-bottom: 10px;}.jimu-widget-attributetable-setting .show{width: 120px;}.jimu-widget-attributetable-setting .symbol{width: 200px;}.jimu-widget-attributetable-setting .table-layer-infos{width: 100%; height: 240px;}.jimu-widget-attributetable-setting .table-options ul{list-style-type: none; padding: 0;}.jimu-widget-attributetable-setting .jimu-checkbox{margin-right: 20px;}.jimu-rtl .jimu-widget-attributetable-setting .jimu-checkbox{margin-left: 20px; margin-right: 0;}.jimu-widget-attributetable-setting .disable-checkbox{color: #e5e5e5;}.jimu-widget-attributetable-setting th.isDescending .jimu-checkbox {display: none;}.jimu-widget-attributetable-setting td.isDescending {text-align: center;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox {top: 5px; margin: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox {background: transparent; background-image: url('images/order_up.svg'); width: 16px; height: 16px; background-repeat: no-repeat; background-position-x: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox.jimu-icon-checked {background-image: url('images/order_down.svg');}.jimu-widget-attributetable-setting .sortField .dijitSelect{height: 20px; background: #fff; margin: 5px 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-right-width: 0;}.jimu-rtl .jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-left-width: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonText{overflow: hidden; text-overflow: ellipsis; width: 90px;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitInputField{padding-top: 0; padding-bottom: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitArrowButton{background: #fff;}.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-right: 6px;}.jimu-rtl.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-left: 6px;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/AttributeTable/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/query dijit/registry jimu/dijit/Popup jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LoadingShelter ../utils".split(" "),function(g,l,t,m,f,e,a,u,k,w,y,n,v,p,c,r){return g([t,l],{baseClass:"jimu-widget-attributetable-setting",currentFieldTable:null,_allLayerFields:null,_layerInfos:null,_tableInfos:null,_delayedLayerInfos:null,
_delayedLayerInfosAfterInit:null,_unSpportQueryCampsite:null,startup:function(){this.inherited(arguments);this.config.layerInfos||(this.config.layerInfos=[]);this._allLayerFields=[];this._layerInfos=[];this._tableInfos=[];this._delayedLayerInfos=[];this._delayedLayerInfosAfterInit=[];this._unSpportQueryCampsite={};this.displayFieldsTable=new m({fields:[{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"label",title:this.nls.label,width:"60%",type:"text"},{name:"url",
title:this.nls.url,type:"text",hidden:!0},{name:"index",title:"index",type:"text",hidden:!0},{name:"sortField",title:this.nls.sortField,type:"dropdown",width:"130"},{name:"isDescending",title:"",width:"40",type:"checkbox","class":"sort-order"},{name:"actions",title:this.nls.actions,type:"actions",width:"20%",actions:["edit"],"class":"symbol"},{name:"showAttachments",title:"",type:"checkbox",hidden:!0}],selectable:!0,autoHeight:!1});this.displayFieldsTable.placeAt(this.tableLayerInfos);e.setStyle(this.displayFieldsTable.domNode,
{height:"100%"});this.shelter=new c({hidden:!0});this.shelter.placeAt(this.domNode.parentNode.parentNode||this.domNode);this.shelter.startup();this.shelter.show();r.readLayerInfosObj(this.map).then(f.hitch(this,function(b){this.own(b.on("layerInfosChanged",f.hitch(this,this.onLayerInfosChanged)));this.own(u(this.displayFieldsTable,"actions-edit",f.hitch(this,this.editFieldsClick)));this.own(u(this.displayFieldsTable,"row-click",f.hitch(this,this._verifiedOnShowClick)));this.own(u(this.displayFieldsTable,
"row-add",f.hitch(this,function(b){this._addTooltipToSortOrderNode(b)})));this.setConfig(this.config)}))},editFieldsClick:function(b){var a=w(".action-item-parent",b);if(a&&a.length)if(a=this.displayFieldsTable.getRowData(b),a.show){var d=parseInt(a.index,10);this.shelter.show();this._getLayerFields(d).then(f.hitch(this,function(a){this.openFieldsDialog(b,a,d)}),f.hitch(this,function(b){console.error(b)})).always(f.hitch(this,function(){this.shelter.hide()}))}else var c=new v({message:this.nls.warning,
buttons:[{label:this.nls.ok,onClick:f.hitch(this,function(){c.close()})}]})},_verifiedOnShowClick:function(b){var a=this.displayFieldsTable.getRowData(b),d=parseInt(a.index,10),c=null,c=this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?this.config.layerInfos[d]:this._layerInfos[d],d=-1<this._unSpportQueryCampsite.layerNames.indexOf(c.name||c.title);a.show&&d&&(new v({message:this.nls.unsupportQueryWarning}),a.show=!1,this.displayFieldsTable.editRow(b,a))},_getLayerFields:function(b){return this._layerInfos[b].getLayerObject().then(f.hitch(this,
function(h){var d=this._allLayerFields[b];h=a.map(h.fields,function(b){return{name:b.name,alias:b.alias,show:!0}});r.merge(h,d,"name",function(b,a){f.mixin(b,a)});return h=r.syncOrderWith(h,d,"name")}))},_addTooltipToSortOrderNode:function(b){var a=w(".sort-order .jimu-checkbox",b)[0];b=y.byNode(a);var d=this.nls,c=function(b){a.title=b?d.sortOrderTooltips.toAscending:d.sortOrderTooltips.toDescending};b&&(this.own(u(b,"change",c)),c(b.checked))},openFieldsDialog:function(b,a,d){var c=!1,h=this._layerInfos[d];
(h=h&&h.layerObject)&&(c=h.hasAttachments&&h.objectIdField);var h=e.create("div"),g=this._createFieldsTable(a,d);e.place(g.domNode,h);var k=null;c&&(k=new p({label:this.nls.showAttachments,style:"margin-top:10px;"}),a=this.displayFieldsTable.getRowData(b),k.setValue(a.showAttachments),k.placeAt(h));this.currentFieldTable=g;a=600;k&&(a=640);var l=new n({titleLabel:this.nls.configureLayerFields,width:640,maxHeight:a,autoHeight:!0,content:h,buttons:[{label:this.nls.ok,onClick:f.hitch(this,function(){this._allLayerFields[d]=
g.getData();var a=k?k.getValue():!1;this.displayFieldsTable.editRow(b,{showAttachments:a});l.close();l=null})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:f.hitch(this,function(){l.close();l=null})}],onClose:function(){l=null}});g.startup()},_createFieldsTable:function(b){for(var c=null,d={fields:[{name:"show",title:this.nls.fieldVisibility,type:"checkbox","class":"show",onChange:f.hitch(this,function(b){var d=c.getData();!a.some(d,f.hitch(this,function(b){return b.show}))&&(new v({message:this.nls.fieldCheckWarning}),
d=c.getRowData(b))&&(d.show=!0,c.editRow(b,d))})},{name:"name",title:this.nls.fieldName,type:"text"},{name:"alias",title:this.nls.fieldAlias,editable:!0,type:"text"},{name:"actions",title:this.nls.fieldActions,type:"actions",actions:["up","down"],"class":"symbol"}],selectable:!0,autoHeight:!1,style:{height:"300px",maxHeight:"300px"}},c=new m(d),d=0;d<b.length;d++)b[d].show=void 0===b[d].show?!0:!!b[d].show,c.addRow(b[d]);return c},setConfig:function(b){this.config=b;this.displayFieldsTable.clear();
this._allLayerFields=[];this._processTableData().then(f.hitch(this,function(b){this._init(b);this.shelter.hide()}),f.hitch(this,function(b){new v({message:b.message||b})}))},onLayerInfosChanged:function(b,a,d){"added"===a&&d&&b&&d.getSupportTableInfo().then(f.hitch(this,function(b){b.isSupportedLayer&&(this._layerInfos&&0===this._layerInfos.length?this._delayedLayerInfos.push(d):this._layerInfos&&0<this._layerInfos.length&&!this._getLayerInfoById(d.id)&&(this._delayedLayerInfosAfterInit.push(d),this._processDelayedLayerInfosAfterInit(this._delayedLayerInfosAfterInit)))}))},
_processDelayedLayerInfosAfterInit:function(b){for(var a=this._layerInfos.length,d=0;d<b.length;d++){var c=r.getConfigInfoFromLayerInfo(b[d]);this._addRowToDisplayFieldsTable({label:c.name||c.title,url:c.layer.url,index:""+(a+d),isDescending:!0,show:c.show}).then(f.hitch(this,function(){this._allLayerFields.push(c.layer.fields);this._layerInfos.push(b[d])}),function(b){console.error(b)})}},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(a.forEach(this._delayedLayerInfos,f.hitch(this,
function(b){this._getLayerInfoById(b.id)||this._layerInfos.push(b)})),this._delayedLayerInfos=[])},_processTableData:function(){var b=new k;r.readConfigLayerInfosFromMap(this.map,!0,!0).then(f.hitch(this,function(a){this._layerInfos=a;this._processDelayedLayerInfos();r.readSupportTableInfoFromLayerInfos(this._layerInfos).then(f.hitch(this,function(d){this._tableInfos=d;this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?(d=r.getConfigInfosFromLayerInfos(this._layerInfos),r.merge(d,
this.config.layerInfos,"id",f.hitch(this,function(b,a){b.show=a.show;b.showAttachments=a.showAttachments;b.sortField=a.sortField;b.isDescending=a.isDescending;b.layer.url=a.layer.url;f.getObject("layer.fields.length",!1,b)&&f.getObject("layer.fields.length",!1,a)?(r.merge(b.layer.fields,a.layer.fields,"name",function(b,a){f.mixin(b,a)}),b.layer.fields=r.syncOrderWith(b.layer.fields,a.layer.fields,"name")):b.layer.fields=a.layer.fields})),this.config.layerInfos=d,this._unSpportQueryCampsite.fromConfig=
!0,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this.config.layerInfos),b.resolve(d)):(this._unSpportQueryCampsite.fromConfig=!1,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this._layerInfos),b.resolve(r.getConfigInfosFromLayerInfos(a)))}),function(a){console.error(a);b.reject(a)})}),f.hitch(this,function(a){console.error(a);b.reject(a)}));return b},_getUnsupportQueryLayerNames:function(b){var c=[];a.forEach(b,f.hitch(this,function(b){var a=
this._getSupportTableInfoById(b.id);a&&!a.isSupportQuery&&c.push(b.name||b.title)}));return c},_init:function(b){for(var a=[],d=0;d<b.length;d++){var c=b[d].show&&this._getSupportTableInfoById(b[d].id).isSupportQuery;this._addRowToDisplayFieldsTable({label:b[d].name||b[d].title,url:b[d].layer.url,index:""+d,show:c,sorting:{fields:b[d].layer.fields,selectedField:b[d].sortField},isDescending:b[d].isDescending,showAttachments:!!b[d].showAttachments},d).then(f.hitch(this,function(){this._allLayerFields.push(b[d].layer.fields)}),
f.hitch(this,function(b){console.error(b)}));this._unSpportQueryCampsite.fromConfig&&(c=(c=this._unSpportQueryCampsite.layerNames)&&-1<c.indexOf(b[d].name||b[d].title),b[d].show&&c&&a.push(b[d].name||b[d].title))}this._unSpportQueryCampsite.fromConfig&&0<a.length&&new v({message:this.nls.unsupportQueryLayers+"\x3cbr\x3e\x3cbr\x3e"+a.toString()});this.config.hideExportButton?this.exportcsv.uncheck():this.exportcsv.check();this.config.initiallyExpand?this.expand.check():this.expand.uncheck();this._canUseOpenAtStart()&&
(this.openAtStart?this.expand.check():this.expand.uncheck(),this.expand.status=!1,e.addClass(this.expand.domNode,"disable-checkbox"));this.config.filterByMapExtent?this.filterByMapExtent.check():this.filterByMapExtent.uncheck();this.config.allowTextSelection?this.textSelection.check():this.textSelection.uncheck()},_addRowToDisplayFieldsTable:function(b,a){var c=new k;b.sorting&&b.sorting.fields?(b.sortField=this._prepareSortFieldOptions(b.sorting),this.displayFieldsTable.addRow(b),c.resolve()):this._getLayerFields(a).then(f.hitch(this,
function(a){b.sorting?b.sorting.fields=a:b.sorting={fields:a};b.sortField=this._prepareSortFieldOptions(b.sorting);this.displayFieldsTable.addRow(b);c.resolve()}),f.hitch(this,function(b){console.error(b);c.reject(b)}));return c},_prepareSortFieldOptions:function(b){if(b&&b.fields&&Array.isArray(b.fields))return a.map(b.fields,function(a){var c={value:a.name,label:a.alias};b.selectedField===a.name&&(c.selected=!0);return c})},_canUseOpenAtStart:function(){return this.closeable||!this.isOnScreen},
_getLayerInfoById:function(b){for(var a=0,c=this._layerInfos.length;a<c;a++)if(this._layerInfos[a].id===b)return this._layerInfos[a]},_getSupportTableInfoById:function(a){for(var b=0,c=this._tableInfos.length;b<c;b++)if(this._tableInfos[b].id===a)return this._tableInfos[b]},getConfig:function(){var b=this.displayFieldsTable.getData(),c=[],d=b.length;if(this.config&&this.config.layerInfos&&0<this.config.layerInfos.length)a.forEach(b,f.hitch(this,function(a,d){a=this.config.layerInfos[d];var e={};e.name=
a.name||a.title;e.id=a.id;e.layer={};e.layer.url=b[d].url;e.layer.fields=this._allLayerFields[d];e.show=b[d].show;e.showAttachments=b[d].showAttachments;e.sortField=b[d].sortField;e.isDescending=b[d].isDescending;c.push(e)}));else for(var e=0;e<d;e++){var g={};g.name=this._layerInfos[e].name||this._layerInfos[e].title;g.id=this._layerInfos[e].id;g.layer={};g.layer.url=b[e].url;g.layer.fields=this._allLayerFields[e];g.show=b[e].show;g.showAttachments=b[e].showAttachments;g.sortField=b[e].sortField;
g.isDescending=b[e].isDescending;c.push(g)}this.config.layerInfos=c;this.config.hideExportButton=!this.exportcsv.getValue();this.config.filterByMapExtent=this.filterByMapExtent.getValue();this.config.allowTextSelection=this.textSelection.getValue();this._canUseOpenAtStart()||(this.config.initiallyExpand=this.expand.getValue());return this.config}})});