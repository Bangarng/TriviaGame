var right = 0;
var wrong = 0;

var BTMTrivia = {
  question1: {
    name: "question1",
    header: "What does BTM stand for?",
    correctAnswer: "Boloney Time Machine",
    answer1: "Bogus Tree Man",
    answer2: "Bitter Tequila Meade",
    answer3: "Big Troll Mountain",
  },
  question2: {
    name: "question2",
    header: "Who created BTM?",
    correctAnswer: "Dickie Stevens",
    answer1: "Stan Lee",
    answer2: "Ross Perot",
    answer3: "Oprah Winfrey",
  },
  question3: {
    name: "question3",
    header: "What color is Hero's costume and hair?",
    correctAnswer: "Blue and Yellow",
    answer1: "Purple and White",
    answer2: "Red and Green",
    answer3: "Pink and Magenta",
  },
  question4: {
    name: "question4",
    header: "What is the superhero society in BTM called?",
    correctAnswer: "H.A.V.V.O.C.",
    answer1: "P.L.A.Y.E.R.S.",
    answer2: "The Forgotten",
    answer3: "What society?",
  },
  question5: {
    name: "question5",
    header: "Whose weapon of choice is a grappling hook?",
    correctAnswer: "Sidekick",
    answer1: "Shadowtaken",
    answer2: "Hero",
    answer3: "Mothman",
  },
  question6: {
    name: "question6",
    header: "Who is the villain?",
    correctAnswer: "There isn't one yet",
    answer1: "Lizard Man",
    answer2: "Mr. Monolopy",
    answer3: "That Bouncer from Jerry Springer",
  },
  question7: {
    name: "question7",
    header: "What is the URL for Boloney Time Machine's website?",
    correctAnswer: "Boloneytimemachine.com",
    answer1: "Google.com",
    answer2: "Reddit.com",
    answer3: "Imgur.com",
  },
  question8: {
    name: "question8",
    header: "What kind of music is usally on BTM's 'The Funk' Page?",
    correctAnswer: "EDM",
    answer1: "Country",
    answer2: "Classical",
    answer3: "Rap",
  },
  question9: {
    name: "question9",
    header: "What is Hero and Sidekicks favorite food?",
    correctAnswer: "Hot Dogs",
    answer1: "Pizza",
    answer2: "Lasagna",
    answer3: "Spinach",
  },
  question10: {
    name: "question10",
    header: "What does Hero hate most?",
    correctAnswer: "Mustard",
    answer1: "Snakes",
    answer2: "Bicyclists",
    answer3: "Clowns",
  }
}

$(".startButton").click(function() {
    $(".startGame").css("display", "none");
    $(".game").css("display", "block");
    runTimer();
});

//Number Counter
var number = 100;
var intervalId;
function runTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#show-number").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    var result = confirm("Time Up! Let's see how you did.");
      if (result) {
       checkAnswers();
      }
  }
}
//  The stop function
function stop() {
  clearInterval(intervalId);
}
/*
  <div class="">
          <h1>What the heck?</h1>
          <label><input type="radio" class="radio-inline" value="">Neopolitan</label>
          <label><input type="radio"class="radio-inline" name="radios" value="">Mint Choco Chip</label>
          <label><input type="radio" class="radio-inline" name="radios" value="">Blue Moon</label>
            <label><input type="radio" class="radio-inline" name="radios" value="">All the Ice Cream</label>
  </div>
*/            
function TrivaQuestions(object) {
  for (var p in object) {
    if(object.hasOwnProperty(p)) {
      var formGroup = $("<div>");
      var questionH1 = $(formGroup).append("<h1 class='question'>" + object[p].header + "</h1>");
      $(".questionaire").append(questionH1);
      var answer1 = $("<label><input type='radio' name='" + object[p].name + "' data-answer= false >" + object[p].answer1 + "</label>");
      $(formGroup).append(answer1);
      var answer2 = $("<label><input type='radio' name='" + object[p].name + "' data-answer= false >" + object[p].answer2 + "</label>");
      $(formGroup).append(answer2);
      var correctAnswer = $("<label><input type='radio' name='" + object[p].name + "' data-answer= true >" + object[p].correctAnswer + "</label>");
      $(formGroup).append(correctAnswer);
      var answer3 = $("<label><input type='radio' name='" + object[p].name + "' data-answer= false >" + object[p].answer3 + "</label>");
      $(formGroup).append(answer3);
    }
  }
}

//Make sure only one button is clicked per group;
$(".submit").click(function() {
  stop();
  var result = confirm("All done? Let's see how you did.");
  if (result) {
    checkAnswers();
  }
});

/*HOW WE GONNA CHECK DEM ANSWERS?!?*/
function checkAnswers() {
  stop();
  $(".questionaire input[type=radio]:checked").each(function() {
      console.log(this);
      var answer = $(this).attr("data-answer");
      if(answer === 'true') {
        right++;
      } else {
        wrong++;
      }
  });
    var score = ((right / 10) * 100);
  //return false;*/
    //Logic to delete the item
    $(".questionaire, .submit, #show-number, .instructions").css("display", "none");
    $(".answerHead, .results").css("display", "block");
    $(".right").text(right);
    $(".wrong").text(wrong);
    $(".score").text("You got " + score + "%!");
}

//Load Triva Questions
TrivaQuestions(BTMTrivia);
//  Execute the run function.



  
