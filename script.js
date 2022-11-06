const synth = window.speechSynthesis;

voices = synth.getVoices();

let access_counter = 0;

window.onload = function () {
  if (access_counter == 0) start();
  access_counter++;
};

function readText() {
  const promptTxt = document.getElementById("prompt").textContent;
  console.log(promptTxt);

  const utterThis = new SpeechSynthesisUtterance(promptTxt);
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1.3;
  synth.speak(utterThis);

  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`
    );
  };
}

function changePrompt() {
  // change prompt to children nodes
  // call readText
}

function recognizeSpeech1() {
  console.log("dictation started...");
  recognition.start();

  recognition.onresult = (event) => {
    const location = event.results[0][0].transcript;
    diagnostic.textContent = `Result received: ${location}.`;
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

function startRead() {
  console.log("reading...");
  readText();
  // loop changePrompt
}

function startRecognition() {
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  const locations = ["lafferre hall", "lafferre"];

  const grammar = `#JSGF V1.0; grammar locations; public <option> = ${locations.join(
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

  document.getElementById("mic").onclick = () => recognizeSpeech1();
}

function start() {
  startRead();
  startRecognition();
}
