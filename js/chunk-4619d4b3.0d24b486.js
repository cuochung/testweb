(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4619d4b3"],{"5a0c":function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";var t="millisecond",e="second",s="minute",i="hour",n="day",a="week",r="month",o="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,s){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(s)+t},h={s:l,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),i=Math.floor(s/60),n=s%60;return(e<=0?"+":"-")+l(i,2,"0")+":"+l(n,2,"0")},m:function(t,e){var s=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(s,r),n=e-i<0,a=t.clone().add(s+(n?-1:1),r);return Number(-(s+(e-i)/(n?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:r,y:c,w:a,d:n,D:"date",h:i,m:s,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",p={};p[m]=f;var v=function(t){return t instanceof b},$=function(t,e,s){var i;if(!t)return m;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var n=t.name;p[n]=t,i=n}return!s&&i&&(m=i),i||!s&&m},g=function(t,e,s){if(v(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:s}:e:{};return i.date=t,new b(i)},y=h;y.l=$,y.i=v,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var b=function(){function l(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i)return s?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var s=g(t);return this.startOf(e)<=s&&s<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,s){return y.u(t)?this[e]:this.set(s,t)},h.year=function(t){return this.$g(t,"$y",c)},h.month=function(t){return this.$g(t,"$M",r)},h.day=function(t){return this.$g(t,"$W",n)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",i)},h.minute=function(t){return this.$g(t,"$m",s)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var u=this,d=!!y.u(o)||o,l=y.p(t),h=function(t,e){var s=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?s:s.endOf(n)},f=function(t,e){return y.w(u.toDate()[t].apply(u.toDate(),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case c:return d?h(1,0):h(31,11);case r:return d?h(1,p):h(0,p+1);case a:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return h(d?v-b:v+(6-b),p);case n:case"date":return f($+"Hours",0);case i:return f($+"Minutes",1);case s:return f($+"Seconds",2);case e:return f($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,o){var u,d=y.p(a),l="set"+(this.$u?"UTC":""),h=(u={},u[n]=l+"Date",u.date=l+"Date",u[r]=l+"Month",u[c]=l+"FullYear",u[i]=l+"Hours",u[s]=l+"Minutes",u[e]=l+"Seconds",u[t]=l+"Milliseconds",u)[d],f=d===n?this.$D+(o-this.$W):o;if(d===r||d===c){var m=this.clone().set("date",1);m.$d[h](f),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else h&&this.$d[h](f);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,o){var u,d=this;t=Number(t);var l=y.p(o),h=function(e){var s=g(d);return y.w(s.date(s.date()+Math.round(e*t)),d)};if(l===r)return this.set(r,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===n)return h(1);if(l===a)return h(7);var f=(u={},u[s]=6e4,u[i]=36e5,u[e]=1e3,u)[l]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),n=this.$locale(),a=this.$H,r=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,i,n,a){return t&&(t[i]||t(e,s))||n[i].substr(0,a)},h=function(t){return y.s(a%12||12,t,"0")},f=n.meridiem||function(t,e,s){var i=t<12?"AM":"PM";return s?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:u[o]||u(this,s),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:y.s(a,2,"0"),h:h(1),hh:h(2),a:f(a,r,!0),A:f(a,r,!1),m:String(r),mm:y.s(r,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return s.replace(d,(function(t,e){return e||m[t]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,u,d){var l,h=y.p(u),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,v=y.m(this,f);return v=(l={},l[c]=v/12,l[r]=v,l[o]=v/3,l[a]=(p-m)/6048e5,l[n]=(p-m)/864e5,l[i]=p/36e5,l[s]=p/6e4,l[e]=p/1e3,l)[h]||p,d?v:y.a(v)},h.daysInMonth=function(){return this.endOf(r).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),i=$(t,e,!0);return i&&(s.$L=i),s},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}();return g.prototype=b.prototype,g.extend=function(t,e){return t(e,b,g),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=p[m],g.Ls=p,g}))},e3fa:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainboardlist"},[s("v-card",["inFunction"!=t.viewType?s("v-card-title",{staticClass:"d-flex justify-space-between"},[s("div",{staticClass:"font-weight-black"},[t._v("公告欄")]),s("v-checkbox",{staticClass:"font-weight-black",attrs:{label:"顯示公告欄設定",color:"error","hide-details":""},on:{change:t.changeShowMainboard},model:{value:t.$store.state.cData.showMainboard,callback:function(e){t.$set(t.$store.state.cData,"showMainboard",e)},expression:"$store.state.cData.showMainboard"}}),s("MainboardAdd",{ref:"editProcess"})],1):t._e(),s("v-divider"),s("v-card-text",[t._l(t.items,(function(e){return s("v-alert",{key:e.snkey,attrs:{color:"primary",outlined:""}},[s("h2",{staticClass:"d-flex justify-space-between"},[s("span",[t._v("公告日期: "+t._s(e.date))]),"inFunction"!=t.viewType?s("v-checkbox",{staticClass:"pa-0 ma-0 mb-1",attrs:{label:"顯示/不顯示","hide-details":""},on:{change:function(s){return t.setShow(e)}},model:{value:e.show,callback:function(s){t.$set(e,"show",s)},expression:"item.show"}}):t._e(),"inFunction"!=t.viewType?s("div",{staticClass:"mb-2"},[s("v-btn",{staticClass:"success mx-1",on:{click:function(s){return s.stopPropagation(),t.edit(e)}}},[t._v("修改")]),s("v-btn",{staticClass:"error",on:{click:function(s){return s.stopPropagation(),t.del(e)}}},[t._v("刪除")])],1):t._e(),t.filterReaded(e)&&"inFunction"==t.viewType?s("v-btn",{staticClass:"red lighten-2 white--text",on:{click:function(s){return s.stopPropagation(),t.read(e)}}},[t._v("已讀")]):t._e()],1),s("v-divider",{staticClass:"my-2"}),s("h3",{staticClass:"mt-2",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.content))]),s("v-divider",{staticClass:"my-2"}),s("h3",{staticClass:"red--text"},[t._v(" 已讀人員: "),t._l(e.readed,(function(e,i){return s("v-chip",{key:i,staticClass:"ma-2",attrs:{color:"red",outlined:""}},[t._v(" "+t._s(e.username)+"-"+t._s(e.time)+" ")])}))],2)],1)})),0==t.items.length?s("div",[t._v("暫無資料...")]):t._e()],2)],1)],1)},n=[],a=(s("4de4"),s("7db0"),s("caad"),s("d81d"),s("4e827"),s("2532"),s("1276"),s("5a0c")),r=s.n(a),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MainboardAdd"},[s("v-dialog",{attrs:{width:"80%"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-icon",t._g({attrs:{color:"red lighten-2",dark:""},on:{click:t.addProcess}},i),[t._v("mdi-plus-circle")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{class:t.titleStyle,attrs:{"primary-title":""}},[t._v(t._s(t.title)+" "),s("v-spacer"),s("v-icon",{on:{click:function(e){t.dialog=!t.dialog}}},[t._v("mdi-close")])],1),s("v-card-text",[s("v-form",{ref:"form"},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("v-text-field",{attrs:{type:"date",label:"日期"},model:{value:t.list.date,callback:function(e){t.$set(t.list,"date",e)},expression:"list.date"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{label:"公告內容",rules:t.emptyRules},model:{value:t.list.content,callback:function(e){t.$set(t.list,"content",e)},expression:"list.content"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),"add"==t.processType?s("v-btn",{staticClass:"primary",attrs:{loading:t.isloading,disabled:t.isloading},on:{click:t.addOK}},[t._v("確認新增")]):t._e(),"edit"==t.processType?s("v-btn",{staticClass:"success",on:{click:t.editOK}},[t._v("確認修改")]):t._e()],1)],1)],1)],1)},c=[],u=(s("a4d3"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3"));function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){Object(u["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={data:function(){return{dialog:!1,list:{},processType:"",title:"",titleStyle:"",emptyRules:[function(t){return!!t||"不可空白"}],isloading:!1}},mounted:function(){this.$on("fromParent",(function(t){this.dialog=!0,this.editProcess(t)}))},methods:{addProcess:function(){var t=this;this.processType="add",this.title="新增公告",this.titleStyle="font-weight-black error lighten-2",this.list={date:r()().format("YYYY-MM-DD"),show:!0,readed:[]},this.$nextTick((function(){t.$refs.form.resetValidation()}))},editProcess:function(t){var e=this;this.processType="edit",this.title="修改資料",this.titleStyle="font-weight-black success lighten-2",this.list=l({},t),this.$nextTick((function(){e.$refs.form.resetValidation()}))},addOK:function(){var t=this;if(this.$refs.form.validate()){this.isloading=!0,this.list.create_man=this.$store.state.pData.username+"("+r()().format("YYYY-MM-DD HH:mm:ss")+")";var e={datalist:JSON.stringify(this.list)};this.$api.options("general/add/"+this.$store.state.databaseName+"/mainboard",e).then((function(e){if(1==e.state){var s={msg:"已新增",type:!0,theme:"success"};t.$store.commit("snackbar",s),t.$store.dispatch("getUsingItems","mainboard"),t.dialog=t.isloading=!1}}))}else{var s={msg:"資料輸入不完全!!請重新確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",s)}},editOK:function(){var t=this;if(this.$refs.form.validate()){this.list.edit_man||(this.list.edit_man=""),this.list.edit_man=this.$store.state.pData.username+"("+r()().format("YYYY-MM-DD HH:mm:ss")+")"+this.list.edit_man;var e={snkey:this.list.snkey,datalist:JSON.stringify(this.list),edit_man:""};this.$api.options("general/edit/"+this.$store.state.databaseName+"/mainboard",e).then((function(e){if(1==e.state){var s={msg:"已修改",type:!0,theme:"success"};t.$store.commit("snackbar",s),t.$store.dispatch("getUsingItems","mainboard"),t.dialog=!1}}))}else{var s={msg:"資料輸入不完全!!請重新確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",s)}}}},f=h,m=s("2877"),p=s("6544"),v=s.n(p),$=s("8336"),g=s("b0af"),y=s("99d9"),b=s("62ad"),w=s("169a"),D=s("4bd4"),M=s("132d"),_=s("0fd9"),k=s("2fa4"),O=s("8654"),S=s("a844"),C=Object(m["a"])(f,o,c,!1,null,null,null),Y=C.exports;v()(C,{VBtn:$["a"],VCard:g["a"],VCardActions:y["b"],VCardText:y["d"],VCardTitle:y["e"],VCol:b["a"],VDialog:w["a"],VForm:D["a"],VIcon:M["a"],VRow:_["a"],VSpacer:k["a"],VTextField:O["a"],VTextarea:S["a"]});var T={props:["viewType"],components:{MainboardAdd:Y},data:function(){return{}},computed:{items:function(){var t=this.$store.state.usingItems.map((function(t){var e=JSON.parse(t.datalist);return e.snkey=t.snkey,e}));return t=t.sort((function(t,e){return t.date<e.date?1:-1})),"inFunction"==this.viewType&&(t=t.filter((function(t){return t.show}))),t},searchfilter:function(){var t=this.serachKey.split(" "),e="";return t.reduce((function(t,s){return t.filter((function(t){if(e=JSON.stringify(t).toUpperCase(),e.includes(s.toUpperCase()))return t}))}),this.items)}},mounted:function(){this.$store.dispatch("getUsingItems","mainboard")},methods:{edit:function(t){this.$refs.editProcess.$emit("fromParent",t)},del:function(t){var e=this;this.$confirm("確認刪除?").then((function(s){t.delman=e.$store.state.pData.username+"("+r()().format("YYYY-MM-DD HH:mm:ss")+")";var i={snkey:t.snkey,tablename:"mainboard",info:JSON.stringify(t)};s&&e.$api.options("general/delv3/"+e.$store.state.databaseName+"/"+i.tablename,i).then((function(t){if(1==t.state){var s={msg:"已刪除",type:!0,theme:"success"};e.$store.commit("snackbar",s),e.$store.dispatch("getUsingItems","mainboard")}}))}))},setShow:function(t){var e=this,s={snkey:t.snkey,datalist:JSON.stringify(t),edit_man:""};this.$api.options("general/edit/"+this.$store.state.databaseName+"/mainboard",s).then((function(t){if(1==t.state){var s={msg:"已修改",type:!0,theme:"success"};e.$store.commit("snackbar",s),e.$store.dispatch("getUsingItems","mainboard")}}))},changeShowMainboard:function(){var t=this,e="";this.$store.state.cData.showMainboard&&(e=!0);var s={snkey:"1",showMainboard:e,edit_man:""};this.$api.options("general/edit/"+this.$store.state.databaseName+"/other_data",s).then((function(e){if(1==e.state){var s={msg:"已修改",type:!0,theme:"success"};t.$store.commit("snackbar",s)}}))},read:function(t){var e=this;t.readed||(t.readed=[]),t.readed.unshift({snkey:this.$store.state.pData.snkey,username:this.$store.state.pData.username,time:r()().format("YYYY-MM-DD HH:mm:ss")});var s={snkey:t.snkey,datalist:JSON.stringify(t),edit_man:""};this.$api.options("general/edit/"+this.$store.state.databaseName+"/mainboard",s).then((function(t){if(1==t.state){var s={msg:"已讀",type:!0,theme:"success"};e.$store.commit("snackbar",s),e.$store.dispatch("getUsingItems","mainboard")}}))},filterReaded:function(t){var e=this;if(!t.readed)return!1;var s=t.readed.find((function(t){return t.snkey==e.$store.state.pData.snkey}));return!s}}},x=T,V=s("0798"),H=s("ac7c"),P=s("cc20"),N=s("ce7e"),j=Object(m["a"])(x,i,n,!1,null,"fa60c656",null);e["default"]=j.exports;v()(j,{VAlert:V["a"],VBtn:$["a"],VCard:g["a"],VCardText:y["d"],VCardTitle:y["e"],VCheckbox:H["a"],VChip:P["a"],VDivider:N["a"]})}}]);
//# sourceMappingURL=chunk-4619d4b3.0d24b486.js.map