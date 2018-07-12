$('.clear').click(function() {
    $.cookie('pin1', 'yes-clear', { expires: 1}); //1日の間、pin1というcookieを作り、yes-clearという値を保存
})

$('.not-clear').click(function () {
    $.cookie('pin1', 'no-clear', { expires: 1});
})

// ゴミまみれになるので、基本的には使い終わったら削除
$('.delete-clear').click(function () {
    $.removeCookie('pin1');
})