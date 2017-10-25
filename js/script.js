$(document).ready(function(){
    $('#list').hide();
    $('.form-control').click( function(event){
        event.stopPropagation();
        $("#list").fadeIn("fast");
        $('.des').fadeOut(0.01);
        $('.filter').fadeOut(0.01);
        });
    $(document).click( function(){

				$('#list').hide();
        $('.des').fadeIn(0.01);
        $('.filter').fadeIn(0.01);
});
    })


