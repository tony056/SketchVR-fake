var updateGazePointerState = (attr, state) => {
    let scene = document.querySelector('a-scene');
    let id = "#gaze";
    scene.querySelector(id).setAttribute('visible', state);
};
