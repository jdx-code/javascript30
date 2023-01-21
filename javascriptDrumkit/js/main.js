window.addEventListener('keydown', (e) => {
    // console log the event
    console.log(e);
    // Select the audio associated with the key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Select the particular class(or div) associated with the key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return // stops the function from running altogether
    audio.currentTime = 0 // rewind to the start
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it is not a tranform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

