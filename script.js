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
  
  