

song_1 ="";
song_2 = "";

function preload(){
song_1 = loadSound("");
song_2 = loadSound("");

}
function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function draw(){

image(video,0,0,500,500);



}