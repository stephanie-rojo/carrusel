$(document).ready(function(){

  var imgItems = $('.slider li').length;//numero de slider//
  var imgPos = 1;

//agregando advance//
  for(i = 1; i <= imgItems; i++){
    $('.advance').append('<li><i class="fa fa-circle"></i></li>');
  }

  $('.slider li').hide();//ocultando todos los sliders//
  $('.slider li:first').show();//mostrando el primer slider//
  $('.advance li:first').css({'color' : '#00008B'});//dando estilo al primer items del advance//

  //ejecutando todas las funciones//
  $('.advance li').click(advance);
  $('.right').click(nextSlider);
  $('.left').click(prevSlider);

  //funciones//

  function advance(){
    var advancePos = $(this).index() +1;//posicion de la pagina selecionada//

    $('.slider li').hide();//ocultamos todos los slides//
    $('.slider li:nth-child('+ advancePos +')').fadeIn();//mostramos el slider seleccionado//

    //dandole estilo al advance selccionado//
    $('.advance li').css({'color':'#858585'});
    $(this).css({'color':'#00008B'})

    imgPos = advancePos;

  }

  function nextSlider(){
    if (imgPos >= imgItems){imgPos =1;}
    else {
      imgPos++;}

        $('.advance li').css({'color':'#858585'});
        $('.advance li:nth-child(' + imgPos +')').css({'color':'#00008B'})


    $('.slider li').hide();//ocultamos todos los slides//
    $('.slider li:nth-child('+ imgPos +')').fadeIn();//mostramos el slider seleccionado//
  }

  function prevSlider(){
    if (imgPos <= 1){imgPos = imgItems;}
    else {
      imgPos--;}

        $('.advance li').css({'color':'#858585'});
        $('.advance li:nth-child(' + imgPos +')').css({'color':'#00008B'})


    $('.slider li').hide();//ocultamos todos los slides//
    $('.slider li:nth-child('+ imgPos +')').fadeIn();//mostramos el slider seleccionado//
  }

});
