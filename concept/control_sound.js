var playSoundEffectById = (id) => {
    let scene = document.querySelector('a-scene');
    let soundObj = scene.querySelector(id);
    soundObj.components.sound.playSound();
};
