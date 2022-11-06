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
  
  const inputForm = document.querySelector("form");
  const inputTxt = document.querySelector(".txt");
  const voiceSelect = document.querySelector("select");
  
  const pitch = document.querySelector("#pitch");
  const pitchValue = document.querySelector(".pitch-value");
  const rate = document.querySelector("#rate");
  const rateValue = document.querySelector(".rate-value");
  
  let voices = [];
  
  // function populateVoiceList() {
  //   voices = synth.getVoices();
  
  //   for (const voice of voices) {
  //     const option = document.createElement("option");
  //     option.textContent = `${voice.name} (${voice.lang})`;
  
  //     if (voice.default) {
  //       option.textContent += " — DEFAULT";
  //     }
  
  //     option.setAttribute("data-lang", voice.lang);
  //     option.setAttribute("data-name", voice.name);
  //     voiceSelect.appendChild(option);
  //   }
  // }
  
  // populateVoiceList();
  // if (speechSynthesis.onvoiceschanged !== undefined) {
  //   speechSynthesis.onvoiceschanged = populateVoiceList;
  // }
  
  window.onload = (event) => {
    event.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(/*inputTxt.value*/"Hello World");
  //   const selectedOption =
  //     voiceSelect.selectedOptions[0].getAttribute("data-name");
  //   for (const voice of voices) {
      // if (voice.name === selectedOption) {
      //   utterThis.voice = voice;
      // }
  //   }
  //   utterThis.pitch = pitch.value;
  //   utterThis.rate = rate.value;
    synth.speak(utterThis);
    utterThis.onpause = (event) => {
      const char = event.utterance.text.charAt(event.charIndex);
      console.log(
        `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`
      );
    };
  
  //   inputTxt.blur();
  };
  
  // pitch.onchange = () => {
  //   pitchValue.textContent = pitch.value;
  // };
  
  // rate.onchange = () => {
  //   rateValue.textContent = rate.value;
  // };
  