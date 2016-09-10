$(function() {
    $('.led').addClass('off');
    
    $('.led').click(function() {
        var $led = $(this);
        if ($led.hasClass('on')) {
            $led.toggleClass('on');
            $led.toggleClass('off');
        } else if ($led.hasClass('off')) {
            $led.toggleClass('on');
            $led.toggleClass('off');
        }
    });
});