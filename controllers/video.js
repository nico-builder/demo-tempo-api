const { exec } = require("child_process");
const fs = require('fs');


exports.resize = (req, res, next) => {
	const input_video = req.files[0];
	const resize_option = req.body.options;

	// console.log("////////// INPUT DATA");
	// console.log("RESIZE OPTION: " + resize_option);
	// console.log("INPUT FILE: " + JSON.stringify(input_video));

	// C++ COMMAND TO LAUNCH AUTO FLIP
	console.log("GLOG_logtostderr=1 controllers/mediapipe/bazel-bin/mediapipe/examples/desktop/autoflip/run_autoflip \
	--calculator_graph_config_file=./controllers/mediapipe/mediapipe/examples/desktop/autoflip/autoflip_graph.pbtxt \
	--input_side_packets=input_video_path="+ input_video.path +",output_video_path=./videos/nouveau.mp4,aspect_ratio=" + resize_option);

	exec("GLOG_logtostderr=1 controllers/mediapipe/bazel-bin/mediapipe/examples/desktop/autoflip/run_autoflip \
	--calculator_graph_config_file=./controllers/mediapipe/mediapipe/examples/desktop/autoflip/autoflip_graph.pbtxt \
	--input_side_packets=input_video_path="+ input_video.path +",output_video_path=./videos/nouveau.mp4,aspect_ratio=" + resize_option, (error, stdout, stderr) => {
	    if (error) {
	    	console.log(`error: ${error.message}`);
	    	res.status(500).json(error.message);
	        // return;
	    }
	    if (stderr) {
	    	console.log(`stderr: ${stderr}`);
	    	res.status(500).json(stderr);
	        // return;
	    }
	    // SUCCESS
	    // return video path
	    console.log("succes, path: videos/nouveau.mp4");
	    res.status(200).json({path: "videos/nouveau.mp4"});
	    // console.log(`stdout: ${stdout}`);
	});
};

exports.downloadVideo = (req, res, next) => {
	const file = "videos/nouveau.mp4";
	res.download(file);
};

exports.getAWS = (req, res, next) => {
	res.status(200).json("OK");
};