$(document).ready(function(){
    $('#list').hide();
    
    $('.form-control').click(     
        function(event){
            event.stopPropagation();
            $("#list").fadeIn("fast");
            $('.main').fadeOut(0.01);
            $('.map').fadeOut(0.01);
            $('.title').fadeOut(0.01);
            $('.shlist').fadeOut(0.01);
        }
    );
    
    $('#close').click( function(){
        $('#list').hide();
        $('.main').fadeIn(0.01);
        $('.map').fadeIn(0.01);
        $('.title').fadeIn(0.01);
        $('.shlist').fadeIn(0.01);
    });
    
    $('.one').click(function(){
       window.location.href = "wholefoods.html" 
    });

    
    
    
    $('.plus').click(function(){
        document.getElementById('slnum').innerHTML = '(9)';
        document.getElementById('slnum').style.color = "white";
        document.getElementById('sumup').innerHTML = '8'; document.getElementById('sumup').style.color = "#fe7a55";

    });
    
    $("#quantity").change(function(){  
       document.getElementById('sumup').innerHTML = '7'; document.getElementById('sumup').style.color = "#fe7a55";
       document.getElementById('totalprice').innerHTML = '$21.48-$36.63';
    });
    $("#quantityflour").change(function(){  
       document.getElementById('sumup').innerHTML = '8'; document.getElementById('sumup').style.color = "#fe7a55";
       document.getElementById('totalprice').innerHTML = '$22.28-$38.03';
        
    });
    
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

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
