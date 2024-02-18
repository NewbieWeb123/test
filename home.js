$(document).ready(function(){


    
    var originalColor = $('.item-infor').css('background-color');
    $('.rank-list__items li').each(function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var randomColor = 'rgba(' + r + ',' + g + ',' + b + ',0.5)';
        $(this).data('color', randomColor);
    });
    $('.rank-list__items li').hover(function(){
        var color = $(this).data('color');
        $(this).css('background-color', color);
    }, function(){
        $(this).css('background-color', originalColor);
    });
    

})