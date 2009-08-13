YUI.add("widget-stdmod",function(A){var D=A.Lang,P=A.Node,b=A.NodeList,V=A.UA,C=A.Widget,B="",i="hd",g="bd",H="ft",d="header",l="body",j="footer",p="fillHeight",K="stdmod",s="px",S="Node",h="Content",n="innerHTML",c="firstChild",G="childNodes",k="createDocumentFragment",M="ownerDocument",T="contentBox",o="boundingBox",X="height",f="offsetHeight",W="auto",J="headerContentChange",a="bodyContentChange",N="footerContentChange",Q="fillHeightChange",R="HeightChange",q="contentUpdate",U="renderUI",e="bindUI",E="syncUI";function r(L){this._stdModNode=this.get(T);A.after(this._renderUIStdMod,this,U);A.after(this._bindUIStdMod,this,e);A.after(this._syncUIStdMod,this,E);}r.HEADER=d;r.BODY=l;r.FOOTER=j;r.AFTER="after";r.BEFORE="before";r.REPLACE="replace";var I=r.HEADER,Z=r.BODY,O=r.FOOTER,m=r.AFTER,F=r.BEFORE;r.ATTRS={headerContent:{getter:function(Y){var L=this._getStdModContent(I);return(L===null)?Y:L;}},footerContent:{getter:function(Y){var L=this._getStdModContent(O);return(L===null)?Y:L;}},bodyContent:{getter:function(Y){var L=this._getStdModContent(Z);return(L===null)?Y:L;}},fillHeight:{value:r.BODY,validator:function(L){return this._validateFillHeight(L);}}};r.HTML_PARSER={headerContent:function(L){return this._parseStdModHTML(I);},bodyContent:function(L){return this._parseStdModHTML(Z);},footerContent:function(L){return this._parseStdModHTML(O);}};r.SECTION_CLASS_NAMES={header:C.getClassName(i),body:C.getClassName(g),footer:C.getClassName(H)};r.TEMPLATES={header:'<div class="'+r.SECTION_CLASS_NAMES[I]+'"></div>',body:'<div class="'+r.SECTION_CLASS_NAMES[Z]+'"></div>',footer:'<div class="'+r.SECTION_CLASS_NAMES[O]+'"></div>'};r.prototype={_syncUIStdMod:function(){this._uiSetStdMod(I,this.get(I+h));this._uiSetStdMod(Z,this.get(Z+h));this._uiSetStdMod(O,this.get(O+h));this._uiSetFillHeight(this.get(p));},_renderUIStdMod:function(){this._stdModNode.addClass(C.getClassName(K));},_bindUIStdMod:function(){this.after(J,this._afterHeaderChange);this.after(a,this._afterBodyChange);this.after(N,this._afterFooterChange);this.after(Q,this._afterFillHeightChange);this.after(R,this._fillHeight);this.after(q,this._fillHeight);},_afterHeaderChange:function(L){this._uiSetStdMod(I,L.newVal,L.stdModPosition);},_afterBodyChange:function(L){this._uiSetStdMod(Z,L.newVal,L.stdModPosition);},_afterFooterChange:function(L){this._uiSetStdMod(O,L.newVal,L.stdModPosition);},_afterFillHeightChange:function(L){this._uiSetFillHeight(L.newVal);},_validateFillHeight:function(L){return !L||L==r.BODY||L==r.HEADER||L==r.FOOTER;},_uiSetFillHeight:function(t){var Y=this.getStdModNode(t);var L=this._currFillNode;if(L&&Y!==L){L.setStyle(X,B);}if(Y){this._currFillNode=Y;}this._fillHeight();},_fillHeight:function(){if(this.get(p)){var L=this.get(X);if(L!=B&&L!=W){this.fillHeight(this._currFillNode);}}},_uiSetStdMod:function(u,t,L){if(t){var Y=this.getStdModNode(u)||this._renderStdMod(u);if(t instanceof P||t instanceof b){this._addNodeRef(Y,t,L);}else{this._addNodeHTML(Y,t,L);}this.fire(q);}},_renderStdMod:function(t){var L=this.get(T),Y=this._findStdModSection(t);if(!Y){Y=this._getStdModTemplate(t);}this._insertStdModSection(L,t,Y);this[t+S]=Y;return this[t+S];},_insertStdModSection:function(L,u,t){var Y=L.get(c);if(u===O||!Y){L.appendChild(t);}else{if(u===I){L.insertBefore(t,Y);}else{var v=this[O+S];if(v){L.insertBefore(t,v);}else{L.appendChild(t);}}}},_getStdModTemplate:function(L){return P.create(r.TEMPLATES[L],this._stdModNode.get(M));},_addNodeHTML:function(t,Y,L){if(L==m){t.set(n,t.get(n)+Y);}else{if(L==F){t.set(n,Y+t.get(n));}else{t.set(n,Y);}}},_addNodeRef:function(w,u,Y){var L=true,t,v;if(Y==F){var x=w.get(c);if(x){if(u instanceof b){for(t=u.size()-1;t>=0;--t){w.insertBefore(u.item(t),x);}}else{w.insertBefore(u,x);}L=false;}}else{if(Y!=m){w.set(n,B);}}if(L){if(u instanceof b){for(t=0,v=u.size();t<v;++t){w.appendChild(u.item(t));}}else{w.appendChild(u);}}},_getPreciseHeight:function(t){var L=(t)?t.get(f):0,u="getBoundingClientRect";if(t&&t.hasMethod(u)){var Y=t.invoke(u);if(Y){L=Y.bottom-Y.top;}}return L;},_findStdModSection:function(L){return this.get(T).query("> ."+r.SECTION_CLASS_NAMES[L]);},_parseStdModHTML:function(w){var v=this._findStdModSection(w),t,Y;if(v){t=v.get(M).invoke(k);Y=v.get(G);for(var L=Y.size()-1;L>=0;L--){var u=t.get(c);if(u){t.insertBefore(Y.item(L),u);}else{t.appendChild(Y.item(L));}}return t;}return null;},_getStdModContent:function(L){return(this[L+S])?this[L+S].get(G):null;},setStdModContent:function(t,Y,L){this.set(t+h,Y,{stdModPosition:L});},getStdModNode:function(L){return this[L+S]||null;},fillHeight:function(t){if(t){var x=this.get(o),z=[this.headerNode,this.bodyNode,this.footerNode],Y,AA=0,AB=0,w=0,v=false;for(var y=0,u=z.length;y<u;y++){Y=z[y];if(Y){if(Y!==t){AB+=this._getPreciseHeight(Y);}else{v=true;}}}if(v){if(V.ie||V.opera){t.setStyle(X,0+s);}AA=parseInt(x.getComputedStyle(X),10);if(D.isNumber(AA)){w=AA-AB;if(w>=0){t.setStyle(X,w+s);}var L=this.get(T).get(f);if(L!=AA){w=w-(L-AA);t.setStyle(X,w+s);}}}}}};A.WidgetStdMod=r;},"@VERSION@",{requires:["widget"]});