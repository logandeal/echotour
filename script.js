const synth = window.speechSynthesis;

voices = synth.getVoices();

window.onload = () => start();

function readText() {
  console.log(document.getElementById("prompt"));
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

function recognizeSpeech() {
  console.log("dictation started...");
}

function startRead() {
  console.log("reading...");
  readText();
  // loop changePrompt
}

function startRecognition() {
  document.getElementById("mic").onclick = () => recognizeSpeech();
}

function start() {
  startRead();
  startRecognition();
}
