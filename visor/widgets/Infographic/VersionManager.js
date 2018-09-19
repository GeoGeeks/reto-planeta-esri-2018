// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(m){function k(){this.versions=[{version:"1.0",upgrader:function(b){return b}},{version:"1.1",upgrader:function(b){return b}},{version:"1.2",upgrader:function(b){return b}},{version:"1.3",upgrader:function(b){return b}},{version:"1.4",upgrader:function(b){return b}},{version:"2.0Beta",upgrader:function(b){return b}},{version:"2.0",upgrader:function(b){return b}},{version:"2.0.1",upgrader:function(b){return b}},{version:"2.1",upgrader:function(b){return b}},
{version:"2.2",upgrader:function(b){return b}},{version:"2.3",upgrader:function(b){return b}},{version:"2.4",upgrader:function(b){return b}},{version:"2.5",upgrader:function(b){return b}},{version:"2.6",upgrader:function(b){for(var c=b.dijits,a,d=0;d<c.length;d++)"chart"===c[d].type&&(a=c[d].config.sortOrder,c[d].config.sortOrder={isLabelAxis:!0,isAsc:a?"asc"===a:!0},"feature"===c[d].config.mode&&(c[d].config.sortOrder.field=c[d].config.labelField),c[d].config.maxLabels=void 0,c[d].config.nullValue=
"feature"===c[d].config.mode||"count"===c[d].mode?void 0:!0,c[d].config.dateConfig=void 0,c[d].config.useLayerSymbology=void 0);return b}},{version:"2.7",upgrader:function(b){for(var c=b.dijits,a,d=0;d<c.length;d++)if("chart"===c[d].type){a=c[d].config;break}if(!a||!a.mode)return b;var c=a.mode,d=a.type,g=a.valueFields,l=a.colors;l||(l="#5d9cd3 #eb7b3a #a5a5a5 #febf29 #4673c2 #72ad4c".split(" "));var h={};"undefined"!==typeof a.useLayerSymbology&&"line"===d&&delete a.useLayerSymbology;"undefined"!==
typeof a.useLayerSymbology&&(h.useLayerSymbology=a.useLayerSymbology);var e=[];g&&0<g.length&&(e=g);var f=!1;"column"===d||"bar"===d||"line"===d?"line"===d&&"field"===c?e=["line~field"]:"count"===c&&(e=["count~count"]):"pie"===d&&"field"!==c&&(f=!0,e=["pie~not-field"]);g=e.map(function(a,b){var d=l;a={name:a,style:{color:d[b%d.length]}};f&&(a.style.color=d);return a}.bind(this));h.styles={};g&&(h.styles=g);a.seriesStyle=h;"undefined"!==typeof a.colors&&delete a.colors;"pie"===d||"count"!==c&&"field"!==
c||(a.showLegend=!1);"pie"===d&&a.dateConfig&&(a.dateConfig.isNeedFilled=!1);return b}},{version:"2.8",upgrader:function(b){var c=b.dijits.filter(function(a){return"chart"===a.type})[0];if(!c)return b;var a=c&&c.config;if(!a||!a.mode)return b;var d=a.seriesStyle;if(!d)return b;d.type=d.useLayerSymbology?"layerSymbol":"series";"undefined"!==typeof d.useLayerSymbology&&delete d.useLayerSymbology;c.config=function(a){var b={mode:a.mode,type:a.type},d=b.type,c=b.mode,f=[];"feature"===c?f=f.concat(["labelField",
"valueFields","sortOrder","maxLabels"]):"category"===c?f=f.concat("categoryField dateConfig valueFields sortOrder operation maxLabels nullValue".split(" ")):"count"===c?f=f.concat(["categoryField","dateConfig","sortOrder","maxLabels"]):"field"===c&&(f=f.concat(["valueFields","operation","sortOrder","maxLabels","nullValue"]));c="backgroundColor seriesStyle showLegend legendTextColor legendTextSize highLightColor".split(" ");c="pie"===d?c.concat(["showDataLabel","dataLabelColor","dataLabelSize","innerRadius"]):
c.concat("showHorizontalAxis horizontalAxisTextColor horizontalAxisTextSize showVerticalAxis verticalAxisTextColor verticalAxisTextSize stack area".split(" "));f.forEach(function(d){b[d]=a[d]});c.forEach(function(d){b[d]=a[d]});b.hasOwnProperty("showLegend")||(b.showLegend=!1);"pie"===d?b.hasOwnProperty("showDataLabel")||(b.showDataLabel=!0):(b.hasOwnProperty("showHorizontalAxis")||(b.showHorizontalAxis=!0),b.hasOwnProperty("showVerticalAxis")||(b.showVerticalAxis=!0));return b}(a);return b}},{version:"2.9",
upgrader:function(b){var c=b.dijits.filter(function(a){return"chart"===a.type})[0];if(!c)return b;var a=c&&c.config;if(!a||!a.mode)return b;a.legend={show:a.showLegend,textStyle:{color:a.legendTextColor,fontSize:a.legendTextSize}};a.xAxis={show:void 0===a.showHorizontalAxis?!0:a.showHorizontalAxis,textStyle:{color:a.horizontalAxisTextColor,fontSize:a.horizontalAxisTextSize},nameTextStyle:{color:a.horizontalAxisTextColor}};a.yAxis={show:void 0===a.showVerticalAxis?!0:a.showVerticalAxis,textStyle:{color:a.verticalAxisTextColor,
fontSize:a.verticalAxisTextSize},nameTextStyle:{color:a.horizontalAxisTextColor}};a.dataLabel={show:a.showDataLabel,textStyle:{color:a.dataLabelColor,fontSize:a.dataLabelSize}};a.marks||(a.marks={});c.config=function(a){var b={mode:a.mode,type:a.type},d=b.type,c=b.mode,e=[];"feature"===c?e=e.concat(["labelField","valueFields","sortOrder","maxLabels"]):"category"===c?e=e.concat("categoryField dateConfig valueFields sortOrder operation maxLabels nullValue".split(" ")):"count"===c?e=e.concat(["categoryField",
"dateConfig","sortOrder","maxLabels"]):"field"===c&&(e=e.concat(["valueFields","operation","sortOrder","maxLabels","nullValue"]));c=["backgroundColor","seriesStyle","legend","highLightColor"];c="pie"===d?c.concat(["dataLabel","innerRadius"]):c.concat(["xAxis","yAxis","stack","area","marks"]);e.forEach(function(c){b[c]=a[c]});c.forEach(function(c){b[c]=a[c]});return b}(a);return b}}]}k.prototype=new m;return k.prototype.constructor=k});