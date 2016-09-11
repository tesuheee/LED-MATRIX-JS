$(function() {
    $("<img>").attr("src", "image/led_on.png");

    $('.led').addClass('off');

    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('on')) {
            toggle($led);
        } else if ($led.hasClass('off')) {
            toggle($led);
        }
    });

    $('#reset').click(function() {
        $('.led').removeClass('on');
        $('.led').addClass('off');
        process();
    });

    $('#copy').click(function() {
        $('#pat').attr('contentEditable', true);
        document.getElementById('pat').focus();
        document.execCommand('selectAll',false,null);
        document.execCommand("copy");
        $('#pat').attr('contentEditable', false);
    });

    $('#reverse').click(function() {
        $('.led').toggleClass('on');
        $('.led').toggleClass('off');
        process();
    });

    function toggle($led) {
        $led.toggleClass('on');
        $led.toggleClass('off');
        process();
    }

    function process() {
        calc();
        dec2hex();
        print();
    }

    var pat = [0, 0, 0, 0, 0, 0, 0, 0];

    function calc() {
        var $led = $('.led');
        var num = 0;
        var array = [];
        for (var i = 0; i < 8; i++) {
            array[i] = [];
        }

        for (var i = 0; i < 8; i++) {
            pat[i] = 0;
        }

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                array[i][j] = $led[num];
                num++;
            }
        }

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

    function dec2hex() {
        for (var i = 0; i < 8; i++) {
            pat[i] = "0x" + pat[i].toString(16);
        }
    }

    function print() {
        var text = "{ "
        for (var i = 0; i < 8; i++) {
            text = text + pat[i];
            if (i !== 7) text = text + ", ";
        }
        text = text + " };"
        $('#pat').text(text);
    }
});