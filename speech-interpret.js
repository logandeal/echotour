const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const locations = ["lafferre hall", "lafferre"];

const options = ["go left", "go right", "go forward", "go backward"];

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

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
// const hints = document.querySelector(".hints");

// let optionsHTML = "";
options.forEach((option, i) => {
  console.log(option, i);
  //   colorHTML += `<span style="background-color:${color};"> ${color} </span>`;
});
// hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

document.getElementById("mic").onclick = () => {
  recognition.start();
  console.log("Ready to receive an option command.");
};
