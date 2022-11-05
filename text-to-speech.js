const synth = window.speechSynthesis;

voices = synth.getVoices();

window.onload = () => readText();

function readText(event) {
  console.log(document.getElementById("prompt"));
  const promptTxt = document.getElementById("prompt").textContent;
  console.log(promptTxt);

  const utterThis = new SpeechSynthesisUtterance(promptTxt);
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);

  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`
    );
  };
}

function changePrompt(event) {
  // change prompt to children nodes
  // call readText
}

document.getElementById("mic").onclick = () => recognizeSpeech();

function recognizeSpeech(event) {}
