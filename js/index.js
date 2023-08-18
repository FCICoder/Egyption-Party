// J query assignment Mahmoud Mohamed Ahmed 

window.onload = function(){
  Counter("25 august 2023 00:00:00"); //calling the counter function 
}



$("#openNav").click(function(){ 
    $(".leftNav").animate({ width:'250px'},100) //make the width of the leftnav 250px 
})

$(".Xbtn").click(function(){
    $(".leftNav").animate({ width:'0px'},100)  //make the width of the leftnav 0px 

})


$("#leftNav a").click(function(e){
    
    var IDattr= $(e.target).attr("href");   //getting the href attribute from the clicked element 
    var distance = $(IDattr).offset().top;  //getting the dositance from the top using offset.top
    $("html , body").animate({scrollTop:distance},2000); //animate the scrolltop based on the distance of the element
    
})

$('#slider .flag').click(function(e){
    $(e.target).next().slideToggle(500); // make a toggler on the flage clicked to switch  between slide up an down 
    $('.S_content').not($(e.target).next()).slideUp(500); //make all the cards sliding up except the clicked one 
});



/*counter*/

  function Counter(getDate) {
  
        let appointment = new Date(getDate);
        appointment = (appointment.getTime()/1000);

    let present = new Date();
    present = (present.getTime()/1000);

    restOfTime = (appointment- present);
        
   let days = Math.floor( restOfTime / (24*60*60));
   let hours = Math.floor((restOfTime - (days * (24*60*60))) / 3600);
   let mins = Math.floor((restOfTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((restOfTime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  Counter(getDate); }, 1000);
  }






  var maxLength = 100;

  $('textarea').keydown(function(e) {
   let val = $(e.target).val().trim(); //without spacing
    var length = val.length;
    var AmountLeft = maxLength-length;
    if(AmountLeft<=0)
              {
                   $("#contain").text("your available character finished");
                  
              }
          else{       
          $("#contain").text(AmountLeft);
          }
  });
  


