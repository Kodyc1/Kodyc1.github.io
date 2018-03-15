
// change header to opaque when scrolling past 50
$(window).scroll(function(){
  if($(window).scrollTop() >= 50){
    $('header').css('background', '#1b1b1b');
    $('h1').css('color','#1affda');
  } else{
    $('header').css('background', 'rgba(27,27,27,0.8)');
    $('h1').css('color','white');
  }
});
