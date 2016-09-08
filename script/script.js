$(function() {
    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('on')) {
            $led.toggleClass('on');
            $led.css('background', 'url("image/ledb.png")');
        } else {
            $led.toggleClass('on');
            $led.css('background', 'url("image/leda.png")');
        }
    });
});