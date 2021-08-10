prediction_1="";
prediction_2="";

Webcam.set({
width:350,    
img_format:"png",
png_quality:100,
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture" src=""'+data_uri+'">';
});
}

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FbBLRDBhy/model.json',modelLoaded);

function modelLoaded(){
console.log("Model is Loaded");
}