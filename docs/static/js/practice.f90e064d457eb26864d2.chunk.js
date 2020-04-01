(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{348:function(t,e,r){"use strict";let n={install:"\n$ npm install form-generator-iview --save\n# or\n$ yarn add form-generator-iview\n",import:'\nimport "form-generator-iview/src/style/index.less";\nimport FormGenerator from "form-generator-iview";\n\nVue.use(FormGenerator);\n',installIView:"\n$ npm install iview --save\n# or\n$ npm add iview\n",importIView:'\nimport iView from "iview";\nimport "iview/dist/styles/iview.css";\n\nVue.use(iView);\n'};const i=[{label:"姓名",type:"Input",model:"name"},{label:"出生日期",type:"DatePicker",subtype:"datetimerange",model:"birthday"},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"Screct"}]}],a={title:"用户信息",labelWidth:60,labelPosition:"right"},o={name:"",gender:"",birthday:""};n.demo='\n<template>\n    <FormGenerator\n        :fields="code.introduce.data.fields"\n        :model="code.introduce.data.model"\n        :options="code.introduce.data.options"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            fields: '+JSON.stringify(i)+",\n            model: "+JSON.stringify(o)+",\n            options: "+JSON.stringify(a)+"\n        };\n    }\n};\n<script>\n",n.data={fields:i,model:o,options:a},e.a={introduce:n}},349:function(t,e,r){var n=r(380);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(16).default)("1f132baa",n,!0,{})},378:function(t,e,r){t.exports=r.p+"static/img/example1.bf3660e.jpg"},379:function(t,e,r){"use strict";var n=r(349);r.n(n).a},380:function(t,e,r){(t.exports=r(15)(!1)).push([t.i,"\np {\n    text-indent: 30px;\n}\n",""])},471:function(t,e,r){"use strict";r.r(e);var n=r(335),i=r(336),a=r(348),o={components:{iArticle:n.a,inAnchor:i.a},data:()=>({code:a.a})},l=(r(379),r(0)),s=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("思考与实践")]),t._v(" "),n("p",[t._v("\n            FormGeneratorIView 作为"),n("a",{attrs:{href:"https://json-drived-configurable-platform.github.io/cp",target:"_blank"}},[t._v("CP - JSON Drived Configurable Platform")]),t._v("的一部分。\n            主要是为了解决在配置系统中大量的表单需求。这一点受到了"),n("a",{attrs:{target:"_blank",href:"https://github.com/mozilla-services/react-jsonschema-form"}},[t._v("react-jsonschema-form")]),t._v("以及"),n("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("amis配置工具")]),t._v("的启发。\n        ")]),t._v(" "),n("inAnchor",{attrs:{title:"一个常见的场景",h2:""}}),t._v(" "),n("p",[t._v("\n            如果一个平台中，有着大量的表单需求。直接通过组件拼装完成开发任务需要大量的人力和时间，后期表单项的频繁变更也增加了维护成本，而这些工作里面大多都是枯燥的重复工作。\n        ")]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{width:"100%",src:r(378),alt:"大量表单的示例"}}),t._v(" "),n("strong",[t._v("大量表单中台的示例（多个产品线，每个产品线对应多个页面）")])]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n            通过表单渲染工具，将所有配置维护在JSON中，可以一定程度上解决这些问题。\n        ")]),t._v(" "),n("p",[t._v("\n            其最大的优点是，不论前端还是后端同学，都可以通过编码来控制JSON配置，大大减少了表单的开发工作量。\n        ")]),t._v(" "),n("inAnchor",{attrs:{title:"类似的场景",h2:""}}),t._v(" "),n("p",[n("ul",[n("li",[n("strong",[t._v("同时支持几十个页面的数据查询报表:")]),t._v("在数据平台中有这大量的类似上图的场景，需要同时支持多个甚至几十个页面，且他们的结构通常比较相似；")]),t._v(" "),n("li",[n("strong",[t._v("可编辑的表格:")]),t._v("在一个表格中对数据直接进行修改，且不同列的编辑形式不同，要支持输入、数值、日期、下来、选择等编辑形式；")])])]),t._v(" "),n("inAnchor",{attrs:{title:"编码、JSON配置、可视化配置",h2:""}}),t._v(" "),n("p",[t._v("iView通过组件化的方式，更关注与编码层面。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("amis配置工具")]),t._v("，通过可视化配置，更关注于提供一站式解决方案。")]),t._v(" "),n("p",[n("strong",[t._v("对于有着大量的表单的中台需求:")])]),t._v(" "),n("p",[t._v("如果直接通过组件拼装需要开发几十个页面，维护几十个页面的代码。")]),t._v(" "),n("p",[t._v("如果用可视化工具来配置，需要配置几十个页面，维护几十个页面的配置。")]),t._v(" "),n("p",[t._v("FormGenerator介于两者之间，让你在不丢失编码灵活性的同时，可以通过配置提高代码复用度，提升开发效率。")]),t._v(" "),n("inAnchor",{attrs:{title:"一些比较有意思的实现",h2:""}}),t._v(" "),n("p",[t._v("\n            目录"),n("strong",[t._v("Example")]),t._v("中，有一些具体的实现。展示了如何使用FormGeneratorIView高效解决一些具体场景的需求:\n        ")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/group-form"}},[n("strong",[t._v("分组表单:")])]),t._v("通过配置分组，展示了FormGenerator所支持的所有组件。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/editable-table"}},[n("strong",[t._v("Editable Table:")])]),t._v("可编辑的表格，可以支持快速编辑表格中的内容。实例展示了如何使用"),n("code",[t._v("FieldGenerator")]),t._v("来动态生成表格中的各种表单控件。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/CURD-example/simple"}},[n("strong",[t._v("CURD:")])]),t._v("使用FieldGenerator结合iView Table组件配置出增删改查的列表中的操作按钮，使用FormGenerator配置出增加和编辑弹框。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/CURD-example/inline-edit"}},[n("strong",[t._v("CURD-列表编辑:")])]),t._v("更复杂的列表编辑展示。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/searchable-chart"}},[n("strong",[t._v("Searchable Data Report:")])]),t._v("可以查询的数据报表在很多数据平台中会常常遇到。所使用的的DataVis组件中就使用到了FormGenerator。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/Audit-example/detail"}},[n("strong",[t._v("审核详情页:")])]),t._v("通过配置来解决大量重复的表单项的联动校验难题。")],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/two-related-form"}},[n("strong",[t._v("两表单联动:")])]),t._v("通过配置两个表单，来实现多表单联动。")],1)]),t._v(" "),n("p",[t._v("上面的例子，是自己对于这些具体的场景进行抽象，并将其封装成可复用的组件模板的尝试。可能并不是特别好的实现，但其展示了可配置模板的基本思想，同样的场景，仅有一套代码。")]),t._v(" "),n("blockquote",[n("a",{attrs:{href:"https://uxdesign.cc/form-design-for-complex-applications-d8a1d025eba6"}},[t._v("Form Design for Complex Applications")]),t._v("\n            这篇文章简述了上面这些实例适合的场景。\n        ")]),t._v(" "),n("blockquote",[t._v("\n            如果你对表单设计比较感兴趣，阅读"),n("a",{attrs:{href:"https://uxdesign.cc/design-better-forms-96fadca0f49c"}},[t._v("Design Better Forms")]),t._v("这篇文章，可以帮助你配置出更友好的表单。\n        ")]),t._v(" "),n("inAnchor",{attrs:{title:"模板配置平台",h2:""}}),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/BingBlog/cp",target:"_blank"}},[t._v("CP - Configurable Platform")]),t._v("是一个基于模板的配置平台。FormGeneratorIView是其中的一个工具。\n            除了包含表单渲染工具、可视化渲染工具、可配置的脚手架之外，还会提供了很多可直接使用的模板。\n            另外，还将搭建一个平台，让用户可以上传自己封装后的模板，供社区使用（类似于echarts的gallery）。\n        ")])],1)])},[],!1,null,null,null).exports;e.default=s}}]);