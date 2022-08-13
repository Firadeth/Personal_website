$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});