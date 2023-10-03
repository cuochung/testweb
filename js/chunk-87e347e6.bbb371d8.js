(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87e347e6"],{"49dd":function(t,e,a){},"49f6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PharmacistEvaluationList"},[a("v-card",{staticClass:"mt-2 mb-6 pb-6"},[a("v-card-title",{staticClass:"d-flex justify-space-between align-center"},[a("h2",[a("v-icon",{staticClass:"mr-2"},[t._v("fas fa-file-alt")]),a("span",[t._v("72小時藥師評估表")])],1),a("h2",[t._v(" "+t._s(this.$store.state.uData.p_code)+" / "+t._s(t.userData.bed_name)+" / "+t._s(this.$store.state.uData.name)+" ")])]),t.checkAllNeedDataOK?a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{type:"date",label:"評估日期",rules:t.emptyRules},model:{value:t.list.date,callback:function(e){t.$set(t.list,"date",e)},expression:"list.date"}}),a("div",{staticClass:"grey lighten-3 pa-2 rounded"},[a("h1",[t._v("基本資料")]),a("v-divider"),a("v-row",{staticClass:"contentStyle"},[a("v-col",{attrs:{cols:"3"}},[t._v("姓名: "+t._s(t.userData.name)+" ")]),a("v-col",{attrs:{cols:"3"}},[t._v("床號: "+t._s(t.userData.bed_name)+" ")]),a("v-col",{attrs:{cols:"3"}},[t._v("出生日期: "+t._s(t.userData.birthday))]),a("v-col",{attrs:{cols:"3"}},[t._v("性別: "+t._s(t.userData.sex))]),a("v-col",{attrs:{cols:"3"}},[t._v("入住日期: "+t._s(t.userData.in_date))]),a("v-col",{attrs:{cols:"8"}},[t._v("過去病史: "+t._s(t.returnuDiagnosis(t.userData.diagnosis))+" ")])],1)],1),a("div",{staticClass:"grey lighten-3 pa-2 rounded my-2"},[a("h1",[t._v("生理狀況")]),a("v-divider"),a("v-row",{staticClass:"contentStyle"},[a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{label:"行動能力",items:t.activeItems},model:{value:t.list.active,callback:function(e){t.$set(t.list,"active",e)},expression:"list.active"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{label:"特殊照護",items:t.spCareItems,multiple:""},model:{value:t.list.spCare,callback:function(e){t.$set(t.list,"spCare",e)},expression:"list.spCare"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{label:"藥物依賴",items:t.medicineRelyItems,multiple:""},model:{value:t.list.medicineRely,callback:function(e){t.$set(t.list,"medicineRely",e)},expression:"list.medicineRely"}})],1),a("v-col",{attrs:{cols:"12"}},[t._v(" 過敏史: "),t.userData.allergyhistory2.length+t.userData.allergyhistory4.length+t.userData.allergyhistory5.length?t._e():a("span",[t._v("無")]),t._v(" "+t._s(t.userData.allergyhistory2)+" "+t._s(t.userData.allergyhistory4)+" "+t._s(t.userData.allergyhistory5)+" ")])],1)],1),a("div",{staticClass:"grey lighten-3 pa-2 rounded my-2"},[a("h1",[t._v("服用藥物")]),a("v-divider"),t._l(t.returnMedicalArr(),(function(e){return a("div",{key:e.snkey,staticClass:"my-3"},[a("h2",{staticClass:"text-right mb-1"},[t._v(" "+t._s(t.filterMatchMedical(e)[0].medicalData.hospital_name)+"-"+t._s(t.filterMatchMedical(e)[0].medicalData.branch_name)+" 醫師: "+t._s(t.filterMatchMedical(e)[0].medicalData.doctor_name)+" ")]),a("v-simple-table",[a("thead",[a("tr",[a("th",[t._v("用藥日期")]),a("th",[t._v("藥名")]),a("th",[t._v("次量")]),a("th",[t._v("頻率")]),a("th",[t._v("途徑")]),a("th",[t._v("天數")]),a("th",[t._v("總量")])])]),a("tbody",t._l(t.filterMatchMedical(e),(function(e){return a("tr",{key:e.snkey},[a("td",[t._v(t._s(e.start_date))]),a("td",[t._v(t._s(e.name)+" "+t._s(e.dosage))]),a("td",[t._v(t._s(e.quantity)+" "+t._s(e.unit_name))]),a("td",[t._v(t._s(e.eat_medicine_timeData?e.eat_medicine_timeData.name:"無資料"))]),a("td",[t._v(t._s(e.method_name))]),a("td",[e.eat_medicine_timeData?a("span",[t._v(" "+t._s(isNaN(e.quantity)?e.quantity:(e.medicine_counts/t.returnMathFromStr(e.quantity)/e.eat_medicine_timeData.time.split(",").length/e.eat_medicine_timeData.day*100).toFixed(0)/100)+" ")]):t._e()]),a("td",[t._v(t._s(e.medicine_counts))])])})),0)])],1)}))],2),a("v-textarea",{attrs:{label:"藥師建議",outlined:"","auto-grow":""},model:{value:t.list.pharmacistSuggest,callback:function(e){t.$set(t.list,"pharmacistSuggest",e)},expression:"list.pharmacistSuggest"}}),a("v-textarea",{attrs:{label:"機構護理人員回覆",outlined:"","auto-grow":""},model:{value:t.list.nursingSuggest,callback:function(e){t.$set(t.list,"nursingSuggest",e)},expression:"list.nursingSuggest"}})],1)],1):t._e(),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"primary",on:{click:function(e){return e.stopPropagation(),t.print(e)}}},[t._v(" 資料列印 "),a("v-icon",{staticClass:"ml-1"},[t._v("mdi-printer")])],1),a("v-btn",{staticClass:"success",on:{click:function(e){return e.stopPropagation(),t.editOK(e)}}},[t._v("資料更新")])],1)],1)],1)},i=[],n=(a("a4d3"),a("4de4"),a("7db0"),a("d81d"),a("fb6a"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("07ac"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("2909")),r=a("ade3"),l=a("5a0c"),c=a.n(l),o=a("e418"),d=a.n(o),u=a("cb71");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}c.a.extend(d.a);var v={data:function(){return{processModel:"addModel",emptyRules:[function(t){return!!t||"不可空白"}],list:{date:c()().format("YYYY-MM-DD")},activeItems:["","獨立行走","長期臥床","輪椅助行","其他輔具"],spCareItems:["無","鼻異管餵食","使用導尿管","使用氣切","其他"],medicineRelyItems:["有","無"],userMedicineItems:null,userMedicalRecordItems:null,eat_medicine_timeItems:null}},computed:{checkAllNeedDataOK:function(){return null!=this.userMedicineItems&&null!=this.userMedicalRecordItems&&null!=this.eat_medicine_timeItems},userData:function(){return this.$store.state.uData},buildMatchDayMedicines:function(){var t=this,e=this.userMedicineItems.map((function(t){return h({},t,{medicineEndDay:t.medicineEndInfo.slice(3,13)})}));return e=e.filter((function(e){return c()(t.list.date).isBetween(e.start_date,c()(e.medicineEndDay),null,"[]")})),e=e.map((function(e){return h({},e,{medicalData:t.returnMedicalData(e),eat_medicine_timeData:t.returnEatMedicineTime(e)})})),e}},mounted:function(){this.getUserMedicine(),this.getUserMedicalRecord(),this.getItems("eat_medicine_time"),this.getExistData()},methods:{print:function(){var t={list:this.list,userData:this.userData},e=this.$router.resolve({path:"/print/PharmacistEvaluationListPrint",query:{data:JSON.stringify(t)}});window.open(e.href,"_blank")},getExistData:function(){var t=this,e={key:"user_snkey",value:this.$store.state.uData.snkey};this.$api.options("general/getByKey/"+this.$store.state.databaseName+"/pharmacistevalution",e).then((function(e){if(e.length){var a=e[0];t.list=JSON.parse(a.datalist),t.list.snkey=a.snkey,t.processModel="editModel"}}))},editOK:function(){var t=this;if(this.$refs.form.validate()){if("addModel"==this.processModel){console.log("add"),this.list.user_snkey=this.$store.state.uData.snkey,this.list.create_man=this.$store.state.pData.username+"("+c()().format("YYYY-MM-DD HH:mm:ss")+")";var e="general/add/"+this.$store.state.databaseName+"/pharmacistevalution",a={user_snkey:this.$store.state.uData.snkey,datalist:JSON.stringify(this.list)},s="資料新增"}else{console.log("edit"),this.list.edit_man||(this.list.edit_man=""),this.list.edit_man=this.$store.state.pData.username+"("+c()().format("YYYY-MM-DD HH:mm:ss")+")"+this.list.edit_man;e="general/edit/"+this.$store.state.databaseName+"/pharmacistevalution",a={snkey:this.list.snkey,datalist:JSON.stringify(this.list),edit_man:""},s="資料已更新"}this.$api.options(e,a).then((function(e){if(1==e.state){var a={msg:s,type:!0,theme:"success"};t.$store.commit("snackbar",a),t.$emit("getAllData")}else{console.log(e);a={msg:"error",type:!0,theme:"error"};t.$store.commit("snackbar",a)}}))}else{var i={msg:"資料輸入不完整,請再確認!!",type:!0,theme:"warning"};this.$store.commit("snackbar",i)}},returnMathFromStr:function(t){return u["a"](t)},filterMatchMedical:function(t){return this.buildMatchDayMedicines.filter((function(e){return e.medical_snkey==t}))},returnMedicalArr:function(){var t=this.buildMatchDayMedicines.map((function(t){return t.medical_snkey}));return t=new Set(t),t=Object(n["a"])(t),t},returnMedicalData:function(t){return this.userMedicalRecordItems.find((function(e){return e.snkey==t.medical_snkey}))},returnEatMedicineTime:function(t){return this.eat_medicine_timeItems.find((function(e){return e.snkey==t.eat_medicine_time_snkey}))},getUserMedicine:function(){var t=this,e={key:"user_snkey",value:this.$store.state.uData.snkey};this.$api.options("medicinerecord/getByKey/"+this.$store.state.databaseName,e).then((function(e){t.userMedicineItems=e}))},getUserMedicalRecord:function(){var t=this;this.$api.options("medicinerecord/getByUserSnkey/"+this.$store.state.databaseName+"/"+this.$store.state.uData.snkey).then((function(e){t.userMedicalRecordItems=e}))},returnuDiagnosis:function(t){var e=Object.values(t),a="";return e.forEach((function(t,e){e>0&&(a+=","),a+=t})),a},getItems:function(t){var e=this;this.$api.options("general/getAll/"+this.$store.state.databaseName+"/"+t).then((function(a){e[t+"Items"]=a}))}}},_=v,f=(a("8677"),a("2877")),p=a("6544"),y=a.n(p),g=a("8336"),b=a("b0af"),D=a("99d9"),M=a("62ad"),k=a("ce7e"),$=a("4bd4"),O=a("132d"),C=a("0fd9"),w=a("b974"),I=a("1f4f"),x=a("2fa4"),S=a("8654"),j=a("a844"),V=Object(f["a"])(_,s,i,!1,null,null,null);e["default"]=V.exports;y()(V,{VBtn:g["a"],VCard:b["a"],VCardActions:D["b"],VCardText:D["d"],VCardTitle:D["e"],VCol:M["a"],VDivider:k["a"],VForm:$["a"],VIcon:O["a"],VRow:C["a"],VSelect:w["a"],VSimpleTable:I["a"],VSpacer:x["a"],VTextField:S["a"],VTextarea:j["a"]})},8677:function(t,e,a){"use strict";a("49dd")}}]);
//# sourceMappingURL=chunk-87e347e6.bbb371d8.js.map