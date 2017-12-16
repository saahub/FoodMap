
$(document).ready(function() {
  $('#all').hide();
  $("#splash").fadeIn(1000).fadeOut(5000, showMe);

  function showMe(){
    $('#all').show();
  }

  var container = $('#beerContainer');

/*al cambiar el menu debe ejecutarse esta funcion*/
  $('#drinkMenu').on('change',function(){

    /*guardo el valor de la opcion escogida en menu en variable*/
    var beers = $('#drinkMenu').val();
    if (beers === 'Blonde'){
      container.html('<div class="row">'+
      '<div class="col s12 m4 l4">'+
        '<div class="card">'+
          '<div class="card-image">'+
           '<img src="assests/img/1-157-300x275.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Blondy</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/beer-blondy.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Blonde</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/descarga.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">blonde</a>'+
            '</div>'+
          '</div>'+
        '</div><!-- cierre col 4 -->'+
        '</div><!-- cierre blonde -->');
    };
    if (beers === 'Black'){
      container.html('<div class="row black-beer">'+
        '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/11.jpeg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Black</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/sabana-oscura2-300x275.png">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Black</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/beer-bock.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">black</a>'+
            '</div>'+
          '</div>'+
        '</div><!-- cierre col 4 -->'+
        '</div><!-- cierre black-beer -->');
    };
    if (beers === 'Amber'){
      container.html('<div class="row Amber-Beer">'+
        '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/ambarbeer1.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Amber</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/ambarbeer2.jpg">'+
            '</div>'+
            '<div class="card-action">'+
              '<a href="#">Amber</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
          '<div class="col s12 m4 l4">'+
          '<div class="card">'+
            '<div class="card-image">'+
              '<img src="assests/img/ambarbeer3.jpg">'+
            '</div>'+
          '<div class="card-action">'+
              '<a href="#">Amber</a>'+
            '</div>'+
          '</div>'+
        '</div><!-- cierre col 4 -->'+
        '</div><!-- cierre Amber-beer -->');
     };
    })
  });

/*

  $('#btn').click(function(){
    $('#modal').modal();



  $(document).ready(function() {    
 
    //select all the a tag with name equal to modal  
    $('a[name=modal]').click(function(e) {  
        //Cancel the link behavior  
        e.preventDefault();  
        //Get the A tag  
        var id = $(this).attr('href');  
     
        //Get the screen height and width  
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  
     
        //Set height and width to mask to fill up the whole screen  
        $('#mask').css({'width':maskWidth,'height':maskHeight});  
         
        //transition effect      
        $('#mask').fadeIn(1000);      
        $('#mask').fadeTo("slow",0.8);    
     
        //Get the window height and width  
        var winH = $(window).height();  
        var winW = $(window).width();  
               
        //Set the popup window to center  
        $(id).css('top',  winH/2-$(id).height()/2);  
        $(id).css('left', winW/2-$(id).width()/2);  
     
        //transition effect  
        $(id).fadeIn(2000);  
     
    });  
     
    //if close button is clicked  
    $('.window .close').click(function (e) {  
        //Cancel the link behavior  
        e.preventDefault();  
        $('#mask, .window').hide();  
    });      
     
    //if mask is clicked  
    $('#mask').click(function () {  
        $(this).hide();  
        $('.window').hide();  
    });          
     
});  */
