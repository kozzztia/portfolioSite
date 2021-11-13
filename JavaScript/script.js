// $(document).ready(function(){
    let num = document.querySelector('.input');
    let monitor = document.querySelector('.monitor');
    let text = document.querySelector('.text');


  monitor.innerHTML= 'number ' + num.value;
  num.oninput = function(){
    monitor.innerHTML = 'number ' + this.value;
    if(num.value == 10){
      monitor.innerHTML = 'The end ';
    }
    text.style.fontSize = this.value*3 +'px';
  }







  // });