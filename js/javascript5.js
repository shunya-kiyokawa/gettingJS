var moji = "繰り返し文です。" //varは変数の宣言。varをつけないとグローバル変数になる
// alert(moji);

for (var i = 1; i <= 10; i++){
  if (i >= 10 ) {
    alert("10回目です");
  }
  document.write(moji + i + "<br>");
}
