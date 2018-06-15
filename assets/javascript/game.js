// Starting variables 
var crystal1 = 0; 
var crystal2 = 0;
var crystal3 = 0; 
var crystal4 = 0;
var wins = 0;
var losses = 0; 
var startNumber = 0;
var totalScore = 0; 
var ScoreCounter = 0;

function startGame () {
   startNumber = Math.floor((Math.random() * 120) + 19); 
  // Random number at game start //
  $('#numberContainer').text(startNumber);
  $('#wins').text("Wins: " + wins);
  $('#losses').text("Losses: " + losses);

  //Starting 1-12 values for crystals 
    crystal1 = Math.floor((Math.random() *11) + 1); 
    crystal2 = Math.floor((Math.random() *11) + 1); 
    crystal3 = Math.floor((Math.random() *11) + 1); 
    crystal4 = Math.floor((Math.random() *11) + 1); 
    console.log("starting values");
}
startGame();
  //Reset function // 
function reset () {
  startGame(); 
  scoreCounter = 0; 
  wins = 0;
  totalScore = 0;
  losses = 0; 
  console.log("scoreCounter");
}

reset();
  // Win/Loss functions - call in every crystal function to check wins // 
function checkWin() {
    if (totalScore === startNumber) {
        wins++; 
        $('#wins').text("Wins " + wins);
        alert("You Win!");
        reset();
    } else if (totalScore > startNumber) {
        losses++; 
        $('#losses').text("Losses " + losses);
        alert("You Lose!");
        reset(); 
    } else if (totalScore < startNumber) {
        return; 
    }
    console.log("working");
}

// Crystal score adding functions // 
$('#crystalOne').on("click",function() {
    totalScore = totalScore + crystal1;
    $('#scoreCounter').text("Your Total Score Is: " + totalScore);
    checkWin(); 
    console.log(crystal1);
    console.log(totalScore);
});

$('#crystalTwo').on("click",function() {
    totalScore = totalScore + crystal2;
    $('#scoreCounter').text("Your Total Score Is: " + totalScore);
    checkWin(); 
    console.log("crystaltwo");
});

$('#crystalThree').on("click",function() {
    totalScore = totalScore + crystal3;
    $('#scoreCounter').text("Your Total Score Is: " + totalScore);
    checkWin(); 
    console.log("crystalthree");
});

$('#crystalFour').on("click",function() {
    totalScore = totalScore + crystal4;
    $('#scoreCounter').text("Your Total Score Is: " + totalScore);
    checkWin(); 
    console.log("crystalfour");
});



