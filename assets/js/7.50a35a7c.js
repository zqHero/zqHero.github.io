(window.webpackJsonp=window.webpackJsonp||[]).push([[7,21],{391:function(t,e,n){},401:function(t,e,n){"use strict";n(391)},423:function(t,e,n){},428:function(t,e,n){"use strict";n.r(e);var s=n(36),a=n(1),u={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},o={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"新的风暴已经出现",buttonText:"盘他"},updateEvent:null}},computed:{popupConfig:function(){return Object(a.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||u["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||u["/"].buttonText}},created:function(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:"新的风暴已经出现",buttonText:"盘他"}&&(this.rawPopupConfig=u)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(401),n(57)),p=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null);e.default=p.exports},502:function(t,e,n){"use strict";n(423)},515:function(t,e,n){"use strict";n.r(e);var s={name:"MySWUpdatePopup",components:{SWUpdatePopup:n(428).default},methods:{reload:function(t){console.log(t)}}},a=(n(502),n(57)),u=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.enabled,a=e.reload,u=e.message,o=e.buttonText;return s?n("div",{staticClass:"my-sw-update-popup"},[n("div",{staticClass:"vue"},[n("span",{staticClass:"outer"}),t._v(" "),n("span",{staticClass:"medium"}),t._v(" "),n("span",{staticClass:"inner"})]),t._v(" "),t._l(u.split(","),(function(e,s){return n("span",{key:s,staticClass:"my-sw-update-popup-text"},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"my-sw-update-popup-btn",on:{click:a}},[t._v(t._s(o))])],2):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=u.exports}}]);