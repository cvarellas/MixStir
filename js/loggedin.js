$(document).ready(function(){
   
    var availableTags = [
      "44 Montgomery St., San Francisco, CA, 94104"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    
    
});