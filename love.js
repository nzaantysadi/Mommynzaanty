(function($) {
    $.fn.typewriter = function() {
        var el = $(this);
        el.css({whiteSpace: 'nowrap', overflow: 'hidden'});
        var str = el.html();
        el.html('');
        var i = 0;
        var interval = setInterval(function() {
            el.html(el.html() + str[i]);
            i++;
            if (i >= str.length) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed here (in milliseconds)
        return this;
    };
})(jQuery);

$(document).ready(function() {
    // Start typewriter effect when the page loads
    $('#code').html("Happy Mother's Day, my cutie mommy... You’ll be the best mommy to our kids (you’re already the best mommy to me).");
    $('#code').show().typewriter();
});