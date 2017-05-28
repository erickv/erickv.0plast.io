$(document).ready(function(){

var apple = {};
var search = "bart";

$("input").change(searchGiphy)

function searchGiphy(){
$.ajax({
  url:'http://api.giphy.com/v1/gifs/search?q='+search+'&api_key=dc6zaTOxFJmzC ', 
  success: function(bigObject){
    console.log(bigObject.data.length);
    // console.log("specific image url", bigObject.data[0].images.original.url)
    
    bigObject.data.forEach(function(element, index){
      console.log("element: ", element.images.original.url, "index", index)
       var image = element.images.original.url;
    $("body").append("<img src="+image+">");
      
    });
   
  },
  
  error: function(){
    console.log("error getting data")
  }


})
}

});






