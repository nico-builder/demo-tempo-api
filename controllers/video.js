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
