$(window).scroll(function() {
  
	if ($(window).scrollTop() > 10 ){
    
    $('.bg').addClass('show');
    $('#menu').fadeTo('fast', 0.9).css({position: 'fixed', top: '30px'});
    $('header').css({background: "white"});
    
  } else {
    
    $('.bg').removeClass('show');
    $('#menu').fadeTo('slow', 0.9).css({position: 'fixed', top: '0px'});
    $('header').css({background:'none' });
 	}; 

});//https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js


document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 15;
  const y = event.pageY - 15;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});//커서

$(document).ready(function(){
  $('button').mouseover(function() {
    $('#cursor').css({transform: "scale(3)", 'mix-blend-mode': "overlay"});
  });

  $('button').mouseleave(function() {
    $('#cursor').css({transform: "scale(1)",'mix-blend-mode': "normal"});
  });//커서

  $(".2_popup").click(function() {
    $(".popup").show();
  });
  $(".close").click(function() {
    $(".popup").hide(); 
  });
  $(".popup").click(function() {
    $(".popup").hide(); 
  });
  //.view모달팝업

});

var Hello = ["\n%c 잘 부탁드립니다!" + " %c https://github.com/amnos135/ \n", "color: white; font-size: 14px; background: #000; padding:5px 0;", "background: #fff; padding:3px 0; margin-bottom: 4px;"];
window.console.log.apply(console, Hello);// 콘솔













