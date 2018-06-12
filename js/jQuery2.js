var count = 1;
$('h1').html("jQueryでHTMLを書き換えたよ"); //h1タグの文字の書き換え

if (count == 1) {
    $('h1').html("止めてくれてありがとう！。ついでにscopeの中からさがしてcountを1以外にしてからf8を押してね！");
    // ここで止めてね。ブレークポイントを貼ってください。
    if (count == 1) {
        $('h1').html("<b>止めてっていったじゃないの</b>");
        for (var i = 0; i < 100; i++) {
            $("h1").append("<b>止めてっていったじゃないの</b>");
        }
    } else {
        $('h1').html("countの値は" + count + "です。 Javascriptのデバッガーが使いこなせてますね。");
    }
}
