
/**
 * Converts Chinese text to speech using the Web Speech API
 * @param text The text to convert to speech
 * @returns A promise that resolves to an audio URL
 */
export const textToSpeech = async (text: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Check if browser supports speech synthesis
    if (!window.speechSynthesis) {
      reject(new Error("Your browser doesn't support speech synthesis"));
      return;
    }

    // Create audio context for recording
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const destination = audioContext.createMediaStreamDestination();
    const mediaRecorder = new MediaRecorder(destination.stream);
    const audioChunks: Blob[] = [];

    // Set up SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN"; // Set language to Chinese
    utterance.rate = 0.7; // Slow down the speech rate
    
    // Find Chinese voice if available
    const voices = window.speechSynthesis.getVoices();
    const chineseVoice = voices.find(
      voice => voice.lang.includes("zh") || voice.lang.includes("cmn")
    );
    
    if (chineseVoice) {
      utterance.voice = chineseVoice;
    }

    // Set up media recorder events
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      resolve(audioUrl);
    };

    // Connect an oscillator to capture the audio
    const oscillator = audioContext.createOscillator();
    oscillator.connect(destination);
    
    // Start recording
    mediaRecorder.start();
    
    utterance.onstart = () => {
      console.log("Speech started");
    };
    
    utterance.onend = () => {
      // Stop recording when speech ends
      mediaRecorder.stop();
      oscillator.disconnect();
    };
    
    utterance.onerror = (event) => {
      reject(new Error(`Speech synthesis error: ${event.error}`));
    };
    
    // Start speech synthesis
    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Alternative implementation using the browser's speech synthesis without recording
 * @param text The text to speak
 */
export const speakText = (text: string): void => {
  if (!window.speechSynthesis) {
    console.error("Your browser doesn't support speech synthesis");
    return;
  }
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  // Create a new utterance
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.7;
  
  // Find Chinese voice if available
  const voices = window.speechSynthesis.getVoices();
  const chineseVoice = voices.find(
    voice => voice.lang.includes("zh") || voice.lang.includes("cmn")
  );
  
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }
  
  // Speak the text
  window.speechSynthesis.speak(utterance);
};
