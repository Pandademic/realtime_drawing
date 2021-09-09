function setup(){
   video=createCapture(VIDEO);
   video.size(550,500);
   canvas=createCanvas(150,150);
   canvas.position(560,150);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses); 
}
function draw(){
   background('#1c79c0');

}
function modelLoaded(){
    console.log('POSENET HAS ARRIVED!');
}
function gotPoses(){
    if(results.length>0){
        console.log(results);
    }
    else {
        console.error('There are no results');
    }        
}