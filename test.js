'use strict';
var ffmpegFormatsListMaker = require("./index.js");
var defaultListOfFormats = require("./ffmpeg_extentions.json");

console.log();

console.log(ffmpegFormatsListMaker.updatedListOFFormats());

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(ffmpegFormatsListMaker.listOfFormats).toEqual(defaultListOfFormats);
  });
});