noseX=0;
noseY=0;

function setup(){
   video=createCapture(VIDEO);
   video.size(550,500);
   canvas=createCanvas(350,350);
   canvas.position(560,150);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses); 
}
function draw(){
    background('#1c79c0');
    fill('#ffd900');
    stroke('#ffd900');
    square(noseX,noseY,100);

}
function modelLoaded(){
    console.log('POSENET HAS ARRIVED!');
}
function gotPoses(){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+" noseY="+noseY);

        
    }
    else {
        console.error('There are no results');
    }        
}