$(document).ready(function(){


  // let btnMain = document.querySelectorAll('.btnForMain');
  // let contentMain = document.querySelector('.contentWrapper')

  // contentMain.style.right = "0";


  // btnMain[0].addEventListener('click', function () {
  //   contentMain.style.right = "0";
  // });
  // btnMain[1].addEventListener('click', function () {
  //   contentMain.style.right = "99.1%";
  // });
  // btnMain[2].addEventListener('click', function () {
  //   contentMain.style.right = "198.1%";
  // });

// main btn
  $('.btn__biography').click(function () {
    $('.btn').css('background','#c5c6c7');
      $(this).css('background','#66fcf1');
      $('.contentWrapper').animate({'right' : '0'}),1000;
  })
  $('.btn__work').click(function () {
    $('.btn').css('background','#c5c6c7');
      $(this).css('background','#66fcf1');
      $('.contentWrapper').animate({'right' : '100%'}),1000;
  })
  $('.btn__information').click(function () {
    $('.btn').css('background','#c5c6c7');
      $(this).css('background','#66fcf1');
      $('.contentWrapper').animate({'right' : '200%'}),1000;
  })
// window btn
$('.windowWrapper').slideUp(100);
  $('.btn__contacts').click(function(){
    $('.windowWrapper').slideToggle(100);
     })
$('.closeWindowBtn').click(function(){
  $('.windowWrapper').slideUp(100);
})
// burgerBtn
$('.btn__main').click(function(){
  $('.header').css({'height' : '250px'});
  $('.btn__main').text('Закрити меню');

})





  });