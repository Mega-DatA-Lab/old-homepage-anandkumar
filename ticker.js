     
        $(function() {
     
            var ticker = $("#ticker");
             ticker.children().filter("dt").each(function() {
           
            var dt = $(this),
            container = $("<div>");
            dt.next().appendTo(container);
            dt.prependTo(container);          
            container.appendTo(ticker);
             });
                 
        //hide the scrollbar
            ticker.css("overflow", "hidden");
         
            //animator function
            function animator(currentItem) {
             
    //work out new anim duration
    var distance = currentItem.height(),
    duration = (distance - Math.abs(parseInt(currentItem.css("marginTop")))) / 0.0125;
 
    //animate the first child of the ticker
    currentItem.animate({ marginTop: -distance }, duration, "linear", function() {
             
      //move current item to the bottom     
        currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
 
    //recurse
    animator(currentItem.parent().children(":first"));
    }); 
  };
         
  //start the ticker
  animator(ticker.children(":first"));
         
 //set mouseenter
ticker.mouseenter(function() {
           
  //stop current animation
  ticker.children().stop();
           
});
         
//set mouseleave
ticker.mouseleave(function() {
                   
  //resume animation
  animator(ticker.children(":first"));
});
         
});
        
    function fn_stopticker(){
            
           $("#ticker").children().remove();
            
        }

