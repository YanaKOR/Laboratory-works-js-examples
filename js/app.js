
$(window).on('load', function() {

    AOS.init({
        duration: 600,
        once: true
    });

    AOS.refresh();
});




$(function () {
  const worksSlider = $('[data-slider="slick"]');


  /* Filter
    =====================*/
  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });



  /* Modal
    =====================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("#navToggle").css({"display":"none"});
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)",
      });
    }, 200);

    worksSlider.slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

     modalParent.find(".modal__dialog").css({
      transform: "scale(0)",
    }) ;

    setTimeout(function () {
      modalParent.removeClass("show");
      $("#navToggle").css({"display":"block"});
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "scale(0)",
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });



  

  /* Slider...
    =====================*/

  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
  });

});


// .slider_intro

$(document).ready(function(){
  $('.slider_intro').slick({
    arrows:false,//стрелки можно выключить false
    dots:true,
    infinite: true,
     adaptiveHeight:true,
    slidesToShow:1,
    slidesToScroll:1,
    mobileFirst:true,
    initialSlide:0,
    autoplay:true,
   variableWidth:true,
waitForAnimate: false,
 centerMode:true,
variableWidth:true, 
  });
});

//slider autor
 $(document).ready(function(){

$('.slider__wrap').slick({
   arrows:false,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   dots: false,
   centerMode: true,
   focusOnSelect: true,
   autoplay:true,

  });

}); 

//search в мобильной версии
var photo = document.getElementById('search_icon');

photo.onclick = function() {
    var block = document.getElementById('search_block');
    block.style.display = 'block';
    photo.style.display="none";
    document.body.style.overflow = 'hidden';
};

var cross= document.getElementById('search_reset');
cross.onclick=function(){
var block = document.getElementById('search_block');
block.style.display = 'none';
photo.style.display="block";
document.body.style.overflow = 'visible';
};



/*Прилипание блока шапки к верхнему краю*/
var h_hght = 33; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
 
    var elem = $('#masthead_brandbar');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
 
});


/*anchors*/

$("body").on("click", '[href*="#"]', function (e) {
   var fixed_offset = 20;
   $("html,body")
     .stop()
     .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
   e.preventDefault();
 });



 /*кнопка наверх*/

var btn = $('#Topbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function(){
      $("[data-tooltip]").mousemove(function (eventObject) {
          $data_tooltip = $(this).attr("data-tooltip");
          $("#tooltip").html($data_tooltip)
              .css({ 
                "top" : eventObject.pageY + 5,
                "left" : eventObject.pageX + 5
              })
              .show();
          }).mouseout(function () {
            $("#tooltip").hide()
              .html("")
              .css({
                  "top" : 0,
                  "left" : 0
              });
      });
});

 


/*меню блог desktop*/

var $btn = document.getElementById('show_blog');
var $nav = document.getElementById('nav_blog');
var $menu_close = document.getElementById('menu_close');

$btn.onclick = function() {
    $nav.style.opacity=(1),
        transform= scale(1);
      };
$menu_close.onclick = function() {
    $nav.style.opacity=(0),
        transform= scale(1);
      };

 var $btn_mobile = document.getElementById('show_blog_mobile');
var $nav_mobile = document.getElementById('nav_blog_mobile');
var $menu_close_mobile = document.getElementById('menu_close_mobile');
$btn_mobile.onclick= function() {
    $nav_mobile.style.display="block"
        
      };
$menu_close_mobile.onclick= function() {
    $nav_mobile.style.display="none"
        
      };

