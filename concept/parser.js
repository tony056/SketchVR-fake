var parseMessage = (message) => {
    let channel = message.channel;
    switch (channel) {
        case 'sight':
            parseSightMessage(message.message);
            break;
        case 'sound':
            parseSoundMessage(message.message);
            break;
        case 'controller':
            parseControllerMessage(message.message);
            break;
        default:
            break;
    }

};

var parseSightMessage = (content) => {
    if(isFromSelf(content))
        return;
    let attr = content.attribute;
    if(attr !== 'rotation')
        return;
    let objId = content.id;
    let values = content.value;
    console.log('update rotation');
    updateObjectRotationById(objId, values);
};

var parseSoundMessage = (content) => {
    if(isFromSelf(content))
        return;
    //play the sound file
    let objId = content.id;
    playSoundEffectById(objId);
};

var parseControllerMessage = (content) => {
    if(isFromSelf(content))
        return;
    let attr =  content.attribute;
    let state = content.state;
    // change the state of the gaze selection based on the state variable.
    updateGazePointerState(attr, state);
};

var isFromSelf = (content) => {
    let source = content.from;
    return source === 'VR';
};
