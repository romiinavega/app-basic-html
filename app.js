const buttons = document.querySelectorAll('button');

const playnote = event => {

    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    //console.log(AudioId)
    console.log(audioId);
    const audio = document.getElementById (audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();

}

buttons.forEach(
button => button.addEventListener('click', playnote )
);

const keyNoteDown = event =>{
    //console.log(event);
    const key = event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key= "${key}"]`)
    if(button) button.click();

}

document.addEventListener('keydown', keyNoteDown);
const playnote = event => {
    console.log (event.target.dataset.note);
}

buttons.forEach(
button => button.addEventListener('click' , alert ('hola crayola') )
);
