# miniprogram-rust-wasm

Rust+Webassembly开发微信小程序

<b>在iPhone7 和 小米8 Android 8.1.0成功运行</b>

启动代码在miniprogram/app.js中

hello.js和hello.wasm 是 <a href="https://github.com/koute/stdweb/tree/master/examples/minimal">https://github.com/koute/stdweb/tree/master/examples/minimal</a>编译得到的

demo.js和demo.wasm 是 <a href="https://github.com/koute/stdweb/tree/master/examples/hasher">https://github.com/koute/stdweb/tree/master/examples/hasher</a>编译得到的

编译: cargo web build --target=wasm32-unknown-unknown --release

hello.js和demo.js在代码中经过改动适配微信小程序

stdweb的安装教程在这里<a href="https://crates.io/crates/stdweb">https://crates.io/crates/stdweb</a>