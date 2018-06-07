// 引数のお話
trigger();

function trigger() {
    document.write("今から現在の時刻を取得します <br>");
    // Date()という、時間に関連したいろんな関数が入った箱を、dateという変数で宣言します
    // これを「継承」と呼びます
    // Date()には、日付を取得したり、時間を取得したりする関数がたくさん入っています
    var date = new Date();
    // Dateの中から、現在時刻を取得する関数、toLocaleTimeString()を呼び出します
    // 呼び出し方は、Dateを継承したdateの後ろに、.toLocaleTimeString()を付け加えます
    var nowTime = date.toLocaleTimeString();
    // nowTimeには現在時刻が入っています。setTime()関数に送り出します
    // 関数を呼び出すとき、送り出したい値や変数を入れ込むことができます
    // 今回はnowTimeをつっこみます。このnowTimeを「引数」と呼びます
    setTime(nowTime);
}

// setTime関数を定義します。
// 引数を受け取りますが、受け取る変数はなんでもいいです。nowTimeにする必要はありません。
// 今回は、aaaaaaaaaaという変数を定義し、ここにnowTimeの値をいれています
function setTime(aaaaaaaaaa) {
    document.write("現在時刻は " + aaaaaaaaaa + " です。");
}

