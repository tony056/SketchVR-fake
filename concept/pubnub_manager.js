const subscribedChannels = ['sight', 'controller', 'sound'];
var pubnub;

var initPubNub = () => {
    pubnub = new PubNub({
        publishKey : 'pub-c-aa27a851-217e-4b58-b966-ed0f1b09fc44',
        subscribeKey : 'sub-c-844471c8-065d-11e8-8d56-a665a8d8f6e5'
    });
    publishSampleMessage();
    addListener();
    subscribe();
};

var publishSampleMessage = () => {
    console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
    var publishConfig = {
        channel : "VR",
        message : "Hello from PubNub Docs!"
    };
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    });
};

var addListener = () => {
    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
            parseMessage(message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    });
};

var subscribe = () => {
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: subscribedChannels
    });
};
