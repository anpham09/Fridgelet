function toggleAudio(speakerElement) {
    const container = speakerElement.parentElement;
    const audio = container.querySelector("audio");

    if (audio.paused) {
        // Pause all other audios
        const allAudios = document.querySelectorAll("audio");
        allAudios.forEach(a => {
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
            }
        });

        audio.play();
        speakerElement.classList.add("playing");
    } else {
        audio.pause();
        speakerElement.classList.remove("playing");
    }

    // Reset icon when audio ends
    audio.onended = () => {
        speakerElement.classList.remove("playing");
    };
}