let roots = {};

roots["lafferre"] = root;

var access_counter = 0;

var synth;
var voices;

// window.onload = function () {
//   if (first_load) {
//     return;
//   }
//   var reloading = sessionStorage.getItem("reloading");
//   if (reloading) {
//     sessionStorage.removeItem("reloading");
//     mystart();
//   }
// };

// function reloadP() {
//   sessionStorage.setItem("reloading", "true");
//   document.location.reload();
// }

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     first_load = false;
//     synth = window.speechSynthesis;
//     synth.cancel();
//     voices = synth.getVoices();
//     console.log(access_counter);
//     if (access_counter == 0) {
//       reloadP();
//     }
//   },
//   false
// );

function mystart() {
  if (access_counter != 0) {
    return;
  }
  access_counter++;
  const main_button = document.getElementById("mic");
  main_button.src = "mic.png";
  main_button.removeAttribute("onclick");
  synth = window.speechSynthesis;
  synth.cancel();
  voices = synth.getVoices();
  experience();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function toBlueMic(time) {
  await sleep(time);
  document.getElementById("mic").src = "blue_mic.png";
}

async function toWhiteMic(time) {
  await sleep(time);
  document.getElementById("mic").src = "white_mic.png";
}

async function testColorChange() {
  await sleep(2000);
  toBlueMic();
  await sleep(2000);
  toWhiteMic();
}

function readText(newText) {
  if (newText != "") {
    document.getElementById("prompt").innerHTML = newText;
  }
  const promptTxt = document.getElementById("prompt").textContent;
  console.log(promptTxt);

  const utterThis = new SpeechSynthesisUtterance(promptTxt);
  console.log(utterThis);
  utterThis.voice = voices[0];
  utterThis.pitch = 1.3;
  utterThis.rate = 1.2;
  synth.speak(utterThis);
  console.log(access_counter);
}

function recognizeSpeech(recognition, diagnostic, bg, options) {
  console.log("dictation started...");
  recognition.start();

  recognition.onresult = (event) => {
    let option_inputted = event.results[0][0].transcript;
    if (option_inputted == "laughrey") {
      option_inputted = "lafferre";
    }
    diagnostic.textContent = `Result: ${option_inputted}.`;
    console.log("dictation started...");
    console.log(`Confidence: ${event.results[0][0].confidence}`);
    console.log(`result: ${event.results[0][0]}`);
    for (var i = 0; i < options.length; i++) {
      if (options[i] == option_inputted) {
        return options[i];
      }
    }
    speechRecognition(options);
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onnomatch = () => {
    recognizeSpeech();
    speechRecognition(options);
  };

  recognition.onerror = (event) => {
    diagnostic.textContent = `Error: ${event.error}`;
    speechRecognition(options);
  };
}

function speechRecognition(current_options) {
  var recognitions = 0;
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  const options = current_options;

  const grammar = `#JSGF V1.0; grammar options; public <option> = ${options.join(
    " | "
  )};`;

  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();

  speechRecognitionList.addFromString(grammar, 1);

  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const diagnostic = document.getElementById("diagnostic");
  const bg = document.querySelector("html");

  document.getElementById("mic").onclick = () => {
    if (recognitions == 0) {
      recognitions++;
      recognizeSpeech(recognition, diagnostic, bg, options);
    }
  };
}

function experience() {
  readText("");
  let options = ["lafferre hall", "lafferre", "laughrey"];
  speechRecognition(options);
  //var node = roots["lafferre"];
  var node = root;
  // var node = new Node("the main entrance.", null, null, null, null);
  console.dir(root);
  var person = new Person();
  options = ["left", "right", "forward", "back", "leave"];
  while (true) {
    giveInstructions(node, person);
    var next_direction = speechRecognition(options);
    if (next_direction === "leave") {
      endTour();
      break;
    }
    node = takeInstruction(node, next_direction, person);
  }
  //var prompt = document.getElementById("prompt");
  //prompt.setAttribute("attribute", "");
  options = ["go left", "go right", "go forward", "go backward"];
}

console.dir(root);
