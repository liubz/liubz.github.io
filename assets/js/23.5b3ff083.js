(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{187:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" MongoDB")]),a._v(" "),t("h2",{attrs:{id:"mongodb-数据库创建、删除、表（集合），创建、删除数据的增、删、改、查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-数据库创建、删除、表（集合），创建、删除数据的增、删、改、查","aria-hidden":"true"}},[a._v("#")]),a._v(" MongoDB 数据库创建、删除、表（集合），创建、删除数据的增、删、改、查")]),a._v(" "),t("h3",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本使用")]),a._v(" "),t("ul",[t("li",[a._v("使用数据库、创建数据库： use learn(数据库名称)")]),a._v(" "),t("li",[a._v("查看数据库: show dbs")]),a._v(" "),t("li",[a._v('插入数据 db.user.insert("name": "测试", "age": "22"}) user: 集合名称')]),a._v(" "),t("li",[a._v("查看数据库的集合： show collections")]),a._v(" "),t("li",[a._v("删除集合 db.COLLECTION_NAME.drop(): db.use.drop()")]),a._v(" "),t("li",[a._v("删除数据库 db.dropDatabase()")])]),a._v(" "),t("h3",{attrs:{id:"查找数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 查找数据")]),a._v(" "),t("ul",[t("li",[a._v('db.user.find({"name": "测试"}) 找到名字叫测试的数据')]),a._v(" "),t("li",[a._v('db.user.find({"age": {$lt: 22} }) 查找age小于22的数据')]),a._v(" "),t("li",[a._v('db.user.find({"age": {$lte: 22} }) 查找age小于等于22的数据')]),a._v(" "),t("li",[a._v('db.user.find({"age": {$gt: 22} }) 查找age大于22的数据')]),a._v(" "),t("li",[a._v('db.user.find({"age": {$gte: 22} }) 查找age大于等于22的数据')]),a._v(" "),t("li",[a._v('db.user.find({"age": {$gte: 22, $lte: 60} }) 查找age大于等于22小于等于60的数据')]),a._v(" "),t("li",[a._v('db.user.find({"name": /mongo/}) 查找name包含mongo的数据')]),a._v(" "),t("li",[a._v('db.user.find({"name": /^mongo/}) 查找name以mongo开头的数据')]),a._v(" "),t("li",[a._v('db.user.find({"name": /mongo$/}) 查找name以mongo结尾的数据')]),a._v(" "),t("li",[a._v("db.user.find().sort({age: 1}) 升序查询")]),a._v(" "),t("li",[a._v("db.user.find().sort({age: -1}) 降序查询")]),a._v(" "),t("li",[a._v("db.user.find().limt(5) 查询前5条数据")]),a._v(" "),t("li",[a._v("db.user.find().skip(5) 查询前5条以后数据")]),a._v(" "),t("li",[a._v("db.user.count() 查询一共有几条数据")])]),a._v(" "),t("h3",{attrs:{id:"插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 插入数据")]),a._v(" "),t("ul",[t("li",[a._v("循环插入数据")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("for")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" i"),t("span",{attrs:{class:"token operator"}},[a._v("=")]),t("span",{attrs:{class:"token number"}},[a._v("0")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),t("span",{attrs:{class:"token operator"}},[a._v("<")]),t("span",{attrs:{class:"token number"}},[a._v("100")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),t("span",{attrs:{class:"token operator"}},[a._v("++")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{attrs:{class:"token operator"}},[a._v("...")]),a._v(" db"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("user"),t("span",{attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{attrs:{class:"token function"}},[a._v("insert")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{attrs:{class:"token string"}},[a._v('"name"')]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('"zhangsan"')]),a._v(" "),t("span",{attrs:{class:"token operator"}},[a._v("+")]),a._v(" i"),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v('"age"')]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" i"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{attrs:{class:"token operator"}},[a._v("...")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引","aria-hidden":"true"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),t("ul",[t("li",[a._v('创建索引 db.user.ensureIndex({"username": 1})')]),a._v(" "),t("li",[a._v('复合索引 db.user.ensureIndex({"username": 1, "age": -1})')]),a._v(" "),t("li",[a._v("获取当前集合的索引 db.user.getIndexes()")]),a._v(" "),t("li",[a._v('删除索引 db.user.dropIndex({"username": 1})')]),a._v(" "),t("li",[a._v('回去查询的执行时间 db.tablename.find().explain("executionStats")')])])])}],!1,null,null,null);s.default=e.exports}}]);