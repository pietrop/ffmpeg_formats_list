'use strict';

var ffmpegFormatsListMaker = require("../index.js");
var defaultListOfFormats = require("../ffmpeg_extentions.json");



describe("ffmpeg format list module", function() {
  it("should return a list of ffmpeg formats", function() {
    expect(ffmpegFormatsListMaker.listOfFormats).toEqual(defaultListOfFormats);
  });

   it("should return an updated list of ffmpeg formats", function() {
    expect(ffmpegFormatsListMaker.updatedListOFFormats()).toEqual(defaultListOfFormats);
  });

});