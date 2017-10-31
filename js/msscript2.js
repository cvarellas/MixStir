$(document).ready(function(){
    $('#list').hide();
    
    $('.form-control').click(     
        function(event){
            event.stopPropagation();
            $("#list").fadeIn("fast");
            $('.des').fadeOut(0.01);
            $('.filter').fadeOut(0.01);
            $('.market').fadeOut(0.01);
        }
    );
    
    $(document).click( function(){
        $('#list').hide();
        $('.des').fadeIn(0.01);
        $('.filter').fadeIn(0.01);
        $('.market').fadeIn(0.01);
    });
    
    $('.first').click(function(){
       window.location.href = "https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage" 
    });
    
    $('.second').click(function(){
       window.location.href = "https://stackoverflow.com/questions/503093/how-to-redirect-to-another-webpage" 
    });
    
    

})



