let username;
let email;
let tel;
let totalquestions = 0;
let score=0;
let totalScore=0;
let wrongAnswers = 0;

let TestContainer = document.getElementById("test");
let TestResultsContainer = document.getElementById("results");
let questions = document.querySelectorAll(".q");
let solutions = document.querySelectorAll("#correct");
let CurrentUser = document.getElementById("heading1");
let TotalquestionsDisplay = document.getElementById("Box1");
let correctanswersDisplay = document.getElementById("Box2");
let wronganswersDisplay = document.getElementById("Box3");
let scorebar = document.getElementById("scoredigit");
let AcheivementsStatus1 = document.getElementById("status1");
let AcheivementsStatus2 = document.getElementById("status2");

//clear button
const clearButton = document.getElementById('clearButton');  
clearButton.addEventListener('click', function() {  
  
    location.reload();  
});

//submit button
function submit(){
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    tel=document.getElementById("number").value;

     
    TestContainer.style.display = "none";

    TestResultsContainer.style.display = "grid";

    questions.forEach((element)=>{
        if(solutions[totalquestions].checked){
            score+=1;
            
        }
        else{
            console.log("wrong")
        }
        totalquestions+=1;
    })

    //blue,red and green boxes values
    CurrentUser.textContent=`${username}'s Results:`

    TotalquestionsDisplay.textContent=totalquestions;

    correctanswersDisplay.textContent=score;

    wrongAnswers = totalquestions-score;

    wronganswersDisplay.textContent=wrongAnswers;


     //score bar updates

    totalScore = Math.round((score/totalquestions)*100)

    if (totalScore<50){
        scorebar.textContent=`${totalScore}%`
        scorebar.style.backgroundColor = "rgb(255,0,0)";
        scorebar.style.maxWidth = `${totalScore}%`;
    }
    else{
        let colorValue = 255-((totalScore-50)*5.1)
        scorebar.style.maxWidth = `${totalScore}%`;
        scorebar.textContent=`${totalScore}%`;
        scorebar.style.backgroundColor = `rgba(${colorValue}, 255, 0, 0.722)`;
    }


    //grading updates
    if (totalScore<50){
        AcheivementsStatus1.textContent="You failed the test😖."
        AcheivementsStatus2.textContent="Your Grade is F"
    }
    else if (totalScore>=50 && totalScore<60){
        AcheivementsStatus1.textContent="You passed the test 🏆."
        AcheivementsStatus2.textContent="Your Grade is C."
    }
    
    else if (totalScore>=60 && totalScore<75){
        AcheivementsStatus1.textContent="You passed the test 🏆🏆."
        AcheivementsStatus2.textContent="Your Grade is B"
    }
    
    else{
        AcheivementsStatus1.textContent="You passed the test 🏆🏆🏆."
        AcheivementsStatus2.textContent="Your Grade is A"
    }
    
}