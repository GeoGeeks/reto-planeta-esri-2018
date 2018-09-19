// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-construct dijit/_TemplatedMixin dijit/_WidgetBase".split(" "),function(h,f,g,d,c,k,l){return h([l,k],{name:"FilterEditor",baseClass:"jimu-widget-FilterEditor",declaredClass:"jimu.dijit.FilterEditor",templateString:"\x3cdiv style\x3d'width:100%'\x3e\x3cdiv data-dojo-attach-point\x3d'filterEditorDiv'\x3e\x3c/div\x3e\x3c/div\x3e",_settings:null,_editWidget:null,_origGetItemsFromLayerFunc:null,postCreate:function(){this.nls=
this._editWidget.nls;this._createFilterTool()},_createFilterTool:function(){var b=c.create("label",{innerHTML:this.nls.featureLayers});c.place(b,this.filterEditorDiv);this._createLayerFilter();this._createTemplateFilter()},_createLayerFilter:function(){this.selectDropDown=c.create("select",{"class":"jimu-input flDropDown"});c.place(this.selectDropDown,this.filterEditorDiv);this.selectDropDown.onchange=f.hitch(this,function(){this._onLayerFilterChanged()});var b=c.create("option",{value:"all",innerHTML:window.jimuNls.common.all});
c.place(b,this.selectDropDown);for(var a,b=0;b<this._editWidget._layerObjectsParaForTempaltePicker.length;b++)a=this._editWidget._layerObjectsParaForTempaltePicker[b],a=c.create("option",{value:a.id,innerHTML:a.name}),c.place(a,this.selectDropDown)},_createTemplateFilter:function(){this.filterTextBox=c.create("input",{"class":"jimu-input searchtextbox",type:"text",placeholder:this.nls.searchTemplates},this.filterEditorDiv);this.filterTextBox.onkeyup=f.hitch(this,function(){this._onTempalteFilterChanged()});
var b=this._editWidget.editor.templatePicker;this._origGetItemsFromLayerFunc=b._getItemsFromLayer;b._getItemsFromLayer=f.hitch(this,function(){var a;a=this._origGetItemsFromLayerFunc.apply(b,arguments);var c=this.filterTextBox.value;c&&(a=g.filter(a,function(a){var b=!1,e=new RegExp(c,"ig");a.hasOwnProperty("label")&&a.label.match(e)&&0<a.label.match(e).length&&(b=!0);a.hasOwnProperty("template")&&a.template.hasOwnProperty("name")&&a.template.name.match(e)&&0<a.template.name.match(e).length&&(b=!0);
return b}));0===a.length&&(this._editWidget.editor.templatePicker.grid.noDataMessage=this.nls.noAvailableTempaltes);return a})},show:function(){d.setStyle(this.domNode,"display","block")},hide:function(){d.setStyle(this.domNode,"display","none")},selectLayerFilterByValue:function(b){g.forEach(this.selectDropDown.options,function(a,c){a.value===b&&(this.selectDropDown.selectedIndex=c)},this)},setTemplateFilter:function(b){this.filterTextBox.value=b},disableLayerFilter:function(){d.setAttr(this.selectDropDown,
"disabled",!0)},enableLayerFilter:function(){d.setAttr(this.selectDropDown,"disabled",!1)},update:function(){var b,a;for(a=this.selectDropDown.options.length-1;0<=a;a--)"all"!==this.selectDropDown.options[a].value&&this.selectDropDown.remove(a);for(a=0;a<this._editWidget._layerObjectsParaForTempaltePicker.length;a++)b=this._editWidget._layerObjectsParaForTempaltePicker[a],b=c.create("option",{value:b.id,innerHTML:b.name}),c.place(b,this.selectDropDown);this._editWidget.editor.templatePicker.attr("grouping",
!0);this.setTemplateFilter("")},_onLayerFilterChanged:function(b){var a=this._editWidget.editor.templatePicker;a.clearSelection();var c=this.selectDropDown.options[this.selectDropDown.selectedIndex].text;""!==c&&("All"===c?(a.attr("featureLayers",this._editWidget._layerObjectsParaForTempaltePicker),""===this.filterTextBox.value?a.attr("grouping",!0):a.attr("grouping",!1)):(c=this._editWidget.map.getLayer(this.selectDropDown.value),a.attr("featureLayers",[c]),a.attr("grouping",!1)),b&&a.attr("grouping",
!0),a.update(!0))},_onTempalteFilterChanged:function(b){var a=this.selectDropDown.options[this.selectDropDown.selectedIndex].text,c=this.filterTextBox.value;this._editWidget.editor.templatePicker.clearSelection();"All"===a&&""===c?this._editWidget.editor.templatePicker.attr("grouping",!0):this._editWidget.editor.templatePicker.attr("grouping",!1);b&&this._editWidget.editor.templatePicker.attr("grouping",!0);this._editWidget.editor.templatePicker.update(!0)}})});