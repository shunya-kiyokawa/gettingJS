var moji = "繰り返し文です。" //varは変数の宣言。varをつけないとグローバル変数になる
// alert(moji);

/*
for (var i=1 ; i<=10 ; i++){
    document.write(moji+i+"<br>");
  }
*/

for (var i = 0; i < 20; i+=2){
  document.write(moji + i + "<br>");
  console.log("i="+i);
}