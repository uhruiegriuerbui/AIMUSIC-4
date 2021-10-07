function setup(){
canvas=createCanvas(600 , 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video , modelLoaded);
pose.on('pose' , gotResults);
}

function draw(){
image(video , 0 , 0 , 600 , 500);

song_status=song.isPlaying();
song1_status=song1.isPlaying();

fill("#FF0000");
stroke("#FF0000");

if(scoreLeftWrist > 0.2){
circle(leftWristX , leftWristY , 20);
song.stop();
if(song1_status==false){
song1.play();
document.getElementById("volume").innerHTML="Playing - Peter Pan Song"
}
}
}

function modelLoaded(){
console.log("The model is initialized");
}

song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song_status="";
song1_status="";
scoreLeftWrist=0;


function preload(){
song=loadSound("music.mp3");
song1=loadSound("music2.mp3");
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function gotResults(results){
if(results.length>0){
console.log(results);
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("Left Wrist Score is = "+scoreLeftWrist);



leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("Left Wrist X="+leftWristX+"Left Wrist Y="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("Right Wrist X="+rightWristX+"Rigth Wrist Y="+rightWristY);
}

















}