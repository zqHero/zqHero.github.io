(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{420:function(t,e,n){},421:function(t,e,n){},499:function(t,e,n){"use strict";n(420)},500:function(t,e,n){"use strict";n(421)},508:function(t,e,n){"use strict";n.r(e);var s=new(n(0).a),a=n(1),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},u={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:SW_UPDATE_POPUP,updateEvent:null}},computed:{popupConfig:function(){return Object(a.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created:function(){s.$on("sw-updated",this.onSWUpdated),!0===SW_UPDATE_POPUP&&(this.rawPopupConfig=o)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},p=(n(499),n(55)),i={name:"MySWUpdatePopup",components:{SWUpdatePopup:Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null).exports},methods:{reload:function(t){console.log(t)}}},l=(n(500),Object(p.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.enabled,a=e.reload,o=e.message,u=e.buttonText;return s?n("div",{staticClass:"my-sw-update-popup"},[n("div",{staticClass:"vue"},[n("span",{staticClass:"outer"}),t._v(" "),n("span",{staticClass:"medium"}),t._v(" "),n("span",{staticClass:"inner"})]),t._v(" "),t._l(o.split(","),(function(e,s){return n("span",{key:s,staticClass:"my-sw-update-popup-text"},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"my-sw-update-popup-btn",on:{click:a}},[t._v(t._s(u))])],2):t._e()}}],null,!0)})}),[],!1,null,null,null));e.default=l.exports}}]);