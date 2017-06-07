'use strict';
var fs = require("fs");
var cp = require('child_process');

function updatedListOfFfmpegFormats(){

	var formatExtensionsReultsList = []

	var command = 'ffmpeg';
	var args = ['-formats'];

	// for ease of use it creates a new process in a syncronous way 
	var childProcess = cp.spawnSync(command, args, {
	    cwd: process.cwd(),
	    env: process.env,
	    stdio: 'pipe',
	    encoding: 'utf-8'
	});

	//the child process output gives 3 outputs, the middle one is our text content as returned by ffmpeg when running `ffmpeg -formats` from terminal
	var listOfFormats = childProcess.output[1];
	// the list header is seprated with a `--` symbol.  see example in `ffmpeg_formats_raw_extensions.txt`
	listOfFormats = listOfFormats.split("--")[1];

	//dividing into lines 
	var linesListOfFormats = listOfFormats.split("\n");

	// remove all empty lines frm the array. Probably just first and last but doing this to be safe.
	// https://stackoverflow.com/questions/19888689/remove-empty-strings-from-array-while-keeping-record-without-loop
	linesListOfFormats = linesListOfFormats.filter(Boolean)

	//feedback on number of lines identified
	console.log("Number of formats in list",linesListOfFormats.length);

	// iterate over the lines of formats 
	linesListOfFormats.forEach(iterateOverLinesListFormats);

	// helper funciton to iterate over the lines of formats
	function iterateOverLinesListFormats(item, index,collection){
		// split each line on space
		var itemArray = item.split(" ")
		//// eg 
		//// [ '', 'DE', '', 'yuv4mpegpipe', '', '', 'YUV4MPEG', 'pipe' ]
		var extension = itemArray[3];
		// if meets validation add to list 
		if(extension !== "" &&  extension !== undefined){
			formatExtensionsReultsList.push(extension);
			// however spacing is a bit of sometimes, so in that case extension is in second element
			// eg 
			// [ '','DE',  'wtv',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  'Windows',  'Television','(WTV)' ]
		}else if(extension === "" ){
			 extension = itemArray[2];
			 if(extension !== "" &&  extension !== undefined){
			 		formatExtensionsReultsList.push(extension);
			 }
		}
		
	}



	//resulting list count
	console.log("number of formats identified", formatExtensionsReultsList.length)
	// show preview 
	// console.log(formatExtensionsReultsList)
	//save json, array of list 
	fs.writeFileSync("ffmpeg_extentions.json", JSON.stringify(formatExtensionsReultsList))

	
	return formatExtensionsReultsList;
	
}


module.exports = {
    listOfFormats: require("./ffmpeg_extentions.json"),
    updatedListOFFormats: updatedListOfFfmpegFormats
}

