const { exec } = require("child_process");

exports.resize = (req, res, next) => {
	const input_video = req.files[0];
	const resize_option = req.body.options;

	console.log("////////// INPUT DATA");
	console.log("RESIZE OPTION: " + resize_option);
	console.log("INPUT FILE: " + input_video);

	// changer C++ commande ici
	// exec("COMMAND",
	exec("ls -la", (error, stdout, stderr) => {
	    if (error) {
	    	res.status(500).json(error.message);
	        console.log(`error: ${error.message}`);
	        return;
	    }
	    if (stderr) {
	    	res.status(500).json(stderr);
	        console.log(`stderr: ${stderr}`);
	        return;
	    }
	    // SUCCESS
	    res.status(200).json("OK");
	    // console.log(`stdout: ${stdout}`);
	});
};


exports.testResize = (req, res, next) => {
	exec("GLOG_logtostderr=1 controllers/mediapipe/bazel-bin/mediapipe/examples/desktop/autoflip/run_autoflip \
	--calculator_graph_config_file=./controllers/mediapipe/mediapipe/examples/desktop/autoflip/autoflip_graph.pbtxt \
	--input_side_packets=input_video_path=./videos/videotest.mp4,output_video_path=./videos/nouveau.mp4,aspect_ratio=1:1", (error, stdout, stderr) => {
	    if (error) {
	    	res.status(500).json(error.message);
	        console.log(`error: ${error.message}`);
	        return;
	    }
	    if (stderr) {
	    	res.status(500).json(stderr);
	        console.log(`stderr: ${stderr}`);
	        return;
	    }
	    // SUCCESS
		console.log(`stdout: ${stdout}`);
	    res.status(200).json("OK");
	});
};
