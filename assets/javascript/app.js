//	Page loads (ready on document)
// Music starts playing (Fresh Prince theme music?)
// User presses button to begin

//-----GLOBAL VARIABLES ----------------------------------------------

    var themeSong = "tbd";//Create audio element, will assign src to theme song mp3 file

    var gameStarted = false;

    var triviaQuestions = {

        question1: {  
            question: "When Ashley reveals to Will that she does not enjoy taking violin lessons, he pawns her violin in for a: ",
            answer: "drum set",
            wrongChoices: ["wrongChoice1", "wrongChoice2", "wrongChoice3"],
            display: "tbd",  //"Video clip of Jazz playing, will dancing",
            extraFact: "Will hired his friend Jazz, played by DJ Jazzy Jeff to teach Ashley how to play her new drum set"
        },

        question2: { 
            question: "While visiting, Uncle Phil’s mom reveals to Will over a game of cards that Uncle Phil’s nickname back in his country hometown is:",
            answer: "Zeke",
            wrongChoices: ["Philly", "Big Phil", "Sonny"],
            display: "tbd",  //"TBD",
            extraFact: "TBD"

        },

        question3: {
            question: "Aiming to impress the girls in his poetry class, Will spontaneously makes up a poem called 'Tick Tock Clock' that he claims is written by a poet friend named:",
            answer: " Raphael de la Ghetto",
            wrongChoices: ["Jazzy Jeff", "TBD", "TBD"],
            display: "TBD",  // Picture of Jeoffery as Rafael de la Ghetto
            extraFact: "TBD"
        
        },
  
        question4: {
            question: "When Ashley is being bullied at school, Will and Carlton try to help by:",
            answer: "bribing the bully with $50",
            wrongChoices: ["telling a teacher", "switching Ashley’s class", "taking the bully on a date"],
            display: "TBD",  // Scene of Will teaching Ashley how to figh
            extraFact: "TBD"
        },
        
        question5: {
            question: "Nervous about turning 40, Aunt Vivian enrolls in this type of class, surprising her much younger classmates with a star performance:",
            answer: "dance class",
            wrongChoices: ["singing lessons", "acting class", " modeling class"],
            display: "TBD",  // Extended gif/Video of Aunt Viv’s dance scene
            extraFact: "Before being cast as Aunt Viv, Janet Huber studied at Julliard School and the Alvin Ailey Dance company"
        },

        question6: {
            question: "Suing Uncle Phil for Will crashing into his car, Hilary’s boyfriend Eric, admits he didn’t have his this with him during the accident:",
            answer: "glasses",
            wrongChoices: ["license", "registration", "wallet"],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question7: {
            question: "When Will wins $1,000 at a charity fundraiser, he refuses to donate the money to the designated charity and instead does what with his winnings?",
            answer: "Donates it to his friend Ramon who wanted to afford a way to basketball camp",
            wrongChoices: ["buys new speakers", "buys new shoes", "gives it to Ashley for singing lessons"],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question8: {
            question: "When a Princeton recruiter comes to Will and Carl’s school for interviews, Will impresses the recruiter by doing what?",
            answer: "Solving a Rubik’s cube",
            wrongChoices: ["Reciting a rap", "Solving a complex math problem", "winning a debate with another student"],
            display: "TBD",  // 
            extraFact: "In the film Pursuit of Happyness, Will Smith plays a character that solves a rubiks cube and impresses a top executive who later hires him, a feat the actor can do in real life."
        },
  
        question9: {
            question: "Worried that it might damage Uncle Phil’s reputation during his campaign for judge, Geoffrey confesses that he did this, causing him to go into hiding by moving to the U.S.",
            answer: "Cheating in an Olympic race by taking a taxi to the finish line",
            wrongChoices: ["stealing from a previous employer", "TBD", "TBD"],
            display: "TBD",  // 
            extraFact: "TBD"
        },

        question10: {
            question: "Upset that she is being treated like a child, Ashley performs a version of this song on stage at a karoke event in front of her family:",
            answer: "Cheating in an Olympic race by taking a taxi to the finish line",
            wrongChoices: ["'Respect' by Aretha Franklin", "TBD", "TBD"],
            display: "TBD",  // 
            extraFact: "TBD"
        },

    }

    function startGame(){
        console.log("Start game function!")
    }


    //When the page loads:
    $(document).ready(function(){
        $("#gamePanel").hide();
            //Set the song to play
        // $(themeSong).attr("src", "assets/images/themeSongFull.mp3");
        // themeSong.play();

            //Select start button and when clicked run an anonymous callback function
        $("#startButton").on("click",function(){
            gameStarted = true;
            console.log(startGame);

            if (gameStarted){
                $("#instructionsPanel").hide();
                $("#gamePanel").show();
                startGame();        
                }
    
        });



       
            
    })


