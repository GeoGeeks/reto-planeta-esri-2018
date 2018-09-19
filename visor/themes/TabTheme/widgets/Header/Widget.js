// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/TabTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/TabTheme/widgets/Header/Widget.html":'\x3cdiv\x3e\r\n  \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n    \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode"\x3e\r\n  \x3c/a\x3e\r\n  \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n    \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"links jimu-float-trailing jimu-trailing-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n    \x3cspan class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/span\x3e\r\n    \x3ca class\x3d"link" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick"\x3e${nls.about}\x3c/a\x3e\r\n    \x3cspan class\x3d"signin-section" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n      \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n      data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n      \x3ca href\x3d"#" target\x3d"_blank" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n      \x3ca href\x3d"#" class\x3d"link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n    \x3c/span\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:themes/TabTheme/widgets/Header/css/style.css":".jimu-widget-header .header-section{height: 100%; float: left;}.jimu-widget-header .container-section{height: 100%; float: left;}.jimu-widget-header .hide-logo{display: none;}.jimu-widget-header .titles{height: 100%;}.jimu-widget-header .logo{max-height: 40px;}.jimu-widget-header .jimu-title{text-align: center; height: 100%;}.jimu-widget-header .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header .links{height: 100%;}.jimu-widget-header .links .link{margin-left: 12px; height: 100%; color: #d9dde0; display: inline-block; text-decoration: none;}.jimu-rtl .jimu-widget-header .links .link{margin-left: auto; margin-right: 12px;}.jimu-widget-header .links .link:link,.jimu-widget-header .links .link:visited,{color: rgba(255, 255, 255, 0.7);}.jimu-widget-header .links .link:hover{color: #FFFFFF;}.jimu-widget-header .links .link:active{color: rgba(255, 255, 255, 0.9);}.jimu-widget-header .signin-section .link{color: #d9dde0;}.jimu-widget-header .group-icon-node{float: right; cursor: pointer; opacity: 0.4; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header .group-icon-node:first-child{border: none;}.jimu-widget-header .group-icon-node:hover{opacity: 1;}.jimu-widget-header .group-icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.popup-links{background-color: #252824; position: absolute; z-index: 100;}.popup-links .popup-title{}.popup-links .title{color:#fff; text-align: center; font-size: 24px;}.popup-links .line{width: 100%; height: 4px; border-top: 1px solid #14161a; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px; background-color: #252824;}.popup-links a{color: #6d7685; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; display: inline-block;}.jimu-rtl .popup-links a {margin-right: 20px; margin-left: auto;}.popup-links .link-section.signin a{color: #d9dde0;}",
"*now":function(h){h(['dojo/i18n!*preload*themes/TabTheme/widgets/Header/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on dojo/topic jimu/BaseWidget jimu/tokenUtils jimu/portalUtils jimu/utils jimu/dijit/Message dojo/NodeList-dom dojo/NodeList-manipulate".split(" "),function(h,e,m,a,f,k,n,p,l,q,g,r){return h([p],{baseClass:"jimu-widget-header jimu-main-background",name:"Header",switchableElements:{},moveTopOnActive:!1,constructor:function(){this.height=this.getHeaderHeight()+"px"},postCreate:function(){this.inherited(arguments);
var b=this.getLogoHeight()+"px";this.position&&this.position.height&&(this.height=this.position.height);this.switchableElements.logo=f(".logo",this.domNode);this.switchableElements.title=f(".jimu-title",this.domNode);this.switchableElements.links=f(".links",this.domNode);this.switchableElements.subtitle=f(".jimu-subtitle",this.domNode);this._handleTitleColorAndLogoLink(this.appConfig);this.switchableElements.logo.style({height:b});a.setStyle(this.signInSectionNode,"display","none");this._setElementsSize();
this.own(n.subscribe("changeMapPosition",e.hitch(this,this._onMapResize)))},startup:function(){this.inherited(arguments);this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML(g.sanitizeHTML(this.appConfig.title?this.appConfig.title:""));this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:
""));this._createDynamicLinks(this.appConfig.links);this.appConfig.about?a.setStyle(this.aboutNode,"display",""):a.setStyle(this.aboutNode,"display","none")},onAppConfigChanged:function(a,c,d){switch(c){case "attributeChange":this._onAttributeChange(a,d);break;default:return}this.appConfig=a;this.resize()},_onMapResize:function(){if(window.appInfo.isRunInMobile){var b=this.widgetManager.getWidgetsByName("SidebarController");0!==b.length&&(b=b[0],this.width="minimized"===b.windowState?b.minWidth:b.getWidth(),
a.setStyle(this.domNode,"width",this.width+"px"),this.resize())}},_onAttributeChange:function(b,c){"title"in c&&c.title!==this.appConfig.title&&this.switchableElements.title.innerHTML(g.sanitizeHTML(c.title));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(c.subtitle));"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(a.setAttr(this.logoNode,"src",c.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,
"hide-logo")));"links"in c&&this._createDynamicLinks(c.links);this._handleTitleColorAndLogoLink(b)},_handleTitleColorAndLogoLink:function(b){b.titleColor?a.setStyle(this.switchableElements.title,"color",b.titleColor):a.setStyle(this.switchableElements.title,"color","");b.logoLink?(a.setAttr(this.logoLinkNode,"href",b.logoLink),a.setStyle(this.logoNode,"cursor","pointer")):(a.setAttr(this.logoLinkNode,"href","javascript:void(0)"),a.setStyle(this.logoNode,"cursor","default"))},_setElementsSize:function(){a.setStyle(this.logoNode,
{height:"30px",marginTop:(this.height-30)/2+"px"});a.setStyle(this.titleNode,{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});f(".link",this.domNode).style({lineHeight:this.height+"px"})},_createDynamicLinks:function(b){a.empty(this.dynamicLinksNode);m.forEach(b,function(b){a.create("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",innerHTML:g.sanitizeHTML(b.label),"class":"link",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},
onSignIn:function(b){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","inline");a.setStyle(this.signoutLinkNode,"display","inline");this.userNameLinkNode.innerHTML=b.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display","block"),a.setStyle(this.popupSignoutNode,"display","block"),f("a",
this.popupUserNameNode).html(b.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(a){this.inherited(arguments);this._onSignOut(a);q.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(e.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),e.hitch(this,function(a){console.error(a)}))},_onSignOut:function(b){a.setStyle(this.signinLinkNode,"display","inline");a.setAttr(this.signinLinkNode,"innerHTML",b);a.setStyle(this.userNameLinkNode,
"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","block"),a.setAttr(this.popupSigninNode,"innerHTML",b),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),f("a",this.popupUserNameNode).html(""));this.resize()},switchElements:function(b){var c=this.switchableElements,d;for(d in c)c.hasOwnProperty(d)&&("logo"===d?c[d].style("display",
""):-1<b.indexOf(d)?c[d].style("display","block"):c[d].style("display","none"));this.logoClickHandle&&(this.logoClickHandle.remove(),a.setStyle(this.logoNode,"cursor","default"));0>b.indexOf("links")?(this.linksVisible=!1,this.logoClickHandle=k(c.logo[0],"click",e.hitch(this,this.switchPopupLinks)),a.setStyle(this.logoNode,"cursor","pointer")):this.linksVisible&&this.switchPopupLinks()},switchSignin:function(){var b=l.getPortalCredential(this.appConfig.portalUrl);if(b)this.onSignIn(b);else this.onSignOut();
a.setStyle(this.signInSectionNode,"display","none")},switchPopupLinks:function(){this.appConfig.links&&0!==this.appConfig.links.length&&(a.destroy(this.popupLinkNode),this.popupLinkNode=this.createPopupLinkNode(),a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),this.linksVisible?(this.linksVisible=!1,a.setStyle(this.popupLinkNode,"display","none")):(this.linksVisible=!0,a.setStyle(this.popupLinkNode,
"display","block")))},createPopupLinkNode:function(){var b,c=a.getContentBox(jimuConfig.layoutId);b=a.create("div",{"class":"popup-links",style:{top:0,width:c.w-this.width+"px"}},this.domNode);window.isRTL?a.setStyle(b,"right",this.width+"px"):a.setStyle(b,"left",this.width+"px");m.forEach(this.appConfig.links,function(a){this.createLinkNode(b,a,!1)},this);this.popupSigninNode=this.createLinkNode(b,{label:"SignIn",url:"#"},!0);this.popupUserNameNode=this.createLinkNode(b,{label:"",url:"#"},!0);this.popupSignoutNode=
this.createLinkNode(b,{label:"SignOut",url:"#"},!0);this.own(k(this.popupSigninNode,"click",e.hitch(this,"_onSigninClick")));this.own(k(this.popupSignoutNode,"click",e.hitch(this,"_onSignoutClick")));g.setVerticalCenter(b);this.createLinkNode(b,{label:"",url:"#"},!1);return b},createLinkNode:function(b,c,d){b=a.place('\x3cdiv class\x3d"link"\x3e\x3c/div\x3e',b);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',b);d=a.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',
b);a.create("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",innerHTML:g.sanitizeHTML(c.label),"class":"jimu-vcenter-text jimu-ellipsis",title:c.label},d);return b},_onSigninClick:function(){l.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new r({message:this.nls.cantSignOutTip}):l.signOutAll()},_onUserNameClick:function(){},_onAboutClick:function(){this.widgetManager.loadWidget({id:this.appConfig.about+"_1",uri:this.appConfig.about,
label:"About"}).then(e.hitch(this,function(b){a.place(b.domNode,jimuConfig.layoutId);b.startup()}))},resize:function(){this.switchElements(["title","links","subtitle"]);var b=a.getContentBox(this.domNode),c=a.getMarginBox(this.logoNode),d=a.getMarginBox(this.titlesNode),e=a.getMarginBox(this.linksNode);this.width=b.w;b.w<=d.w+e.w+c.w&&(this.switchElements(["title","links"]),d=a.getMarginBox(this.titlesNode),b.w<=d.w+e.w+c.w&&(this.switchElements(["title"]),b.w<=d.w+c.w&&this.switchElements([])))},
getHeaderHeight:function(){return 44},getHeaderEmptyWidth:function(){return.125*a.getMarginBox(this.domNode).w},getLogoHeight:function(){return 34},destroy:function(){this.inherited(arguments);this.popupLinkNode&&this.linksVisible&&this.switchPopupLinks();a.destroy(this.popupLinkNode)}})});