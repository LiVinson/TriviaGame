//	Page loads (ready on document)
// Music starts playing (Fresh Prince theme music?)
// User presses button to begin

//-----------GLOBAL VARIABLES ----------------------------------------------

    var themeSong = "tbd";//Create audio element, will assign src to theme song mp3 file

    var questionAsked = ""; //Will be assigned new value = to selected question and displayed

    var questionNumber = 0; //Will increase for each question askedffff

    var numberCorrect = 0; //Will increase if answer is correct

    var gameMessage = ""; //Will be reset based on if reply is correct or not

    var timer = 15; //15 second timer
    var timerRunning = false;
    var countDown; //Will be used to track the timer

    var answerIndex;
    var answerChosen = "";



    var postQuestionPause;
    var endGamePause;

    var gameOverMessage = "";
//Array containing an object for each trivia question
    var triviaQuestions = [ 

        question1 = {  
            question: "When Ashley reveals to Will that she does not enjoy taking violin lessons, he pawns her violin in for a: ",
            choices: ["Drum set", "Turn table", "Microphone", "Keyboard"], //first choice is correct
            choiceValues: [1, 0, 0, 0],
            questionImage: "<img src='assets/images/ashleyBanks.jpg' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/question1Gif.mp4' type='video/mp4'  class='afterQuestionImage'></video >",  
            extraFact: "Will hires his friend Jazz, played by DJ Jazzy Jeff, to teach Ashley how to play her new drum set."
        },

        question2 = { 
            question: "While visiting, Uncle Phil’s mom, Hattie Banks, reveals to Will over a game of cards that Uncle Phil’s nickname back in his country hometown is:",
            choices: ["Philly", "Big Phil", "Zeke", "Sonny"],
            choiceValues: [0, 0, 1, 0],
            questionImage: "<img src='assets/images/unclePhil.jpg' class='questionImages'>",
            display: "<img src='assets/images/hattieBanks.jpg' class ='afterQuestionImage'>",
            extraFact: "Phil's mother, played by Virginia Capers, made guest appearances throughout the 6 seasons of the show."

        },

        question3 = {
            question: "Aiming to impress the girls in his poetry class, Will spontaneously makes up a poem called 'Tick Tock Clock' that he claims is written by a poet friend named:",
            choices: ["Jazzy Jeff", "Raphael de la Ghetto", "Heavy D", "William Shakesmith"],
            choiceValues: [0, 1, 0, 0],
            questionImage: "<img src='assets/images/tickTockClock.png' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/raphaelDLG.mp4' type='video/mp4' class='afterQuestionImage'></video >",
            extraFact: "The family butler, Geoffrey, agrees to pretend to be the fictional poet and perform in front of Will's classmates."
        
        },
  
        question4 = {
            question: "When Ashley is being bullied at school, Will and Carlton try to help her by:",
            choices: ["telling a teacher", "bribing the bully with $50", "switching Ashley’s class", "taking the bully on a date"],
            choiceValues: [0, 1, 0, 0],
            questionImage: "<img src='assets/images/ashleyBully.jpg' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/ashleyFighting.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Will also tries to teach Ashley to fight the bully, but is unsucessful. Ultimately, Ashley and the bully settle their differences peacefully."
        },
        
        question5 = {
            question: "Nervous about turning 40, Aunt Vivian enrolls in <span class='italics'>this</span> type of class, surprising her much younger classmates with a star performance:",
            choices: ["Singing Lessons", "Acting Classes", "Modeling Classes", "Dance Classes"],
            choiceValues: [0, 0, 0, 1],
            questionImage: "<img src='assets/images/auntViv.jpg' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/auntVivDancing.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Before being cast as Aunt Viv, Janet Huber studied at Julliard School and the Alvin Ailey Dance company."
        },

        question6 = {
            question: "While suing Uncle Phil because Will crashed into his car, Hilary’s boyfriend Eric admits he didn’t have his <span class='italics'>this</span> with him during the accident, causing him to lose the case:",
            choices: ["glasses", "license", "registration", "wallet"],
            choiceValues: [1, 0, 0, 0],
            questionImage: "<img src='assets/images/hilarysBoyfriend.jpg' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/willRapmobile.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Will's 'Rapmobile', usually uninsured and blasting music, was often cause for an argument between Will and Uncle Phil."
        },

        question7 = {
            question: "When Will wins $1,000 at a charity fundraiser, he refuses to donate the money to the designated charity and instead does what with his winnings?",
            choices: ["Buys new speakers", "Buys new shoes", "Gives it to Ramon for basketball camp", "Gives it to Ashley for singing lessons"],
            choiceValues: [0, 0, 1, 0],
            questionImage: "TBD",
            display: "TBD",  // Picture of Ramon
            extraFact: "TBD"
        },

        question8 = {
            question: "When a Princeton recruiter comes to Will and Carl’s school for interviews, Will impresses the recruiter by doing what?",
            choices: ["Performing a rap", "Solving a complex math problem", "winning a debate with another student", "Solving a Rubik’s cube"],
            choiceValues: [0, 0, 0, 1],
            questionImage: "<img src='assets/images/willPrinceton.jpg' class='questionImages'>",
            display: "<video controls autoplay><source src='assets/images/gifs/princetonInterview.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "In the film Pursuit of Happyness, Will Smith again plays a character that solves a rubiks cube, a feat the actor can do in real life."
        },
  //LEFT OFF HERE
        question9 = {
            question: "Worried that it might damage Uncle Phil’s reputation during his campaign for local judge, Geoffrey confesses that he did this in the 1970s, causing him to leave England in shame and move to the U.S.",
            choices: ["Stole from a previous employer","Cheated in an Olympic race","Broke a national artifact", "Lied about ***"],
            choiceValues: [0, 1, 0, 0],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question10 = {
            question: "Upset that she is being treated like a child, Ashley performs a version of this song on stage at a karoke event in front of her family:",
            choices: ["'Respect' by Aretha Franklin", "'I Will Always Love You' by Whitney Houston", "'End of the Road' by Boyz II Men", "'Don't Take It Personal' by Monica"],
            choiceValues: [1, 0, 0, 0],
            display: "TBD",  // 
            extraFact: "TBD"
        },

    ];

//-----------DEFINING FUNCTIONS -----------------

    //Defining fuction to choose a question, display on screen, listen for click, determine if correct
    function startGame(){
        console.log("Start game function!");
    //Set up everything for game panel:
        //Hides if showing from previous game
        $("#gameOverPanel").hide(); 
        
        //Display question number in game panel header
        $(".questionNum").html(questionNumber + 1); 

        //Select the question item from the triviaQuestion array starting with 0 and set = to questionAsked
        questionAsked = triviaQuestions[questionNumber]; 
        
        //Display question in DOM
        $(".questionText").html(questionAsked.question); 
        console.log((questionNumber+1) + ". " + questionAsked.question);

        //Remove image from last question, and display new image in the DOM
        $("#questionImage").empty().append(questionAsked.questionImage); 

        //hide afterResponse panel from last question and show the game panel
        $("#afterResponse").hide()
        $("#gamePanel").show(); 
       
        //Assign each of the response divs on the screen an HTML value = to one of the choices from the 
        //trivia Questions array and ssign ech div a value from the choiceValue array 
        //(0 for wrong, 1 for correct)
               
        $("#choiceA").html(questionAsked.choices[0]);
        $("#choiceADiv").attr("value", questionAsked.choiceValues[0]);

        $("#choiceB").html(questionAsked.choices[1]);
        $("#choiceBDiv").attr("value", questionAsked.choiceValues[1]);

        $("#choiceC").html(questionAsked.choices[2]);
        $("#choiceCDiv").attr("value", questionAsked.choiceValues[2]);

        $("#choiceD").html(questionAsked.choices[3]);
        $("#choiceDDiv").attr("value", questionAsked.choiceValues[3]);

        //Identify the correct answer to be used in HTML text
        answerIndex = questionAsked.choiceValues.indexOf(1); //Locate index location of "1" (corresponds to correct answer)
        correctAnswer = questionAsked.choices[answerIndex]; //Locate text in choices array in same index location

        //Resets the timer, displays on screen, and reduces count by 1 by calling decrement function,            
        timer = 15;
        $("#timer").html(timer);
        
        if(!timerRunning) { //run code below only if timerRunning is set to false
            countDown = setInterval(decrement, 1000); //Every 1s, call the decrement function
            timerRunning = true;
        };       
        
        //When one of the response divs is clicked, call an anonymous function:
        $(".choiceDivs").off().on("click", function(){ //Use .off to keep event from firing multiple times
                 
                //Assign value (0 or 1 based on if correct) of clicked div 
                clickedValue = $(this).attr("value"); 
                console.log(clickedValue);    
                       
                if (clickedValue == 1){  //The correct answer was chosen
                    numberCorrect++; //Increase number of correct responses by 1
                    console.log("That's correct. Correct number: " + numberCorrect);
                    gameMessage = correctAnswer + " is <span id='correctText'>CORRECT!</span>"; //change game message to correct
                    timeUp();
                } else { 
                    console.log("That's wrong!"); //The incorrect answer was chosen
                    gameMessage = "Wrong! The correct answer is <span id='correctAnswer'>" + correctAnswer + "!</span>"; //change game message to correct
                    timeUp(); 
                }
        });

    };

    //Defining fuction to trigger countdown, display on screen
    function decrement(){
        timer--; //global variable count goes down by 1
        $("#timer").html(timer);

        if (timer <= 0){
            console.log("Time up!")
            gameMessage = "Time's Up! The correct answer is <span id='correctAnswer'>" + correctAnswer + "!</span>";
            timeUp(); //Call timeUp function
        }
    };
    
    //Defining fuction to end timer countdown after each question is answered/time runs out
    function timeUp(){
        console.log("time up function!")
        clearInterval(countDown); //Stop the setInterval
        timerRunning = false;
        questionAnswered(); //Call the questionAnswered function
    };
    
    
    //Defining fuction to update afterResponse div, check if game should continue after each question is answered
    function questionAnswered(){ 
        console.log("questionAnswered function")
        $("#gameMessage").html(gameMessage); //display game message on screen
        $("#questionInfo").html(questionAsked.extraFact); //display "Extra fact" for selected question 
        $(".imageDiv").html(questionAsked.display); //Attach display image/video from trivia array to DOM
        $(".numberCorrect").html(numberCorrect + " out of " + (questionNumber + 1)); //Display number correct on screen
        $("#gamePanel").hide(); //Hides the game question panel; 
        $("#afterResponse").show(); //Display the afterResponse div

       questionNumber++; //increase the questionNumber by 1
       console.log("question Number " + questionNumber)

       //Check if all questions have been answered
        if (questionNumber == 10) {
            console.log("Last question, game over!")
            endGamePause = setTimeout(gameOver, 3000); //To be defined
        }
        else {
            console.log("call startGame in 7")
            postQuestionPause = setTimeout(startGame, 10500);
        }
         
    };

    //Defining fuction tto end game, show final stats
    function gameOver(){
        $("#gamePanel").hide(); 
        $("#afterResponse").hide();
        $("#gameOverPanel").show();//Hides the game over panel

        if (numberCorrect < 4){
            gameOverMessage = "Looks like you're not a Fresh Prince whiz!";
            
        } else if (numberCorrect <8){
            gameOverMessage = "You may not be the prince of Bel-Air, but you know your stuff!";

        } else
            gameOverMessage = "You're practically West Philidelphia, born and raised!";

        $("#gameOverMessage").html(gameOverMessage);
        $("#gameOverImage").html("<img src = 'assets/images/freshPrinceLogo3.jpg'>")

        $("#restart").on("click",function(){
            questionNumber = 0; 
            numberCorrect = 0;
            $(".numberCorrect").html(numberCorrect + " out of " + (questionNumber + 1))
            startGame();
        })
    };


//-----------Code to Run When Page Loads -------------------------

    //When the page loads:
    $(document).ready(function(){
        $("#gamePanel").hide(); //Hides the game panel; add steps to make it hide automatically. css?
        $("#gameOverPanel").hide();//Hides the game over panel
        $("#afterResponse").hide();//Hides the afterResponse panel;
            //Add steps to set the song to play
     
            //Select start button and when clicked run an anonymous callback function
        $(".numberCorrect").html(numberCorrect);
        $("#timer").html(timer);
        $("#startButton").on("click",function(){
        $("#instructionsPanel").hide(); //Hide the instructions panel

        startGame(); //Call the startGame Function
        });
    
    });



       
            
   


