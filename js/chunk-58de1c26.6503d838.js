(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58de1c26"],{"5a0c":function(t,e,s){!function(e,s){t.exports=s()}(0,(function(){"use strict";var t="millisecond",e="second",s="minute",n="hour",i="day",r="week",a="month",u="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,s){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(s)+t},f={s:h,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),n=Math.floor(s/60),i=s%60;return(e<=0?"+":"-")+h(n,2,"0")+":"+h(i,2,"0")},m:function(t,e){var s=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(s,a),i=e-n<0,r=t.clone().add(s+(i?-1:1),a);return Number(-(s+(e-n)/(i?n-r:r-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:o,w:r,d:i,D:"date",h:n,m:s,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v="en",m={};m[v]=d;var y=function(t){return t instanceof p},$=function(t,e,s){var n;if(!t)return v;if("string"==typeof t)m[t]&&(n=t),e&&(m[t]=e,n=t);else{var i=t.name;m[i]=t,n=i}return!s&&n&&(v=n),n||!s&&v},_=function(t,e,s){if(y(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:s}:e:{};return n.date=t,new p(n)},g=f;g.l=$,g.i=y,g.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var p=function(){function h(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(c);if(n)return s?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var s=_(t);return this.startOf(e)<=s&&s<=this.endOf(e)},f.isAfter=function(t,e){return _(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<_(t)},f.$g=function(t,e,s){return g.u(t)?this[e]:this.set(s,t)},f.year=function(t){return this.$g(t,"$y",o)},f.month=function(t){return this.$g(t,"$M",a)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",n)},f.minute=function(t){return this.$g(t,"$m",s)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var c=this,l=!!g.u(u)||u,h=g.p(t),f=function(t,e){var s=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?s:s.endOf(i)},d=function(t,e){return g.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},v=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case o:return l?f(1,0):f(31,11);case a:return l?f(1,m):f(0,m+1);case r:var _=this.$locale().weekStart||0,p=(v<_?v+7:v)-_;return f(l?y-p:y+(6-p),m);case i:case"date":return d($+"Hours",0);case n:return d($+"Minutes",1);case s:return d($+"Seconds",2);case e:return d($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,u){var c,l=g.p(r),h="set"+(this.$u?"UTC":""),f=(c={},c[i]=h+"Date",c.date=h+"Date",c[a]=h+"Month",c[o]=h+"FullYear",c[n]=h+"Hours",c[s]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[l],d=l===i?this.$D+(u-this.$W):u;if(l===a||l===o){var v=this.clone().set("date",1);v.$d[f](d),v.init(),this.$d=v.set("date",Math.min(this.$D,v.daysInMonth())).toDate()}else f&&this.$d[f](d);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,u){var c,l=this;t=Number(t);var h=g.p(u),f=function(e){var s=_(l);return g.w(s.date(s.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return f(1);if(h===r)return f(7);var d=(c={},c[s]=6e4,c[n]=36e5,c[e]=1e3,c)[h]||1,v=this.$d.getTime()+t*d;return g.w(v,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),i=this.$locale(),r=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,h=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].substr(0,r)},f=function(t){return g.s(r%12||12,t,"0")},d=i.meridiem||function(t,e,s){var n=t<12?"AM":"PM";return s?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:h(i.monthsShort,u,c,3),MMMM:c[u]||c(this,s),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:g.s(r,2,"0"),h:f(1),hh:f(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return s.replace(l,(function(t,e){return e||v[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var h,f=g.p(c),d=_(t),v=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,y=g.m(this,d);return y=(h={},h[o]=y/12,h[a]=y,h[u]=y/3,h[r]=(m-v)/6048e5,h[i]=(m-v)/864e5,h[n]=m/36e5,h[s]=m/6e4,h[e]=m/1e3,h)[f]||m,l?y:g.a(y)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),n=$(t,e,!0);return n&&(s.$L=n),s},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}();return _.prototype=p.prototype,_.extend=function(t,e){return t(e,p,_),_},_.locale=$,_.isDayjs=y,_.unix=function(t){return _(1e3*t)},_.en=m[v],_.Ls=m,_}))},"6dfc":function(t,e,s){},"7b83":function(t,e,s){"use strict";s("6dfc")},b4d5:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"TreatmentPrint"},[s("div",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("h3",[t._v(t._s(t.cData.company_name))])]),s("v-col",{attrs:{cols:"6"}},[s("h1",{staticClass:"text-center"},[s("strong",[t._v("個案服務處遇計畫表")])])]),s("v-col",{attrs:{cols:"3"}})],1)],1),s("div",[s("table",{staticClass:"form_title text-nowrap",staticStyle:{border:"2px #000000 solid"},attrs:{width:"100%"}},[t._m(0),s("tr",[s("td",[s("v-row",[s("v-col",{attrs:{cols:"2"}},[t._v("姓名: "+t._s(t.uData.name))]),s("v-col",{attrs:{cols:"2"}},[t._v("性別: "+t._s(t.uData.sex))]),s("v-col",{attrs:{cols:"2"}},[t._v("生日: "+t._s(t.uData.birthday))]),s("v-col",{attrs:{cols:"3"}},[t._v("入住日期: "+t._s(t.uData.in_date))]),s("v-col",{attrs:{cols:"3"}},[t._v("評估日期: "+t._s(t.list.date))])],1)],1)]),s("tr",[s("td",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[t._v("身分別: "+t._s(t.filteridentity))]),s("v-col",{attrs:{cols:"3"}},[t._v("障礙類別: "+t._s(t.uData.obstacle.length?t.uData.obstacle[0].kind:""))]),s("v-col",{attrs:{cols:"3"}},[t._v("障礙等級: "+t._s(t.uData.obstacle.length?t.uData.obstacle[0].lv:""))]),s("v-col",{attrs:{cols:"3"}},[t._v("教育程度: "+t._s(t.filtereducation))]),s("v-col",{attrs:{cols:"12"}},[t._v("致障原因: "+t._s(t.list.obstaclereason))])],1)],1)]),t._m(1),s("tr",[s("td",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t._v("1.生活自理能力: "+t._s(t.list.selfcareability))]),s("v-col",{attrs:{cols:"12"}},[t._v("2.生活適應能力: 適應評估表: "+t._s(t.filteradaptability)+" 分")]),s("v-col",{attrs:{cols:"12"}},[t._v("3.情緒狀況: 憂鬱量表: "+t._s(t.filtermelancholy)+" 分")]),s("v-col",{attrs:{cols:"12"}},[t._v("4.經濟來源: "+t._s(t.list.economicsources))]),s("v-col",{attrs:{cols:"12"}},[t._v("5.家庭支持功能: "+t._s(t.list.familysupport))])],1)],1)]),t._m(2),s("tr",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t._v("【服務對象問題及需求】 "+t._s(t.list.qa))]),s("v-col",{attrs:{cols:"12"}},[t._v("【服務目標】 "+t._s(t.list.target)+" ")]),s("v-col",{attrs:{cols:"12"}},[t._v("【服務策略】 "),s("br"),t._v(" ➤執行方法: "+t._s(t.list.means)+" "),s("br"),t._v(" ➤服務資源： "+t._s(t.list.resources)),s("br"),t._v(" ➤執行期程： "+t._s(t.list.schedule)),s("br"),t._v(" ➤執行者： "+t._s(t.list.executor)+" ")]),s("v-col",{attrs:{cols:"12"}},[t._v("【評值】 "+t._s(t.list.evaluation))])],1)],1)]),s("v-divider"),s("v-card-actions")],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticClass:"font-weight-bold"},[t._v("一、住民基本資料")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticClass:"font-weight-bold"},[t._v("二、社會心理功能診斷分析")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",{staticClass:"font-weight-bold"},[t._v("三、個案處遇計畫")])])}],r=(s("4de4"),s("1276"),s("4328")),a=s.n(r),u=s("5a0c"),o=s.n(u),c={data:function(){return{cData:{},pData:{},uData:{},list:{},adaptabilityItems:[],melancholyItems:[],NursingassessmentItems:[],pic_url:""}},filters:{filterName:function(t){if(void 0!=t){var e=t.split("(");return e[0]}},filterq:function(t){if(void 0!=t)return"1"==t?"√":""}},computed:{age:function(){return o()().format("YYYY")-o()(this.uData.birthday).format("YYYY")},filteradaptability:function(){var t=this;if(this.adaptabilityItems.length>0){var e=this.adaptabilityItems.filter((function(e){return e.date==t.list.date}));if(e.length>0){var s=JSON.parse(e[0].datalist);return s.total}return""}return""},filtermelancholy:function(){var t=this;if(this.melancholyItems.length>0){var e=this.melancholyItems.filter((function(e){return e.date==t.list.date}));if(e.length>0){var s=JSON.parse(e[0].datalist);return s.total}return""}return""},filtereducation:function(){if(this.NursingassessmentItems.length>0){var t=this.NursingassessmentItems[0],e="";return"true"==t.education1&&(e+="不識字;"),"true"==t.education2&&(e+="國小以下;"),"true"==t.education3&&(e+="小學"),"true"==t.education4&&(e+="國中"),"true"==t.education5&&(e+="高中(職)"),"true"==t.education6&&(e+="大學/大專;"),"true"==t.education7&&(e+="大學以上;"),"true"==t.education8&&(e+="不確定;"),e}},filteridentity:function(){if(this.NursingassessmentItems.length>0){var t=this.NursingassessmentItems[0],e="";return"true"==t.identity1&&(e+="一般;"),"true"==t.identity2&&(e+="中低收入戶;"),"true"==t.identity3&&(e+="低收入(一款)"),"true"==t.identity4&&(e+="低收入(二款)"),"true"==t.identity5&&(e+="低收入(三款)"),"true"==t.identity6&&(e+="原住民;"),"true"==t.identity7&&(e+="榮民(榮眷);"),"true"==t.identity8&&(e+="其他:"),t.identity9&&""!=t.identity9&&(e+=t.identity9+";"),e}}},mounted:function(){this.cData=JSON.parse(sessionStorage.getItem("cData")),this.pData=JSON.parse(sessionStorage.getItem("pData")),this.uData=JSON.parse(sessionStorage.getItem("uData")),this.list=JSON.parse(sessionStorage.getItem("printData")),this.getAdaptability(),this.getMelancholy(),this.getNursingassessment()},methods:{getAdaptability:function(){var t=this,e={key:"u_snkey",value:this.uData.snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/adaptability",a.a.stringify(e)).then((function(e){t.adaptabilityItems=e.data}))},getMelancholy:function(){var t=this,e={key:"u_snkey",value:this.uData.snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/melancholy",a.a.stringify(e)).then((function(e){t.melancholyItems=e.data}))},getNursingassessment:function(){var t=this,e={key:"u_snkey",value:this.uData.snkey};this.axios.post("general/getByKey/"+this.$store.state.databaseName+"/nursingassessment",a.a.stringify(e)).then((function(e){t.NursingassessmentItems=e.data}))}}},l=c,h=(s("7b83"),s("2877")),f=s("6544"),d=s.n(f),v=s("99d9"),m=s("62ad"),y=s("ce7e"),$=s("0fd9"),_=Object(h["a"])(l,n,i,!1,null,"4e81b9e1",null);e["default"]=_.exports;d()(_,{VCardActions:v["b"],VCol:m["a"],VDivider:y["a"],VRow:$["a"]})}}]);
//# sourceMappingURL=chunk-58de1c26.6503d838.js.map