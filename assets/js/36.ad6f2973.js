(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{529:function(s,n,a){"use strict";a.r(n);var e=a(57),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"flutter导航返回拦截-willpopscope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter导航返回拦截-willpopscope"}},[s._v("#")]),s._v(" Flutter导航返回拦截:WillPopScope")]),s._v(" "),a("h2",{attrs:{id:"_01-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-前言"}},[s._v("#")]),s._v(" &01.前言")]),s._v(" "),a("p",[s._v("为了避免用户误触返回按钮而导致APP退出，在很多APP中都拦截了用户点击返回键的按钮，\n然后进行一些防误触判断，比如当用户在某一个时间段内点击两次时，\n才会认为用户是要退出（而非误触）。")]),s._v(" "),a("h2",{attrs:{id:"_02-willpopscope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-willpopscope"}},[s._v("#")]),s._v(" &02.WillPopScope")]),s._v(" "),a("p",[s._v("Flutter中可以通过来实现返回按钮拦截，\n我们看看WillPopScope的默认构造函数：")]),s._v(" "),a("div",{staticClass:"language-flutter line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const WillPopScope({\n  ...\n  @required WillPopCallback onWillPop,\n  @required Widget child\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("onWillPop是一个回调函数，当用户点击返回按钮时被调用\n（包括导航返回按钮及Android物理返回按钮）。该回调需要返回一个Future对象，如果返回的Future最终值为false时，\n则当前路由不出栈(不会返回)；最终值为true时，当前路由出栈退出。我们需要提供这个回调来决定是否退出。")]),s._v(" "),a("h2",{attrs:{id:"_03-完整实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-完整实现"}},[s._v("#")]),s._v(" &03.完整实现")]),s._v(" "),a("div",{staticClass:"language-flutter line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import \'routes/widgets/list_page.dart\';\n\nimport \'package:english_words/english_words.dart\';\n\nvoid main() => runApp(MyApp7());\n\n// 功能性  组件介绍================================================================\nclass MyApp7 extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return new MaterialApp(\n      home: new Scaffold(\n        appBar: new AppBar(\n          title: new Text("功能性组件"),\n        ),\n        body: new DoubleClickBack(),\n      ),\n    );\n  }\n}\n\n//  双击    退出程序 示例 ===============\nclass DoubleClickBack extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return new DoubleClickBackState();\n  }\n}\n\nclass DoubleClickBackState extends State<DoubleClickBack> {\n  DateTime _lastPressedAt; //上次点击时间\n\n  @override\n  Widget build(BuildContext context) {\n    return new WillPopScope(\n        onWillPop: () async {\n          if (_lastPressedAt == null ||\n              DateTime.now().difference(_lastPressedAt) >\n                  Duration(seconds: 1)) {\n            //两次点击间隔超过1秒则重新计时\n            _lastPressedAt = DateTime.now();\n            Scaffold.of(context).showSnackBar(new SnackBar(\n              duration: new Duration(seconds: 1),\n              content: new Text("再次点击,退出程序"),\n              backgroundColor: Colors.blue,\n            ));\n            return false;\n          }\n          return true;\n        },\n        child: Container(\n          alignment: Alignment.center,\n          child: Text("1秒内连续按两次返回键退出"),\n        ));\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);