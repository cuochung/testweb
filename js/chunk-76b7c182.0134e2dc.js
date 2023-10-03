(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76b7c182"],{"1ae1":function(t,e,i){},"21d8":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-flex"},[t.printChoice?i("v-btn",{staticClass:"primary ml-2",on:{click:t.changeChoice}},[t._v("列印選擇")]):t._e(),i("MultiPrintOption",{directives:[{name:"show",rawName:"v-show",value:t.printItems.length>0,expression:"printItems.length > 0"}],attrs:{printItems:t.printItems}}),t.printChoice?t._e():i("v-btn",{staticClass:"primary ml-2",on:{click:t.changeChoice}},[t._v("顯示功能")])],1)])},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"MultiPrintOption"},[i("v-dialog",{attrs:{width:"30vw"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({directives:[{name:"show",rawName:"v-show",value:t.printItems.length<=5,expression:"printItems.length <= 5"}],staticClass:"success ml-2",on:{click:t.enterProcess}},s),[t._v("列印表單選擇")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{class:t.titleClass,attrs:{"primary-title":""}},[t._v(t._s(t.title))]),i("v-card-text",[i("v-alert",{staticClass:"mt-2",attrs:{color:"primary",outlined:""}},[i("div",{staticClass:"text-right"},[i("v-btn",{staticClass:"primary mr-1",on:{click:t.selectAll}},[t._v("全選")]),i("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.noAll}},[t._v("全不選")])],1),i("v-checkbox",{attrs:{label:"住民定期評估表",value:"true"},on:{click:function(e){return e.stopPropagation(),t.objcheck(e)}},model:{value:t.list.record,callback:function(e){t.$set(t.list,"record",e)},expression:"list.record"}}),i("v-checkbox",{attrs:{label:"柯氏/巴氏(ADL)量表",value:"true"},on:{click:function(e){return e.stopPropagation(),t.objcheck(e)}},model:{value:t.list.kb,callback:function(e){t.$set(t.list,"kb",e)},expression:"list.kb"}}),i("v-checkbox",{attrs:{label:"跌倒危險因子評估表",value:"true"},on:{click:function(e){return e.stopPropagation(),t.objcheck(e)}},model:{value:t.list.fall,callback:function(e){t.$set(t.list,"fall",e)},expression:"list.fall"}}),i("v-checkbox",{attrs:{label:"Braden壓力性損傷風險評估表",value:"true"},on:{click:function(e){return e.stopPropagation(),t.objcheck(e)}},model:{value:t.list.braden,callback:function(e){t.$set(t.list,"braden",e)},expression:"list.braden"}}),i("v-checkbox",{attrs:{label:"簡易心智狀態SPMSQ",value:"true"},on:{click:function(e){return e.stopPropagation(),t.objcheck(e)}},model:{value:t.list.spmsq,callback:function(e){t.$set(t.list,"spmsq",e)},expression:"list.spmsq"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.objcheck(),expression:"objcheck()"}],staticClass:"primary",on:{click:t.printOK}},[t._v("確認列印")])],1)],1)],1)],1)},r=[],o=(i("4de4"),i("caad"),i("d81d"),i("4e827"),i("07ac"),i("2532"),i("159b"),i("4328")),l=i.n(o),c=(i("5a0c"),{props:["printItems"],data:function(){return{dialog:!1,list:{record:"",kb:"",fall:"",braden:"",spmsq:""},emptyRules:[function(t){return!!t||"不可空白"}],title:"",titleClass:"",recordItems:[],kbItems:[],fallItems:[],bradenItems:[],spmsqItems:[],documents:["record","kb","fall","braden","spmsq"]}},mounted:function(){this.$on("childFn",(function(){this.dialog=!0,this.enterProcess()})),this.selectAll()},methods:{printOK:function(){var t=this;this.$confirm("確認顯示列印畫面?").then((function(e){if(e){var i={};i["matchDate"]=t.printItems.map((function(t){return t.date}));var s=JSON.stringify(i["matchDate"].sort());t.documents.forEach((function(e){i[e]=t[e+"Items"].filter((function(t){var e=JSON.parse(t.datalist);return s.includes(e.date)}))})),i["choiceDocuments"]=t.list,console.log(i),sessionStorage.setItem("printData",JSON.stringify(i));var n=t.$router.resolve({path:"/print/multidocumentprint"});window.open(n.href,"_blank")}}))},objcheck:function(){return JSON.stringify(Object.values(this.list)).length>21},enterProcess:function(t){var e=this;this.title="列印表單選擇",this.titleClass="font-weight-black primary lighten-2",this.documents.forEach((function(t){e.getItems(t)}))},getItems:function(t){var e=this,i={key:"u_snkey",value:this.$store.state.uData.snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/"+t,l.a.stringify(i)).then((function(i){e[t+"Items"]=i.data}))},selectAll:function(){for(var t in this.list)this.list[t]="true";this.objcheck()},noAll:function(){for(var t in this.list)this.list[t]="";this.objcheck()}}}),u=c,d=i("2877"),h=i("6544"),v=i.n(h),f=i("0798"),m=i("8336"),p=i("b0af"),_=i("99d9"),g=i("ac7c"),y=i("169a"),b=i("ce7e"),$=i("2fa4"),k=Object(d["a"])(u,a,r,!1,null,null,null),w=k.exports;v()(k,{VAlert:f["a"],VBtn:m["a"],VCard:p["a"],VCardActions:_["b"],VCardText:_["d"],VCardTitle:_["e"],VCheckbox:g["a"],VDialog:y["a"],VDivider:b["a"],VSpacer:$["a"]});var D={components:{MultiPrintOption:w},props:["printChoice","printItems"],data:function(){return{}},mounted:function(){},methods:{changeChoice:function(){this.$emit("changeChoice")}}},C=D,O=Object(d["a"])(C,s,n,!1,null,null,null);e["a"]=O.exports;v()(O,{VBtn:m["a"]})},"2eba":function(t,e,i){"use strict";i("42b0")},"42b0":function(t,e,i){},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t="millisecond",e="second",i="minute",s="hour",n="day",a="week",r="month",o="quarter",l="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},h={s:d,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+d(s,2,"0")+":"+d(n,2,"0")},m:function(t,e){var i=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(i,r),n=e-s<0,a=t.clone().add(i+(n?-1:1),r);return Number(-(i+(e-s)/(n?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:r,y:l,w:a,d:n,D:"date",h:s,m:i,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=v;var p=function(t){return t instanceof b},_=function(t,e,i){var s;if(!t)return f;if("string"==typeof t)m[t]&&(s=t),e&&(m[t]=e,s=t);else{var n=t.name;m[n]=t,s=n}return!i&&s&&(f=s),s||!i&&f},g=function(t,e,i){if(p(t))return t.clone();var s=e?"string"==typeof e?{format:e,pl:i}:e:{};return s.date=t,new b(s)},y=h;y.l=_,y.i=p,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var b=function(){function d(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(c);if(s)return i?new Date(Date.UTC(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)):new Date(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var i=g(t);return this.startOf(e)<=i&&i<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},h.year=function(t){return this.$g(t,"$y",l)},h.month=function(t){return this.$g(t,"$M",r)},h.day=function(t){return this.$g(t,"$W",n)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",s)},h.minute=function(t){return this.$g(t,"$m",i)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var c=this,u=!!y.u(o)||o,d=y.p(t),h=function(t,e){var i=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return u?i:i.endOf(n)},v=function(t,e){return y.w(c.toDate()[t].apply(c.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},f=this.$W,m=this.$M,p=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case r:return u?h(1,m):h(0,m+1);case a:var g=this.$locale().weekStart||0,b=(f<g?f+7:f)-g;return h(u?p-b:p+(6-b),m);case n:case"date":return v(_+"Hours",0);case s:return v(_+"Minutes",1);case i:return v(_+"Seconds",2);case e:return v(_+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,o){var c,u=y.p(a),d="set"+(this.$u?"UTC":""),h=(c={},c[n]=d+"Date",c.date=d+"Date",c[r]=d+"Month",c[l]=d+"FullYear",c[s]=d+"Hours",c[i]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[u],v=u===n?this.$D+(o-this.$W):o;if(u===r||u===l){var f=this.clone().set("date",1);f.$d[h](v),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else h&&this.$d[h](v);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,o){var c,u=this;t=Number(t);var d=y.p(o),h=function(e){var i=g(u);return y.w(i.date(i.date()+Math.round(e*t)),u)};if(d===r)return this.set(r,this.$M+t);if(d===l)return this.set(l,this.$y+t);if(d===n)return h(1);if(d===a)return h(7);var v=(c={},c[i]=6e4,c[s]=36e5,c[e]=1e3,c)[d]||1,f=this.$d.getTime()+t*v;return y.w(f,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),n=this.$locale(),a=this.$H,r=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=function(t,s,n,a){return t&&(t[s]||t(e,i))||n[s].substr(0,a)},h=function(t){return y.s(a%12||12,t,"0")},v=n.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:c[o]||c(this,i),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:y.s(a,2,"0"),h:h(1),hh:h(2),a:v(a,r,!0),A:v(a,r,!1),m:String(r),mm:y.s(r,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return i.replace(u,(function(t,e){return e||f[t]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,u){var d,h=y.p(c),v=g(t),f=6e4*(v.utcOffset()-this.utcOffset()),m=this-v,p=y.m(this,v);return p=(d={},d[l]=p/12,d[r]=p,d[o]=p/3,d[a]=(m-f)/6048e5,d[n]=(m-f)/864e5,d[s]=m/36e5,d[i]=m/6e4,d[e]=m/1e3,d)[h]||m,u?p:y.a(p)},h.daysInMonth=function(){return this.endOf(r).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),s=_(t,e,!0);return s&&(i.$L=s),i},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}();return g.prototype=b.prototype,g.extend=function(t,e){return t(e,b,g),g},g.locale=_,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=m[f],g.Ls=m,g}))},"9b73":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bradenlist"},[i("v-card",{staticClass:"mt-2"},[i("v-card-title",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"8"}},[i("h2",{staticClass:"subheading grey--text"},[i("v-icon",{staticClass:"mx-1"},[t._v("fas fa-file-alt")]),i("span",[t._v(" "+t._s(this.$store.state.uData.p_code)+" / "+t._s(this.$store.state.uData.name)+" ")]),i("span",[t._v("Braden壓力性損傷風險評估表")])],1)]),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-toolbar",{attrs:{dense:""}},[i("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-magnify","single-line":"",label:"搜尋"},on:{keyup:function(e){return e.stopPropagation(),t.search()}},model:{value:t.serachKey,callback:function(e){t.serachKey=e},expression:"serachKey"}}),i("popupadd",{ref:"editProcess",attrs:{viewData:t.viewData},on:{getAllData:t.getAllData}}),i("MultiPrintSelect",{attrs:{printChoice:t.printChoice,printItems:t.printItems},on:{changeChoice:t.changeChoice}})],1)],1)],1)],1),i("v-card-text",[i("v-card",{staticClass:"mt-2"},[i("v-card-text",[i("v-data-iterator",{attrs:{items:t.viewData,"items-per-page":t.itemsPerPage,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions}},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("v-simple-table",{staticClass:"mt-2 text-no-wrap",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",{staticClass:"title"},[i("tr",[i("th",{attrs:{rowspan:"3"}}),i("th",{attrs:{rowspan:"2"}},[t._v("評估日期")]),i("th",{attrs:{colspan:"7"}},[t._v("Braden壓力性損傷風險評估表")]),i("th",{staticClass:"ced_man_key",attrs:{rowspan:"2"}},[t._v("紀錄人")]),i("th",{staticClass:"ced_man_key",attrs:{rowspan:"2"}},[t._v("修改紀錄")])]),i("tr",[i("th",[t._v("1.感覺知覺程度(sensory perception)")]),i("th",[t._v("2.潮濕程度(moisture)")]),i("th",[t._v("3.活動力(activity)")]),i("th",[t._v("4.移動力(mobility)")]),i("th",[t._v("5.營養狀態(nutrition)")]),i("th",[t._v("6.摩擦力/剪力(friction/shear)")]),i("th",[t._v("總分")])])]),i("tbody",t._l(e.items,(function(e,s){return i("tr",{key:s},[i("td",{staticClass:"d-flex align-center"},[t.printChoice?t._e():i("v-checkbox",{attrs:{label:"列印選擇"},on:{click:function(e){return e.stopPropagation(),t.filterPrintItem(e)}},model:{value:e.check,callback:function(i){t.$set(e,"check",i)},expression:"item.check"}}),t.printChoice?i("v-menu",{attrs:{transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{color:"primary",dark:""}},s),[t._v("功能")])]}}],null,!0)},[i("v-list",[i("v-list-item",{on:{click:function(i){return t.edit(e)}}},[i("v-list-item-title",[t._v("修改")])],1),i("v-list-item",{on:{click:function(i){return t.del(e)}}},[i("v-list-item-title",[t._v("刪除")])],1)],1)],1):t._e()],1),i("td",[t._v(t._s(e.date))]),i("td",[t._v(t._s(e.sensory_perception))]),i("td",[t._v(t._s(e.moisture))]),i("td",[t._v(t._s(e.activity))]),i("td",[t._v(t._s(e.mobility))]),i("td",[t._v(t._s(e.nutrition))]),i("td",[t._v(t._s(e.friction_shear))]),i("td",[t._v(t._s(e.total))]),i("td",[t._v(t._s(e.create_man))]),i("td",[t._v(t._s(e.edit_man))])])})),0)]},proxy:!0}],null,!0)})]}}])})],1)],1)],1)],1)],1)},n=[],a=(i("4de4"),i("caad"),i("d81d"),i("4e827"),i("2532"),i("1276"),i("159b"),i("2909")),r=i("4328"),o=i.n(r),l=i("21d8"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bradenadd"},[i("v-dialog",{attrs:{width:"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-icon",t._g({attrs:{color:"red lighten-2",dark:""},on:{click:t.addProcess}},s),[t._v("mdi-plus-circle")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{class:t.titleStyle,attrs:{"primary-title":""}},[t._v(t._s(t.title))]),i("v-card-text",[i("v-form",{ref:"form",staticClass:"mt-3"},[i("table",{staticClass:"table table-bordered table-sm bg-light"},[i("tr",[i("td",{staticClass:"form_title align-middle",attrs:{colspan:"4"}},[t._v("評估日期")]),i("td",[i("v-text-field",{ref:"date",attrs:{type:"date",rules:t.emptyRules},model:{value:t.list.date,callback:function(e){t.$set(t.list,"date",e)},expression:"list.date"}})],1)]),i("tr",[i("td",{staticClass:"form_title",attrs:{rowspan:"7"}},[i("span",{staticClass:"vertical-mode"},[t._v("Braden壓力性損傷風險評估表")])]),i("td",[t._v("1")]),i("td",[t._v("感覺知覺程度(sensory perception)")]),i("td",[t._v("1.完全限制 2.大部分受限制 3.稍微受限制 4.沒有損傷")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.sensory_perception,expression:"list.sensory_perception"}],staticClass:"form-control",attrs:{id:"sensory_perception",name:"sensory_perception"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"sensory_perception",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.完全限制")]),i("option",{attrs:{value:"2"}},[t._v("2.大部分受限制")]),i("option",{attrs:{value:"3"}},[t._v("3.稍微受限制")]),i("option",{attrs:{value:"4"}},[t._v("4.沒有損傷")])])])]),i("tr",[i("td",[t._v("2")]),i("td",[t._v("潮濕程度(moisture)")]),i("td",[t._v("1.總是潮濕 2.經常潮濕 3.偶爾潮濕 4.很少潮濕")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.moisture,expression:"list.moisture"}],staticClass:"form-control",attrs:{id:"moisture",name:"moisture"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"moisture",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.總是潮濕")]),i("option",{attrs:{value:"2"}},[t._v("2.經常潮濕")]),i("option",{attrs:{value:"3"}},[t._v("3.偶爾潮濕")]),i("option",{attrs:{value:"4"}},[t._v("4.很少潮濕")])])])]),i("tr",[i("td",[t._v("3")]),i("td",[t._v("活動力(activity)")]),i("td",[t._v("1.臥床不動 2.受限於輪椅活動 3.可偶爾下床活動 4.可經常下床行走")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.activity,expression:"list.activity"}],staticClass:"form-control",attrs:{id:"activity",name:"activity"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"activity",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.臥床不動")]),i("option",{attrs:{value:"2"}},[t._v("2.受限於輪椅活動")]),i("option",{attrs:{value:"3"}},[t._v("3.可偶爾下床活動")]),i("option",{attrs:{value:"4"}},[t._v("4.可經常下床行走")])])])]),i("tr",[i("td",[t._v("4")]),i("td",[t._v("移動力(mobility)")]),i("td",[t._v("1.完全無法自行翻身 2.大部分需要他人協助翻身 3.少部分需要他人協助翻身 4.可自行翻身")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.mobility,expression:"list.mobility"}],staticClass:"form-control",attrs:{id:"mobility",name:"mobility"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"mobility",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.完全無法自行翻身")]),i("option",{attrs:{value:"2"}},[t._v("2.大部分需要他人協助翻身")]),i("option",{attrs:{value:"3"}},[t._v("3.少部分需要他人協助翻身")]),i("option",{attrs:{value:"4"}},[t._v("4.可自行翻身")])])])]),i("tr",[i("td",[t._v("5")]),i("td",[t._v("營養狀態(nutrition)")]),i("td",[t._v("1.營養非常差 2.營養差 3.營養稍差 4.營養好")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.nutrition,expression:"list.nutrition"}],staticClass:"form-control",attrs:{id:"nutrition",name:"nutrition"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"nutrition",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.營養非常差")]),i("option",{attrs:{value:"2"}},[t._v("2.營養差")]),i("option",{attrs:{value:"3"}},[t._v("3.營養稍差")]),i("option",{attrs:{value:"4"}},[t._v("4.營養好")])])])]),i("tr",[i("td",[t._v("6")]),i("td",[t._v("摩擦力/剪力(friction/shear)")]),i("td",[t._v("1.有此問題 2.有潛在問題 3.沒有明顯問題")]),i("td",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.list.friction_shear,expression:"list.friction_shear"}],staticClass:"form-control",attrs:{id:"friction_shear",name:"friction_shear"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.list,"friction_shear",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"1"}},[t._v("1.有此問題")]),i("option",{attrs:{value:"2"}},[t._v("2.有潛在問題")]),i("option",{attrs:{value:"3"}},[t._v("3.沒有明顯問題")])])])]),i("tr",[i("td",{attrs:{colspan:"2"}},[i("small",[t._v(" 註1:「1分」:非常嚴重/危險(very severe);「2分」:嚴重/危險(severe);「3分」:有點嚴重/危險(slightly severe);「4分」:正常(normal)。 "),i("br"),t._v("註2:滿分為23分,最低分為6分,分數愈高分表壓力性損傷危險性低,分數愈低分表壓力性損傷危險性高;應用於一般內外科切點為16分,應用於護理之家為18分(≦14分為中度危險;≦12分為高度危險)。 出處:台灣長期照顧專業協會之機構品質指標監測操作手冊 ")])]),i("td",[t._v("總分")]),i("td",[i("input",{staticClass:"form-control text-danger",attrs:{type:"text",readonly:""},domProps:{value:t.total}})])])])])],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),"add"==t.processType?i("v-btn",{staticClass:"primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.addOK}},[t._v("確認新增")]):t._e(),"edit"==t.processType?i("v-btn",{staticClass:"success",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.editOK}},[t._v("確認修改")]):t._e()],1)],1)],1)],1)},u=[],d=(i("a4d3"),i("e439"),i("dbb4"),i("b64b"),i("e25e"),i("ade3"));function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={data:function(){return{dialog:!1,list:{},oldList:{},processType:"",title:"",titleStyle:"",emptyRules:[function(t){return!!t||"不可空白"}],loading:!1}},computed:{total:function(){var t=parseInt(this.list.sensory_perception)+parseInt(this.list.moisture)+parseInt(this.list.activity)+parseInt(this.list.mobility)+parseInt(this.list.nutrition)+parseInt(this.list.friction_shear);return this.list.total=t,t}},props:["viewData"],mounted:function(){this.$on("fromParent",(function(t){this.dialog=!0,this.editProcess(t)}))},methods:{addProcess:function(){this.processType="add",this.title="新增資料",this.titleStyle="font-weight-black error lighten-2",void 0!=this.viewData[0]&&(this.list=v({},this.viewData[0])),this.list.snkey="",this.list.date="",this.list.edit_man=""},editProcess:function(t){this.processType="edit",this.title="修改資料",this.titleStyle="font-weight-black success lighten-2",this.oldList=t,this.list=v({},t)},addOK:function(){var t=this;if(this.$refs.form.validate()){this.$store.commit("getTime"),this.list.u_snkey=this.$store.state.uData.snkey,this.list["create_man"]=this.$store.state.pData.username+"("+this.$store.state.time+")";var e={u_snkey:this.list.u_snkey,datalist:JSON.stringify(this.list),create_man:this.list.create_man};this.loading=!0,this.axios.post("general/add/"+this.$store.state.databaseName+"/braden",o.a.stringify(e)).then((function(e){if(1==e.data.state){var i={msg:"已新增",type:!0,theme:"error"};t.$store.commit("snackbar",i),t.list={},t.dialog=!1,t.$emit("getAllData"),t.loading=!1}}))}else{var i={msg:"資料輸入不完全!!請重新確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",i)}},editOK:function(){var t=this;if(this.$refs.form.validate()){this.$store.commit("getTime"),this.list["edit_man"]=this.$store.state.pData.username+"("+this.$store.state.time+")";var e={snkey:this.list.snkey,datalist:JSON.stringify(this.list),edit_man:this.list.edit_man};this.loading=!0,this.axios.post("general/edit/"+this.$store.state.databaseName+"/braden",o.a.stringify(e)).then((function(e){if(1==e.data.state){var i={msg:"已修改",type:!0,theme:"success"};for(var s in t.$store.commit("snackbar",i),t.dialog=!1,t.list)t.oldList[s]=t.list[s];t.loading=!1}}))}}}},m=f,p=(i("d7a5"),i("2877")),_=i("6544"),g=i.n(_),y=i("8336"),b=i("b0af"),$=i("99d9"),k=i("169a"),w=i("ce7e"),D=i("4bd4"),C=i("132d"),O=i("2fa4"),x=i("8654"),S=Object(p["a"])(m,c,u,!1,null,"93bf9468",null),M=S.exports;g()(S,{VBtn:y["a"],VCard:b["a"],VCardActions:$["b"],VCardText:$["d"],VCardTitle:$["e"],VDialog:k["a"],VDivider:w["a"],VForm:D["a"],VIcon:C["a"],VSpacer:O["a"],VTextField:x["a"]});var P=i("5a0c"),I=i.n(P),V={components:{popupadd:M,MultiPrintSelect:l["a"]},data:function(){return{items:[],viewData:[],serachKey:"",edititem:{},itemsPerPageOptions:[10,20,30],itemsPerPage:10,printChoice:!0,printItems:[]}},mounted:function(){this.getAllData()},methods:{changeChoice:function(){this.printChoice=!this.printChoice,this.items.filter((function(t){t.check=""})),this.printItems=[]},filterPrintItem:function(){if(5==this.printItems.length){var t={msg:"單次列印指定數最多5筆!!",type:!0,theme:"warning"};this.$store.commit("snackbar",t)}this.printItems=this.items.filter((function(t){return t.check}))},getAllData:function(){var t=this,e={key:"u_snkey",value:this.$store.state.uData.snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/braden",o.a.stringify(e)).then((function(e){t.items=t.viewData=e.data.map((function(t){var e=JSON.parse(t.datalist);return e.snkey=t.snkey,e.check=!1,e})),t.sortBy()}))},sortBy:function(){this.viewData=this.viewData.sort((function(t,e){return t.date<e.date?1:-1}))},edit:function(t){this.$refs.editProcess.$emit("fromParent",t)},del:function(t){var e=this;this.$confirm("確認刪除?").then((function(i){t.delman=e.$store.state.pData.username+"("+I()().format("YYYY-MM-DD HH:mm:ss")+")";var s={snkey:t.snkey,tablename:"braden",info:JSON.stringify(t)};i&&e.axios.post("general/delv3/"+e.$store.state.databaseName+"/braden",o.a.stringify(s)).then((function(t){if(console.log(t.data),1==t.data.state){var i={msg:"已刪除",type:!0,theme:"success"};e.$store.commit("snackbar",i),e.getAllData()}}))}))},search:function(){var t=this.serachKey.split(" "),e=Object(a["a"])(this.items),i="";t.forEach((function(t){""!=t&&(e=e.filter((function(e){if(i=JSON.stringify(e).toUpperCase(),i.includes(t.toUpperCase()))return e})))})),this.viewData=e}}},j=V,N=(i("2eba"),i("ac7c")),T=i("62ad"),A=i("c377"),Y=i("8860"),L=i("da13"),J=i("5d23"),H=i("e449"),B=i("0fd9"),K=i("1f4f"),E=i("71d9"),W=Object(p["a"])(j,s,n,!1,null,null,null);e["default"]=W.exports;g()(W,{VBtn:y["a"],VCard:b["a"],VCardText:$["d"],VCardTitle:$["e"],VCheckbox:N["a"],VCol:T["a"],VDataIterator:A["a"],VIcon:C["a"],VList:Y["a"],VListItem:L["a"],VListItemTitle:J["k"],VMenu:H["a"],VRow:B["a"],VSimpleTable:K["a"],VTextField:x["a"],VToolbar:E["a"]})},d7a5:function(t,e,i){"use strict";i("1ae1")}}]);
//# sourceMappingURL=chunk-76b7c182.0134e2dc.js.map