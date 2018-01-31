# SketchVR-fake

## Installation
* Use Homebrew to install node
`brew install node`
* Otherwise, please follow the instruction on Nodejs official website to install node & npm.


## Clone the repo
* Clone or download the repo.

## PubNub Config
Please change the _publishKey_ and _subscribeKey_ in the file `pubnub_manager.js` to your own app on PubNub, or you cannot test the function by yourself.

## Message Channels & Format
The VR part subscribes to 3 channels: `sight, sound, controller`.
1. `sight` channel's format :
```json
{
    "attribute": "rotation",
    "id": "#skbox or #skcy",
    "from": "control",
    "value": "45 45 0"
}
```

> _id_ is the id of the object you would like to control, only *#skbox* or *#skcy* for demo.
> _value_ is the rotation of the object, "45 45 0" means x, y-axis rotate 45 degrees.


2. `sound` channel's format (I put a gunshot sound effect in the scene):
```json
{
    "id": "#aesound",
    "from": "control"
}
```
3. `controller` channel's format :
```json
{
    "attribute": "laser",
    "state": true,
    "from": "control"
}
```
**_state_ to hide or show the gaze cursor, true means show.**
## Run the repo
* `cd SketchVR-fake/concept`
* `npm install` (install dependencies, so just need to run this command once)
* `npm start` (it will open a webpage to localhost:7000 automatically)
