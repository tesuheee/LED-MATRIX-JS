$(function() {
    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('off')) {
            $led.removeClass('off');
            $led.addClass('on');
            $led.attr('src', 'image/leda.png');
        } else if ($led.hasClass('on')) {
            $led.removeClass('on');
            $led.addClass('off');
            $led.attr('src', 'image/ledb.png');
        }
    });
});