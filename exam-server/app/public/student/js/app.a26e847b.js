(function(t){function e(e){for(var a,i,o=e[0],u=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://unpkg.com/stu_sys@1.0.8/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"088c":function(t,e,n){},"0bb4":function(t,e,n){"use strict";var a=n("cd8c"),r=n.n(a);r.a},"0d2a":function(t,e,n){"use strict";var a=n("088c"),r=n.n(a);r.a},2697:function(t,e,n){"use strict";var a=n("6584"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("8bbf"),r=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"app",components:{}},u=o,l=(n("034f"),n("2877")),c=Object(l["a"])(u,s,i,!1,null,null,null),m=c.exports,d=(n("b059"),n("0fae"),n("5f72")),p=n.n(d),f=(n("7f7f"),n("6389")),h=n.n(f),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[t._v("网站考试系统（学生端）")]),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",{staticClass:"form-box"},[n("el-form",{ref:"validateForm",staticClass:"demo-ruleForm",attrs:{model:t.validateForm}},[n("el-form-item",{attrs:{prop:"stuNum",rules:[{required:!0,message:"学号不能为空"},{type:"number",message:"学号必须为数字值"}]}},[n("el-input",{attrs:{type:"stuNum",autocomplete:"off",placeholder:"学号"},model:{value:t.validateForm.stuNum,callback:function(e){t.$set(t.validateForm,"stuNum",t._n(e))},expression:"validateForm.stuNum"}})],1),n("el-form-item",{attrs:{prop:"password",rules:[{required:!0,message:"请输入密码"}]}},[n("el-input",{attrs:{type:"password",autocomplete:"off","show-password":"",placeholder:"密码"},model:{value:t.validateForm.password,callback:function(e){t.$set(t.validateForm,"password",e)},expression:"validateForm.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("validateForm")}}},[t._v("登陆")]),n("el-button",{on:{click:function(e){return t.resetForm("validateForm")}}},[t._v("重置")])],1)],1)],1)]),n("el-footer",[t._v("Copyright © 2019 - 2020 网站工程学院. All Rights Reserved.")])],1)},g=[];n("6b54"),n("4917"),n("3b2b");function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=new Date;a.setTime(a.getTime()+60*n*60*1e3),document.cookie=t+"="+escape(e)+";expires="+a.toGMTString()}function _(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null}var w={name:"login",data:function(){return{loading:!1,validateForm:{stuNum:152031000541,password:"1609Azs!"}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message({showClose:!0,message:"请输入账号或密码",type:"warning"}),!1;e.loading=!0,e.$http.post("/student/login",{student_id:e.validateForm.stuNum.toString(),student_pwd:e.validateForm.password}).then(function(t){e.loading=!1,1==t.code?(b("student_token",t.token,3),e.$router.push("/")):e.$alert("用户名或密码有误！","提示",{confirmButtonText:"重新输入"})},function(t){e.loading=!1,e.$message({showClose:!0,message:"".concat(t,"，请重试"),type:"error"})})})},resetForm:function(t){this.$refs[t].resetFields()}}},x=w,y=(n("0d2a"),Object(l["a"])(x,v,g,!1,null,"651acf0c",null)),q=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticClass:"header",attrs:{height:"40"}},[n("el-row",[n("el-col",{attrs:{span:18}},[t._v("八维研修学院")]),n("el-col",{staticClass:"username",attrs:{span:6}},[t._v("姓名："+t._s(t.username))])],1)],1),n("el-header",{staticClass:"sub-header"},[n("el-row",{staticClass:"subject"},[n("el-col",{staticClass:"subject-name",attrs:{span:12}},[t._v("第"+t._s(t.qindex+1)+"题："+t._s(t.a.title))]),n("el-col",{staticClass:"layout-set",attrs:{span:6}},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.layoutConfig(8,16)}}},[t._v("1:2")]),n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.layoutConfig(12,12)}}},[t._v("1:1")]),n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.layoutConfig(16,8)}}},[t._v("2:1")])],1),n("el-col",{staticClass:"left-time",attrs:{span:6}},[t._v("剩余时间："+t._s(t.leftTime))])],1)],1),n("el-main",[n("el-row",{staticClass:"hp100 qa-wrap"},[n("el-col",{staticClass:"hp100 q-r",attrs:{span:t.layoutLeft}},[n("question",{attrs:{q:t.q}})],1),n("el-col",{staticClass:"hp100",attrs:{span:t.layoutRight}},[n("answer",{attrs:{a:t.a},on:{answer:t.saveAnswer}})],1)],1)],1),n("el-footer",[n("el-row",[n("el-col",{attrs:{span:2}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("el-button",{staticClass:"el-dropdown-link",attrs:{size:"small"}},[t._v("题目列表")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.qlist,function(e,a){return n("el-dropdown-item",{key:a},[n("span",{staticClass:"qlist-item",on:{click:function(e){t.qindex=a}}},[t._v(t._s(e.exam_name)+"："+t._s(e.questions_stem.slice(0,8))+"...")])])}),1)],1)],1),n("el-col",{attrs:{span:4,push:2}},[n("el-button",{attrs:{size:"small"},on:{click:t.prev}},[t._v("上一题")]),n("el-button",{attrs:{size:"small"},on:{click:t.next}},[t._v("下一题")])],1),n("el-col",{attrs:{span:2,push:16}},[n("el-button",{attrs:{size:"small",type:"primary",disabled:t.cantSubmit},on:{click:t.submitAnswer}},[t._v("提交")])],1)],1)],1)],1)},C=[],j=n("768b"),$=(n("96cf"),n("3b8d")),F=n("795b"),O=n.n(F),T=n("e814"),S=n.n(T),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-wrapper hp100"},[n("el-row",{staticClass:"answer-bar"},[n("el-col",{attrs:{span:20}},[t._v("答题框：")]),n("el-col",{attrs:{span:4}},[n("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.languageChange},model:{value:t.codetype,callback:function(e){t.codetype=e},expression:"codetype"}},t._l(t.codetypelist,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})}),1)],1)],1),n("el-row",{staticClass:"answer-box"},[n("el-col",{staticClass:"hp100"},[n("textarea",{ref:"textarea",attrs:{name:"",id:"",cols:"30",rows:"10"}})])],1)],1)},N=[],R=n("56b3"),z=n.n(R),M=(n("f9d4"),n("d69f"),n("a7be"),n("7a7a"),{name:"answer",props:{a:{type:Object,default:function(){return{}}}},data:function(){return{editor:null,codetypelist:[{value:"javascript",label:"JavaScript"},{value:"html",label:"HTML",disabled:!1}],codetype:"JavaScript"}},watch:{a:function(t){this.editor.setValue(t.student_answer||"")}},methods:{codeChange:function(t){this.$emit("answer",[t,this.a.questions_id])},languageChange:function(t){this.editor.setOption("mode",t)}},mounted:function(){var t=this,e=this.editor=z.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"javascript",lineWrapping:!0,theme:"monokai",smartIndent:!0});e.on("change",function(e){t.$emit("answer",[e.getValue(),t.a.questions_id])}),e.focus(),e.setSize("100%","100%")}}),A=M,D=(n("0bb4"),Object(l["a"])(A,E,N,!1,null,"4ed915f8",null)),L=D.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-wrapper"},[n("el-tabs",{staticClass:"subject-content",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"题目描述",name:"first"}},[n("div",{ref:"qcontent",staticClass:"qcontent"})]),n("el-tab-pane",{attrs:{label:"其他",name:"second"}},[n("el-popover",{attrs:{placement:"right",trigger:"click"}},[n("div",{attrs:{slot:"reference"},slot:"reference"},[n("img",{staticClass:"qimg",attrs:{src:t.imgurl,alt:""}})]),n("img",{attrs:{src:t.imgurl,alt:""}})])],1),n("el-tab-pane",{attrs:{label:"评论",name:"third"}},[t._v("角色管理")])],1)],1)},B=[],V=(n("a481"),n("5d44")),J=n.n(V),H={name:"question",data:function(){return{activeName:"first",md:null,imgurl:"http://img1.juimg.com/170707/355792-1FFF0502258.jpg"}},props:{q:{type:Object,default:function(){return{questions_stem:""}}}},methods:{handleClick:function(t,e){}},watch:{q:function(t,e){var n=/!\[alt\]\((.*)\)/g;n.exec(t.questions_stem)&&(console.log(n.exec(t.questions_stem)),this.imgurl=n.exec(t.questions_stem)[1],t.questions_stem=t.questions_stem.replace(n,"## 请在 “其他“ 中查看图片。 \n \n"));var a="# "+t.questions_type_text+" \n \n \n"+t.questions_stem;this.$refs.qcontent.innerHTML=this.md.render(a)}},mounted:function(){this.md=J()({html:!0,linkify:!0,typographer:!0})}},I=H,G=(n("2697"),Object(l["a"])(I,P,B,!1,null,"4a1aa63a",null)),U=G.exports,W={name:"index",data:function(){return{layoutLeft:8,layoutRight:16,qlist:[],qindex:0,username:"无信息",alist:[],exam_exam_id:null,starttime:1553151e6,leftTime:(new Date).toLocaleTimeString(),endtime:15531511e5,cantSubmit:!1}},computed:{q:function(){return this.qlist[this.qindex]||{}},a:function(){return this.alist[this.qindex]||{}}},components:{answer:L,question:U},methods:{countDown:function(t,e){var n=this,a=(new Date(e),new Date(t),S()((e-t)/1e3));if(a<=0)return this.leftTime="考试时间已到，请提交答案。",void this.submitFunc();Math.floor(a/86400);var r=a%86400,s=Math.floor(r/3600);r%=3600;var i=Math.floor(r/60),o=r%60;this.leftTime="".concat(s," 时 ").concat(i," 分 ").concat(o," 秒");var u=setTimeout(function(){t+=1e3,n.countDown(1*t,1*e),clearTimeout(u)},1e3)},layoutConfig:function(t,e){this.layoutLeft=t,this.layoutRight=e},prev:function(){this.qindex-=1,this.qindex<0&&(this.qindex=this.qlist.length-1)},next:function(){this.qindex+=1,this.qindex>=this.qlist.length&&(this.qindex=0)},unfinished:function(){var t=this;return new O.a(function(e,n){var a=t.alist.filter(function(t){return!t.student_answer&&""==t.student_answer.trim()});a.length>0?t.$confirm("还有".concat(a.length,"道题未作答，确定交卷吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e("ok")}).catch(function(){e("no")}):e("ok")})},submitFunc:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={exam_exam_id:this.exam_exam_id,questions:this.alist,start_time:1*this.starttime,end_time:1*this.endtime},this.cantSubmit=!0,t.prev=2,t.next=5,this.$http.post("/exam/student",e);case 5:n=t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),this.$message({showClose:!0,message:"something bad happened, please try again.",type:"error"}),this.cantSubmit=!1;case 12:a=this,this.$alert(n.msg,"提示",{confirmButtonText:"确定",callback:function(t){a.cantSubmit=!0}});case 14:case"end":return t.stop()}},t,this,[[2,8]])}));function e(){return t.apply(this,arguments)}return e}(),submitAnswer:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.unfinished();case 2:if(e=t.sent,"no"!==e){t.next=5;break}return t.abrupt("return");case 5:this.submitFunc();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),saveAnswer:function(t){this.alist=this.alist.map(function(e){return e.questions_id==t[1]&&(e.student_answer=t[0]),e})},handleErr:function(t){var e=this;return t&&O.a.prototype.isPrototypeOf(t)?t.then(function(){return[null].concat(Array.prototype.slice.call(arguments))}).catch(function(t){return e.$message({message:"Sorry, Internal Server Error",type:"error"}),[t,null]}):new O.a(function(t,e){e(new Error("requires promises as the param"))}).catch(function(t){return[t,null]})}},mounted:function(){var t=Object($["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,s,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/student/info");case 2:if(e=t.sent,1!=e.code){t.next=24;break}return this.username=e.data.student_name,this.exam_exam_id=e.data.exam_exam_id,n=e.data.start_time||this.starttime,a=e.data.end_time||this.endtime,this.countDown(1*n,1*a),t.next=11,this.handleErr(this.$http.get("/exam/unstart/".concat(e.data.exam_exam_id)));case 11:if(r=t.sent,s=Object(j["a"])(r,2),i=s[0],o=s[1],!i){t.next=17;break}return t.abrupt("return");case 17:if(1!==o.code){t.next=21;break}return this.qlist=o.data.questions,this.alist=o.data.questions,t.abrupt("return");case 21:this.$message({showClose:!0,message:"".concat(o.msg,"，请重试"),type:"error"}),t.next=25;break;case 24:this.$message({showClose:!0,message:"".concat(e.msg,"，请重试"),type:"error"});case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},K=W,Q=(n("a928"),Object(l["a"])(K,k,C,!1,null,"6f18cd09",null)),X=Q.exports,Y=[{path:"/",name:"index",component:X},{path:"/login",name:"login",component:q}],Z=Y;r.a.use(h.a);var tt={mode:"hash",routes:Z},et=new h.a(tt);et.beforeEach(function(t,e,n){"login"===t.name||_("student_token")?n():n("/login")});var nt=et,at=n("bc3a"),rt=n.n(at),st=rt.a.create({timeout:8e3,headers:{"content-type":"application/json"}});st.interceptors.request.use(function(t){return _("student_token")&&(t.headers["Authorization"]=_("student_token")),t},function(t){return O.a.reject(t)}),st.interceptors.response.use(function(t){return t.data},function(t){return O.a.reject(t)});var it={install:function(t){Object.defineProperty(t.prototype,"$http",{value:st})}};r.a.use(p.a),r.a.use(it),r.a.config.productionTip=!1,r.a.config.devtools=!1,console.log(Object({NODE_ENV:"production",BASE_URL:"https://unpkg.com/stu_sys@1.0.8/"})),new r.a({render:function(t){return t(m)},router:nt}).$mount("#app")},"5d44":function(t,e){t.exports=markdownit},"5f72":function(t,e){t.exports=ELEMENT},6201:function(t,e,n){},6389:function(t,e){t.exports=VueRouter},"64a9":function(t,e,n){},6584:function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},a928:function(t,e,n){"use strict";var a=n("6201"),r=n.n(a);r.a},b059:function(t,e,n){},cd8c:function(t,e,n){}});
//# sourceMappingURL=app.a26e847b.js.map