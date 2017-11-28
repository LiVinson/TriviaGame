//	Page loads (ready on document)
// Music starts playing (Fresh Prince theme music?)
// User presses button to begin

//-----------GLOBAL VARIABLES ----------------------------------------------
    
    //Create audio element, will assign src to theme song mp3 file
    
    var themeSong;

    var musicPlaying = false;

    var questionAsked = ""; //Will be assigned new value = to selected question and displayed

    var questionNumber = 0; //Will increase for each question askedffff

    var numberCorrect = 0; //Will increase if answer is correct

    var gameMessage = ""; //Will be reset based on if reply is correct or not

    var timer = 15; //15 second timer
    var timerRunning = false;
    var countDown; //Will be used to track the timer

    var answerIndex; //Used to determine text of correct answer
    var answerChosen = "";

    var postQuestionPause; //Used to 
    var endGamePause;

    var gameOverMessage = "";
//Array containing an object for each trivia question
    var triviaQuestions = [ 

        question1 = {  
            question: "When Ashley reveals to Will that she does not enjoy taking violin lessons, he pawns her violin in for a: ",
            choices: ["Drum set", "Turn table", "Microphone", "Keyboard"], //first choice is correct
            choiceValues: [1, 0, 0, 0],
            questionImage: "<img class='img-responsive' src='assets/images/ashleyBanks.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/question1Gif.mp4' type='video/mp4'  class='afterQuestionImage'></video >",  
            extraFact: "Will hires his friend Jazz, played by DJ Jazzy Jeff, to teach Ashley how to play her new drum set."
        },

        question2 = { 
            question: "When Will and Carlton trick Geoffrey into believing he has won a mega lottery, Geoffrey does what?",
            choices: ["Gives half to Will", "Goes back to England",  "Quits his job as butler", "Doesn't tell anyone"],
            choiceValues: [0, 0, 1, 0],
            questionImage: "<img class='img-responsive'  src='assets/images/geoffreyLottery.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/geoffreyLottery.mp4' class ='afterQuestionImage'></video>",
            extraFact: "Embarrassed by his behavior when he finds out he did not win, Geoffrey still quits and has to be convinced to come back by Will and Carlton."
        },

        question3 = {
            question: "Aiming to impress the girls in his poetry class, Will spontaneously makes up a poem called 'Tick Tock Clock' that he claims is written by a poet friend named:",
            choices: ["Jazzy Jeff", "Raphael de la Ghetto", "Heavy D", "William Shakesmith"],
            choiceValues: [0, 1, 0, 0],
            questionImage: "<img class='img-responsive' src='assets/images/tickTockClock.png' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/raphaelDLG.mp4' type='video/mp4' class='afterQuestionImage'></video >",
            extraFact: "The family butler, Geoffrey, agrees to pretend to be the fictional poet and perform in front of Will's classmates."
        
        },
  
        question4 = {
            question: "When Ashley is being bullied bu Paula Hoover at school, Will and Carlton try to help her by:",
            choices: ["Telling a teacher", "Bribing the bully with $50", "Switching Ashley’s class", "Taking the bully on a date"],
            choiceValues: [0, 1, 0, 0],
            questionImage: "<img class='img-responsive'  src='assets/images/ashleyBully.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/ashleyFighting.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Will also tries to teach Ashley to fight the bully, but is unsucessful. Ultimately, Ashley and the bully settle their differences peacefully."
        },
        
        question5 = {
            question: "Nervous about turning 40, Aunt Vivian enrolls in <span class='italics'>this</span> type of class, surprising her younger classmates with a star performance:",
            choices: ["Singing Lessons", "Acting Classes", "Modeling Classes", "Dance Classes"],
            choiceValues: [0, 0, 0, 1],
            questionImage: "<img class='img-responsive' src='assets/images/auntViv.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/auntVivDancing.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Before being cast as Aunt Viv, Janet Huber studied at Julliard School and the Alvin Ailey Dance company."
        },

        question6 = {
            question: "While suing Uncle Phil because Will crashed into his car, Hilary’s boyfriend Eric admits he didn’t have <span class='italics'>this</span> during the accident, causing him to lose the case:",
            choices: ["His glasses", "His license", "His registration", "Insurance"],
            choiceValues: [1, 0, 0, 0],
            questionImage: "<img class='img-responsive' src='assets/images/hilarysBoyfriend.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/willRapmobile.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Will's 'Rapmobile', usually uninsured and blasting music, was often cause for an argument between Will and Uncle Phil."
        },

        question7 = {
            question: "After finding out that Hillary dropped out of college, Will blackmails her into demeaning tasks. When Hilary tells Carlton the truth to get his help, Carlton does what?",
            choices: ["Tells their parents", "Stands up to Will", "Blackmails her too", "Helps her enroll again"],
            choiceValues: [0, 0, 1, 0],
            questionImage: "<img class='img-responsive' src='assets/images/hilaryBanks.png' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/hillaryBlackmail.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Unable to keep up Will and Carlton's blackmail requirements, Hilary reveals the truth."
        },

        question8 = {
            question: "When a Princeton recruiter comes to Will and Carl’s school for interviews, Will impresses the recruiter by doing what?",
            choices: ["Performing a rap", "Solving a complex math problem", "winning a debate with another student", "Solving a Rubik’s cube"],
            choiceValues: [0, 0, 0, 1],
            questionImage: "<img class='img-responsive' src='assets/images/willPrinceton.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/princetonInterview.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "In the film Pursuit of Happyness, Will Smith again plays a character that solves a rubiks cube, a feat the actor can do in real life."
        },

        question9 = {
            question: "Worried that it might damage Uncle Phil’s reputation during his campaign for local judge, Geoffrey confesses that he did this in the 1970s, causing him to leave England in shame:",
            choices: ["Stole from a previous employer","Cheated in an Olympic race","Broke a national artifact", "Lied to police"],
            choiceValues: [0, 1, 0, 0],
            questionImage: "<img class='img-responsive' src='assets/images/geoffrey.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/geoffreyCheats.mp4' type='video/mp4'  class='afterQuestionImage'></video>", 
            extraFact: "While originally awarded a medal for coming in first, Geoffrey was publically embarrassed as his medal was taken while standing on the podium."
        },

        question10 = {
            question: "Upset that she is being treated like a child, Ashley performs a version of this song on stage at an event in front of her family:",
            choices: ["'Respect' by Aretha Franklin", "'I Will Always Love You' by Whitney Houston", "'End of the Road' by Boyz II Men", "'Don't Take It Personal' by Monica"],
            choiceValues: [1, 0, 0, 0],
            questionImage: "<img class='img-responsive' src='assets/images/ashleySinging.jpg' class='questionImages'>",
            display: "<video autoplay><source src='assets/images/gifs/ashleySinging.mp4' type='video/mp4'  class='afterQuestionImage'></video >",
            extraFact: "Ashley, played by Tatiana Ali, sings on occasion during the shows six season run."
        },

    ];

