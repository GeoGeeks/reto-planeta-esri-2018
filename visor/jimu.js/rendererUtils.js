// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["esri/renderers/jsonUtils"],function(c){return{cloneRenderer:function(a){if(!a)return null;var b=null;try{var d=a.toJson(),b=c.fromJson(d)}catch(e){console.error(e)}return b},isSimpleRenderer:function(a){return a&&"esri.renderer.SimpleRenderer"===a.declaredClass},isUniqueValueRenderer:function(a){return a&&"esri.renderer.UniqueValueRenderer"===a.declaredClass},isClassBreaksRenderer:function(a){return a&&"esri.renderer.ClassBreaksRenderer"===a.declaredClass},isDotDensityRenderer:function(a){return a&&
"esri.renderer.DotDensityRenderer"===a.declaredClass},isScaleDependentRenderer:function(a){return a&&"esri.renderer.ScaleDependentRenderer"===a.declaredClass},isTemporalRenderer:function(a){return a&&"esri.renderer.TemporalRenderer"===a.declaredClass}}});