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
  start_experience();
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
    console.log("readText");
    document.getElementById("prompt").innerHTML = newText;
  }
  var promptTxt = document.getElementById("prompt").textContent;
  // console.log(promptTxt);

  if (promptTxt == "Thank you for touring lafferre!") {
    promptTxt = "Thank you for touring laughrey!";
  }
  const utterThis = new SpeechSynthesisUtterance(promptTxt);
  // console.log(utterThis);
  utterThis.voice = voices[0];
  utterThis.pitch = 1.3;
  utterThis.rate = 1.2;
  synth.speak(utterThis);
  // console.log(access_counter);

  return utterThis;
}

function dictation(
  recognition, // 1
  diagnostic, // 2
  bg, // 3
  options, // 4
  node, // 5
  person, // 6
  isLocation // 7
) {
  console.log("dictation started...");

  const mic_icon = document.getElementById("mic");
  mic_icon.src = "blue_mic.png";

  recognition.start();

  recognition.onresult = (event) => {
    mic_icon.src = "mic.png";
    let option_inputted = event.results[0][0].transcript;
    if (option_inputted == "laughrey" || option_inputted == "laughing") {
      option_inputted = "lafferre";
    }
    diagnostic.textContent = `Result: ${option_inputted}.`;
    console.log("dictation started...");
    console.log(`Confidence: ${event.results[0][0].confidence}`);
    console.log(`result: ${event.results[0][0]}`);
    for (var i = 0; i < options.length; i++) {
      if (options[i] == option_inputted) {
        if (isLocation) {
          console.log("if in for loop");
          evaluate_option_start(node, person);
        }
        console.log("for loop");
        node = evaluate_option(options[i], node, person);
        console.dir(node);
      }
    }
    speechRecognition(options, node, person, isLocation);
  };

  recognition.onspeechend = () => {
    mic_icon.src = "mic.png";
    recognition.stop();
  };

  recognition.onnomatch = () => {
    mic_icon.src = "mic.png";
    recognizeSpeech();
    speechRecognition(options, node, person, isLocation);
  };

  recognition.onerror = (event) => {
    mic_icon.src = "mic.png";
    diagnostic.textContent = `Error: ${event.error}`;
    speechRecognition(options, node, person, isLocation);
  };
}

function speechRecognition(current_options, node, person, isLocation) {
  var recognitions = 0;

  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();

  const diagnostic = document.getElementById("diagnostic");
  const bg = document.querySelector("html");

  const options = current_options;

  const grammar = `#JSGF V1.0; grammar options; public <option> = ${options.join(
    " | "
  )};`;

  speechRecognitionList.addFromString(grammar, 1);

  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  document.getElementById("mic").onclick = () => {
    if (recognitions == 0) {
      recognitions++;
      return dictation(
        recognition, // 1
        diagnostic, // 2
        bg, // 3
        options, // 4
        node, // 5
        person, // 6
        isLocation // 7
      );
    }
  };
}

function start_experience() {
  readText("");
  var node = root;
  var person = new Person();
  let options = ["lafferre hall", "lafferre", "laughrey"];
  speechRecognition(options, node, person, true);
}

function evaluate_option_start(node, person) {
  giveInstructions(node, person);
  prompt_option(node, person);
}

function prompt_option(node, person) {
  console.dir(node);
  options = ["left", "right", "forward", "back", "leave"];
  speechRecognition(options, node, person, false);
  console.dir(node);
}

function evaluate_option(direction_chosen, node, person) {
  if (direction_chosen === "leave") {
    readText("Thank you for touring lafferre!");
    return;
  }
  new_node = takeInstruction(node, direction_chosen, person);
  console.dir(new_node);
  giveInstructions(new_node, person);
  prompt_option(new_node, person);
  return new_node;
}

// Tell user bad input
// Update prompt
// Make mic button blue and red
