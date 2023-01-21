function playAudio(audio, key) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function audioOnMouseClick () {
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    const key = document.querySelector(`.key[data-key="${this.getAttribute('data-key')}"]`);
    //console.log(a);
    if(!audio) return;
    playAudio(audio, key);    
}

document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('click', audioOnMouseClick);
});

window.addEventListener('keydown', (e) => {
    // console log the event
    // console.log(e);

    // Select the audio associated with the key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Select the particular class(or div) associated with the key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return // stops the function from running altogether
    playAudio(audio, key);    
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it is not a tranform

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

