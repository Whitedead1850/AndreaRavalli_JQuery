$("#field").keyup(function() {
    el = $(this);
    if (el.val().length >= 140) {
        el.val(el.val().substr(0, 140));
    } else {
        $("#charNum").text(140 - el.val().length);
    }
});