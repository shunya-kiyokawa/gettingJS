main();

function main() {
    change_moji();
    move_moji();
}

function change_moji() {
    $('.change_red').click(function () {
        $('.moji').css('color', 'red');
    })

    $('.change_blue').click(function () {
        $('.moji').css('color', 'blue');
    })

    $('.font_big').click(function () {
        $('.moji').css('fontSize', '25px');
    })

    $('.font_small').click(function () {
        $('.moji').css('fontSize', '12px');
    })
}

function move_moji() {
    $('.moji').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('move_moji()', 1600); //アニメーションを繰り返す間隔
}

