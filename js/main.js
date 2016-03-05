    $.ajax({
        url:'https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_QORA&depth=1',
        complete: function (response) {
            response = JSON.parse(response.responseText);
            $('#output').html("1 QORA = " + Math.round(((response.asks[0][0]*100000000 + response.bids[0][0])*100000000)/2)  + " Satoshi");
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
