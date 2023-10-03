(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59dba6b0"],{"380d":function(t,e,s){"use strict";s("7976")},5846:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"medicalprint"},[s("div",[s("h3",[t._v(t._s(t.cData.company_name))]),s("div",{staticClass:"text-center border-bottom my-2"},[t._m(0),s("h4",{staticClass:"text-left font-weight-black"},[t._v("就診日期: "+t._s(t.list.date))])]),s("table",{staticClass:"form_title",staticStyle:{border:"2px #000000 solid"},attrs:{width:"100%"}},[s("tr",[s("td",[s("v-row",{staticClass:"px-2"},[s("v-col",{attrs:{cols:"3"}},[t._v("姓名: "+t._s(t.uData.name)+" ")]),s("v-col",{attrs:{cols:"2"}},[t._v("床號: "+t._s(t.uData.bed_name)+" ")]),s("v-col",{attrs:{cols:"3"}},[t._v("身分證字號: "+t._s(t.uData.id_num))]),s("v-col",{attrs:{cols:"2"}},[t._v("性別: "+t._s(t.uData.sex))]),s("v-col",{attrs:{cols:"2"}},[t._v("血型: "+t._s(t.uData.blood))]),s("v-col",{attrs:{cols:"3"}},[t._v("年齡: "+t._s(t.age))]),s("v-col",{attrs:{cols:"3"}},[t._v("生日: "+t._s(t.uData.birthday))]),s("v-col",{attrs:{cols:"3"}},[t._v("身高: "+t._s(t.uData.height))]),s("v-col",{attrs:{cols:"3"}},[t._v("體重: "+t._s(t.uData.weight))]),s("v-col",{attrs:{cols:"6"}},[t._v("藥物過敏: "+t._s(t.uData.allergyhistory2))]),s("v-col",{attrs:{cols:"6"}},[t._v("疾病診斷: "+t._s(t._f("filterdiagnosis")(t.uData.diagnosis)))]),s("v-col",{attrs:{cols:"6"}},[t._v("過去病史: "+t._s(t.uData.hadadisease))])],1)],1)]),s("tr",[s("td",[s("v-row",{staticClass:"px-2"},[s("v-col",{attrs:{cols:"8"}},[t._v(" 管路(到期日): "),t._l(t.matchPipelineItems,(function(e,n){return s("v-chip",{key:n,attrs:{small:"",color:"grey lighten-3"}},[t._v(t._s(e.name)+"("+t._s(e.end_date)+")")])}))],2),s("v-col",{attrs:{cols:"4"}},[t._v("攜帶物品: "+t._s(t.list.carryitems))])],1)],1)]),s("tr",[s("td",[s("v-row",{staticClass:"px-2"},[s("v-col",{attrs:{cols:"2"}},[t._v("診別: "+t._s(t.list.outpatient))]),s("v-col",{attrs:{cols:"2"}},[t._v("時段: "+t._s(t.list.time))]),s("v-col",{attrs:{cols:"4"}},[t._v("醫院: "+t._s(t.list.hospital_name))]),s("v-col",{attrs:{cols:"3"}},[t._v("科別: "+t._s(t.list.branch_name))]),s("v-col",{attrs:{cols:"2"}},[t._v("醫生: "+t._s(t.list.doctor_name))]),s("v-col",{attrs:{cols:"4"}},[t._v("使用車輛: "+t._s(t.list.car))]),s("v-col",{attrs:{cols:"3"}},[t._v("陪診人員: "+t._s(t.list.accompany))])],1)],1)]),s("tr",[s("td",{staticClass:"px-2"},[s("span",{staticClass:"text-left font-weight-black"},[t._v("當前服用藥物:")]),t._l(t.medicineData,(function(e,n){return s("v-row",{key:n,staticClass:"mx-0"},[t.reprint(n,t.medicineData)?s("v-col",{staticClass:"border-bottom border-top grey lighten-2",attrs:{cols:"12"}},[t._v("【"+t._s(e.medical.hospital_name)+"】-["+t._s(e.medical.branch_name)+"]")]):t._e(),s("v-col",{attrs:{cols:"12"}},[t._v("["+t._s(n+1)+".] "+t._s(e.name)+" / "+t._s(e.dosage)+" / "+t._s(e.method_name)+" / 每次"+t._s(e.quantity)+t._s(e.unit_name)+" / "+t._s(e.eat_medicine_time.name)+" / 最後用藥: "+t._s(e.medicineEndInfo))])],1)}))],2)]),s("tr",[s("td",[s("v-row",{staticClass:"px-2"},[s("v-col",{attrs:{cols:"12"}},[s("span",{staticClass:"text-left font-weight-black"},[t._v("本次就診主因: "+t._s(t.list.main_cause_of_treatment_name))])]),s("v-col",{attrs:{cols:"12"}},[s("span",{staticClass:"text-left font-weight-black"},[t._v("原因狀況描述:")]),s("br"),t._v(" "+t._s(t.list.description)+" ")]),s("v-col",{attrs:{cols:"4"}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-border-all-variant")]),t._v("不實施心肺復甦術(DNR) ")],1),s("v-col",{attrs:{cols:"5"}},[t._v("本機構電話 "+t._s(t.cData.tel)+" 轉接護理人員")]),s("v-col",{attrs:{cols:"3"}},[t._v("護理人員簽名: "+t._s(t._f("filterName")(t.list.create_man)))])],1)],1)]),s("tr",[s("td",[s("v-row",{staticClass:"px-2"},[s("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[s("span",{staticClass:"text-left font-weight-black"},[t._v("請醫情形回覆:")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),t._v(" "+t._s(t.list.response)+" ")]),s("v-col",{attrs:{cols:"9"}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-border-all-variant")]),t._v("告知家屬: ")],1),s("v-col",{attrs:{cols:"3"}},[t._v("醫師簽名:")])],1)],1)])]),s("h4",{staticClass:"mt-3 font-weight-black border-bottom"},[t._v(" 生命徵象紀錄 ( "+t._s(t.startDay)+" ~ "+t._s(t.endDay)+" ) ")]),s("table",{staticClass:"form_title",staticStyle:{border:"2px #000000 solid"},attrs:{width:"100%"}},[s("tr",[t.printSet.date?s("td",[t._v("評估日期")]):t._e(),t.printSet.time?s("td",[t._v("評估時間")]):t._e(),t.printSet.result?s("td",[t._v("檢查結果")]):t._e(),t.printSet.weight?s("td",[t._v("體重")]):t._e(),t.printSet.bp_h?s("td",[t._v("血壓(H)")]):t._e(),t.printSet.bp_l?s("td",[t._v("血壓(L)")]):t._e(),t.printSet.pulse?s("td",[t._v("脈搏")]):t._e(),t.printSet.temperature?s("td",[t._v("體溫")]):t._e(),t.printSet.breath?s("td",[t._v("呼吸")]):t._e(),t.printSet.blood_sugar?s("td",[t._v("血糖")]):t._e(),t.printSet.blood_oxygen?s("td",[t._v("血氧濃度")]):t._e(),t.printSet.pain?s("td",[t._v("疼痛指數")]):t._e(),t.printSet.gcs_e?s("td",[t._v("GCS-E")]):t._e(),t.printSet.gcs_v?s("td",[t._v("GCS-V")]):t._e(),t.printSet.gcs_m?s("td",[t._v("GCS-M")]):t._e(),t.printSet.stool?s("td",[t._v("大便次數")]):t._e(),t.printSet.note?s("td",[t._v("備註")]):t._e()]),t._l(t.signlifeData,(function(e,n){return s("tr",{key:n},[t.printSet.date?s("td",[t._v(t._s(e.date))]):t._e(),t.printSet.time?s("td",[t._v(t._s(e.time))]):t._e(),t.printSet.result?s("td",[t._v(t._s(e.result))]):t._e(),t.printSet.weight?s("td",[t._v(t._s(e.weight))]):t._e(),t.printSet.bp_h?s("td",[t._v(t._s(e.bp_h))]):t._e(),t.printSet.bp_l?s("td",[t._v(t._s(e.bp_l))]):t._e(),t.printSet.pulse?s("td",[t._v(t._s(e.pulse))]):t._e(),t.printSet.temperature?s("td",[t._v(t._s(e.temperature))]):t._e(),t.printSet.breath?s("td",[t._v(t._s(e.breath))]):t._e(),t.printSet.blood_sugar?s("td",[t._v(t._s(e.blood_sugar))]):t._e(),t.printSet.blood_oxygen?s("td",[t._v(t._s(e.blood_oxygen))]):t._e(),t.printSet.pain?s("td",[t._v(t._s(e.pain))]):t._e(),t.printSet.gcs_e?s("td",[t._v(t._s(e.gcs_e))]):t._e(),t.printSet.gcs_v?s("td",[t._v(t._s(e.gcs_v))]):t._e(),t.printSet.gcs_m?s("td",[t._v(t._s(e.gcs_m))]):t._e(),t.printSet.stool?s("td",[t._v(t._s(e.stool))]):t._e(),t.printSet.note?s("td",[t._v(t._s(e.note))]):t._e()])}))],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("strong",[t._v("就診紀錄單")])])}],r=(s("4de4"),s("d81d"),s("b680"),s("d3b7"),s("07ac"),s("25f0"),s("1276"),s("4328")),a=s.n(r),o=s("5a0c"),c=s.n(o),u={data:function(){return{cData:{},pData:{},uData:{},list:{},medicineData:[],signlifeData:[],printSet:[],startDay:"",endDay:"",matchPipelineItems:[]}},filters:{filterName:function(t){if(void 0!=t){var e=t.split("(");return e[0]}},filterdiagnosis:function(t){if(void 0!=t){var e=Object.values(t);return e.toString()}}},computed:{age:function(){return c()().format("YYYY")-c()(this.uData.birthday).format("YYYY")},ibw:function(){var t=this.uData.height/100*(this.uData.height/100)*22;return t.toFixed(2)}},mounted:function(){this.cData=JSON.parse(sessionStorage.getItem("cData")),this.pData=JSON.parse(sessionStorage.getItem("pData")),this.uData=JSON.parse(sessionStorage.getItem("uData"));var t=JSON.parse(sessionStorage.getItem("printData"));console.log(t),this.list=t.medicalData,this.medicineData=t.medicineData,this.signlifeData=t.signlifeData,this.printSet=t.printSet.signlife,this.startDay=t.printSet.startDay,this.endDay=t.printSet.endDay,this.getPipeline()},methods:{getPipeline:function(){var t=this,e={key:"u_snkey",value:this.list.user_snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/pipeline_used",a.a.stringify(e)).then((function(e){var s=e.data.map((function(t){var e=JSON.parse(t.datalist);return e["snkey"]=t.snkey,e["create_man"]=t.create_man,e["edit_man"]=t.edit_man,e}));t.matchPipelineItems=s.filter((function(t){return c()(t.end_date).format("YYYY-MM-DD")>c()().format("YYYY-MM-DD")}))}))},reprint:function(t,e){return 0==t||e[t].medical.snkey!=e[t-1].medical.snkey}}},l=u,_=(s("380d"),s("2877")),d=s("6544"),h=s.n(d),f=s("cc20"),v=s("62ad"),p=s("132d"),m=s("0fd9"),g=Object(_["a"])(l,n,i,!1,null,"ffb07f62",null);e["default"]=g.exports;h()(g,{VChip:f["a"],VCol:v["a"],VIcon:p["a"],VRow:m["a"]})},"5a0c":function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";var t="millisecond",e="second",s="minute",n="hour",i="day",r="week",a="month",o="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_=function(t,e,s){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(s)+t},d={s:_,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),n=Math.floor(s/60),i=s%60;return(e<=0?"+":"-")+_(n,2,"0")+":"+_(i,2,"0")},m:function(t,e){var s=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(s,a),i=e-n<0,r=t.clone().add(s+(i?-1:1),a);return Number(-(s+(e-n)/(i?n-r:r-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:a,y:c,w:r,d:i,D:"date",h:n,m:s,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",v={};v[f]=h;var p=function(t){return t instanceof S},m=function(t,e,s){var n;if(!t)return f;if("string"==typeof t)v[t]&&(n=t),e&&(v[t]=e,n=t);else{var i=t.name;v[i]=t,n=i}return!s&&n&&(f=n),n||!s&&f},g=function(t,e,s){if(p(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:s}:e:{};return n.date=t,new S(n)},D=d;D.l=m,D.i=p,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var S=function(){function _(t){this.$L=this.$L||m(t.locale,null,!0),this.parse(t)}var d=_.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(u);if(n)return s?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var s=g(t);return this.startOf(e)<=s&&s<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,s){return D.u(t)?this[e]:this.set(s,t)},d.year=function(t){return this.$g(t,"$y",c)},d.month=function(t){return this.$g(t,"$M",a)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",n)},d.minute=function(t){return this.$g(t,"$m",s)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var u=this,l=!!D.u(o)||o,_=D.p(t),d=function(t,e){var s=D.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?s:s.endOf(i)},h=function(t,e){return D.w(u.toDate()[t].apply(u.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},f=this.$W,v=this.$M,p=this.$D,m="set"+(this.$u?"UTC":"");switch(_){case c:return l?d(1,0):d(31,11);case a:return l?d(1,v):d(0,v+1);case r:var g=this.$locale().weekStart||0,S=(f<g?f+7:f)-g;return d(l?p-S:p+(6-S),v);case i:case"date":return h(m+"Hours",0);case n:return h(m+"Minutes",1);case s:return h(m+"Seconds",2);case e:return h(m+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(r,o){var u,l=D.p(r),_="set"+(this.$u?"UTC":""),d=(u={},u[i]=_+"Date",u.date=_+"Date",u[a]=_+"Month",u[c]=_+"FullYear",u[n]=_+"Hours",u[s]=_+"Minutes",u[e]=_+"Seconds",u[t]=_+"Milliseconds",u)[l],h=l===i?this.$D+(o-this.$W):o;if(l===a||l===c){var f=this.clone().set("date",1);f.$d[d](h),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else d&&this.$d[d](h);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var u,l=this;t=Number(t);var _=D.p(o),d=function(e){var s=g(l);return D.w(s.date(s.date()+Math.round(e*t)),l)};if(_===a)return this.set(a,this.$M+t);if(_===c)return this.set(c,this.$y+t);if(_===i)return d(1);if(_===r)return d(7);var h=(u={},u[s]=6e4,u[n]=36e5,u[e]=1e3,u)[_]||1,f=this.$d.getTime()+t*h;return D.w(f,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),i=this.$locale(),r=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,_=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].substr(0,r)},d=function(t){return D.s(r%12||12,t,"0")},h=i.meridiem||function(t,e,s){var n=t<12?"AM":"PM";return s?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:_(i.monthsShort,o,u,3),MMMM:u[o]||u(this,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:_(i.weekdaysMin,this.$W,c,2),ddd:_(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:D.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:n};return s.replace(l,(function(t,e){return e||f[t]||n.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,l){var _,d=D.p(u),h=g(t),f=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,p=D.m(this,h);return p=(_={},_[c]=p/12,_[a]=p,_[o]=p/3,_[r]=(v-f)/6048e5,_[i]=(v-f)/864e5,_[n]=v/36e5,_[s]=v/6e4,_[e]=v/1e3,_)[d]||v,l?p:D.a(p)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return v[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),n=m(t,e,!0);return n&&(s.$L=n),s},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},_}();return g.prototype=S.prototype,g.extend=function(t,e){return t(e,S,g),g},g.locale=m,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=v[f],g.Ls=v,g}))},7976:function(t,e,s){}}]);
//# sourceMappingURL=chunk-59dba6b0.98d62606.js.map