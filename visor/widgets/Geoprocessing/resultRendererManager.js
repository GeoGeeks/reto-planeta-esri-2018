// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/utils","dojo/_base/array","./resultrenderers/simpleResultRenderers"],function(l,m,e){var g={},k,h;g.createResultRenderer=function(b,a,c){var f="result map service"===b.dataType?"AddResultImageLayer":"GPFeatureRecordSetLayer"===b.dataType?"DrawResultFeatureSet":"GPRecordSet"===b.dataType?"RecordSetTable":"error"===b?"Error":"SimpleResultRenderer";c={param:b,widgetUID:c.uid,map:k,nls:h,config:c.config};if("DrawResultFeatureSet"===f)c.value=a.value,a=new e.DrawResultFeatureSet(c);else if("RecordSetTable"===
f)c.value=a.value,a=new e.RecordSetTable(c);else if("SimpleResultRenderer"===f){var d="";a=a.value;Array.isArray(a)||(a=[a]);m.forEach(a,function(a){""!==d&&(d+="\x3cbr\x3e");if(["GPLong","GPDouble","GPString","GPBoolean"].some(function(a){return 0<=b.dataType.indexOf(a)}))d+=l.sanitizeHTML(a);else if(0<=b.dataType.indexOf("GPLinearUnit"))d+=a.distance+"\x26nbsp;"+a.units;else if(0<=b.dataType.indexOf("GPDate"))d+=(new Date(a)).toLocaleTimeString();else if(0<=b.dataType.indexOf("GPRecordSet"))d+=
"table";else if(0<=b.dataType.indexOf("GPDataFile")||0<=b.dataType.indexOf("GPRasterDataLayer"))d=a.url?d+('\x3ca target\x3d"_blank" href\x3d"'+a.url+'"\x3e'+a.url+"\x3c/a\x3e"):d+(b.paramName+": null")});c.message=d;a=new e.SimpleResultRenderer(c)}else"AddResultImageLayer"===f?(c.layer=a,a=new e.AddResultImageLayer(c)):"UnsupportRenderer"===f?(c.message="type "+b.dataType+" is not supported for now.",a=new e.UnsupportRenderer(c)):"Error"===f?(c.message=h.error,a=new e.ErrorResultRenderer(c)):(c.message=
"unknown renderer name: "+f,a=new e.UnsupportRenderer(c));return a};g.setMap=function(b){k=b};g.setNls=function(b){h=b};return g});