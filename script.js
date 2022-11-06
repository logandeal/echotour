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

  function changePrompt(text) {
    document.getElementById("prompt").innerHTML = text;
  }

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
      let option = event.results[0][0].transcript;
      if (option == "laughrey") {
        option = "lafferre";
      }
      diagnostic.textContent = `Result received: ${option}.`;
      console.log("dictation started...");
      console.log(`Confidence: ${event.results[0][0].confidence}`);
      console.log(`result: ${event.results[0][0]}`);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onnomatch = () => {
      recognizeSpeech();
      speechRecognition(options);
    };

    recognition.onerror = (event) => {
      diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
      speechRecognition(options);
    };
  }

  function speechRecognition(current_options) {
    var recognitions = 0;
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;
    const SpeechGrammarList =
      window.SpeechGrammarList || webkitSpeechGrammarList;
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
        recognizeSpeech(recognition, diagnostic, bg);
      }
    };
  }

  function start() {
    access_counter++;
    readText();
    let options = ["lafferre hall", "lafferre", "laughrey"];
    speechRecognition(options);
    options = ["left", "right", "forward", "back"];
    //var prompt = document.getElementById("prompt");
    //prompt.setAttribute("attribute", "");
    options = ["go left", "go right", "go forward", "go backward"];
  }
}
