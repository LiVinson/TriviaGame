//	Page loads (ready on document)
// Music starts playing (Fresh Prince theme music?)
// User presses button to begin

//-----GLOBAL VARIABLES ----------------------------------------------

    var themeSong = "tbd";//Create audio element, will assign src to theme song mp3 file

    var gameStarted = false; //Div displayed changes based on true/false

    var questionAsked = ""; //Will be assigned new value = to selected question and displyed

    var questionNumber = 0; //Will increase for each question asked

    var choiceDivs = ["#ChoiceA", "#ChoiceB", "#ChoiceC", "#ChoiceD"]

    var numberCorrect = 0; //Will increase if answer is correct

    var gameMessage = ""; //Will be reset based on if reply is correct or not

//Array containing an object for each trivia question
    var triviaQuestions = [ 

        question1 = {  
            question: "When Ashley reveals to Will that she does not enjoy taking violin lessons, he pawns her violin in for a: ",
            choices: ["Drum set", "Turn table", "Microphone", "Keyboard"], //first choice is correct
            choiceValues: [1, 0, 0, 0],
            display: "<video controls autoplay loop><source src='assets/images/giphy.mp4' type='video/mp4'></video>",  //"src of Video clip of Jazz playing, will dancing",
            extraFact: "Will hires his friend Jazz, played by DJ Jazzy Jeff to teach Ashley how to play her new drum set."
        },

        question2 = { 
            question: "While visiting, Uncle Phil’s mom reveals to Will over a game of cards that Uncle Phil’s nickname back in his country hometown is:",
            choices: ["Philly", "Big Phil", "Zeke", "Sonny"],
            choiceValues: [0, 0, 1, 0],
            display: "tbd",  //"TBD",
            extraFact: "TBD"

        },

        question3 = {
            question: "Aiming to impress the girls in his poetry class, Will spontaneously makes up a poem called 'Tick Tock Clock' that he claims is written by a poet friend named:",
            choices: ["Jazzy Jeff", "Raphael de la Ghetto", "Heavy D", "William Shakesmith"],
            choiceValues: [0, 1, 0, 0],
            display: "TBD",  // Picture of Jeoffery as Rafael de la Ghetto
            extraFact: "TBD"
        
        },
  
        question4 = {
            question: "When Ashley is being bullied at school, Will and Carlton try to help :",
            choices: ["telling a teacher", "bribing the bully with $50", "switching Ashley’s class", "taking the bully on a date"],
            choiceValues: [0, 1, 0, 0],
            display: "TBD",  // Scene of Will teaching Ashley how to figh
            extraFact: "TBD"
        },
        
        question5 = {
            question: "Nervous about turning 40, Aunt Vivian enrolls in <span class='italics'>this</span> type of class, surprising her much younger classmates with a star performance:",
            choices: ["Singing Lessons", "Acting Classes", "Modeling Classes", "Dance Classes"],
            choiceValues: [0, 0, 0, 1],
            display: "TBD",  // Extended gif/Video of Aunt Viv’s dance scene
            extraFact: "Before being cast as Aunt Viv, Janet Huber studied at Julliard School and the Alvin Ailey Dance company"
        },

        question6 = {
            question: "Suing Uncle Phil for Will crashing into his car, Hilary’s boyfriend Eric admits he didn’t have his <span class='italics'>this</span> with him during the accident, causing him to lose the case:",
            choices: ["glasses", "license", "registration", "wallet"],
            choiceValues: [1, 0, 0, 0],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question7 = {
            question: "When Will wins $1,000 at a charity fundraiser, he refuses to donate the money to the designated charity and instead does what with his winnings?",
            choices: ["Buys new speakers", "Buys new shoes", "Gives it to Ramon for basketball camp", "Gives it to Ashley for singing lessons"],
            choiceValues: [0, 0, 1, 0],
            display: "TBD",  // Picture of Ramon
            extraFact: "TBD"
        },

        question8 = {
            question: "When a Princeton recruiter comes to Will and Carl’s school for interviews, Will impresses the recruiter by doing what?",
            choices: ["Reciting a rap", "Solving a complex math problem", "winning a debate with another student", "Solving a Rubik’s cube"],
            choiceValues: [0, 0, 0, 1],
            display: "TBD",  // 
            extraFact: "In the film Pursuit of Happyness, Will Smith plays a character that solves a rubiks cube and impresses a top executive, a feat the actor can do in real life."
        },
  
        question9 = {
            question: "Worried that it might damage Uncle Phil’s reputation during his campaign for local judge, Geoffrey confesses that he did this in the 1970s, causing him to leave England in shame and move to the U.S.",
            choices: ["Stole from a previous employer","Cheated in an Olympic race","Broke a national artifact", "Lied about ***"],
            choiceValues: [0, 1, 0, 0],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question10 = {
            question: "Upset that she is being treated like a child, Ashley performs a version of this song on stage at a karoke event in front of her family:",
            wrongChoices: ["'Respect' by Aretha Franklin", "'I Will Always Love You' by Whitney Houston", "'End of the Road' by Boyz II Men", "'Don't Take It Personal' by Monica"],
            choiceValues: [1, 0, 0, 0],
            display: "TBD",  // 
            extraFact: "TBD"
        },

    ];

//-----------DEFINING FUNCTIONS -----------------

    //Defining fuction to choose a question, display on screen, listen for click, determine if correct
    function startGame(){
        console.log("Start game function!")
 
        questionAsked = triviaQuestions[questionNumber]; //Select the next question from the triviaQuestion array
        
        $("#questionDiv").html(questionAsked.question); //Disply question in DOM
        console.log(questionNumber + ". " + questionAsked.question);
        
        //Assign each of the response divs on the screen an HTML value = to one of the choices from the trivia Questions array
        //Assign ech div a value from the choiceValue array (0 for wrong, 1 for correct)
        $("#choiceA").html(questionAsked.choices[0]);
        $("#choiceADiv").attr("value", questionAsked.choiceValues[0]);

        $("#choiceB").html(questionAsked.choices[1]);
        $("#choiceBDiv").attr("value", questionAsked.choiceValues[1]);

        $("#choiceC").html(questionAsked.choices[2]);
        $("#choiceCDiv").attr("value", questionAsked.choiceValues[2]);

        $("#choiceD").html(questionAsked.choices[3]);
        $("#choiceDDiv").attr("value", questionAsked.choiceValues[3]);

        $("#afterResponse").hide()//hide afterResponse panel from last question
        $("#gamePanel").show(); //Show the game panel

      //When one of the response divs is clicked, call an anonymous function:
        $(".choiceDivs").on("click", function(){
                clickedValue = $(this).attr("value"); 
                console.log(clickedValue);    
                       
                if (clickedValue == 1){  //The correct answer was chosen
                    console.log("That's correct");
                    numberCorrect++; //Increase number of correct responses by 1
                    gameMessage = "CORRECT!"; //change game message to correct
                    questionAnswered();
                } else { 
                    console.log("That's wrong!"); //The incorrect answer was chosen
                    gameMessage = "Wrong!"; //change game message to correct
                    questionAnswered(); 
                }
        });

    };

    //Defining fuction to update afterResponse div, check if game should continue

    function questionAnswered(){ 
        $("#gameMessage").html(gameMessage); //display game message on screen
        $("#questionInfoDiv").html(questionAsked.extraFact); //display "Extra fact" for selected question 
        $(".imageDiv").append(questionAsked.display); //Attach display image/video to DOM

        $("#gamePanel").hide(); //Hides the game question panel; 
        $("#afterResponse").show(); //Display the afterResponse div

       questionNumber++; //increase the questionNumber by 1

       //After 7 seconds Check if game is over:
            if (questionNumber == 10){
                var endGamePause = setTimeout(gameOver, 3000); //To be defined
            }
            else{
                var postQuestionPause = setTimeout(startGame, 7000);
            }
         
    };

    function incorrectAnswer(){
        
        //To be defined 
    };

    function gameOver(){


//To be defined
    };



    //When the page loads:
    $(document).ready(function(){
        $("#gamePanel").hide(); //Hides the game panel; add steps to make it hide automatically. css?
        $("#afterResponse").hide();//Hides the afterResponse panel;
            //Add steps to set the song to play
     
            //Select start button and when clicked run an anonymous callback function
        $("#startButton").on("click",function(){
            gameStarted = true; 
            console.log(startGame);

            $("#instructionsPanel").hide(); //Hide the instructions panel

            startGame(); //Call the startGame Function (to be defined)
        });
    
    });



       
            
   


