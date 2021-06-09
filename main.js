Webcam.set({
height : 300,
width : 350,
Image_quality : 'png',
png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
