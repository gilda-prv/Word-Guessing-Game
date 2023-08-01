//Word and Hints Object
const options = {
  سن: "چه چیزی بالا می رود اما هرگز پایین نمی آید؟",
  فردا: "چیزی که همیشه می آید اما هرگز نمی رسد؟",
  مشاوره:
    "همه در دنیا به آن نیاز دارند، اما معمولا بدون گرفتن آن را می دهند. چیست؟",
  فرانسه: "گیوتین اختراع کدام کشور است؟",
  اورست: "قبل از کشف اورست، بلندترین کوه روی زمین چه بوده است؟",
  بروجرد: "پاریس کوچولو لقب کدام شهر ایران است؟",
  بابل: "شهر بهار نارنج لفب کدام شهر ایران است؟",
  تروئل: "دوئل بین سه نفر چه نام دارد؟ ",
  بوفچه: "جوجه‌های جغد چه نامیده می‌شوند؟",
  سلول: "کوچک ترین واحد ساختمانی بدن انسان کدام است؟",
};

//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;

//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
  let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};

//Start Game
function chooseDif1() {
  window.location.href = "persian.html";
}
function chooseDif2() {
  window.location.href = "persian.html";
}
function chooseDif3() {
  window.location.href = "persian.html";
}
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});

//Stop Game
const stopGame = () => {
  controls.classList.remove("hide");
};

//Generate Word Function
const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInpSection.innerText = "";
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint">
  <span>راهنما: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += '<span class="inputSpace">_ </span>';
  });

  //Display each element as span
  userInpSection.innerHTML = displayItem;
  userInpSection.innerHTML += `<div id='chanceCount'>شانس باقی مانده: ${lossCount}</div>`;
};

//Initial Function
const init = () => {
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
  letterContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  generateWord();
  const persianCharacters = [
    1574, 1575, 1576, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586,
    1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1601, 1602, 1603, 1604,
    1605, 1606, 1607, 1608, 1609, 1662, 1670, 1688, 1711,
  ];
  //For creating letter buttons
  for (let i = 0; i < persianCharacters.length; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(persianCharacters[i]);

    //Character button onclick
    button.addEventListener("click", () => {
      message.innerText = `حرف صحیح`;
      message.style.color = "#008000";
      message.style.marginTop = "18px";
      let charArray = randomWord.toUpperCase().split("");
      let inputSpace = document.getElementsByClassName("inputSpace");

      //If array contains clicked value replace the matched Dash with Letter
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //If character in array is same as clicked button
          if (char === button.innerText) {
            button.classList.add("correct");
            //Replace dash with letter
            inputSpace[index].innerText = char;
            //increment counter
            winCount += 1;
            //If winCount equals word length
            if (winCount == charArray.length) {
              resultText.innerHTML = "شما برنده شدید";
              resultText.style.marginBottom = "20px";
              resultText.style.color = "#fff6a9";
              resultText.style.textShadow =
                "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
              resultText.style.fontSize = "18px";
              startBtn.innerText = "راه اندازی مجدد";
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount -= 1;
        document.getElementById(
          "chanceCount"
        ).innerText = `شانس باقی مانده: ${lossCount}`;
        message.innerText = `حرف نادرست`;
        message.style.color = "#ff0000";
        message.style.marginTop = "15px";
        if (lossCount == 0) {
          word.innerHTML = `کلمه: <span>${randomWord}</span>`;
          word.style.marginBottom = "20px";
          word.style.color = "#fff6a9";
          word.style.textShadow =
            "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
          word.style.fontSize = "18px";
          resultText.innerHTML = "شما باختید";
          resultText.style.marginBottom = "20px";
          resultText.style.color = "#fff6a9";
          resultText.style.textShadow =
            "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff, 0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff";
          resultText.style.fontSize = "18px";
          blocker();
        }
      }

      //Disable clicked buttons
      button.disabled = true;
    });

    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};

window.onload = () => {
  init();
};
