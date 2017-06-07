'use strict';

var ffmpegFormatsListMaker = require('../index.js');
var defaultListOfFormats = require('../ffmpeg_extentions.json');

//exampel paths for ffmpeg testing
var examplePath = '/usr/local/bin/ffmpeg';
var wrongExamplePath = '/some/random/made/up/path'

describe('ffmpeg format list module', function() {

	it('should return a list of ffmpeg formats', function() {
		expect(ffmpegFormatsListMaker.listOfFormats).toEqual(defaultListOfFormats);
	});

	it('should return an updated list of ffmpeg formats', function() {
		expect(ffmpegFormatsListMaker.updatedListOFFormats()).toEqual(defaultListOfFormats);
	});

	it('should allow to set a path for ffmpeg', function() {
    	//set path 
    	ffmpegFormatsListMaker.setffmpegPath(examplePath)

    	expect(examplePath).toEqual(ffmpegFormatsListMaker.returnffmpegPath());

    	expect(wrongExamplePath).not.toEqual(ffmpegFormatsListMaker.returnffmpegPath());
    });

    //this cover use cases when packaging module inside of nwjs or electron type of apps
    it('should return formats even with a custom path set for ffmpeg', function() {
    	//set path 
    	ffmpegFormatsListMaker.setffmpegPath(examplePath);
    	//only testing generated list, coz defaults reads from json 
    	expect(ffmpegFormatsListMaker.updatedListOFFormats()).toEqual(defaultListOfFormats);
    });

   //TODO: to do this test need better validare of whether a valid path for ffmpeg has been provided
    // it('should not return formats if the a custom path provided for for ffmpeg in invalid', function() {
    	
    // 	//set path 
    // 	ffmpegFormatsListMaker.setffmpegPath(wrongExamplePath);
    // 	//only testing generated list, coz defaults reads from json 
   	//  	expect(ffmpegFormatsListMaker.updatedListOFFormats()).not.toEqual(defaultListOfFormats);
   	// });

});