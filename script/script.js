$('#about').click(function() {
    $('#root').css('display', 'none');
    $('#aboutModel').css('display', 'flex');
    $('.closeBtn').click(function(){
        $('#root').css('display', 'flex');
        $('#aboutModel').css('display', 'none');
    })
});

$('#contacts').click(function() {
    $('#root').css('display', 'none');
    $('#contactModel').css('display', 'flex');
    $('.closeBtn').click(function(){
        $('#root').css('display', 'flex');
        $('#contactModel').css('display', 'none');
    })
});