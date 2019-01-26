/*global $*/

$(function () {
    'use strict';
    
    $('.feat header .container .tabs ul li').click(function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('tab')).fadeIn(500).siblings('div').fadeOut();
        
    });
    
});