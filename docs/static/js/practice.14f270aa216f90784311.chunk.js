(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{332:function(t,e,n){var r=n(30),i=n(139),a=n(14)("species");t.exports=function(t,e){var n,l=r(t).constructor;return void 0===l||null==(n=r(l)[a])?e:i(n)}},334:function(t,e,n){"use strict";let r={install:"\n$ npm install form-generator-iview --save\n# or\n$ yarn add form-generator-iview\n",import:'\nimport "form-generator-iview/src/style/index.less";\nimport FormGenerator from "form-generator-iview";\n\nVue.use(FormGenerator);\n',installIView:"\n$ npm install iview --save\n# or\n$ npm add iview\n",importIView:'\nimport iView from "iview";\nimport "iview/dist/styles/iview.css";\n\nVue.use(iView);\n'};const i=[{label:"姓名",type:"Input",model:"name"},{label:"出生日期",type:"DatePicker",subtype:"datetimerange",model:"birthday"},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"Screct"}]}],a={title:"用户信息",labelWidth:60,labelPosition:"right"},l={name:"",gender:"",birthday:""};r.demo='\n<template>\n    <FormGenerator\n        :fields="code.introduce.data.fields"\n        :model="code.introduce.data.model"\n        :options="code.introduce.data.options"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            fields: '+JSON.stringify(i)+",\n            model: "+JSON.stringify(l)+",\n            options: "+JSON.stringify(a)+"\n        };\n    }\n};\n<script>\n",r.data={fields:i,model:l,options:a},e.a={introduce:r}},335:function(t,e,n){var r=n(357);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("1f132baa",r,!0,{})},346:function(t,e,n){"use strict";var r=n(140),i=n(30),a=n(332),l=n(136),o=n(87),s=n(137),v=n(88),c=n(43),p=Math.min,u=[].push,_=!c(function(){RegExp(4294967295,"y")});n(138)("split",2,function(t,e,n,c){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var a,l,o,s=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,_=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,c+"g");(a=v.call(h,i))&&!((l=h.lastIndex)>p&&(s.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&u.apply(s,a.slice(1)),o=a[0].length,p=l,s.length>=_));)h.lastIndex===a.index&&h.lastIndex++;return p===i.length?!o&&h.test("")||s.push(""):s.push(i.slice(p)),s.length>_?s.slice(0,_):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):h.call(String(i),n,r)},function(t,e){var r=c(h,t,this,e,h!==n);if(r.done)return r.value;var v=i(t),u=String(this),d=a(v,RegExp),g=v.unicode,f=(v.ignoreCase?"i":"")+(v.multiline?"m":"")+(v.unicode?"u":"")+(_?"y":"g"),m=new d(_?v:"^(?:"+v.source+")",f),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===u.length)return null===s(m,u)?[u]:[];for(var x=0,w=0,y=[];w<u.length;){m.lastIndex=_?w:0;var F,S=s(m,_?u:u.slice(w));if(null===S||(F=p(o(m.lastIndex+(_?0:w)),u.length))===x)w=l(u,w,g);else{if(y.push(u.slice(x,w)),y.length===b)return y;for(var I=1;I<=S.length-1;I++)if(y.push(S[I]),y.length===b)return y;w=x=F}}return y.push(u.slice(x)),y}]})},355:function(t,e,n){t.exports=n.p+"static/img/example1.bf3660e.jpg"},356:function(t,e,n){"use strict";var r=n(335);n.n(r).a},357:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\np {\n    text-indent: 30px;\n}\n",""])},408:function(t,e,n){"use strict";n.r(e);var r=n(322),i=n(323),a=n(334),l={components:{iArticle:r.a,inAnchor:i.a},data:()=>({code:a.a})},o=(n(356),n(0)),s=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i-article",[r("article",[r("h1",[t._v("思考与实践")]),t._v(" "),r("p",[t._v("\n            FormGeneratorIView 作为"),r("a",{attrs:{href:"https://github.com/BingBlog/cp",target:"_blank"}},[t._v("CP - Configurable Platform")]),t._v("的一部分。\n            主要是为了解决在配置系统中大量的表单需求。这一点受到了"),r("a",{attrs:{target:"_blank",href:"https://github.com/mozilla-services/react-jsonschema-form"}},[t._v("react-jsonschema-form")]),t._v("以及"),r("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("amis配置工具")]),t._v("的启发。\n        ")]),t._v(" "),r("inAnchor",{attrs:{title:"一个常见的场景",h2:""}}),t._v(" "),r("p",[t._v("\n            如果一个平台中，有着大量的表单需求。直接通过组件拼装完成开发任务需要大量的人力和时间，后期表单项的频繁变更也增加了维护成本，而这些工作里面大多都是枯燥的重复工作。\n        ")]),t._v(" "),r("p",{staticStyle:{"text-align":"center"}},[r("img",{attrs:{width:"100%",src:n(355),alt:"大量表单的示例"}}),t._v(" "),r("strong",[t._v("大量表单中台的示例（多个产品线，每个产品线对应多个页面）")])]),t._v(" "),r("p",[t._v("\n            通过表单渲染工具，将所有配置维护在JSON中，可以一定程度上解决这些问题。\n        ")]),t._v(" "),r("p",[t._v("\n            其最大的优点是，不论前端还是后端同学，都可以通过编码来控制JSON配置，大大减少了表单的开发工作量。\n        ")]),t._v(" "),r("inAnchor",{attrs:{title:"类似的场景",h2:""}}),t._v(" "),r("p",[r("ul",[r("li",[r("strong",[t._v("同时支持几十个页面的数据查询报表:")]),t._v("在数据平台中有这大量的类似上图的场景，需要同时支持多个甚至几十个页面，且他们的结构通常比较相似；")]),t._v(" "),r("li",[r("strong",[t._v("可编辑的表格:")]),t._v("在一个表格中对数据直接进行修改，且不同列的编辑形式不同，要支持输入、数值、日期、下来、选择等编辑形式；")])])]),t._v(" "),r("inAnchor",{attrs:{title:"编码、JSON配置、可视化配置",h2:""}}),t._v(" "),r("p",[t._v("iView通过组件化的方式，更关注与编码层面。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("amis配置工具")]),t._v("，通过可视化配置，更关注于提供一站式解决方案。")]),t._v(" "),r("p",[r("strong",[t._v("对于有着大量的表单的中台需求:")])]),t._v(" "),r("p",[t._v("如果直接通过组件拼装需要开发几十个页面，维护几十个页面的代码。")]),t._v(" "),r("p",[t._v("如果用可视化工具来配置，需要配置几十个页面，维护几十个页面的配置。")]),t._v(" "),r("p",[t._v("FormGenerator介于两者之间，让你在不丢失编码灵活性的同时，可以通过配置提高代码复用度，提升开发效率。")]),t._v(" "),r("inAnchor",{attrs:{title:"一些比较有意思的实现",h2:""}}),t._v(" "),r("p",[t._v("目录"),r("strong",[t._v("Example")]),t._v("中，有一些具体的实现。展示了如何使用FormGeneratorIView高效解决一些具体场景的需求。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[r("strong",[t._v("Step Form:")])]),t._v("分步表单是一个很常见的场景，用来完成一系列有先后顺序的表单编辑工作，而且可以保存每一步填写的内容。")]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[r("strong",[t._v("CURD:")])]),t._v("在一个增删改查的例子中使用FormGenerator。")]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[r("strong",[t._v("Editable Table:")])]),t._v("可编辑的表格，可以支持快速编辑表格中的内容。实例展示了如何使用"),r("code",[t._v("FieldGenerator")]),t._v("来动态生成表格中的各种表单控件。")]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[r("strong",[t._v("Searchable Data Report:")])]),t._v("可以查询的数据报表在很多数据平台中会常常遇到。")]),t._v(" "),r("li",[r("a",{attrs:{href:""}},[r("strong",[t._v("Search Inlined Chart:")])]),t._v("内置查询的图表库，这个例子还展示了如何使用"),r("code",[t._v("FormGenerator")]),t._v("来开发一个新的工具。")])]),t._v(" "),r("p",[t._v("上面的例子，是自己对于这些具体的场景进行抽象，并将其封装成可复用的组件模板的尝试。可能并不是特别好的实现，但其展示了可配置模板的基本思想，同样的场景，仅有一套代码。")]),t._v(" "),r("blockquote",[r("a",{attrs:{href:"https://uxdesign.cc/form-design-for-complex-applications-d8a1d025eba6"}},[t._v("Form Design for Complex Applications")]),t._v("\n            这篇文章简述了上面这些实例适合的场景。\n        ")]),t._v(" "),r("blockquote",[t._v("\n            如果你对表单设计比较感兴趣，阅读"),r("a",{attrs:{href:"https://uxdesign.cc/design-better-forms-96fadca0f49c"}},[t._v("Design Better Forms")]),t._v("这篇文章，可以帮助你配置出更友好的表单。\n        ")]),t._v(" "),r("inAnchor",{attrs:{title:"模板配置平台",h2:""}}),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/BingBlog/cp",target:"_blank"}},[t._v("CP - Configurable Platform")]),t._v("是一个基于模板的配置平台。FormGeneratorIView是其中的一个工具。\n            除了包含表单渲染工具、可视化渲染工具、可配置的脚手架之外，还会提供了很多可直接使用的模板。\n            另外，还将搭建一个平台，让用户可以上传自己封装后的模板，供社区使用（类似于echarts的gallery）。\n        ")])],1)])},[],!1,null,null,null).exports;e.default=s}}]);