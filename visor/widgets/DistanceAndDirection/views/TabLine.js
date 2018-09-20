// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistanceAndDirection/templates/TabLine.html":'\x3cdiv class\x3d"tabPanel" data-dojo-attach-point\x3d"lineContainer"\x3e\r\n    \x3cdiv class\x3d"controls"\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n            \x3clabel\x3e${nls.fromLabel}\x3c/label\x3e\r\n            \x3cdiv class\x3d"controlItem"\x3e\r\n              \x3cselect data-dojo-attach-point\x3d"lineTypeDD" style\x3d"width: 225px" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"DistAndBearing"\x3e${nls.distanceBearingLabel}\x3c/option\x3e\r\n                \x3coption selected\x3d"selected" value\x3d"Points"\x3e${nls.pointsLabel}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup" data-dojo-attach-point\x3d"startDiv"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"lineStartPointLabel"\x3e${nls.startPointLabel}\x3c/label\x3e\r\n            \x3cdiv class\x3d"controlItem"\x3e\r\n              \x3cinput class\x3d"jimu-input coordInput"\r\n                data-dojo-attach-point\x3d"startPointCoordsLine"\x3e\r\n              \x3c/input\x3e\r\n              \x3cdiv class\x3d"controlItem paddedLeft" data-dojo-attach-point\x3d"addPointBtnStartDiv"\x3e\r\n                \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n                  \x3cspan title\x3d"${nls.formatInputLabel}" class\x3d"jimu-icon settingBtn" data-dojo-attach-point\x3d"coordinateFormatButtonStart"\x3e\x3c/span\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n                  \x3cdiv title\x3d"${nls.addPointLabel}" class\x3d"drawPointBtn" data-dojo-attach-point\x3d"addPointBtnStart"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n            \x3cinput class\x3d"interactive-checkbox" type\x3d"checkbox" data-dojo-attach-point\x3d"interactiveLine" /\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"interactiveLabel"\x3e${nls.createLineInteractively}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup endPt"\x3e\r\n          \x3clabel data-dojo-attach-point\x3d"lineEndPointLabel"\x3e${nls.endPointLabel}\x3c/label\x3e\r\n          \x3cdiv class\x3d"controlItem"\x3e\r\n            \x3cinput class\x3d"jimu-input coordInput"\r\n              data-dojo-attach-point\x3d"endPointCoordsLine"\x3e\r\n            \x3c/input\x3e\r\n            \x3cdiv class\x3d"controlItem paddedLeft" data-dojo-attach-point\x3d"addPointBtnEndDiv"\x3e\r\n                \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n                  \x3cspan title\x3d"${nls.formatInputLabel}" class\x3d"jimu-icon settingBtn" data-dojo-attach-point\x3d"coordinateFormatButtonEnd"\x3e\x3c/span\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n                  \x3cdiv title\x3d"${nls.addPointLabel}" class\x3d"drawPointBtn" data-dojo-attach-point\x3d"addPointBtnEnd"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n          \x3clabel\x3e${nls.lengthLabel}\x3c/label\x3e\r\n          \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"lengthInputDiv"\x3e\r\n            \x3cinput\r\n              style\x3d"width: 150px"\r\n              data-dojo-type\x3d\'dijit/form/NumberTextBox\'\r\n              required\x3d"true" value\x3d"1000" data-dojo-props\x3d"\r\n              constraints: {min: 1, max: 40030000}"\r\n              data-dojo-attach-point\x3d"lengthInput"\r\n              data-dojo-attach-event\x3d"keyup: checkValidInputs"\x3e\r\n            \x3c/input\x3e\r\n            \x3cselect style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"lengthUnitDD"\x3e\r\n              \x3coption value\x3d"feet"\x3e${nls.units.feet}\x3c/option\x3e\r\n              \x3coption value\x3d"kilometers"\x3e${nls.units.kilometers}\x3c/option\x3e\r\n              \x3coption value\x3d"miles"\x3e${nls.units.miles}\x3c/option\x3e\r\n              \x3coption value\x3d"meters" selected\x3d"selected"\x3e${nls.units.meters}\x3c/option\x3e\r\n              \x3coption value\x3d"nautical-miles"\x3e${nls.units.nauticalMiles}\x3c/option\x3e\r\n              \x3coption value\x3d"yards"\x3e${nls.units.yards}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n          \x3clabel\x3e${nls.angleLabel}\x3c/label\x3e\r\n          \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"angleInputDiv"\x3e\r\n            \x3cinput data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n              style\x3d"width: 150px"\r\n              required\x3d"true"\r\n              value\x3d"0"\r\n              data-dojo-props\x3d"\r\n                constraints: {min: 0, max: 360}"\r\n              data-dojo-attach-point\x3d"angleInput"\r\n              data-dojo-attach-event\x3d"onChange: checkValidInputs"\x3e\r\n            \x3c/input\x3e\r\n            \x3cselect style\x3d"width: 100px" class\x3d"controlSpace" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"angleUnitDD"\x3e\r\n              \x3coption value\x3d"degrees"\x3e${nls.degreesLabel}\x3c/option\x3e\r\n              \x3coption value\x3d"mils"\x3e${nls.milsLabel}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"buttonContainer"\x3e\r\n            \x3cdiv class\x3d\'jimu-btn jimu-state-disabled\' data-dojo-attach-point\x3d\'okButton\' data-dojo-attach-event\x3d"onclick: okButtonClicked"\x3e${nls.common.ok}\x3c/div\x3e\r\n            \x3cdiv class\x3d\'jimu-btn\' data-dojo-attach-point\x3d\'clearGraphicsButton\' data-dojo-attach-event\x3d"onclick: clearGraphics"\x3e${nls.clearGraphicsLabel}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/topic dojo/dom-class dojo/string dojo/mouse dojo/number dojo/keys dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/TooltipDialog dijit/popup jimu/dijit/Message jimu/LayerInfos/LayerInfos jimu/utils esri/layers/FeatureLayer esri/layers/LabelClass esri/tasks/FeatureSet esri/geometry/geometryEngine esri/geometry/Polyline esri/geometry/Circle esri/symbols/SimpleMarkerSymbol esri/symbols/TextSymbol esri/graphic ../models/LineFeedback ../models/ShapeModel ../views/CoordinateInput ../views/EditOutputCoordinate ../models/DirectionalLineSymbol dojo/text!../templates/TabLine.html dijit/form/NumberTextBox dijit/form/Select jimu/dijit/CheckBox".split(" "),
function(m,b,f,k,d,n,p,z,q,A,B,C,r,g,t,u,v,D,E,F,w,l,G,H,I,J,h,K,x,y,L,M){return m([A,B,C],{templateString:M,baseClass:"jimu-widget-TabLine",constructor:function(a){m.safeMixin(this,a)},postCreate:function(){this.currentLengthUnit=this.lengthUnitDD.get("value");this.currentAngleUnit=this.angleUnitDD.get("value");var a={directionSymbol:"arrow1",directionPixelBuffer:1E5,showStartSymbol:!0,showEndSymbol:!0},a=b.mixin(a,this.lineSymbol);this._lineSym=new L(a);this._ptSym=new H(this.pointSymbol);this._labelSym=
new I(this.labelSymbol);this.map.addLayer(this.getLayer());if(this._gl.loaded)a=u.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Line Graphics"),a.showLabels(),a.enablePopup();else this._gl.on("load",b.hitch(this,function(){var a=u.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Line Graphics");a.showLabels();a.enablePopup()}));this.coordToolStart=new x({appConfig:this.appConfig,nls:this.nls},this.startPointCoordsLine);this.coordToolStart.inputCoordinate.formatType="DD";
this.coordToolEnd=new x({appConfig:this.appConfig,nls:this.nls},this.endPointCoordsLine);this.coordToolEnd.inputCoordinate.formatTyp="DD";this.coordinateFormatStart=new r({content:new y({nls:this.nls}),style:"width: 400px"});"DartTheme"===this.appConfig.theme.name&&d.add(this.coordinateFormatStart.domNode,"dartThemeClaroDijitTooltipContainerOverride");this.coordinateFormatEnd=new r({content:new y({nls:this.nls}),style:"width: 400px"});"DartTheme"===this.appConfig.theme.name&&d.add(this.coordinateFormatEnd.domNode,
"dartThemeClaroDijitTooltipContainerOverride");this.dtStart=new h({map:this.map,coordTool:this.coordToolStart.inputCoordinate.util,nls:this.nls});this.dtEnd=new h({map:this.map,coordTool:this.coordToolStart.inputCoordinate.util,nls:this.nls});this.dtStart.setLineSymbol(this._lineSym);this.lineTypeDDDidChange();this.syncEvents();this.lengthInput.invalidMessage=this.nls.numericInvalidMessage;this.lengthInput.rangeMessage=this.nls.lineLengthErrorMessage;this.angleInput.invalidMessage=this.nls.numericInvalidMessage;
this.angleInput.rangeMessage=this.nls.orientationErrorMessage},getLayer:function(){if(!this._gl){var a=new E({labelExpressionInfo:{value:this.nls.lengthLabel+": {GeoLength}, "+this.nls.angleLabel+": {LineAngle}"}});a.labelPlacement="above-along";a.where="GeoLength \x3e 0";a.symbol=this._labelSym;var e={layerDefinition:{geometryType:"esriGeometryPolyline",objectIdField:"ObjectID",fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"GeoLength",type:"esriFieldTypeString",alias:"Length"},
{name:"LineAngle",type:"esriFieldTypeString",alias:"Angle"}]},featureSet:new F};this._gl=new D(e,{id:"Distance \x26 Direction - Line Graphics",outFields:["*"],showLabels:!0});this._gl.setLabelingInfo([a]);return this._gl}},syncEvents:function(){k.subscribe("TAB_SWITCHED",b.hitch(this,this.tabSwitched));k.subscribe(h.drawnLineLengthDidChange,b.hitch(this,this.lineLengthDidChange));k.subscribe(h.drawnLineAngleDidChange,b.hitch(this,this.lineAngleDidChange));this.dtStart.watch("startPoint",b.hitch(this,
function(a,e,c){this.coordToolStart.inputCoordinate.set("coordinateEsriGeometry",c);this.coordToolStart.inputCoordinate.set("inputType",this.coordToolStart.inputCoordinate.formatType);this.dtStart.addStartGraphic(c,this._ptSym)}));this.dtStart.watch("endPoint",b.hitch(this,function(a,e,c){this.coordToolStart.inputCoordinate.set("coordinateEsriGeometry",c)}));this.dtStart.watch("currentEndPoint",b.hitch(this,function(a,e,c){this.coordToolStart.inputCoordinate.set("coordinateEsriGeometry",c)}));this.dtStart.on("draw-complete",
b.hitch(this,this.feedbackDidCompleteStart));this.coordToolStart.inputCoordinate.watch("outputString",b.hitch(this,function(a,e,c){this.coordToolStart.manualInput||this.coordToolStart.set("value",c)}));this.coordToolStart.on("keyup",b.hitch(this,this.coordToolStartKeyWasPressed));this.dtEnd.watch("startPoint",b.hitch(this,function(a,e,c){this.coordToolEnd.inputCoordinate.set("coordinateEsriGeometry",c);this.coordToolEnd.inputCoordinate.set("inputType",this.coordToolEnd.inputCoordinate.formatType);
this.dtEnd.addStartGraphic(c,this._ptSym)}));this.dtEnd.watch("endPoint",b.hitch(this,function(a,e,c){this.coordToolEnd.inputCoordinate.set("coordinateEsriGeometry",c)}));this.dtEnd.watch("currentEndPoint",b.hitch(this,function(a,e,c){this.coordToolEnd.inputCoordinate.set("coordinateEsriGeometry",c)}));this.dtEnd.on("draw-complete",b.hitch(this,this.feedbackDidCompleteEnd));this.coordToolEnd.inputCoordinate.watch("outputString",b.hitch(this,function(a,e,c){this.coordToolEnd.manualInput||this.coordToolEnd.set("value",
c)}));this.coordToolEnd.on("keyup",b.hitch(this,this.coordToolEndKeyWasPressed));this.lengthUnitDD.on("change",b.hitch(this,this.lengthUnitDDDidChange));this.angleUnitDD.on("change",b.hitch(this,this.angleUnitDDDidChange));this.lineTypeDD.on("change",b.hitch(this,this.lineTypeDDDidChange));this.own(f(this.coordinateFormatButtonStart,"click",b.hitch(this,this.coordinateFormatButtonStartClicked)),f(this.coordinateFormatStart.content.applyButton,"click",b.hitch(this,function(){var a=this.coordinateFormatStart.content.formats[this.coordinateFormatStart.content.ct],
e=a.defaultFormat,c=this.coordinateFormatStart.content.frmtSelect.get("value");a.useCustom&&(e=a.customFormat);this.coordToolStart.inputCoordinate.set("formatPrefix",this.coordinateFormatStart.content.addSignChkBox.checked);this.coordToolStart.inputCoordinate.set("formatString",e);this.coordToolStart.inputCoordinate.set("formatType",c);this.setCoordLabelStart(c);g.close(this.coordinateFormatStart)})),f(this.coordinateFormatStart.content.cancelButton,"click",b.hitch(this,function(){g.close(this.coordinateFormatStart)})),
f(this.coordinateFormatButtonEnd,"click",b.hitch(this,this.coordinateFormatButtonEndClicked)),f(this.coordinateFormatEnd.content.applyButton,"click",b.hitch(this,function(){var a=this.coordinateFormatEnd.content.formats[this.coordinateFormatEnd.content.ct],e=a.defaultFormat,c=this.coordinateFormatEnd.content.frmtSelect.get("value");a.useCustom&&(e=a.customFormat);this.coordToolEnd.inputCoordinate.set("formatPrefix",this.coordinateFormatEnd.content.addSignChkBox.checked);this.coordToolEnd.inputCoordinate.set("formatString",
e);this.coordToolEnd.inputCoordinate.set("formatType",c);this.setCoordLabelEnd(c);g.close(this.coordinateFormatEnd)})),f(this.coordinateFormatEnd.content.cancelButton,"click",b.hitch(this,function(){g.close(this.coordinateFormatEnd)})),f(this.addPointBtnStart,"click",b.hitch(this,this.addStartPointButtonClicked)),f(this.addPointBtnEnd,"click",b.hitch(this,this.addEndPointButtonClicked)),f(this.interactiveLine,"change",b.hitch(this,this.interactiveCheckBoxChanged)),f(this.lengthInputDiv,p.leave,b.hitch(this,
this.checkValidInputs)),f(this.angleInputDiv,p.leave,b.hitch(this,this.checkValidInputs)))},lineLengthDidChange:function(a){a=z.format(a,{places:2});this.lengthInput.set("value",a)},lineAngleDidChange:function(a){this.angleInput.set("value",a)},interactiveCheckBoxChanged:function(){this.tabSwitched();this.coordToolEnd.set("disabled",this.interactiveLine.checked);this.interactiveLine.checked?(d.add(this.addPointBtnEndDiv,"controlGroupHidden"),this.addPointBtnStart.title=this.nls.drawLineLabel,this.addPointBtnEnd.hidden=
!0):(this.coordToolEnd.clear(),this.addPointBtnStart.title=this.nls.addPointLabel,d.remove(this.addPointBtnEndDiv,"controlGroupHidden"),this.addPointBtnEnd.hidden=!1);this.checkValidInputs()},lineTypeDDDidChange:function(){"Points"===this.lineTypeDD.get("value")?(this.addPointBtnStart.title=this.nls.addPointLabel,this.coordToolEnd.set("disabled",!1),this.angleInput.set("disabled",!0),this.lengthInput.set("disabled",!0),this.interactiveLine.disabled=!1,d.remove(this.addPointBtnEndDiv,"controlGroupHidden"),
d.remove(this.interactiveLabel,"disabledLabel"),this.addPointBtnEnd.hidden=!1):(this.addPointBtnStart.title=this.nls.addPointLabel,this.interactiveLine.disabled=!0,this.interactiveLine.checked&&(this.interactiveLine.checked=!1),this.coordToolEnd.set("value",""),this.coordToolEnd.set("disabled",!0),this.angleInput.set("disabled",!1),this.lengthInput.set("disabled",!1),d.add(this.addPointBtnEndDiv,"controlGroupHidden"),d.add(this.interactiveLabel,"disabledLabel"),this.addPointBtnEnd.hidden=!0);this.checkValidInputs()},
coordinateFormatButtonStartClicked:function(){this.coordinateFormatStart.content.set("ct",this.coordToolStart.inputCoordinate.formatType);g.open({popup:this.coordinateFormatStart,around:this.coordinateFormatButtonStart})},coordinateFormatButtonEndClicked:function(){this.coordinateFormatEnd.content.set("ct",this.coordToolEnd.inputCoordinate.formatType);g.open({popup:this.coordinateFormatEnd,around:this.coordinateFormatButtonEnd})},coordToolStartKeyWasPressed:function(a){this.dtStart.removeStartGraphic();
a.keyCode===q.ENTER&&this.coordToolStart.inputCoordinate.getInputType().then(b.hitch(this,function(a){"UNKNOWN"===a.inputType?(new t({message:this.nls.invalidCoordinateTypeMessage}),this.coordToolStart.inputCoordinate.coordinateEsriGeometry=null):(this.dtStart.onLineStartManualInputHandler(this.coordToolStart.inputCoordinate.coordinateEsriGeometry),this.setCoordLabelStart(a.inputType),this.coordToolStart.inputCoordinate.set("formatString",this.coordinateFormatStart.content.formats[a.inputType].defaultFormat),
this.coordToolStart.inputCoordinate.set("formatType",a.inputType),this.dtStart.addStartGraphic(a.coordinateEsriGeometry,this._ptSym));this.checkValidInputs()}))},coordToolEndKeyWasPressed:function(a){this.dtEnd.removeStartGraphic();a.keyCode===q.ENTER&&this.coordToolEnd.inputCoordinate.getInputType().then(b.hitch(this,function(a){"UNKNOWN"===a.inputType?(new t({message:this.nls.invalidCoordinateTypeMessage}),this.coordToolEnd.inputCoordinate.coordinateEsriGeometry=null):(this.dtEnd.onLineStartManualInputHandler(this.coordToolEnd.inputCoordinate.coordinateEsriGeometry),
this.setCoordLabelEnd(a.inputType),this.coordToolEnd.inputCoordinate.set("formatString",this.coordinateFormatEnd.content.formats[a.inputType].defaultFormat),this.coordToolEnd.inputCoordinate.set("formatType",a.inputType),this.dtEnd.addStartGraphic(a.coordinateEsriGeometry,this._ptSym));this.checkValidInputs()}))},setCoordLabelStart:function(a){this.lineStartPointLabel.innerHTML=v.sanitizeHTML(n.substitute(this.nls.startPointLabel+" (${crdType})",{crdType:a}))},setCoordLabelEnd:function(a){this.lineEndPointLabel.innerHTML=
v.sanitizeHTML(n.substitute(this.nls.endPointLabel+" (${crdType})",{crdType:a}))},checkValidInputs:function(){d.add(this.okButton,"jimu-state-disabled");this.interactiveLine.checked||("DistAndBearing"===this.lineTypeDD.get("value")?null!==this.coordToolStart.inputCoordinate.coordinateEsriGeometry&&this.lengthInput.isValid()&&this.angleInput.isValid()&&d.remove(this.okButton,"jimu-state-disabled"):this.interactiveLine.checked||null!==this.coordToolStart.inputCoordinate.coordinateEsriGeometry&&null!==
this.coordToolEnd.inputCoordinate.coordinateEsriGeometry&&d.remove(this.okButton,"jimu-state-disabled"))},addStartPointButtonClicked:function(){d.contains(this.addPointBtnStart,"drawPointBtn-active")?(this.dtStart.deactivate(),this.map.enableMapNavigation()):(this.tabSwitched(),this.coordToolStart.manualInput=!1,this.coordToolEnd.manualInput=!1,this.map.disableMapNavigation(),"Points"===this.lineTypeDD.get("value")&&this.interactiveLine.checked?this.dtStart.activate("polyline"):this.dtStart.activate("point"));
d.toggle(this.addPointBtnStart,"drawPointBtn-active")},addEndPointButtonClicked:function(){d.contains(this.addPointBtnEnd,"drawPointBtn-active")?(this.dtEnd.deactivate(),this.map.enableMapNavigation()):(this.tabSwitched(),this.coordToolStart.manualInput=!1,this.coordToolEnd.manualInput=!1,this.map.disableMapNavigation(),this.dtEnd.activate("point"));d.toggle(this.addPointBtnEnd,"drawPointBtn-active")},lengthUnitDDDidChange:function(){this.currentLengthUnit=this.lengthUnitDD.get("value");this.dtStart.set("lengthUnit",
this.currentLengthUnit)},angleUnitDDDidChange:function(){this.currentAngleUnit=this.angleUnitDD.get("value");this.dtStart.set("angleUnit",this.currentAngleUnit);"degrees"===this.currentAngleUnit?(this.angleInput.constraints.max=360,this.angleInput.rangeMessage=this.nls.degreesRangeMessage):(this.angleInput.constraints.max=6400,this.angleInput.rangeMessage=this.nls.millsRangeMessage)},feedbackDidCompleteStart:function(a){if("polyline"===a.geometry.type){if(void 0!==this.lengthInput.get("value")||void 0!==
this.angleInput.get("value"))this.currentLine=new K(a),a=null,a=new l({paths:4326===this.map.spatialReference.wkid?this.currentLine.geographicGeometry.paths:this.currentLine.wmGeometry.paths,spatialReference:this.map.spatialReference}),4326===this.map.spatialReference.wkid&&(a=w.geodesicDensify(a,1E4)),this.currentLine.graphic=new J(a,this._lineSym,{GeoLength:this.lengthInput.get("displayedValue").toString()+" "+this.lengthUnitDD.get("displayedValue"),LineAngle:this.angleInput.get("displayedValue").toString()+
" "+this.angleUnitDD.get("displayedValue")}),this._gl.add(this.currentLine.graphic),this._gl.refresh(),this.dtEnd.onLineStartManualInputHandler(this.currentLine.endPoint),this.dtStart.onLineStartManualInputHandler(this.currentLine.startPoint),this.dtStart.removeStartGraphic(),this.dtEnd.removeStartGraphic(),a=4326===this.map.spatialReference.wkid?this.currentLine.geographicGeometry.getExtent().expand(3):this.currentLine.wmGeometry.getExtent().expand(3),this.map.setExtent(a),this.interactiveLine.checked&&
d.toggle(this.addPointBtnStart,"drawPointBtn-active")}else d.toggle(this.addPointBtnStart,"drawPointBtn-active");this.checkValidInputs();this.map.enableMapNavigation();this.dtStart.deactivate()},feedbackDidCompleteEnd:function(a){this.checkValidInputs();this.map.enableMapNavigation();this.dtEnd.deactivate();d.toggle(this.addPointBtnEnd,"drawPointBtn-active")},createManualGraphic:function(){var a=this.coordToolStart.inputCoordinate.coordinateEsriGeometry,b=this.coordToolEnd.inputCoordinate.coordinateEsriGeometry,
c=new l;c.addPath([a,b]);var d=w.geodesicLength(c,9001);this.lengthInput.set("value",this.dtStart.coordTool.convertMetersToUnits(d,this.lengthUnitDD.get("value")));this.angleInput.set("value",this.dtStart.getAngle(a,b));this.map.setExtent(c.getExtent().expand(3));this.feedbackDidCompleteStart({geometry:c,geographicGeometry:c});this.dtStart.clearPoints();this.dtEnd.clearPoints()},okButtonClicked:function(a){if(!d.contains(this.okButton,"jimu-state-disabled"))if("Points"===this.lineTypeDD.get("value"))this.createManualGraphic();
else{a=this.coordToolStart.inputCoordinate.coordinateEsriGeometry;var b=this.coordToolStart.inputCoordinate.util.convertToMeters(this.lengthInput.get("value"),this.lengthUnitDD.get("value")),b=new G(a,{geodesic:!0,radius:b,numberOfPoints:64E3}),c=this.angleInput.get("value"),c="degrees"===this.currentAngleUnit?parseInt(177.77777778*c,10):parseInt(10*c,10),b=b.getPoint(0,c),c=new l;c.addPath([a,b]);this.feedbackDidCompleteStart({geometry:c,geographicGeometry:c});this.coordToolEnd.inputCoordinate.set("coordinateEsriGeometry",
b)}},clearGraphics:function(){this._gl&&(this._gl.clear(),this.dtStart.removeStartGraphic(),this.dtEnd.removeStartGraphic(),this.coordToolStart.clear(),this.coordToolEnd.clear(),this.tabSwitched());this.checkValidInputs();for(var a=0;a<this.map.graphicsLayerIds.length;a++)this.map.getLayer(this.map.graphicsLayerIds[a]).refresh()},setGraphicsHidden:function(){this._gl&&this._gl.hide()},setGraphicsShown:function(){this._gl&&this._gl.show()},tabSwitched:function(){this.dtStart.deactivate();this.dtEnd.deactivate();
this.map.enableMapNavigation();d.remove(this.addPointBtnStart,"drawPointBtn-active");d.remove(this.addPointBtnEnd,"drawPointBtn-active")}})});