(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ef932b8"],{"3a2c":function(e,t,n){},a1d4:function(e,t,n){"use strict";n("3a2c")},d70c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accountinglistprint"},[n("v-card-text",{staticClass:"mt-3"},[n("h3",[e._v(e._s(e.cData.company_name))]),n("button",{staticClass:"float-right btn btn-success",on:{click:function(t){return t.stopPropagation(),e.exportExcel(t)}}},[n("span",{staticClass:"fas fa-file-excel"})]),n("div",{staticClass:"text-center border-bottom my-2"},[n("h1",[n("strong",[e._v(e._s(e.month)+"月份 照護費收費一覽表")])])])]),e.accountings.length&&e.payments.length?n("table",{staticStyle:{width:"100%"},attrs:{id:"outputtable",border:"2px solid #00"}},[e._m(0),n("tbody",e._l(e.formData,(function(t,r){return n("tr",{key:r},[n("td",{staticClass:"text-center"},[e._v(e._s(t.p_code))]),n("td",[e._v(e._s(t.name))]),n("td",{class:[{"red--text":t.fee1<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee1))+" ")]),n("td",{class:[{"red--text":t.fee2<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee2))+" ")]),n("td",{class:[{"red--text":t.fee3<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee3))+" ")]),n("td",{class:[{"red--text":t.fee4<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee4))+" ")]),n("td",{class:[{"red--text":t.fee5<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee5))+" ")]),n("td",{class:[{"red--text":t.fee6<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee6))+" ")]),n("td",{class:[{"red--text":t.fee7<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee7))+" ")]),n("td",{class:[{"red--text":t.fee8<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee8))+" ")]),n("td",{class:[{"red--text":t.fee9<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee9))+" ")]),n("td",{class:[{"red--text":t.fee10<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee10))+" ")]),n("td",{class:[{"red--text":t.fee11<0}]},[e._v(" "+e._s(e._f("filtermoney")(t.fee11))+" ")]),n("td",{class:[{"red--text":t.fee12<0}]},[e._v(e._s(t.fee12))]),n("td",{class:[{"red--text":t.fee13<0}]},[e._v(e._s(t.fee13))])])})),0),n("tbody",{staticClass:"grey lighten-2 font-weight-bold"},[n("tr",[n("td",{attrs:{colspan:"2"}},[e._v("合計")]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee1"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee2"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee3"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee4"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee5"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee6"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee7"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee8"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee9"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee10"))))]),n("td",[e._v(e._s(e._f("filtermoney")(e.filterTotal("fee11"))))]),n("td"),n("td")]),n("tr",[n("td",{attrs:{colspan:"3"}},[e._v("已繳款-總計: "+e._s(e._f("filtermoney")(e.filterpaid())))]),n("td",{attrs:{colspan:"12"}})]),n("tr",[n("td",{attrs:{colspan:"3"}},[e._v(" 未繳款-總計: "+e._s(e._f("filtermoney")(e.filterTotal("fee11")-e.filterpaid()))+" ")]),n("td",{attrs:{colspan:"12"}})])])]):n("div",{staticClass:"text-center"},[n("h1",[e._v("資料計算中...")])])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",{staticClass:"font-weight-bold"},[n("tr",[n("td",{staticClass:"text-center"},[e._v("病歷號")]),n("td",[e._v("姓名")]),n("td",[e._v("基本照護費")]),n("td",[e._v("NG")]),n("td",[e._v("FOLEY")]),n("td",[e._v("尿布費")]),n("td",[e._v("TR/呼吸器")]),n("td",[e._v("復健")]),n("td",[e._v("電費")]),n("td",[e._v("代支")]),n("td",[e._v("入住保証金")]),n("td",[e._v("退住保証金")]),n("td",[e._v("總額")]),n("td",[e._v("收款日期")]),n("td",[e._v("備註")])])])}],f=(n("4de4"),n("7db0"),n("caad"),n("d81d"),n("4e827"),n("b0c0"),n("a9e3"),n("b680"),n("e25e"),n("2532"),n("5319"),n("159b"),n("1146")),i=n.n(f),a={data:function(){return{cData:{},month:"",users:[],accountings:[],payments:[]}},filters:{filtermoney:function(e){if(void 0==e)return"";var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,t,n){var r=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))}},computed:{formData:function(){var e=this,t=this.users.map((function(t){return{p_code:t.p_code,name:t.name,fee1:e.filterFixFee(t.snkey,"基本照護費"),fee2:e.filterFixFee(t.snkey,"鼻胃管照護費"),fee3:e.filterFixFee(t.snkey,"尿管照護費"),fee4:e.filterFixFee(t.snkey,"尿布"),fee5:e.filterFixFee(t.snkey,"氣切"),fee6:e.filterFixFee(t.snkey,"復健"),fee7:e.filterFixFee(t.snkey,"特別約定事項-1"),fee8:e.filterOtherFee(t.snkey),fee9:e.filterFixFee(t.snkey,"入住保證金"),fee10:e.filterFixFee(t.snkey,"退住保證金"),fee11:e.filterPayment(t.snkey,"total_price"),fee12:e.filterPayment(t.snkey,"paid_date"),fee13:e.filterPayment(t.snkey,"note")}}));return t=t.sort((function(e,t){return e.fee12>t.fee12?1:-1})),t.sort((function(e,t){return e.fee12<t.fee12?1:-1}))}},created:function(){this.cData=JSON.parse(sessionStorage.getItem("cData"));var e=JSON.parse(this.$route.query.data);this.month=e.month,this.users=e.users.filter((function(e){return!!e.bed_name}))},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.axios.post("accounting/getall/"+this.$store.state.databaseName+"/accounting").then((function(t){e.accountings=t.data.filter((function(t){return t.date.includes(e.month)})),e.axios.post("general/getall/"+e.$store.state.databaseName+"/payment").then((function(t){e.payments=t.data.filter((function(t){return t.month.includes(e.month)}))}))}))},filterpaid:function(){var e=this.formData.filter((function(e){return""!=e.fee12&&void 0!=e.fee12}));return e.reduce((function(e,t){return parseInt(e)+parseInt(t.fee11)}),0)},exportExcel:function(){var e=this;this.$confirm("確認輸出Excel檔?").then((function(t){if(t){var n=i.a.utils.table_to_book(document.getElementById("outputtable")),r="".concat(e.month," 月份 照護費收費一覽表.xlsx");try{i.a.writeFile(n,r)}catch(s){}}}))},filterCheckFee:function(){this.users.filter((function(e){return"張秀正"==e.name}))},filterTotal:function(e){var t=0;return this.formData.forEach((function(n){void 0!==n[e]&&(t=parseInt(t)+parseInt(n[e]))})),t},filterAllTotal:function(){return this.payments.reduce((function(e,t){return parseInt(e)+parseInt(t.total_price)}),0)},filterFixFee:function(e,t){var n=this.accountings.filter((function(n){if(null!=n.name)return n.user_snkey==e&&n.name.includes(t)}));if(n.length>0)return n.reduce((function(e,t){return parseInt(e)+parseInt(t.price)*parseInt(t.quantity)}),0)},filterOtherFee:function(e){var t=["照護費","鼻胃管照護費","尿管照護費","尿布、小尿片(月)","氣切","復健","特別約定事項-1","院外復健","院內復健","復健 1 對 1"],n=this.accountings.filter((function(n){if(null!=n.name)return n.user_snkey==e&&!t.includes(n.name)}));if(n.length>0)return n.reduce((function(e,t){return parseInt(e)+parseInt(t.price)*parseInt(t.quantity)}),0)},filterPayment:function(e,t){var n=this.payments.find((function(t){return t.user_snkey==e}));if(void 0!=n)return"paid_date"==t&&"0000-00-00"==n[t]?"":n[t]}}},o=a,l=(n("a1d4"),n("2877")),c=n("6544"),d=n.n(c),_=n("99d9"),u=Object(l["a"])(o,r,s,!1,null,null,null);t["default"]=u.exports;d()(u,{VCardText:_["d"]})}}]);
//# sourceMappingURL=chunk-1ef932b8.4c5e8672.js.map