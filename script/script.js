$(function() {
    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('off')) {
            $led.toggleClass('off');
            $led.toggleClass('on');
            $led.attr('src', 'image/leda.png');
        } else if ($led.hasClass('on')) {
            $led.toggleClass('on');
            $led.toggleClass('off');
            $led.attr('src', 'image/ledb.png');
        }
    });
});