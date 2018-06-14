var BTMTrivia = {
  question1: {
    header: "What does BTM stand for?",
    correctAnswer: "Boloney Time Machine",
    answer1: "Bogus Tree Man",
    answer2: "Bitter Tequila Meade",
    answer3: "Big Troll Mountain",
  },
  question2: {
    header: "Who created BTM?",
    correctAnswer: "Dickie Stevens",
    answer1: "Stan Lee",
    answer2: "Ross Perot",
    answer3: "Oprah Winfrey",
  },
  question3: {
    header: "What color is Hero's costume and hair?",
    correctAnswer: "Blue and Yellow",
    answer1: "purple and white",
    answer2: "red and green",
    answer3: "pink and magenta",
  },
  question4: {
    header: "What is the superhero society in BTM?",
    correctAnswer: "H.A.V.V.O.C.",
    answer1: "P.L.A.Y.E.R.S.",
    answer2: "The Forgotten",
    answer3: "What society?",
  },
  question5: {
    header: "Whose weapon of choice is a grappling hook?",
    correctAnswer: "Sidekick",
    answer1: "Shadowtaken",
    answer2: "Hero",
    answer3: "Mothman",
  },
  question6: {
    header: "Who is the villain?",
    correctAnswer: "There isn't one yet",
    answer1: "Lizard Man",
    answer2: "Mr. Monolopy",
    answer3: "That bouncer from Jerry Springer",
  },
  question7: {
    header: "What is the URL for Boloney Time Machines website?",
    correctAnswer: "boloneytimemachine.com",
    answer1: "google.com",
    answer2: "reddit.com",
    answer3: "imgur.com",
  },
  question8: {
    header: "What kind of music is usally on BTM's 'The Funk' Page?",
    correctAnswer: "EDM",
    answer1: "Country",
    answer2: "Classical",
    answer3: "Rap",
  },
  question9: {
    header: "What is Hero and Sidekicks favorite food?",
    correctAnswer: "Hot Dogs",
    answer1: "Pizza",
    answer2: "Lasagna",
    answer3: "Spinach",
  },
  question10: {
    header: "What does Hero hate most?",
    correctAnswer: "Mustard",
    answer1: "Snakes",
    answer2: "Bicyclists",
    answer3: "Clowns",
  }
}
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
    alert("Time Up!");
    checkAnswers();
  }
}
//  The stop function
function stop() {
  clearInterval(intervalId);
}

function TrivaQuestions(object) {
  for (var p in object) {
    if(object.hasOwnProperty(p)) {
      console.log(object[p].header);
      console.log(object[p].answer1);
      var questionH1 = $("<h1 class='question'>" + object[p].header + "</h1>");
      $(".questionaire").append(questionH1);
      var answer1 = $("<div><input type='radio' value=" + object[p].answer1 + ">" + object[p].answer1 + "</div>");
      $(".questionaire").append(answer1);
      var answer2 = $("<div><input type='radio' value=" + object[p].answer2 + ">" + object[p].answer2 + "</div>");
      $(".questionaire").append(answer2);
      var correctAnswer = $("<div><input type='radio' value=" + object[p].correctAnswer + ">" + object[p].correctAnswer + "</div>");
      $(".questionaire").append(correctAnswer);
      var answer3 = $("<div><input type='radio' value=" + object[p].answer3 + ">" + object[p].answer3 + "</div>");
      $(".questionaire").append(answer3);
    }
  }
}

$(".submit").click(function() {
  alert ("All done? Great let's see how you did!");
  checkAnswers();
});


/*HOW WE GONNA CHECK DEM ANSWERS?!?*/
function checkAnswers() {
  /*$("#myForm input[type=radio]").each(function() {
      if(!isNaN(this.value)) {
          alert(this.value + " is a valid number");
      }
  });
  return false;*/
  alert('Checking Answers dude!');
}

//Load Triva Questions
TrivaQuestions(BTMTrivia);
//  Execute the run function.
runTimer();

  //for (i=0; i< BTMTrivia.length; i++)

  /*question5: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
  question6: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
  question7: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
  question8: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
  question9: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
  question10: {
    header: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  },
   "John",
  lastName: "Smith",
  age: 25,
  address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },


  phoneNumber: [
    {
      type: "home",
      number: "212 555-1234"
    }, {
      type: "fax",
      number: "646 555-4567"
    }
  ]*/