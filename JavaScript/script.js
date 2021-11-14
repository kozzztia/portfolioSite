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








  });