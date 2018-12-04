// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/PlanSettings.html":'\x3cdiv\x3e\r\n    \x3c!-- Direction or Angle Type Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.directionOrAngleTypeLabel}"\x3e\r\n            ${nls.planSettings.directionOrAngleTypeLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"directionOrAngleType" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Direction or Angle Units Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.directionOrAngleUnitsLabel}"\x3e\r\n            ${nls.planSettings.directionOrAngleUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"directionOrAngleUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Distance and Length Units Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.distanceAndLengthUnitsLabel}"\x3e\r\n            ${nls.planSettings.distanceAndLengthUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"distanceAndLengthUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Area Units Selector--\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.areaUnitsLabel}"\x3e\r\n            ${nls.planSettings.areaUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"areaUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Circular Curve Parameters Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.circularCurveParameters}"\x3e\r\n            ${nls.planSettings.circularCurveParameters}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"circularCurveParameters" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./PlanSettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query ./utils jimu/utils libs/storejs/store dijit/form/Select".split(" "),function(k,l,m,n,p,c,q,d,e,g,r,h){return k([m,n,q],{baseClass:"jimu-widget-ParcelDrafter-PlanSettings",templateString:p,selectedPlanSettings:{},planSettingsOptions:c.clone(g.planSettingsOptions),planSettingsKey:null,constructor:function(a){c.mixin(this,a)},startup:function(){var a=
this._retriveFromLocalCache();a||(a={areaUnits:this.planSettingsOptions.areaUnits[0],circularCurveParameters:this.planSettingsOptions.circularCurveParameters[0],directionOrAngleType:this.planSettingsOptions.directionOrAngleType[0],directionOrAngleUnits:this.planSettingsOptions.directionOrAngleUnits[0],distanceAndLengthUnits:this.planSettingsOptions.distanceAndLengthUnits[0]});this._loadOptionsForDropDown(this.directionOrAngleType,this.planSettingsOptions.directionOrAngleType,a.directionOrAngleType);
this._loadOptionsForDropDown(this.directionOrAngleUnits,this.planSettingsOptions.directionOrAngleUnits,a.directionOrAngleUnits);this._loadOptionsForDropDown(this.distanceAndLengthUnits,this.planSettingsOptions.distanceAndLengthUnits,a.distanceAndLengthUnits);this._loadOptionsForDropDown(this.areaUnits,this.planSettingsOptions.areaUnits,a.areaUnits);this._loadOptionsForDropDown(this.circularCurveParameters,this.planSettingsOptions.circularCurveParameters,a.circularCurveParameters);this.onPlansettingsChanged()},
postCreate:function(){this.inherited(arguments);this.planSettingsKey=this.getKey();this.selectedPlanSettings={};this.planSettingsOptions=c.clone(g.planSettingsOptions);d.add(this.domNode,"esriCTPlanSettingsContainer esriCTFullWidth");setTimeout(c.hitch(this,this._setBackgroundColorForDartTheme),500)},_setBackgroundColorForDartTheme:function(){var a,b,c;if("DartTheme"===this.appConfig.theme.name)for(a=e(".dijitSelect .dijitButtonContents",this.planSettingsNode),c=e(".dijitSelect .dijitArrowButton",
this.planSettingsNode),b=0;b<a.length&&b<c.length;b++)d.add(a[b],"dijitButtonContentsDartTheme"),d.add(c[b],"dijitArrowButtonDartTheme")},_loadOptionsForDropDown:function(a,b,d){var e=[],f;l.forEach(b,c.hitch(this,function(a){f={value:a,label:this.nls.planSettings[a]||window.jimuNls.units[a]};d===a&&(f.selected=!0);e.push(f)}));a.addOption(e)},_isSettingsChanged:function(){var a=!1;this.selectedPlanSettings.directionOrAngleType!==this.directionOrAngleType.get("value")?a=!0:this.selectedPlanSettings.directionOrAngleUnits!==
this.directionOrAngleUnits.get("value")?a=!0:this.selectedPlanSettings.distanceAndLengthUnits!==this.distanceAndLengthUnits.get("value")?a=!0:this.selectedPlanSettings.areaUnits!==this.areaUnits.get("value")?a=!0:this.selectedPlanSettings.circularCurveParameters!==this.circularCurveParameters.get("value")&&(a=!0);return a},onClose:function(){if(this._isSettingsChanged())this.onPlansettingsChanged()},onPlansettingsChanged:function(){this.selectedPlanSettings={directionOrAngleType:this.directionOrAngleType.get("value"),
directionOrAngleUnits:this.directionOrAngleUnits.get("value"),distanceAndLengthUnits:this.distanceAndLengthUnits.get("value"),areaUnits:this.areaUnits.get("value"),circularCurveParameters:this.circularCurveParameters.get("value")};this._saveToLocalCache(this.selectedPlanSettings);this.emit("planSettingsChanged",this.selectedPlanSettings)},_saveToLocalCache:function(a){try{h.set(this.planSettingsKey,a)}catch(b){console.log("ParcelDrafter: Error in storeing settings to local cache.")}},_retriveFromLocalCache:function(){var a=
null;try{a=h.get(this.planSettingsKey)}catch(b){console.log("ParcelDrafter: Error in retriving settings from local cache.")}return a},getKey:function(){return"ParcelDrafterPlanSettings."+encodeURIComponent(r.getAppIdFromUrl())+"."+this.widgetId}})});