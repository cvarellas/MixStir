$(document).ready(function(){
    $('#list').hide();
    $('.dim').hide();
    
    $('.form-control').click(     
        function(event){
     event.stopPropagation();
     $("#list").fadeIn("fast");
     $('.main').fadeOut(0.01);
     $('.map').fadeOut(0.01);
     $('.title').fadeOut(0.01);
     $('.shlist').fadeOut(0.01);
     $('.result').fadeOut(0.01);
   $('.announce').fadeOut(0.01);

        }
    );
    
    $('#close').click( function(){
    $('#list').hide();
    $('.main').fadeIn(0.01);
    $('.map').fadeIn(0.01);
    $('.title').fadeIn(0.01);
    $('.shlist').fadeIn(0.01);
    $('.result').fadeIn(0.01);
    $('.announce').fadeIn(0.01);
    });
    

    
    $('.one').click(function(){
       window.location.href = "wholefoods.html" 
    });

    $('.ellipsis').click(function(){
    $('.collapsible').css({"transform": "TranslateY(0)"});
    $('.dim').fadeIn(0.01);
        $('.dim').css({"z-index": "0"});
        $('.navbar').css({"z-index": "-1"});
        $('.collapsible').css({"z-index": "1"});
    });
    
    $('.cancel').click(function(){
        $('.collapsible').css({"transform": "TranslateY(100%)"});
        $('.dim').fadeOut(0);
    });
    
    
    $('.plus').click(function(){
        

    });
    $("#quantityflour").change(function(){  
       document.getElementById('sumup').innerHTML = '12'; document.getElementById('sumup').style.color = "#fe7a55";
       document.getElementById('totalprice').innerHTML = '$42.61-$62.43';
        
       document.getElementById('slnum').innerHTML = '(12)';
       document.getElementById('slnum').style.color = "white";
    });
    $("#quantitytea").change(function(){  
       document.getElementById('sumup').innerHTML = '13'; document.getElementById('sumup').style.color = "#fe7a55";
       document.getElementById('totalprice').innerHTML = '$52.1-$72.42';
        
       document.getElementById('slnum').innerHTML = '(13)';
       document.getElementById('slnum').style.color = "white";
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
    
    
        
  } );
