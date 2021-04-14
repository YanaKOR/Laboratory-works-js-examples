//меню с аккордеоном
$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    //предотвращает прокрутку контента назад
    $("body").toggleClass("locked");
});


 //спойлер
$(document).ready(function()
{
  $('.block__title').click(function(event){
    if ($('.block').hasClass("one")) {
      $('.block__title').not($(this)).removeClass('active');
       $('.block__text').not($(this).next()).slideUp(200);
    }
    $(this).toggleClass('active').next().slideToggle(200)
  })
})





//появление бургера
// при небольшой прокрутке страницы
// и исчезновение при прокрутке страницы в другую сторону

$(window).scroll(function(){
if($(window).scrollTop()>80){
$('.navBurger').show()
}else{
($(window).scrollTop()<80)
$('.navBurger').hide()
}
})



//нажимаем на мобильное меню
$('#utility_mobile_menu').click(function () {
   $(this).css({"display":"none"});
    $('#utility_mobile_menu_block').toggleClass("open");
    $('#Topbutton').css({"display":"none"});
    $("body").toggleClass("locked");

});

//нажимаем на ссылки и крестик
$("#utility_mobile_menu_block a , #menu_reset").click(function () {
     $('#utility_mobile_menu').css({"display":"block"});
    $("#utility_mobile_menu_block").toggleClass("open");
     $('#Topbutton').css({"display":"block"});
    $("body").toggleClass("locked");
});


