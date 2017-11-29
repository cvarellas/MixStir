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
    
    $('#close').click( function(){
        $('#list').hide();
        $('.des').fadeIn(0.01);
        $('.filter').fadeIn(0.01);
        $('.market').fadeIn(0.01);
    });
    
    $('.one').click(function(){
       window.location.href = "wholefoods.html"
    });


    $('.plus').click(function(){
<<<<<<< HEAD
        document.getElementById('slnum').innerHTML = '(6)';
=======
        document.getElementById('slnum').innerHTML = '(7)';
>>>>>>> master
        document.getElementById('slnum').style.color = "white"
    });
    
var availableTags = [
      "apple", "pumpkin", "basil", "banana", "cinnamon", "apple(recipe)", "egg", "egg tart", "french toast", "egg benedict", "muffin", "craneberry", "spinach", "turkey", "Thanksgiving dinner"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    
    $("#tags").keyup(function(){
    if($(this).val().length>0){
        $("#list").hide();
    }
    else
    {
         $("#list").show();
    }
});

    $('.input-group-btn').click(function(){
       window.location.href = "marketspace.html" 
    });
    
  } );




