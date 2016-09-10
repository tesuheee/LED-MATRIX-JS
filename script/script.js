$(function() {
    var pat = [0, 0, 0, 0, 0, 0, 0, 0];

    $('.led').addClass('off');

    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('on')) {
            $led.toggleClass('on');
            $led.toggleClass('off');
            calc();
            print();
        } else if ($led.hasClass('off')) {
            $led.toggleClass('on');
            $led.toggleClass('off');
            calc();
            print();
        }
    });

    function calc() {
        // 初期化
        for (var i = 0; i < pat.length; i++) {
            pat[i] = 0;
        }
        // 2次元配列にマトリクスの結果を代入
        var $led = $('.led');
        var num = 0;
        var array = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                array[i][j] = $led[num];
                num++;
            }
        }
        // 配列patに各行の計算結果を代入
        var k = 128;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++, k /= 2) {
                if ($(array[i][j]).hasClass('off')) {
                    pat[i] += k;
                }
            }
            k = 128;
        }
    }

    function print() {
        $('#pat').text("int pat[8] = { " + pat[0] + ", " + pat[1] + ", " + pat[2] + ", " + pat[3] + ", " + pat[4] + ", " + pat[5] + ", " + pat[6] + ", " + pat[7] + " };")
    }
});