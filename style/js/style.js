$(document).ready(function() {

    $('#input-search').click(function() {
        if($('.tbl-search').hasClass('none')) { 
            $('.tbl-search').removeClass('none');
            $('.tbl-search').addClass('flex');
        } 
    })
    $(document).on('click', function(event) {
        if(!$(event.target).is('#input-search, .tbl-search *')) {
            if($('.tbl-search').hasClass('flex')) { 
                $('.tbl-search').removeClass('flex');
                $('.tbl-search').addClass('none');
            }
        } 
    });

})
