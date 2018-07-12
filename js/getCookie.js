var cookievalue;
cookievalue = $.cookie('pin1');

// 削除されていたり、そもそも未登録の場合は、pin1にはundefinedが入っている
if (cookievalue == undefined) {
    $('h1').html("GetCookie.htmlを開き、cookieを設定してください");
} else {
    $('h1').html(cookievalue); //h1タグの文字の書き換え
}
