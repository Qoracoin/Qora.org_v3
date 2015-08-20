    $.ajax({
        url:'http://coinmarketcap-nexuist.rhcloud.com/api/qora/price',
        complete: function (response) {
            $('#output').html("1 QORA = " + JSON.parse(response.responseText).usd + " USD");
        }
    });


function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("bereich2", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top + 575} , "slow" );
}

$("#thebutton").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll(this.id);           
});