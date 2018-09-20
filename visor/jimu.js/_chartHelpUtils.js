// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare jimu/utils dojo/_base/lang dojo/_base/config dojo/_base/Color ./_dateFormat moment/moment esri/lang esri/graphic esri/symbols/jsonUtils".split(" "),function(u,h,e,v,m,w,x,q,r,p){return u(null,{constructor:function(a){a&&e.mixin(this,a);this.popupInfo||(this.popupInfo={});this.featureLayer||(this.featureLayer={});this.floatNumberFieldDecimalPlace={}},setLayerFeatureLayer:function(a){a&&(this.featureLayer=a)},setSymbolLayer:function(a){a&&(this.symbolLayer=a)},setPopupInfo:function(a){a&&
(this.popupInfo=a)},setMap:function(a){a&&(this.map=a)},getBestLabelDisplay:function(a,b,c){if("feature"===c)return this.betterDataCategoryForFeatureMode(a,b);if("category"===c||"count"===c)return this.betterDataCategoryForCategoryCountMode(a,b);if("field"===c)return this.betterDataCategoryForFieldMode(a)},betterDataCategoryForFeatureMode:function(a,b){a.forEach(e.hitch(this,function(a){a.label=this.getBestDisplayValue(b,a.label)}));return a},betterDataCategoryForFieldMode:function(a){a.forEach(e.hitch(this,
function(a){a.label=this.getFieldAlias(a.label)}));return a},betterDataCategoryForCategoryCountMode:function(a,b){a.forEach(e.hitch(this,function(a){a.label="undefined"!==typeof a.unit?this.getCategoryDisplayForDateUnit(a.label,a.unit):this.getBestDisplayValue(b,a.label)}));return a},keepStatisticsDataBestDecimalPlace:function(a,b,c){if("count"===c)return b;var d=a.features,f=a.clusterField,g=a.valueFields,l=a.operation;a=[];g&&(a=a.concat(g));f&&a.push(f);"feature"===c?(this.calculateDecimalPlaceForFloatField(a,
d),b.forEach(e.hitch(this,function(a){g.forEach(e.hitch(this,function(b,c){var d=a.values[c];this.isFloatNumberField(b)&&(d=this.getBestValueForFloatNumberField(d,b),a.values[c]=d)}))}))):"category"===c?(this.calculateDecimalPlaceForFloatField(a,d),b.forEach(e.hitch(this,function(a){g.forEach(e.hitch(this,function(b,c){var d=a.values[c];this.isFloatNumberField(b)?(d=this.getBestValueForFloatNumberField(d,b),a.values[c]=d):this.isIntegerNumberField(b)&&"average"===l&&(d=this.getBestValueForIntegerFieldAverage(d,
6),a.values[c]=d)}))}))):"field"===c&&(this.calculateDecimalPlaceForFloatField(a,d),g.forEach(e.hitch(this,function(a){b.some(e.hitch(this,function(b){if(b.label===a){var c=b.values[0];this.isFloatNumberField(a)?b.values[0]=this.getBestValueForFloatNumberField(c,a):this.isIntegerNumberField(a)&&"average"===l&&(b.values[0]=this.getBestValueForIntegerFieldAverage(c,6));return!0}return!1}))})));return b},isIntegerNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;var b=
["esriFieldTypeSmallInteger","esriFieldTypeInteger"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},getBestValueForFloatNumberField:function(a,b){if(null===a)return a;b=this._getFloatNumberFieldDecimalPlace(b);return a.toFixed(b)},getBestValueForIntegerFieldAverage:function(a,b){if("number"!==typeof a)return a;var c=0,d=a.toString().split(".");1===d.length?c=0:2===d.length&&(c=d[1].length);return 0<c?(c>b&&(c=b),a=a.toFixed(c),parseFloat(a)):
a},_getFloatNumberFieldDecimalPlace:function(a){var b=0;this.floatNumberFieldDecimalPlace&&(a=this.floatNumberFieldDecimalPlace[a],"number"===typeof a&&(b=a));return b},calculateDecimalPlaceForFloatField:function(a,b){this.floatNumberFieldDecimalPlace={};var c=a.filter(e.hitch(this,function(a){return this.isFloatNumberField(a)})),d={};c.forEach(e.hitch(this,function(a){d[a]=[]}));b&&0<b.length&&b.forEach(e.hitch(this,function(a){var b=a.attributes;b&&c.forEach(e.hitch(this,function(a){var c=b[a];
"number"===typeof c&&d[a].push(c)}))}));c.forEach(e.hitch(this,function(a){this.floatNumberFieldDecimalPlace[a]=0;var b=d[a];if(0<b.length)try{var c=this.getBestDecimalPlace(b);this.floatNumberFieldDecimalPlace[a]=c}catch(k){this.floatNumberFieldDecimalPlace[a]=0,console.error(k)}this.popupInfo&&(b=this.getFormatFromPopupInfo(this.popupInfo,a))&&0<=b.places&&(this.floatNumberFieldDecimalPlace[a]=b.places)}))},getBestDecimalPlace:function(a){var b=0,c={};a.forEach(function(a){a=a.toString().split(".");
var b=null;1===a.length?b=0:2===a.length&&(b=a[1].length);null!==b&&(c[b]=void 0===c[b]?1:c[b]+1)});a=null;for(var d in c){d=parseInt(d,10);var f=c[d];a?f>a.value&&(a={key:d,value:f}):a={key:d,value:f}}a&&(b=parseInt(a.key,10));return b},getFormatFromPopupInfo:function(a,b){var c=null;if(!a)return c;(a=a.fieldInfos)&&0<a.length&&a.forEach(function(a){a.fieldName===b&&(c=a.format)});return c},getAliasFromPopupInfo:function(a,b){var c=b;if(!a)return c;(a=a.fieldInfos)&&0<a.length&&a.forEach(function(a){a.fieldName===
b&&(c=a.label)});return c},isFloatNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;var b=["esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},isNumberField:function(a){if(!this.featureLayer||!this.featureLayer.fields)return!1;var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,
function(c){return c.name===a&&0<=b.indexOf(c.type)}))},isDateField:function(a){return(a=this.getFieldInfo(a))?"esriFieldTypeDate"===a.type:!1},getFieldInfo:function(a){if(this.featureLayer)for(var b=this.featureLayer.fields,c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},getFieldAliasArray:function(a){return a.map(e.hitch(this,function(a){return this.getFieldAlias(a)}))},getBestDisplayValue:function(a,b){return"_NULL\x26UNDEFINED_"===b?"null":this.isDateField(a)?this.formatedDateByPopupInfoOrLocal(a,
b):this.getDisplayValForNumberCodedValueSubTypes(a,b)},formatedDateByPopupInfoOrLocal:function(a,b,c){c||(c=this.popupInfo);a:{if(c&&q.isDefined(c.fieldInfos))for(var d=0,f=c.fieldInfos.length;d<f;d++){var g=c.fieldInfos[d];if(g.fieldName===a){a=g.format;break a}}a=null}b=Number(b);return h.fieldFormatter.getFormattedDate(b,a)},getDisplayValForNumberCodedValueSubTypes:function(a,b){var c=this.tryLocaleNumber(b,a);if(this.featureLayer&&this.featureLayer.typeIdField===a){var d=this.featureLayer.types;
if(d&&0<d.length&&(d=d.filter(e.hitch(this,function(a){return a.id===b})),0<d.length))return c=d[0].name}(a=this.getFieldInfo(a))&&a.domain&&(a=a.domain.codedValues)&&0<a.length&&a.some(function(a){return a.code===b?(c=a.name,!0):!1});return c},tryLocaleNumber:function(a,b){var c=a;if(q.isDefined(a)&&isFinite(a))try{var d;if(b&&this.isNumberField(b)){var f=this.popupInfo[b];d=f&&e.exists("format.places",f)?h.localizeNumberByFieldInfo(a,f):h.localizeNumber(a)}else d=a;"string"===typeof d&&(c=d)}catch(g){console.error(g)}return c+
""},getCategoryDisplayForDateUnit:function(a,b){if(!b)return a;a=Number(a);return this._getFormatteredDate(a,b)},_getFormatteredDate:function(a,b){var c=this._getDateTemplate(b);0<=["year","month","day"].indexOf(b)?c=h.localizeDate(new Date(a),{selector:"date",datePattern:c.date}):(b=h.localizeDate(new Date(a),{selector:"date",datePattern:c.date}),a=x(a).format(c.time),c=b+c.connector+a);return c},_getDateTemplate:function(a){var b=w[v.locale];(b=b||{},b.date)||(b.date={"short":"short"});b&&!b.time&&
(b.time={medium:"HH:mm:ss a"});b&&!b.connector&&(b.connector=" ");b&&!b.sNoDay&&(b.sNoDay="MMM, y");var c={};"year"===a?c.date="y":"month"===a?c.date=b.date.sNoDay:"day"===a?c.date=b.date["short"]:"hour"===a?(c.date=b.date["short"],c.time="HH a",c.connector=b.connector):"minute"===a?(c.date=b.date["short"],c.time="HH:mm a",c.connector=b.connector):"second"===a&&(c.date=b.date["short"],c.time=b.time.medium,c.connector=b.connector);return c},_getSymbolLayerGraphics:function(a){if(!this.symbolLayer)return null;
if(!this.symbolLayer.refreshInterval&&this.symbolGraphics&&this.symbolGraphics.filterByExtent===a)return this.symbolGraphics.graphics;var b=null;this.map&&this.symbolLayer&&(b=h.getClientFeaturesFromMap(this.map,this.symbolLayer,!1,!!a));this.symbolGraphics={filterByExtent:a,graphics:b};return b},_isContainAttr:function(a,b){if("object"!==typeof b||"object"!==typeof b)return!1;var c=!0,d;for(d in b)b.hasOwnProperty(d)&&(c=b[d]===a[d]);return c},_getFeaturesByAttr:function(a,b){if(b){var c=null;b.some(function(b){return this._isContainAttr(b.attributes,
a)?(c=b,!0):!1}.bind(this));return c}},_getFeaturesByClusterfield:function(a,b,c,d){var f=this._getSymbolLayerGraphics(c);if(f)return c=null,a=this.clientStatisticsUtils.getCluseringObj(a,f,d),(b=e.mixin(a.notNullLabel,a.nullLabel)[b])&&b.features&&b.features.length&&(c=b.features),c},_getFeatureForSerieData:function(a,b,c){var d=b.clusterField,f=b.mode;b=b.filterByExtent;var g={};g[d]=a.name;if("feature"===f)return this._getFeatureBySerieDataItem(a,d,c,b);if("category"===f||"count"===f)return new r(null,
null,g)},_getFeatureBySerieDataItem:function(a,b,c,d){var f={};f[b]=a.name;f[c]=Number(a.value);a=this._getSymbolLayerGraphics(d);return this._getFeaturesByAttr(f,a)},_getFeatureBycsuDataItem:function(a,b,c,d,f){var g={};g[b]=a.label;g[c]=Number(a.values&&a.values[d]);a=this._getSymbolLayerGraphics(f);return this._getFeaturesByAttr(g,a)},bindChartEvent:function(a,b,c){var d=b.filterByExtent,f=b.clusterField,g=null;"undefined"!==b.dateConfig&&(g=b.dateConfig);this.highLightColor=b.highLightColor||
"#00ffff";var l=b.mode;this.map&&0!==c.length&&(b=e.hitch(this,function(a){if("series"===a.componentType){var b=null,e=this._getSymbolLayerGraphics(d);if("field"===l)b=e;else if(e=c[a.dataIndex])if("feature"===l){var k=a.seriesName;if(!k)return;(e=this._getFeatureBycsuDataItem(e,f,k,a.seriesIndex,d))&&(b=[e])}else e=e.label,"undefined"!==typeof e&&(b=this._getFeaturesByClusterfield(f,e,d,g));b&&("mouseover"===a.type?this._mouseOverChartItem(b):"mouseout"===a.type&&this._mouseOutChartItem(b))}}),[{name:"mouseover",
callback:b},{name:"mouseout",callback:b}].forEach(e.hitch(this,function(b){a.chart.off(b.name);a.chart.on(b.name,e.hitch(this,function(a){"mouseover"===a.type?(this._hasTriggerMouseoverEvent||(this._hasTriggerMouseoverEvent=!0,b.callback(a)),setTimeout(e.hitch(this,function(){this._hasTriggerMouseoverEvent=!1},500))):"mouseout"===a.type&&b.callback(a)}))})))},_mouseOverChartItem:function(a){this._removeTempGraphics();this._mouseOutChartItem(a);a.forEach(e.hitch(this,function(a){a._originalSymbol=
a.symbol}));if(this.featureLayer&&this.featureLayer.getMap()&&this.featureLayer.visible){var b=h.getTypeByGeometryType(this.featureLayer.geometryType),c=null;if("point"===b)c=this._getHighLightMarkerSymbol(),this.tempGraphics=[],a.forEach(e.hitch(this,function(a){a=new r(a.geometry,c);this.tempGraphics.push(a);this.featureLayer.add(a)}));else if("polyline"===b)c=this._getHighLightLineSymbol(this.highLightColor),a.forEach(e.hitch(this,function(a){a.setSymbol(c)}));else if("polygon"===b){var d=this.featureLayer.getSelectedFeatures()||
[];a.forEach(e.hitch(this,function(a){var b=0<=d.indexOf(a),b=this._getHighLightFillSymbol(this.featureLayer,a,b);a.setSymbol(b)}));this._getSymbolLayerGraphics(!1).length!==a.length&&"polygon"===b&&(a.forEach(e.hitch(this,function(a){this.featureLayer.remove(a)})),a.forEach(e.hitch(this,function(a){this.featureLayer.add(a)})))}}},_mouseOutChartItem:function(a){this._removeTempGraphics();a.forEach(e.hitch(this,function(a){a.setSymbol(a._originalSymbol||null)}))},_removeTempGraphics:function(){if(this.featureLayer&&
this.tempGraphics&&0<this.tempGraphics.length)for(;0<this.tempGraphics.length;)this.featureLayer.remove(this.tempGraphics[0]),this.tempGraphics.splice(0,1);this.tempGraphics=null},_getHighLightMarkerSymbol:function(){var a=p.fromJson({color:[255,255,255,0],size:18,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSSquare",outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}});a.setSize(30);a.outline.setColor(new m(this.highLightColor));return a},_getHighLightLineSymbol:function(a){var b=
p.fromJson({color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"});b.setColor(new m(a||this.highLightColor));return b},_getDefaultHighLightFillSymbol:function(){var a=p.fromJson({color:[0,255,255,128],outline:{color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});a.outline.setColor(new m(this.highLightColor));return a},_getSymbolByRenderer:function(a,b){var c=this._getDefaultHighLightFillSymbol(),d=this.getVisualVariableByType("colorInfo",
a.visualVariables);if(d){if(a=a.getColor(b,{colorInfo:d}))a=e.clone(a),c.setColor(a)}else c=a.getSymbol(b);return c},getVisualVariableByType:function(a,b){return b&&(b=b.filter(function(b){return b.type===a&&!b.target}),b.length)?b[0]:null},_getHighLightFillSymbol:function(a,b,c){var d=null,f=b.symbol,d=a.renderer;!f&&d&&(f=this._getSymbolByRenderer(d,b));f&&"function"===typeof f.setOutline?(d=p.fromJson(f.toJson()),b=1.5,f.outline&&0<f.outline.width&&(b=f.outline.width+1),c=this._getHighLightLineSymbol(c?
"#ff0000":"#00ffff"),c.setWidth(b),d.setOutline(c)):d=this._getDefaultHighLightFillSymbol();return d},_isNumberField:function(a){var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return this.featureLayer.fields.some(e.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},getFieldAlias:function(a){var b=a;(a=this.getFieldInfo(a))&&(b=a.alias||b);this.popupInfo&&(b=this.getAliasFromPopupInfo(this.popupInfo,b));return b},_removeDuplicateElementForObjArray:function(a){if(!Array.isArray(a))return a;
var b=[];b.push(a[0]);a.forEach(function(a){b.some(function(b){return h.isEqual(b,a)})||b.push(a)});return b},assigneeSettingColor:function(a,b,c){if(!b||!b.length)return b;var d=a.seriesStyle;if(!d)return b;"layerSymbol"===d.type?b=this._assigneeStyleLayerSymbolColor(b,c):"series"===d.type?b=this._assigneeStyleSeriesColor(a,b):"custom"===d.type&&(b=this._assigneeStyleCustomColor(a,b));return b},_assigneeStyleCustomColor:function(a,b){a=a.seriesStyle;if(!a||!a.customColor)return b;var c=a.customColor;
a=c.categories;c=c.others;if(!(a&&a.length||c&&c.length))return b;c&&c.length&&this._setCustomOthersColor(c,b);a&&a.length&&this._setCustomCategoriesColor(a,b)},_setCustomCategoriesColor:function(a,b){b.forEach(function(b){(b=b.data)&&b.length&&b.forEach(function(b){if("undefined"!==typeof b.name){var c=this._getMatchingCustomColor(b.name,a);this.setColorToDataItem(b,c)}}.bind(this))}.bind(this))},_getMatchingCustomColor:function(a,b){var c=!1;if(!b||!b.length)return c;(b=b.filter(function(b){return b.id===
a})[0])&&b.color&&(c=b.color);return c},_getMatchingCustomLabel:function(a,b){var c=!1;if(!b||!b.length)return c;(b=b.filter(function(b){return b.id===a})[0])&&b.label&&(c=b.label);return c},_setCustomOthersColor:function(a,b){this._setOtherColorForCustomColor(a,b);this._setNullLabelColorForCustomColor(a,b)},_setOtherColorForCustomColor:function(a,b){(a=a.filter(function(a){return"others"===a.id})[0])&&a.color&&this.setColorToAllSerieDataItem(b,a.color)},_setNullLabelColorForCustomColor:function(a,
b){if((a=a.filter(function(a){return"null"===a.id})[0])&&a.color){var c=a.color;b.forEach(function(a){(a=a.data)&&a.length&&a.forEach(function(a){a.name&&"_NULL\x26UNDEFINED_"===a.name&&this.setColorToDataItem(a,c)}.bind(this))}.bind(this))}},_assigneeStyleSeriesColor:function(a,b){var c=a.seriesStyle;if(!c||!c.styles||!c.styles[0])return b;var d=a.mode,f=a.area;return b.map(function(a){var b=null,e=a.type;if("field"===d)"line"===e?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,f)):(e=a.data)&&
e[0]&&(a.data=e.map(function(a){b=this._getMatchingStyle(a.name,c);return this.setStyleToSerieDataItem(b,a)}.bind(this)));else if("column"===e||"bar"===e||"line"===e)"count"===d?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,f)):"undefined"!==typeof a.name&&(b=this._getMatchingStyle(a.name,c))&&(a=this._setStyleToSerie(b,a,f));return a}.bind(this))},_assigneeStyleLayerSymbolColor:function(a,b){a.forEach(function(a){var c=a.name;(a=a.data)&&a.length&&a.forEach(function(a){var d=[this._getFeatureForSerieData(a,
b,c)];if(d=this._getSymbolColorForDataItem(d))a.itemStyle={color:d}}.bind(this))}.bind(this))},_setStyleToSerie:function(a,b,c){b.itemStyle||(b.itemStyle={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.color=a.color[0]:b.itemStyle.color=a.color);a&&"undefined"!==typeof a.opacity&&(c?(b.areaStyle||(b.areaStyle={}),b.areaStyle.opacity=1-parseFloat(a.opacity/10)):b.itemStyle.opacity=1-parseFloat(a.opacity/10));return b},_getMatchingStyle:function(a,b){var c=null;b=b.styles;if(!b||
!b[0]||""===a)return c;b.forEach(function(b){b.name===a&&(c=b.style)});return c},_getSymbolColorForDataItem:function(a){var b=!1;if(!this.symbolLayer)return b;a=a&&a[0];return a?b=this._getColorForFeature(this.symbolLayer.renderer,a):b},_getColorForFeature:function(a,b){var c=!1,d=this.getVisualVariableByType("colorInfo",a.visualVariables);d?(a=a.getColor(b,{colorInfo:d}))&&(c=this._convertToEchartsRbga(a)):(a=a.getSymbol(b))&&"undefined"!==typeof a.color&&(c=this._convertToEchartsRbga(a.color));
return c},_convertToEchartsRbga:function(a){if(!a||"undefined"===typeof a.r)return a;a=window.JSON.parse(window.JSON.stringify(a));var b;b="rgba("+(a.r+",");b+=a.g+",";b+=a.b+",";return b+=a.a+")"},getColors:function(a,b){var c=[];if(2===a.length)c=this._createGradientColors(a[0],a[a.length-1],b);else{for(var d=Math.ceil(b/a.length),e=0;e<d;e++)c=c.concat(a);c=c.slice(0,b)}return c},_createGradientColors:function(a,b,c){var d=[];a=new m(a);var e=new m(b);b=(e.r-a.r)/c;for(var g=(e.g-a.g)/c,e=(e.b-
a.b)/c,l=new m,k=0,t=0,h=0,n=0;n<c;n++)k=parseInt(a.r+b*n,10),t=parseInt(a.g+g*n,10),h=parseInt(a.b+e*n,10),l.setColor([k,t,h]),d.push(l.toHex());return d},setStyleToSerieDataItem:function(a,b){b.itemStyle||(b.itemStyle={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.color=a.color[0]:b.itemStyle.color=a.color);a&&"undefined"!==typeof a.opacity&&(b.itemStyle.opacity=1-parseFloat(a.opacity/10));return b},setColorToSerie:function(a,b){if(!a||"object"!==typeof a||Array.isArray(a))return a;
a.itemStyle||(a.itemStyle={});b&&(a.itemStyle.color=b)},setColorToDataItem:function(a,b){if(!a||"object"!==typeof a)return a;a.itemStyle||(a.itemStyle={});b&&(a.itemStyle.color=b)},setColorToAllSerieDataItem:function(a,b){a.forEach(function(a){(a=a.data)&&a.length&&a.forEach(function(a){this.setColorToDataItem(a,b)}.bind(this))}.bind(this))},updateChartSeriesDisplayName:function(a,b,c){var d="feature"===c.mode?c.labelField:c.categoryField,e=c.mode;c=a.series;var g=[];b=b.seriesStyle;if("custom"===
b.type&&(b=b.customColor)&&b.categories&&b.categories.length){var h=b.categories,k;(b=(b.others||[]).filter(function(a){return"null"===a.id})[0])&&b.label&&(k=b.label);c.forEach(function(a,b){(a=a.data)&&a.length&&a.forEach(function(a,c){if("undefined"!==typeof a.name){var d=a.name;if("_NULL\x26UNDEFINED_"===a.name&&k)d=k;else{var e=this._getMatchingCustomLabel(a.name,h);e&&(d=e)}a.name=d;0===b&&(g[c]=d)}}.bind(this))}.bind(this))}c.forEach(function(a,b){a.name&&(a.name=this.getFieldAlias(a.name));
(a=a.data)&&a.length&&a.forEach(function(a,c){var f=a.name,h=f,h=a.unit&&f?this.getCategoryDisplayForDateUnit(f,a.unit):"field"!==e?this.getBestDisplayValue(d,f):this.getFieldAlias(f);a.name=h;0===b&&(g[c]=h)}.bind(this))}.bind(this));a.labels=null;a.labels=g}})});