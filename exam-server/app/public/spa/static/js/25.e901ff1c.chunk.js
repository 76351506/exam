(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{412:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],d=t[s];if(!1===(o=n?n.call(r,u,d,s):void 0)||void 0===o&&u!==d)return!1}return!0}},457:function(e,t,n){"use strict";n(213),n(463)},458:function(e,t,n){"use strict";var r=n(15),o=n(28),i=n(29),a=n(31),l=n(30),c=n(32),s=(n(457),n(459)),u=n(1),d=n.n(u),p=s.a.Content,f=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return d.a.createElement(p,{style:Object(r.a)({background:"#fff",padding:24,margin:0,marginBottom:20,borderRadius:10},this.props.style)},d.a.Children.map(this.props.children,function(e){return e}))}}]),t}(u.Component);t.a=f},459:function(e,t,n){"use strict";var r=n(1),o=n(0),i=n(37),a=n.n(i),l=n(407);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function g(e){var t=e.suffixCls;return function(e){return function(n){function o(){var n;return d(this,o),(n=h(this,y(o).apply(this,arguments))).renderComponent=function(o){var i=o.getPrefixCls,a=n.props.prefixCls,l=i(t,a);return r.createElement(e,u({prefixCls:l},n.props))},n}return m(o,r["Component"]),f(o,[{key:"render",value:function(){return r.createElement(l.a,null,this.renderComponent)}}]),o}()}}var x=function(e){function t(){return d(this,t),h(this,y(t).apply(this,arguments))}return m(t,r["Component"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,o=e.children,i=v(e,["prefixCls","className","children"]),l=a()(n,t);return r.createElement("div",u({className:l},i),o)}}]),t}(),C=function(e){function t(){var e;return d(this,t),(e=h(this,y(t).apply(this,arguments))).state={siders:[]},e}return m(t,r["Component"]),f(t,[{key:"getChildContext",value:function(){var e=this;return{siderHook:{addSider:function(t){e.setState(function(e){return{siders:[].concat(s(e.siders),[t])}})},removeSider:function(t){e.setState(function(e){return{siders:e.siders.filter(function(e){return e!==t})}})}}}}},{key:"render",value:function(){var e,t,n,o=this.props,i=o.prefixCls,l=o.className,c=o.children,s=o.hasSider,d=v(o,["prefixCls","className","children","hasSider"]),p=a()(l,i,(e={},t="".concat(i,"-has-sider"),n=s||this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.createElement("div",u({className:p},d),c)}}]),t}();C.childContextTypes={siderHook:o.object};var O=g({suffixCls:"layout"})(C),w=g({suffixCls:"layout-header"})(x),k=g({suffixCls:"layout-footer"})(x),_=g({suffixCls:"layout-content"})(x);O.Header=w,O.Footer=k,O.Content=_;var j=O,E=n(408),S=n(410),N=n(92),P=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==A(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var D={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},L=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),H=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=T(this,q(t).call(this,e))).responsiveHandler=function(e){n.setState({below:e.matches});var t=n.props.onBreakpoint;t&&t(e.matches),n.state.collapsed!==e.matches&&n.setCollapsed(e.matches,"responsive")},n.setCollapsed=function(e,t){"collapsed"in n.props||n.setState({collapsed:e});var r=n.props.onCollapse;r&&r(e,t)},n.toggle=function(){var e=!n.state.collapsed;n.setCollapsed(e,"clickTrigger")},n.belowShowChange=function(){n.setState({belowShow:!n.state.belowShow})},n.renderSider=function(e){var t,o=e.getPrefixCls,i=n.props,l=i.prefixCls,c=i.className,s=i.theme,u=i.collapsible,d=i.reverseArrow,p=i.trigger,f=i.style,h=i.width,y=i.collapsedWidth,m=z(i,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),b=o("layout-sider",l),v=Object(S.a)(m,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint"]),g=n.state.collapsed?y:h,x=P(g)?"".concat(g,"px"):String(g),C=0===parseFloat(String(y||0))?r.createElement("span",{onClick:n.toggle,className:"".concat(b,"-zero-width-trigger")},r.createElement(N.a,{type:"bars"})):null,O={expanded:d?r.createElement(N.a,{type:"right"}):r.createElement(N.a,{type:"left"}),collapsed:d?r.createElement(N.a,{type:"left"}):r.createElement(N.a,{type:"right"})}[n.state.collapsed?"collapsed":"expanded"],w=null!==p?C||r.createElement("div",{className:"".concat(b,"-trigger"),onClick:n.toggle,style:{width:x}},p||O):null,k=M({},f,{flex:"0 0 ".concat(x),maxWidth:x,minWidth:x,width:x}),_=a()(c,b,"".concat(b,"-").concat(s),(I(t={},"".concat(b,"-collapsed"),!!n.state.collapsed),I(t,"".concat(b,"-has-trigger"),u&&null!==p&&!C),I(t,"".concat(b,"-below"),!!n.state.below),I(t,"".concat(b,"-zero-width"),0===parseFloat(x)),t));return r.createElement("div",M({className:_},v,{style:k}),r.createElement("div",{className:"".concat(b,"-children")},n.props.children),u||n.state.below&&C?w:null)},n.uniqueId=L("ant-sider-"),"undefined"!==typeof window&&(o=window.matchMedia),o&&e.breakpoint&&e.breakpoint in D&&(n.mql=o("(max-width: ".concat(D[e.breakpoint],")"))),i="collapsed"in e?e.collapsed:e.defaultCollapsed,n.state={collapsed:i,below:!1},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r["Component"]),n=t,i=[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}],(o=[{key:"getChildContext",value:function(){return{siderCollapsed:this.state.collapsed,collapsedWidth:this.props.collapsedWidth}}},{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.context.siderHook&&this.context.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.context.siderHook&&this.context.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderSider)}}])&&R(n.prototype,o),i&&R(n,i),t}();H.__ANT_LAYOUT_SIDER=!0,H.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},H.childContextTypes={siderCollapsed:o.bool,collapsedWidth:o.oneOfType([o.number,o.string])},H.contextTypes={siderHook:o.object},Object(E.polyfill)(H);var W=H;j.Sider=W;t.a=j},463:function(e,t,n){var r=n(464);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(57)(r,o);r.locals&&(e.exports=r.locals)},464:function(e,t,n){(e.exports=n(56)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-layout {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  background: #f0f2f5;\n  /* fix firefox can't set height smaller than content on flex item */\n  min-height: 0;\n}\n.ant-layout,\n.ant-layout * {\n  box-sizing: border-box;\n}\n.ant-layout.ant-layout-has-sider {\n  flex-direction: row;\n}\n.ant-layout.ant-layout-has-sider > .ant-layout,\n.ant-layout.ant-layout-has-sider > .ant-layout-content {\n  overflow-x: hidden;\n}\n.ant-layout-header,\n.ant-layout-footer {\n  flex: 0 0 auto;\n}\n.ant-layout-header {\n  background: #001529;\n  padding: 0 50px;\n  height: 64px;\n  line-height: 64px;\n}\n.ant-layout-footer {\n  background: #f0f2f5;\n  padding: 24px 50px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n}\n.ant-layout-content {\n  flex: auto;\n  /* fix firefox can't set height smaller than content on flex item */\n  min-height: 0;\n}\n.ant-layout-sider {\n  transition: all 0.2s;\n  position: relative;\n  background: #001529;\n  /* fix firefox can't set width smaller than content on flex item */\n  min-width: 0;\n}\n.ant-layout-sider-children {\n  height: 100%;\n  padding-top: 0.1px;\n  margin-top: -0.1px;\n}\n.ant-layout-sider-has-trigger {\n  padding-bottom: 48px;\n}\n.ant-layout-sider-right {\n  order: 1;\n}\n.ant-layout-sider-trigger {\n  position: fixed;\n  text-align: center;\n  bottom: 0;\n  cursor: pointer;\n  height: 48px;\n  line-height: 48px;\n  color: #fff;\n  background: #002140;\n  z-index: 1;\n  transition: all 0.2s;\n}\n.ant-layout-sider-zero-width > * {\n  overflow: hidden;\n}\n.ant-layout-sider-zero-width-trigger {\n  position: absolute;\n  top: 64px;\n  right: -36px;\n  text-align: center;\n  width: 36px;\n  height: 42px;\n  line-height: 42px;\n  background: #001529;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 0 2px 2px 0;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.ant-layout-sider-zero-width-trigger:hover {\n  background: #192c3e;\n}\n.ant-layout-sider-light {\n  background: #fff;\n}\n.ant-layout-sider-light .ant-layout-sider-trigger {\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n}\n.ant-layout-sider-light .ant-layout-sider-zero-width-trigger {\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n}\n",""])},624:function(e,t,n){"use strict";var r=n(16),o=n.n(r),i=n(18),a=n.n(i),l=n(17),c=n.n(l),s=n(22),u=n.n(s),d=n(1),p=n.n(d),f=n(45),h=n.n(f),y=n(0),m=n.n(y),b=function(e){function t(){var e,n,r,i;o()(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return n=r=c()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.removeContainer=function(){r.container&&(h.a.unmountComponentAtNode(r.container),r.container.parentNode.removeChild(r.container),r.container=null)},r.renderComponent=function(e,t){var n=r.props,o=n.visible,i=n.getComponent,a=n.forceRender,l=n.getContainer,c=n.parent;(o||c._component||a)&&(r.container||(r.container=l()),h.a.unstable_renderSubtreeIntoContainer(c,i(e),r.container,function(){t&&t.call(this)}))},i=n,c()(r,i)}return u()(t,e),a()(t,[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent()}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer()}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}]),t}(p.a.Component);b.propTypes={autoMount:m.a.bool,autoDestroy:m.a.bool,visible:m.a.bool,forceRender:m.a.bool,parent:m.a.any,getComponent:m.a.func.isRequired,getContainer:m.a.func.isRequired,children:m.a.func.isRequired},b.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1},t.a=b},626:function(e,t,n){"use strict";function r(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}n.d(t,"a",function(){return r})},627:function(e,t,n){"use strict";var r=n(16),o=n.n(r),i=n(18),a=n.n(i),l=n(17),c=n.n(l),s=n(22),u=n.n(s),d=n(1),p=n.n(d),f=n(45),h=n.n(f),y=n(0),m=n.n(y),b=function(e){function t(){return o()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),a()(t,[{key:"componentDidMount",value:function(){this.createContainer()}},{key:"componentDidUpdate",value:function(e){var t=this.props.didUpdate;t&&t(e)}},{key:"componentWillUnmount",value:function(){this.removeContainer()}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate()}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container)}},{key:"render",value:function(){return this._container?h.a.createPortal(this.props.children,this._container):null}}]),t}(p.a.Component);b.propTypes={getContainer:m.a.func.isRequired,children:m.a.node.isRequired,didUpdate:m.a.func},t.a=b},818:function(e,t,n){var r=n(819);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(57)(r,o);r.locals&&(e.exports=r.locals)},819:function(e,t,n){(e.exports=n(56)(!1)).push([e.i,".role-list {\n  border-right: 1px solid #eee;\n  width: 300px;\n  list-style: none;\n}\n.role-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-right: 20px;\n}\n.role-list ul li {\n  list-style: none;\n  padding: 10px 20px;\n  margin: 0;\n  position: relative;\n  border-bottom: 1px solid #eee;\n  border-left: 5px solid #fff;\n  transition: all 0.2s;\n}\n.role-list ul li .tool {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  display: none;\n}\n.role-list ul li:hover {\n  background: #eee;\n}\n.role-list ul li:hover .tool {\n  display: block;\n}\n.role-list ul li.active {\n  background: #bccaff;\n  border-left: 5px solid #0139FD;\n}\n",""])},820:function(e,t,n){e.exports={addModal:"style_addModal__3cFe8",title:"style_title__1lNF4",input:"style_input__2LRrc",content:"style_content__2K7wo",tool:"style_tool__10Atq",roleList:"style_roleList__hEaWi",menuTree:"style_menuTree__13_Is",identityList:"style_identityList__dsBJE",item:"style_item__i86rk"}},880:function(e,t,n){"use strict";n.r(t);n(554);var r,o,i,a,l=n(444),c=(n(613),n(615)),s=(n(428),n(432)),u=n(28),d=n(29),p=n(31),f=n(30),h=n(32),y=n(15),m=(n(776),n(780)),b=n(1),v=n.n(b),g=n(37),x=n.n(g),C=n(75),O=function(e){var t,n;return n=t=function(t){function n(){return Object(u.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this,n=Object(y.a)({},this.props);return n.ref=function(e){t.props.wrappedComponentRef&&t.props.wrappedComponentRef(e),t.props.ref&&t.props.ref(e)},v.a.createElement(e,n)}}]),n}(b.Component),t.displayName="withRef(".concat(e.displayName||e.name||"Component",")"),n},w=n(149),k=n(458),_=(n(818),n(820)),j=n.n(_),E=m.a.TabPane,S=function(e){return Object(y.a)({},e.role,e.global)},N=Object(C.connect)(S)(r=O(r=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleOk=function(){console.log();var e=n.refs.roleInput.value;n.props.dispatch({type:"role/addRole",identity_text:e}).then(function(){console.log("\u6dfb\u52a0\u6210\u529f")}),n.setState({visible:!1})},n.handleCancel=function(e){console.log("\u53d6\u6d88"),n.setState({visible:!1})},n.type={CREATE:Symbol("create"),MODIFY:Symbol("modify")},n.state={type:n.type.CREATE,visible:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"create",value:function(){this.setState({type:this.type.CREATE,visible:!0})}},{key:"edit",value:function(){this.setState({type:this.type.MODIFY,visible:!0})}},{key:"render",value:function(){return v.a.createElement(c.a,{visible:this.state.visible,width:600,footer:[v.a.createElement(s.a,{size:"large",key:"save",type:"primary",onClick:this.handleOk},"\u786e\u5b9a"),v.a.createElement(s.a,{size:"large",key:"cancel",onClick:this.handleCancel},"\u53d6\u6d88")],bodyStyle:{padding:"24px 80px"}},v.a.createElement("div",{className:j.a.addModal},v.a.createElement("h2",{className:j.a.title},this.state.type===this.type.CREATE?"\u521b\u5efa\u65b0\u89d2\u8272":"\u4fee\u6539\u89d2\u8272\u540d\u79f0"),v.a.createElement("div",null,v.a.createElement("input",{type:"text",ref:"roleInput",className:j.a.input,placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0"}))))}}]),t}(b.Component))||r)||r,P=Object(C.connect)(S)(o=O(o=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleOk=function(){var e=n.refs.roleInput.value;n.props.dispatch({type:"role/addRole",identity_text:e}).then(function(){console.log("\u6dfb\u52a0\u6210\u529f")}),n.setState({visible:!1})},n.handleCancel=function(e){console.log("\u53d6\u6d88"),n.setState({visible:!1})},n.state={visible:!1,identity:{}},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"edit",value:function(e){console.log(e),this.setState({visible:!0,identity:e})}},{key:"render",value:function(){var e=this.state.identity.identity_text;return v.a.createElement(c.a,{visible:this.state.visible,width:600,footer:[v.a.createElement(s.a,{size:"large",key:"save",type:"primary",onClick:this.handleOk},"\u786e\u5b9a"),v.a.createElement(s.a,{size:"large",key:"cancel",onClick:this.handleCancel},"\u53d6\u6d88")],bodyStyle:{padding:"24px 80px"}},v.a.createElement("div",{className:j.a.addModal},v.a.createElement("h2",{className:j.a.title},"\u8bbe\u7f6e",e,"\u63a5\u53e3\u6743\u9650"),v.a.createElement("div",null)))}}]),t}(b.Component))||o)||o,A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleCreate=function(){n.addModal.create()},n.handleEdit=function(){n.addModal.edit()},n.handleChange=function(e){n.props.onChange(e)},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dataSource;return v.a.createElement("div",{className:"role-list"},v.a.createElement("ul",null,t.map(function(t,n){return v.a.createElement("li",{key:n,onClick:function(){return e.handleChange(t.identity_id)},className:x()({active:e.props.identity_id===t.identity_id})},v.a.createElement("div",null,v.a.createElement("h3",null,t.identity_text),v.a.createElement("p",null,t.identity_id)),v.a.createElement("div",{className:"tool"},v.a.createElement("a",{href:"javascript:;"},"\u5220\u9664")))}),v.a.createElement("li",null,v.a.createElement("a",{href:"javascript:;",onClick:this.handleCreate},"\u6dfb\u52a0\u89d2\u8272"))),v.a.createElement(N,{wrappedComponentRef:function(t){return e.addModal=t}}))}}]),t}(b.Component);A.defaultProps={dataSource:[],identity_id:""};var I=Object(C.connect)(S)(i=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){console.log(e.target),n.props.dispatch({type:"role/setIdentityView",view_authority_id:e.target.value,identity_id:n.props.identity_id})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"isAuthority",value:function(e){var t=this.props.viewFromIdentity,n=!1;return t.forEach(function(t){t.view_id===e&&(n=!0)}),n}},{key:"getViewAuthorityId",value:function(e){var t=this.props.view_authority,n="";return t.forEach(function(t){t.view_id===e&&(n=t.view_authority_id)}),n}},{key:"renderIdentityList",value:function(e){var t=this;return v.a.createElement("ul",{className:j.a.identityList},e.map(function(e,n){return v.a.createElement("li",{key:n,className:j.a.item},console.log(t.getViewAuthorityId(e.id),e.id,"iddddddddd"),v.a.createElement(l.a,{checked:t.isAuthority(e.id),value:t.getViewAuthorityId(e.id),onChange:t.handleChange},e.text))}))}},{key:"render",value:function(){var e=this,t=Object(w.b)();return v.a.createElement("div",null,t.map(function(t,n){return v.a.createElement("div",{className:j.a.menuTree,key:n},v.a.createElement("h4",{className:j.a.title},t.groupName),e.renderIdentityList(t.children))}))}}]),t}(b.Component))||i,M=function(e){var t=e.identity_id;return v.a.createElement(m.a,null,v.a.createElement(E,{tab:"\u89c6\u56fe\u6743\u9650",key:"1"},v.a.createElement(I,{identity_id:t})),v.a.createElement(E,{tab:"\u63a5\u53e3\u6743\u9650",key:"2"},"Content of tab 2"))},R=Object(C.connect)(S)(a=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleCreate=function(){n.addModal.create()},n.handleEdit=function(){n.addModal.edit()},n.handleEditAuthorityApiModal=function(e){n.editAuthorityApiModal.edit(e)},n.handleChangeIdentity=function(e){console.log(e),n.setState({identity_id:e},function(){n.props.dispatch({type:"role/getViewFromIdentity",identity_id:e})})},n.state={identity_id:""},console.log(n.props),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch({type:"role/fetch"}).then(function(){e.setState({identity_id:e.props.table.data[0].identity_id}),e.props.dispatch({type:"role/getViewFromIdentity",identity_id:e.state.identity_id})})}},{key:"addRole",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.table,n=this.state.identity_id;return v.a.createElement(k.a,null,v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:j.a.content},v.a.createElement(A,{dataSource:t.data,identity_id:n,onChange:this.handleChangeIdentity}),v.a.createElement("div",{className:j.a.tool},v.a.createElement(M,{identity_id:n})))),v.a.createElement(P,{wrappedComponentRef:function(t){return e.editAuthorityApiModal=t}}))}}]),t}(b.Component))||a;t.default=R}}]);
//# sourceMappingURL=25.e901ff1c.chunk.js.map