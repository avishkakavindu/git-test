$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('i').hasClass('fa-pause')){
           $('#mycarousel').carousel('pause');   
           $('#carouselButton').children('i').removeClass('fa-pause');
           $('#carouselButton').children('i').addClass('fa-play');
        }else{
           $('#mycarousel').carousel('cycle');
           $('#carouselButton').children('i').removeClass('fa-play');
           $('#carouselButton').children('i').addClass('fa-pause');
        }
    });
});

$('#loginBtn').click(function(){
   $('#loginModal').modal('show');
});
$('#reserveBtn').click(function(){
   $('#reservationModal').modal('show');
});