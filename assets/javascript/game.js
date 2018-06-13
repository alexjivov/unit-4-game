// Starting variables 
var crystal1
var crystal2
var crystal3
var crystal4
var wins = 0;
var losses = 0; 
var startNumber
var totalScore
var ScoreCounter

function startGame () {
   startNumber = Math.floor((Math.Random() *120) + 19); 
  // Random number at game start //
  $('#numberContainer').text(startNumber);

  //Starting 1-12 values for crystals 
    crystal1 = Math.floor((Math.random() *11) + 1); 
    crystal2 = Math.floor((Math.random() *11) + 1); 
    crystal3 = Math.floor((Math.random() *11) + 1); 
    crystal4 = Math.floor((Math.random() *11) + 1); 
}
  //Reset function // 
function reset () {
  startGame(); 
  scoreCounter = 0; 
}
  // Win/Loss functions - call in every crystal function to check wins // 
function checkWin() {
    if (totalScore === startNumber) {
        wins++; 
        $('#wins').text("Wins " + wins);
    } if (totalScore > startNumber) {
        losses++; 
        $('#losses').text("Losses " + losses);
    } if (totalScore < startNumber) {
        return; 
    }
}

function crystalGame () {
// Crystal score adding functions // 
$('#crystalOne').click(function( ){
    totalScore = totalScore + crystal1;
    $('#scoreCounter').text(totalScore);
    checkWin(); 
});

$('#crystalTwo').on("click",function () {
    totalScore = totalScore + crystal2;
    $('#scoreCounter').text(totalScore);
    checkWin(); 
});

$('#crystalThree').on("click",function () {
    totalScore = totalScore + crystal3;
    $('#scoreCounter').text(totalScore);
    checkWin(); 
});

$('#crystalFour').on("click",function () {
    totalScore = totalScore + crystal4;
    $('#scoreCounter').text(totalScore);
    checkWin(); 
});

}

