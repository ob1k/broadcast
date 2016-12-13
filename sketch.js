var video;
function setup() {
  createCanvas(720, 480);
  background(51);
  video = createCapture(VIDEO);
  video.size(720, 480);
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  
}