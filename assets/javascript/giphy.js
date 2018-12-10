// variable that is an array of all the names
// var topics=["boxer+puppies", "french+bulldog", "boston+terrier"];

$('button').on('click', function(){
    var x = $(this).data("search");
    
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=HOBDBMQIXHsowhmFkyGsUj34U9FjcyXp&limit=10";
    // console.log(query.URL);

    $.ajax({url:queryURL, method:"GET"})
    .done(function(response){
       
        for(var i=0;i<response.data.length;i++){
            // Under every gif, display its rating
            var animalDiv = $('<div>');
            var p = $('<p>').text("Rating: "+response.data[i].rating);
            var animalImage = $('<img>');
            animalImage.attr('src',response.data[i].images.downsized_still.url);
            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);
            $('#gifArea').prepend(animalDiv)
        }
       
    })
})


// 2. topics in the array and create buttons in your html
// append a button for each string in the array
// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// 5. Under every gif, display its rating
// Only once you get images displaying with button presses should you move on to the next step.
// 6. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.