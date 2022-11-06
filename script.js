const synth = window.speechSynthesis;

voices = synth.getVoices();

var access_counter = 0;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Hello");
    if (access_counter == 0) {
      start();
    }
  },
  false
);

function readText() {
  var uttered = 0;
  const promptTxt = document.getElementById("prompt").textContent;
  console.log(promptTxt);

  const utterThis = new SpeechSynthesisUtterance(promptTxt);
  console.log(utterThis);
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1.3;
  synth.speak(utterThis);
  console.log(access_counter);
}

function recognizeSpeech(recognition, diagnostic, bg) {
  console.log("dictation started...");
  recognition.start();

  recognition.onresult = (event) => {
    const option = event.results[0][0].transcript;
    diagnostic.textContent = `Result received: ${option}.`;
    console.log("dictation started...");
    console.log(`Confidence: ${event.results[0][0].confidence}`);
    console.log(`result: ${event.results[0][0]}`);
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onnomatch = () => {
    recognizeSpeech1();
  };

  recognition.onerror = (event) => {
    diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
  };
}

function speechRecognition(current_options) {
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

  const diagnostic = document.querySelector(".output");
  const bg = document.querySelector("html");

  document.getElementById("mic").onclick = () =>
    recognizeSpeech(recognition, diagnostic, bg);
}

function start() {
  access_counter++;
  readText();
  access_counter++;
  let options = ["lafferre hall", "lafferre"];
  speechRecognition(options);
  //
  //var prompt = document.getElementById("prompt");
  //prompt.setAttribute("attribute", "");
  options = ["go left", "go right", "go forward", "go backward"];
}
