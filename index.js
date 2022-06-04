function intToChar(int) {
    const code = "a".charCodeAt(0);
    console.log(code);

    return String.fromCharCode(code + int);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("clicked");
    setTimeout(function () {
        activeButton.classList.remove("clicked");
    }, 700);
}
var inputarray = [];

function detectKey(currentKey) {
    inputarray.push(currentKey);
}

var totalButton = document.querySelectorAll(".Drum");

for (var i = 0; i < totalButton.length; i++) {
    totalButton[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        detectKey(buttonInnerHTML);
    });
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
}

var score = 0;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));
async function load() {
  for (let k = 0; k < 16; k++) {

    const outputarray = [];
    for (let l = 0; l < k + 1; l++) {

      var newChar = intToChar(ranNums[l] - 1);

      outputarray.push(newChar);
      
      var el = document.getElementsByClassName(newChar)[0];
      var buttonInnerHTML = el.innerHTML;
      buttonAnimation(buttonInnerHTML);
      await timer(700);
    }

    await timer(3000);
    for (let l = 0; l < k + 1; l++) {
      await timer(700);
    }
    outputarray.sort();
    inputarray.sort();
    var str1 = JSON.stringify(inputarray);
    var str2 = JSON.stringify(outputarray);
    if (str1 === str2 ) {
      score++;
      inputarray = [];
    } else {
       setTimeout(function(){alert("game over your score is: " + score)},1000);
      
      break;
    }
  }
}
load();
document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);

});