$("ul li a").css('text-decoration', 'none');


$("ul li a").on('click', function() {
    $(this).css('text-decoration', 'line-through');
});

$("ul li a").on('dblclick', function() {
    $(this).css('display', 'none');
})