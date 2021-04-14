$(document).ready(function(){
  $('#addtocart').on('click',function(){
    var buttonShoppingBag = $(this);
    var cart = $('#cart');
    var cartTotal = cart.attr('data-totalitems');
    var newCartTotal = parseInt(cartTotal) + 1;
    
    buttonShoppingBag.addClass('sendtocart');
    setTimeout(function(){
      buttonShoppingBag.removeClass('sendtocart');
      cart.addClass('shake').attr('data-totalitems', newCartTotal);
      setTimeout(function(){
        cart.removeClass('shake');
      },500)
    },1000)
  })
})