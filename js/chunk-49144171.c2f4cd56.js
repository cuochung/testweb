(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49144171"],{"045d":function(t,e,s){},"7a49":function(t,e,s){"use strict";s("045d")},a786:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"IADLsList"},[s("v-card",{staticClass:"mt-2"},[s("v-card-title",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"8"}},[s("h2",{staticClass:"subheading grey--text"},[s("v-icon",{staticClass:"mx-1"},[t._v("fas fa-file-alt")]),s("span",[t._v(" "+t._s(this.$store.state.uData.p_code)+" / "+t._s(this.$store.state.uData.name)+" ")]),s("span",[t._v("工具性日常生活活動功能評估")])],1)]),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-toolbar",{attrs:{dense:"",rounded:""}},[s("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-magnify","single-line":"",label:"搜尋"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),s("popupadd",{ref:"childFn",attrs:{useDataBase:t.useDataBase,items:t.items},on:{getAllData:t.getAllData}})],1)],1)],1)],1),s("v-card-text",[s("v-card",{staticClass:"mt-2"},[s("v-card-text",[s("v-data-iterator",{attrs:{items:t.searchfilter,"items-per-page":t.itemsPerPage,"footer-props":{itemsPerPageOptions:t.itemsPerPageOptions}},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[s("v-simple-table",{staticClass:"mt-2 text-no-wrap",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",{staticStyle:{"background-color":"#e3f2fd"}},[s("tr",[s("th"),s("th",[t._v("上傳紀錄")]),s("th",[t._v("評估日期")]),s("th",[t._v("紀錄人")]),s("th",[t._v("修改紀錄")])])]),s("tbody",t._l(e.items,(function(e,a){return s("tr",{key:a},[s("td",[s("v-menu",{attrs:{transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{color:"primary",dark:""}},a),[t._v("功能")])]}}],null,!0)},[s("v-list",[s("v-list-item",{on:{click:function(s){return t.edit(e)}}},[s("v-list-item-title",[t._v("修改")])],1),s("v-list-item",{on:{click:function(s){return t.del(e)}}},[s("v-list-item-title",[t._v("刪除")])],1),s("v-list-item",{on:{click:function(s){return t.pushToMOHW(e)}}},[s("v-list-item-title",[t._v("上傳衛福部")])],1),e.uploadData?s("v-list-item",{on:{click:function(s){return t.checkMOHWData(e)}}},[s("v-list-item-title",[t._v("確認上傳資料狀況")])],1):t._e()],1)],1)],1),s("td",[e.uploadData?s("div",[s("span",[t._v("已上傳")]),e.uploadState?t._e():s("span",[t._v("(未確認)")]),e.uploadState?s("span",[t._v("(已確認-"+t._s(t.returnState(e))+")")]):t._e()]):s("div",[s("span",[t._v("未上傳")])])]),s("td",[t._v(t._s(e.Date))]),s("td",[t._v(t._s(e.create_man))]),s("td",[t._v(t._s(e.edit_man))])])})),0)]},proxy:!0}],null,!0)})]}}])})],1)],1)],1)],1)],1)},i=[],n=(s("a4d3"),s("4de4"),s("7db0"),s("caad"),s("d81d"),s("4e827"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("2532"),s("1276"),s("159b"),s("96cf"),s("ade3")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"IADLAdd"},[s("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-icon",t._g({attrs:{color:"red lighten-2",dark:""},on:{click:t.addProcess}},a),[t._v("mdi-plus-circle")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{class:t.titleStyle,attrs:{"primary-title":""}},[t._v(t._s(t.title))]),s("v-card-text",[s("v-form",{ref:"form",staticClass:"mt-3"},[s("v-text-field",{attrs:{type:"date",label:"評估日期",rules:t.emptyRules},model:{value:t.list.Date,callback:function(e){t.$set(t.list,"Date",e)},expression:"list.Date"}}),s("v-autocomplete",{attrs:{items:t.qq1Items,label:"購物",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq1,callback:function(e){t.$set(t.list,"qq1",e)},expression:"list.qq1"}}),s("v-autocomplete",{attrs:{items:t.qq2Items,label:"家務",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq2,callback:function(e){t.$set(t.list,"qq2",e)},expression:"list.qq2"}}),s("v-autocomplete",{attrs:{items:t.qq3Items,label:"理財",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq3,callback:function(e){t.$set(t.list,"qq3",e)},expression:"list.qq3"}}),s("v-autocomplete",{attrs:{items:t.qq4Items,label:"備食",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq4,callback:function(e){t.$set(t.list,"qq4",e)},expression:"list.qq4"}}),s("v-autocomplete",{attrs:{items:t.qq5Items,label:"交通",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq5,callback:function(e){t.$set(t.list,"qq5",e)},expression:"list.qq5"}}),s("v-autocomplete",{attrs:{items:t.qq6Items,label:"電話",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq6,callback:function(e){t.$set(t.list,"qq6",e)},expression:"list.qq6"}}),s("v-autocomplete",{attrs:{items:t.qq7Items,label:"洗衣",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq7,callback:function(e){t.$set(t.list,"qq7",e)},expression:"list.qq7"}}),s("v-autocomplete",{attrs:{items:t.qq8Items,label:"服藥",rules:t.emptyRules,"return-object":""},model:{value:t.list.qq8,callback:function(e){t.$set(t.list,"qq8",e)},expression:"list.qq8"}})],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),"add"==t.processType?s("v-btn",{staticClass:"primary",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.addOK}},[t._v("確認新增")]):t._e(),"edit"==t.processType?s("v-btn",{staticClass:"success",attrs:{loading:t.loading,disabled:t.loading},on:{click:t.editOK}},[t._v("確認修改")]):t._e()],1)],1)],1)],1)},o=[],l=s("5a0c"),c=s.n(l),u={props:["useDataBase","items"],data:function(){return{dialog:!1,list:{},processType:"",title:"",titleStyle:"",emptyRules:[function(t){return!!t||"不可空白"}],loading:!1,qq1Items:[{text:"能獨立完成所有購物需求。",Point:1},{text:"只能獨立購買簡單日常必需品。",Point:0},{text:"每一次購物都需要有人陪，只要有人陪伴就可以完成購物。",Point:0},{text:"完全不會獨立購物。",Point:0}],qq2Items:[{text:"能單獨處理家事或偶而需要協助較繁重的家事(如：搬動家具、清理廚房且完成歸位)。",Point:1},{text:"能做較簡單的家事，如洗碗、鋪床、疊被。",Point:1},{text:"能做較簡單的家事，但不能達到可被接受的整潔程度。",Point:1},{text:"所有的家事都需要別人協助。",Point:1},{text:"完全不會做家事。",Point:0}],qq3Items:[{text:"可獨立處理財務(指到郵局(銀行)提存款、支付房租、帳單、給錢、找錢等)。",Point:1},{text:"可以處理日常的購買(給錢、找錢)，但需要別人協助與銀行往來或大宗買賣。",Point:1},{text:"完全不能處理錢財。",Point:0}],qq4Items:[{text:"能獨立計畫、準備食材及佐料、烹煮和擺設一頓飯菜。",Point:1},{text:"如果準備好一切食材及佐料，會做一頓的飯菜。",Point:0},{text:"會將已做好的飯菜加熱。",Point:0},{text:"需要別人把飯菜煮好、擺好。",Point:0}],qq5Items:[{text:"能夠自己開車、騎車或自己搭乘大眾運輸工具。",Point:1},{text:"能夠自己搭乘計程車但不能搭乘大眾運輸工具。",Point:1},{text:"當有人陪同時，可搭乘大眾運輸工具。",Point:1},{text:"只能在有人協助或陪同時，可搭乘計程車或自用車。",Point:0},{text:"完全不能出門。",Point:0}],qq6Items:[{text:"能獨立使用電話，含查電話簿、撥號等。",Point:1},{text:"僅能撥熟悉的電話號碼(個案只能撥少於5組的常用電話)。",Point:1},{text:"僅能接電話，但不能撥電話。",Point:1},{text:"完全不會使用電話。",Point:0}],qq7Items:[{text:"自己清洗所有衣物。",Point:1},{text:"只能清洗小件衣物(如內衣褲、襪子)，需協助晾曬衣物或洗滌厚重衣物。",Point:1},{text:"需完全協助，所有衣物需完全由別人協助洗及晾曬。",Point:0}],qq8Items:[{text:"能自己負責在正確的時間服用正確的藥物。",Point:1},{text:"如果能事先將藥物的份量備妥，則可自行服用。",Point:0},{text:"不能自己負責服藥。",Point:0}]}},methods:{addProcess:function(){var t=this;this.processType="add",this.title="新增資料",this.titleStyle="font-weight-black error lighten-2",this.list={},this.items.length&&(this.list=JSON.parse(JSON.stringify(this.items[0])),delete this.list.snkey,delete this.list.user_snkey,delete this.list.create_man,delete this.list.create_man_snkey,delete this.list.edit_man,delete this.list.uploadData,delete this.list.uploadState),this.$nextTick((function(){t.$refs.form.resetValidation()}))},editProcess:function(t){this.dialog=!0,this.processType="edit",this.title="修改資料",this.titleStyle="font-weight-black success lighten-2",this.list=JSON.parse(JSON.stringify(t))},addOK:function(){var t=this;if(this.$refs.form.validate()){this.list.user_snkey=this.$store.state.uData.snkey,this.list.create_man=this.$store.state.pData.username+"("+c()().format("YYYY-MM-DD HH:mm:ss")+")",this.list.create_man_snkey=this.$store.state.pData.snkey;var e={datalist:JSON.stringify(this.list)};this.loading=!0,this.$api.options("general/add/"+this.$store.state.databaseName+"/"+this.useDataBase,e).then((function(e){if(1==e.state){var s={msg:"已新增",type:!0,theme:"success"};t.$store.commit("snackbar",s),t.$emit("getAllData"),t.dialog=!1,t.loading=!1}}))}else{var s={msg:"資料輸入不完全!!請重新確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",s)}},editOK:function(){var t=this;if(this.$refs.form.validate()){this.list.edit_man||(this.list.edit_man=""),this.list.edit_man=this.$store.state.pData.username+"("+c()().format("YYYY-MM-DD HH:mm:ss")+")"+this.list.edit_man;var e={snkey:this.list.snkey,datalist:JSON.stringify(this.list),edit_man:"pass"};this.loading=!0,this.$api.options("general/edit/"+this.$store.state.databaseName+"/"+this.useDataBase,e).then((function(e){if(1==e.state){var s={msg:"已修改",type:!0,theme:"success"};t.$store.commit("snackbar",s),t.$emit("getAllData"),t.loading=!1,t.dialog=!1}}))}else{var s={msg:"資料輸入不完全!!請重新確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",s)}}}},d=u,m=s("2877"),p=s("6544"),f=s.n(p),h=s("c6a6"),v=s("8336"),q=s("b0af"),b=s("99d9"),g=s("169a"),y=s("ce7e"),P=s("4bd4"),D=s("132d"),x=s("2fa4"),_=s("8654"),k=Object(m["a"])(d,r,o,!1,null,null,null),O=k.exports;f()(k,{VAutocomplete:h["a"],VBtn:v["a"],VCard:q["a"],VCardActions:b["b"],VCardText:b["d"],VCardTitle:b["e"],VDialog:g["a"],VDivider:y["a"],VForm:P["a"],VIcon:D["a"],VSpacer:x["a"],VTextField:_["a"]});var $=s("f858");function S(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function I(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?S(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={components:{popupadd:O},data:function(){return{useDataBase:"iadls",items:[],searchKey:"",itemsPerPageOptions:[10,20,30],itemsPerPage:10}},computed:{searchfilter:function(){var t=this.searchKey.split(" "),e="";return t.reduce((function(t,s){return t.filter((function(t){if(e=JSON.stringify(t).toUpperCase(),e.includes(s.toUpperCase()))return t}))}),this.items)}},mounted:function(){this.getAllData()},methods:{getAllData:function(){var t=this;this.$api.options("general/getAll/"+this.$store.state.databaseName+"/"+this.useDataBase).then((function(e){t.items=e.map((function(t){return I({},JSON.parse(t.datalist),{snkey:t.snkey})})).filter((function(e){return e.user_snkey==t.$store.state.uData.snkey})).sort((function(t,e){return t.Date<e.Date?1:-1}))}))},edit:function(t){this.$refs.childFn.editProcess(t)},del:function(t){var e=this;this.$confirm("確認刪除?").then((function(s){t.delman=e.$store.state.pData.username+"("+c()().format("YYYY-MM-DD HH:mm:ss")+")";var a={snkey:t.snkey,tablename:e.useDataBase,info:JSON.stringify(t)};s&&e.$api.options("general/delv3/"+e.$store.state.databaseName+"/"+a.tablename,a).then((function(t){if(1==t.state){var s={msg:"已刪除",type:!0,theme:"success"};e.$store.commit("snackbar",s),e.getAllData()}}))}))},pushToMOHW:function(t){var e,s=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$confirm("確認上傳資料到衛福部?"));case 2:e=a.sent,e&&$["a"].pushToMOHW(t,this.useDataBase,JSON.stringify(this.dataToJson(t))).then((function(t){t&&s.getAllData()}));case 4:case"end":return a.stop()}}),null,this)},checkMOHWData:function(t){var e=this;$["a"].checkMOHWData(t,this.useDataBase).then((function(t){t&&e.getAllData()}))},dataToJson:function(t){var e=this.$store.state.personnelItems.find((function(e){return e.snkey==t.create_man_snkey})),s={};return s.Date=t.Date,e&&e.idNum?s.NurseID=e.idNum:s.NurseID="N223456789",s.AssessmentNo=this.items.length,s.IsIADL="已評估",s.Questions=[{Question:"購物",Answer:t.qq1.text,Point:t.qq1.Point},{Question:"家務",Answer:t.qq2.text,Point:t.qq2.Point},{Question:"理財",Answer:t.qq3.text,Point:t.qq3.Point},{Question:"備食",Answer:t.qq4.text,Point:t.qq4.Point},{Question:"交通",Answer:t.qq5.text,Point:t.qq5.Point},{Question:"電話",Answer:t.qq6.text,Point:t.qq6.Point},{Question:"洗衣",Answer:t.qq7.text,Point:t.qq7.Point},{Question:"服藥",Answer:t.qq8.text,Point:t.qq8.Point}],{DataList:[{CaseID:this.$store.state.uData.id_num,EndDate:this.$store.state.uData.in_date,HealthyHabits:[],MedicalHistories:[],DrugSafeties:[],BodyEvaluations:[],PressureInjuries:[],FallRisks:[],ADLs:[],IADLs:[s],Dementias:[],GeriatricDepressionScales:[],MNASFs:[],PainEvaluations:[],SOFs:[]}]}},returnState:function(t){var e=JSON.parse(t.uploadState.data);return c()(e[0].log_date).format("YYYY-MM-DD HH:mm:ss")}}},A=w,V=(s("7a49"),s("62ad")),j=s("c377"),N=s("8860"),C=s("da13"),T=s("5d23"),H=s("e449"),M=s("0fd9"),Y=s("1f4f"),J=s("71d9"),R=Object(m["a"])(A,a,i,!1,null,null,null);e["default"]=R.exports;f()(R,{VBtn:v["a"],VCard:q["a"],VCardText:b["d"],VCardTitle:b["e"],VCol:V["a"],VDataIterator:j["a"],VIcon:D["a"],VList:N["a"],VListItem:C["a"],VListItemTitle:T["k"],VMenu:H["a"],VRow:M["a"],VSimpleTable:Y["a"],VTextField:_["a"],VToolbar:J["a"]})}}]);
//# sourceMappingURL=chunk-49144171.c2f4cd56.js.map