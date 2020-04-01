
$(document).ready(function(){
  var i=0;
  var a=$(".header_right li");
  var b=$(".rightmn");
  var i = 0;
  a.each(function(){
    $(this).mouseover({ asdfasdf : (a.length-1) - i}, function(eventData) {
      for (var i = 0; i < a.length; i++) {
        if ($(b[i]).show()) {
          $(b[i]).hide();
        }
      }
      $(b[eventData.data.asdfasdf]).show();
    });
    i++;
  });



  $("html").click(function(){
    for (var i = 0; i < a.length; i++) {
      if ($(b[i]).show()) {
        $(b[i]).hide();
      }
    }
  });


// gestione hamburger
  var condizionehamb1 = true;
  var condizionehamb2 = true;
  var condizionematonti = false;
  var hamb = $(".hamb");
  var bigmenu =$(".bigmenu");

  hamb.click(function(){
    if (condizionehamb1 && condizionehamb2) {
      condizionehamb1 = false;
      bigmenu.animate({
        opacity: 1
      }, 1500, function() {
        hamb.addClass("animhamb");
      });
    }else if((condizionehamb1 == false) && condizionehamb2){
      bigmenu.addClass("animbig");
      condizionehamb2 = false;
    }else if((condizionehamb1 == false) && (condizionehamb2 == false)){
      bigmenu.removeClass("animbig");
      condizionehamb1 = true;
      condizionematonti = true;
      $("#bt").css("z-index", "300");

    }else{
      bigmenu.animate({
        opacity: 0
      }, 1500, function() {
        hamb.removeClass("animhamb");
        condizionehamb2 = true;
      });
    }
  });
  $("#bt").click(function(){
      $(".bigmenu").hide();
      $(".dragomatonti").animate({
        opacity: 1,
        zIndex: 999,
      }
        ,2000,function(){
          $(".dragomatonti").css("opacity", 0);
          $(".dragomatonti").css("z-index", -1);
          $("#bt").css("z-index", "0");
          $(".bigmenu").show();

        }
      )
  });
  $(window).resize(function() {
    if ($(this).width() > 1000) {
        bigmenu.removeClass("animbig");
        hamb.removeClass("animhamb");
        bigmenu.css("opacity", "0");
        condizionehamb2 = true;
        condizionehamb1 = true;
    }
  });
});


const audio = document.getElementById("au");
let bt = document.getElementById("bt");
// console.log(audio);
bt.addEventListener("click", ()=>{
  audio.play();
});
const startPlaying = ()=>{
  audio.removeEventListener('playing', startPlaying);
  bt.classList.add("hide");
  audio.src = 'music/LAMADONNA.mp3';
  audio.play();
}
audio.addEventListener('playing', startPlaying);
audio.addEventListener('error', ()=>{
  // console.log("error");
});
