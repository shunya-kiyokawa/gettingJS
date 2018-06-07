// javascriptの関数の書き方はいくつかありますが、下記の書き方が主流です
// 順番等考えなくてよいので、とりあえずこの書き方を覚えて下さい
myfunc1();

function myfunc1() {
    document.write("myfunc1()がよばれました <br>");
}

// 下記のような書き方もあります。
// ただしこの場合、varによる関数宣言を先にやってから呼びださないと、そんなものは見つからないとエラーが出ます
// TypeError: myfunc2 is noat a function
var myfunc2 = function() {
    document.write("myfunc2がよばれました <br>");
};

myfunc2();

// ハイレベルな書き方。興味がある方は調べてください。今回はnewについてまではふれません。
// 同じくvarの宣言を先にやらないとエラーが出ます。
var myfunc3 = new Function();
    document.write("myfunc3がよばれました <br>");

myfunc3();

// 関数から関数も呼べます
myfunc4();

function myfunc4() {
    document.write("myfunc1()をmyfunc4()のならから呼び出します → ");
    myfunc1();
}