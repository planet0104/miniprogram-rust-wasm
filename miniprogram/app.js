// hello.js是测试HelloWorld的例子
// require("hello.js");
//app.js
App({
  onLaunch: function () {
    // demo.js是crate-type = ["cdylib"]
    var Rust = require("demo.js");

    Rust.then(function (demo) {
      let name = "Rust";
      let hash = demo.sha1(name);
      wx.showModal({
        title: 'SHA1测试',
        content: "\"" + name + "\"的SHA1是" + hash,
      });
    });
  }
})
