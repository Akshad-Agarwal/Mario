function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump_mario = loadSound("jump.wav");
	coin_mario = loadSound("coin.wav");
	gameover_mario = loadSound("gameover.wav");
	die_mario = loadSound("mariodie.wav");
	kick_mario = loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameconsole");
	instializeInSetup(mario);
	posenet = ml5.poseNet(video, modelReady);
	posenet.on('pose', gotResult);
}

function draw() {
	game()
}

function modelReady() {
	console.log("Model Loaded")
}

function gotResult(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}