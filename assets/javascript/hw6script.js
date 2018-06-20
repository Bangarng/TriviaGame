 
// Initial array of movies
var funGifs = ["Will Ferrell", "Puppy Fail", "Doc Brown", "Harvey Birdman", "Ace Ventura", "Top Gear", "Deal With It", "Looney Tunes", "Scott Pilgrim", "Steven Universe", "Make it Rain", "Dolla Dolla Bills", "Venture Bros"];

//Capture gif search query from the data-attribute
function getGifName() {
  var gifName = $(this).attr("data-name");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  gifName + "&api_key=a0RZH95KmcDz4hE3E7ShdHoeV49nRNb8&limit=10";

  console.log("URL");
  console.log(queryURL);
  $("#gifs-appear-here").empty();
  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;
      console.log("Data");
      console.log(response.data);
      for (var i = 0; i < results.length; i++) {
        if(results[i].rating !== "r") {
          var gifDiv = $("<div class='gif'>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img class='gifImg'>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-active", results[i].images.fixed_height.url);
          personImage.attr("data-state", "still");

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").hide().append(gifDiv).fadeIn(300);
        }
      }
    });
}

function moveGif() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      console.log("Current State!");
      console.log(state);
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-active"));
        $(this).attr("data-state", "active");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
}

// Function for displaying movie data
function renderButtons() {
  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();
  // Looping through the array of movies
  for (var i = 0; i < funGifs.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button class='btn gifButtons'>");
    // Adding a class of movie to our button
    // Adding a data-attribute
    a.attr("data-name", funGifs[i]);
    // Providing the initial button text
    a.text(funGifs[i]);
    // Adding the button to the HTML
    if (i === funGifs.length - 1) {
      a.addClass("twirl");
    }
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-gif").on("click", function(event) {    
  // Preventing the buttons default behavior when clicked (which is submitting a form)
  event.preventDefault();
  // This line grabs the input from the textbox
  var gifs = $("#gif-input").val().trim();
  // Adding the movie from the textbox to our array
  funGifs.push(gifs);
  $("#gif-input").val("");
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Function for displaying the movie info
// We're adding a click event listener to all elements with the class "movie"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".gifButtons", getGifName);
$(document).on("click", ".gifImg", moveGif);

// Calling the renderButtons function to display the intial buttons
renderButtons();

/*******************************PARTICLE JS ********************************/
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
console.log('callback - particles.js config loaded');
});