//-----------DEFINING FUNCTIONS -----------------

    //FUNCTION 1: Defining fuction to choose a question, display on screen, listen for click, determine if correct
    function startGame(){
        console.log("Start game function!");

        if (musicPlaying == false){
            musicPlaying = true;
            themeSong.play();
        };
        
        console.log(musicPlaying);

        //Set up everything for game panel:
        //Hides if showing from previous game
        $("#gameOverPanel").hide(); 
        
        console.log("gameOverPanel is hidden");
        //Display question number in game panel header
        $(".questionNum").html(questionNumber + 1); 

        //Select the question item from the triviaQuestion array starting with 0 and set = to questionAsked
        questionAsked = triviaQuestions[questionNumber]; 
        
        //Display question in DOM
        $(".questionText").html(questionAsked.question); 
        console.log((questionNumber+1) + ". " + questionAsked.question);

        //Remove image from last question, and display new image in the DOM
        $("#questionImage").empty().append(questionAsked.questionImage); 


       
        //Assign each of the response divs on the screen an HTML value = to one of the choices from the 
        //trivia Questions array and assign each div a value from the choiceValue array 
        //(0 for wrong, 1 for correct)
               
        $("#choiceA").html(questionAsked.choices[0]);
        $("#choiceADiv").attr("value", questionAsked.choiceValues[0]);

        $("#choiceB").html(questionAsked.choices[1]);
        $("#choiceBDiv").attr("value", questionAsked.choiceValues[1]);

        $("#choiceC").html(questionAsked.choices[2]);
        $("#choiceCDiv").attr("value", questionAsked.choiceValues[2]);

        $("#choiceD").html(questionAsked.choices[3]);
        $("#choiceDDiv").attr("value", questionAsked.choiceValues[3]);

        //hide afterResponse panel from last question and show the game panel
        $("#afterResponse").hide()
        $("#gamePanel").show(); 
        
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
                 
            //Assign variable the value of clicked div (0 or 1 based on if correct) 
            clickedValue = $(this).attr("value"); 
            
             // CHeck if correct response was chosen
            if (clickedValue == 1){ 
                numberCorrect++; //Increase number of correct responses by 1
                console.log("That's correct. Correct number: " + numberCorrect);
                gameMessage = correctAnswer + " is <span id='correctText'>CORRECT!</span>"; //change game message to correct
                
            } else { 
                console.log("That's wrong!"); //The incorrect answer was chosen
                gameMessage = "Wrong! The correct answer is <span id='correctAnswer'>" + correctAnswer + "!</span>"; //change game message to correct
                
            };
            timeUp();
        });

    }; //End of startGame functino

    //FUNCTION 2: Defining fuction to trigger countdown, display on screen
    function decrement(){
        timer--; //Timer goes down by 1
        $("#timer").html(timer); //Display new timer value on screen

        //Check if timer has reached 0
        if (timer <= 0){
            console.log("Time's up!")
            gameMessage = "Time's Up! The correct answer is <span id='correctAnswer'>" + correctAnswer + "!</span>";
            timeUp(); //Call timeUp function
        }
    };
    
    //FUNCTION 3: Defining fuction to end timer countdown after each question is answered/time runs out
    function timeUp(){
        console.log("time up function!")
        clearInterval(countDown); //Stop the setInterval (timer)
        timerRunning = false;
        questionAnswered(); //Call the questionAnswered function
    };
    
    
    //FUNCTION 4: Defining fuction to update afterResponse div, check if game should continue after each question is answered
    function questionAnswered(){ 
        console.log("questionAnswered function")
        $("#gameMessage").html(gameMessage); //display game message on screen
        $("#questionInfo").html(questionAsked.extraFact); //display "Extra fact" for selected question 
        $(".imageDiv").html(questionAsked.display); //Attach display image/video from trivia array to DOM
        $(".numberCorrect").html(numberCorrect + " out of " + (questionNumber + 1)); //Display number correct on screen
        
        //If the display is a video, pause the music
        if (questionAsked.display.indexOf('video')) {
            themeSong.pause();
            musicPlaying = false
        }
        
        $("#gamePanel").hide(); //Hides the game question panel; 
        $("#afterResponse").show(); //Display the afterResponse div

       questionNumber++; //increase the questionNumber by 1
       console.log("question Number " + questionNumber)

       //Check if all questions have been answered
        if (questionNumber == 10) {
            console.log("Last question, game over!")
            endGamePause = setTimeout(gameOver, 10500); //Wait 10 seconds, call gameOver function
        }
        else {
            postQuestionPause = setTimeout(startGame, 10500); //Wait 10 seconds, ten call starGame function
        }
         
    };

    //FUNCTION 5: Defining fuction to end game, show final stats
    function gameOver(){
        
        //Pause music
        if(musicPlaying){
            themeSong.stop();
            musicPlaying = false;
        };

        //Check number answered correctly, and display message and image based on number
        if (numberCorrect < 4){
            gameOverMessage = "Looks like you're not a Fresh Prince whiz!";
            

        } else if (numberCorrect < 8){
            gameOverMessage = "You may not be the prince of Bel-Air, but you know your stuff!";
            
            
        } else
            gameOverMessage = "You're practically West Philidelphia, born and raised!";
               
        
        $("#gameOverImage").html("<img class='img-responsive' src ='assets/images/freshPrinceLogo3.jpg>");
            
        $("#gameOverMessage").html(gameOverMessage); 
        
        //Display the gameover panel, hide all other panels
        $("#gamePanel").hide(); 
        $("#afterResponse").hide();
        $("#gameOverPanel").show();


        //When restart button is clicked, reset the questionNumber and number correct value and on screen. 
        $("#restart").on("click",function(){
            questionNumber = 0; 
            numberCorrect = 0;
            $(".numberCorrect").html(numberCorrect + " out of " + (questionNumber + 1));
            $(".questionNum").html(questionNumber + 1);
            startGame(); //Call startgame function
        })
    };


//-----------CODE TO RUN WHEN PAGE LOADS -------------------------

    //When the page loads:
    $(document).ready(function(){
    
        //Only instructions panel showing
        $("#gamePanel").hide(); //Hides the game panel; add steps to make it hide automatically. css?
        $("#gameOverPanel").hide();//Hides the game over panel
        $("#afterResponse").hide();//Hides the afterResponse panel;
     
        //Music for start of game
        themeSong = document.getElementById("themeSong");
        musicPlaying = false;
        

        //Display number correct and timer in DOM
        $(".numberCorrect").html(numberCorrect);
        $("#timer").html(timer);

        //Select start button and when clicked run an anonymous callback function
        $("#startButton").on("click",function(){
            $("#instructionsPanel").hide(); //Hide the instructions panel
            startGame(); //Call the startGame Function
        });
    
    });



       
            
   


