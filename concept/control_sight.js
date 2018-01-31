var updateObjectRotationById = (id, values) => {
    let scene = document.querySelector('a-scene');
    let obj = scene.querySelector(id);
    if(obj === undefined)
        return;
    obj.setAttribute('rotation', values);
};
