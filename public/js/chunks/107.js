(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"0ySa":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return i}));var s=a("1OyB"),r=a("vuIU"),n=(a("ma9I"),a("vDqi")),o=a.n(n),i=function(){function t(){Object(s.a)(this,t)}return Object(r.a)(t,[{key:"index",value:function(e){return o.a.get("/api/users",{params:e})}},{key:"permissions",value:function(){return o.a.get("api/permissions")}},{key:"store",value:function(e){return o.a.post("/api/users",e)}},{key:"update",value:function(e,t){return o.a.put("/api/users/".concat(e),t,{headers:{"Content-Type":"multipart/form-data"}})}},{key:"getUserDetail",value:function(e,t){return o.a.get("/api/users/".concat(e),{params:t})}},{key:"destroy",value:function(e){return o.a.delete("/api/users/".concat(e))}},{key:"getList",value:function(e){return o.a.get("/api/users",{params:e})}},{key:"activeUser",value:function(t,a,s){return o.a.post("".concat(e.env.API_URL,"/contacts/").concat(t,"/user/").concat(a),s)}},{key:"passwordChange",value:function(e){return o.a.put("api/change-password",e)}},{key:"getUserByCriteria",value:function(e){return o.a.get("/api/users/criteria",{params:{criteria:e}})}}]),t}()}).call(this,a("8oxB"))},"2HL6":function(e,t){e.exports="/images/_/_/_/_/dental/resources/js/src/assets/images/avatar_default.png"},riXB:function(e,t,a){"use strict";a.r(t);a("sMBO");var s=a("+QIf"),r=a("YZAB"),n=a("x+uP"),o=a("VTBJ"),i=a("HaE+"),l=(a("TeQF"),a("07d7"),a("GUe+")),p=a("Ed67"),c=a("SRip"),u=a("xD+F"),d=a("giZP"),m=a("R5cT"),f=a("oVt+"),w=a("sove"),v=a("X9p1"),g=a("IF94"),b=a("1uQM"),_=a("NLYf"),h=a("6KOa"),y=a("fDK0"),B=a("f6Y5"),x=a("qlm0"),k=a("mwM1"),C=a("AeMN"),O=a("Snq/"),I=a.n(O),R=a("4AkS"),T=a("7Ql6"),F=a("LvDl"),$=a.n(F),E=a("tvh2"),j=a("0ySa"),A=new j.a,N={components:{BButton:l.a,BForm:p.a,BImg:c.a,BFormFile:u.a,BFormGroup:d.a,BFormInput:m.a,BRow:f.a,BCol:w.a,BAlert:v.a,BCard:g.a,BCardText:b.a,BMedia:_.a,BAvatar:h.a,BMediaAside:y.a,BMediaBody:B.a,BLink:x.a,vSelect:I.a,BOverlay:k.a,BSpinner:C.a},directives:{Ripple:R.a},props:{profile:{type:Object,default:function(){}}},data:function(){return{user:{},roles:$.a.filter(E.a.state.auth.roles),loading:!1,isChangeAvatar:!1}},mounted:function(){this.user=this.profile},methods:{update:function(){var e=this;return Object(i.a)(Object(n.a)().mark((function t(){var a,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,A.update(e.profile.id,e.profile);case 4:a=t.sent,s=a.data,e.loading=!1,s.success?(E.a.commit("auth/SET_CURRENT_USER",Object(o.a)({},s.data)),e.success(s.message)):e.danger(s.message),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.loading=!1,e.handleResponseErrors(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},resetForm:function(){this.isChangeAvatar=!1,this.profile.avatar=null,this.user=this.profile},imgRenderer:function(e){var t=this,a=e.target.files[0],s=new FileReader;s.onload=function(e){var a=e.target||e.srcElement;t.profile.change_avatar=!0,t.profile.avatar=a.result},s.readAsDataURL(a)}},setup:function(e){var t,a,s=Object(T.ref)(null);return{refInputEl:s,previewEl:Object(T.ref)(null),inputImageRenderer:(t=s,a=function(t){e.profile.avatar=t},{inputImageRenderer:function(){var e=t.value.files[0],s=new FileReader;s.addEventListener("load",(function(){a(s.result)}),!1),e&&s.readAsDataURL(e)}}).inputImageRenderer,resolveUserRoleVariant:function(e){return 1===e?"danger":2===e?"warning":"primary"}}}},S=a("KHd+"),P=Object(S.a)(N,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-overlay",{attrs:{show:e.loading,blur:"2px",variant:"transparent",rounded:"lg",opacity:"0.85"}},[a("b-card",[a("b-media",{staticClass:"mb-2",scopedSlots:e._u([{key:"aside",fn:function(){return[a("b-avatar",{ref:"previewEl",attrs:{src:e.user.has_media?e.user.avatar:null,text:e.avatarText(e.user.name),variant:"light-"+e.resolveUserRoleVariant(e.user.role_id),size:"90px",rounded:""}})]},proxy:!0}])},[e._v(" "),a("h4",{staticClass:"mb-1"},[e._v("\n\t\t\t\t"+e._s(e.user.name)+"\n\t\t\t")]),e._v(" "),a("div",{staticClass:"d-flex flex-wrap"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.refInputEl.click()}}},[a("input",{ref:"refInputEl",staticClass:"d-none",attrs:{type:"file"},on:{input:e.imgRenderer}}),e._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.$t("uploads")))]),e._v(" "),a("feather-icon",{staticClass:"d-inline d-sm-none",attrs:{icon:"EditIcon"}})],1),e._v(" "),a("b-button",{staticClass:"ml-1",attrs:{variant:"outline-secondary"},on:{click:e.resetForm}},[a("span",{staticClass:"d-none d-sm-inline"},[e._v(" "+e._s(e.$t("cancel")))]),e._v(" "),a("feather-icon",{staticClass:"d-inline d-sm-none",attrs:{icon:"TrashIcon"}})],1)],1)]),e._v(" "),a("b-form",{staticClass:"mt-2"},[a("b-row",[a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{label:e.$t("user_name"),"label-for":"account-username"}},[a("b-form-input",{attrs:{placeholder:e.$t("user_name_placeholder"),name:"username"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),e._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{label:e.$t("email"),"label-for":"account-e-mail"}},[a("b-form-input",{attrs:{name:"email",placeholder:e.$t("user_email_placeholder"),disabled:!0},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),e._v(" "),a("b-col",{attrs:{cols:"12"}},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2 mr-1",attrs:{variant:"primary"},on:{click:e.update}},[e._v("\n\t\t\t\t\t\t"+e._s(e.$t("update"))+"\n\t\t\t\t\t")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,U=a("XhI9"),L=a("zMAm"),M=new j.a,D={components:{BButton:l.a,BForm:p.a,BFormGroup:d.a,BFormInput:m.a,BRow:f.a,BCol:w.a,BCard:g.a,BInputGroup:U.a,BInputGroupAppend:L.a,BOverlay:k.a,BSpinner:C.a},directives:{Ripple:R.a},data:function(){return{loading:!1,password:{},passwordValueOld:null,newPasswordValue:null,RetypePassword:null,passwordFieldTypeOld:"password",passwordFieldTypeNew:"password",passwordFieldTypeRetype:"password",errors:{}}},computed:{passwordToggleIconOld:function(){return"password"===this.passwordFieldTypeOld?"EyeIcon":"EyeOffIcon"},passwordToggleIconNew:function(){return"password"===this.passwordFieldTypeNew?"EyeIcon":"EyeOffIcon"},passwordToggleIconRetype:function(){return"password"===this.passwordFieldTypeRetype?"EyeIcon":"EyeOffIcon"}},methods:{togglePasswordOld:function(){this.passwordFieldTypeOld="password"===this.passwordFieldTypeOld?"text":"password"},togglePasswordNew:function(){this.passwordFieldTypeNew="password"===this.passwordFieldTypeNew?"text":"password"},togglePasswordRetype:function(){this.passwordFieldTypeRetype="password"===this.passwordFieldTypeRetype?"text":"password"},changePassword:function(){var e=this;return Object(i.a)(Object(n.a)().mark((function t(){var a,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.password){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,e.loading=!0,t.next=6,M.passwordChange(Object(o.a)({},e.password));case 6:a=t.sent,s=a.data,e.loading=!1,s.success?(e.password={},e.success(s.message)):e.danger(s.message),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),e.loading=!1,e.handleResponseErrors(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))()}}},G=Object(S.a)(D,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-overlay",{attrs:{show:e.loading,blur:"2px",variant:"transparent",rounded:"lg",opacity:"0.85"}},[a("b-card",[a("b-form",[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:e.$t("old_password"),"label-for":"account-old-password",description:e.$t("old_password_help")}},[a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{attrs:{id:"account-old-password",name:"old-password",type:e.passwordFieldTypeOld,placeholder:e.$t("old_password_placeholder")},model:{value:e.password.old_password,callback:function(t){e.$set(e.password,"old_password",t)},expression:"password.old_password"}}),e._v(" "),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIconOld},on:{click:e.togglePasswordOld}})],1)],1)],1)],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{"label-for":"account-new-password",label:e.$t("new_password"),description:e.$t("new_password_help")}},[a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{attrs:{id:"account-new-password",type:e.passwordFieldTypeNew,name:"new-password",placeholder:e.$t("new_password_placeholder")},model:{value:e.password.password,callback:function(t){e.$set(e.password,"password",t)},expression:"password.password"}}),e._v(" "),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIconNew},on:{click:e.togglePasswordNew}})],1)],1)],1)],1),e._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{"label-for":"account-retype-new-password",label:e.$t("retype_password"),description:e.$t("retype_password_help")}},[a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{attrs:{id:"account-retype-new-password",type:e.passwordFieldTypeRetype,name:"retype-password",placeholder:e.$t("retype_password_placeholder")},model:{value:e.password.password_confirmation,callback:function(t){e.$set(e.password,"password_confirmation",t)},expression:"password.password_confirmation"}}),e._v(" "),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIconRetype},on:{click:e.togglePasswordRetype}})],1)],1)],1)],1),e._v(" "),a("b-col",{attrs:{cols:"12"}},[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1 mr-1",attrs:{variant:"primary"},on:{click:e.changePassword}},[e._v("\n\t\t\t\t\t\t"+e._s(e.$t("update"))+"\n\t\t\t\t\t")]),e._v(" "),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{type:"reset",variant:"outline-secondary"}},[e._v("\n\t\t\t\t\t\t"+e._s(e.$t("cancel"))+"\n\t\t\t\t\t")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,V={components:{BTabs:s.a,BTab:r.a,AccountSettingGeneral:P,AccountSettingPassword:G},data:function(){return{options:{profile:{avatar:a("2HL6"),name:null,email:null,id:null}}}},computed:{user:function(){var e=E.a.getters["auth/getUser"];return this.options.profile={has_media:e.has_media,avatar:e.has_media?e.avatar:a("2HL6"),name:e.name,email:e.email,role:e.roles[0].name,role_id:e.roles[0].id,id:e.id,verified:!!e.email_verified_at}},roles:function(){return E.a.state.auth.roles}},mounted:function(){}},H=Object(S.a)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-tabs",{attrs:{vertical:"","content-class":"col-12 col-md-9 mt-1 mt-md-0",pills:"","nav-wrapper-class":"col-md-3 col-12","nav-class":"nav-left"}},[a("b-tab",{attrs:{active:""},scopedSlots:e._u([{key:"title",fn:function(){return[a("feather-icon",{staticClass:"mr-50",attrs:{icon:"UserIcon",size:"18"}}),e._v(" "),a("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.$t("general")))])]},proxy:!0}])},[e._v(" "),e.user?a("account-setting-general",{attrs:{profile:e.user}}):e._e()],1),e._v(" "),a("b-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[a("feather-icon",{staticClass:"mr-50",attrs:{icon:"LockIcon",size:"18"}}),e._v(" "),a("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.$t("change_password")))])]},proxy:!0}])},[e._v(" "),a("account-setting-password")],1)],1)}),[],!1,null,null,null);t.default=H.exports}}]);