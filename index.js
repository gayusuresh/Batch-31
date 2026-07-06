const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

if (!SpeechRecognition) {
      alert("sorry your browser not supported this voice ")
}
else {
   
  recognition.continuous = true;
  recognition.lang = "en-US";
 recognition.interimResults = true;
  recognition.maxAlternatives = 1;

    
    btnstart.addEventListener("click", () => {
        recognition.start();
        alert("speech recognition started")
    })

      btnstop.addEventListener("click", () => {
        recognition.stop();
        alert("speech recognition removed");
      });
  }
recognition.onresult = (e) => {
  let transcript = "";
  for (let i = e.resultIndex; i < e.results.length; i++) {
    transcript += e.results[i][0].transcript;
  }
  result.textContent = transcript;
};
