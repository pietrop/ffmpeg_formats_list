# Parsing ffmpeg extensions to get a file list

## motivation 

Let's say you are working on a AV project (eg like [autoEdit](www.autoEdit.io)) where you are using `ffmpeg` and want to take advantage of the wide variery of file types it supports, but you also want to implement file type validations. So you need a list of formats supported by `ffmpeg`. possibly as an array. 

This script generates a list that can be used for this purpose. 

## Usage

### To use the array list in your project

Either just [get the ready made list from `ffmpeg_extensions.json`](ffmpeg_extentions.json)

### To make your own list

```
npm start
```

[The list is now up to date and you can find it here `ffmpeg_extensions.json`](ffmpeg_extentions.json)

### To use a module in your project

To integrate into 

```
npm install
```

## Prerequisits to generate your own lsit
If you are not using the example list but want to make your own, you'll need ffmpeg installed on the machine. 
[On mac os x it's reccomended to use brew to install](https://trac.ffmpeg.org/wiki/CompilationGuide/MacOSX)


## Test

Using jasmine for testing. To run tests.

```
npm install https://github.com/pietrop/ffmpeg_formats_list
```

Then you can do  either of these 

```js 
var ffmpegFormatsListMaker = require("../index.js");

//returns the default list
var defaultList = ffmpegFormatsListMaker.listOfFormats;

//runs the module returns an updated list matching the ffmpeg formats specs of your system
var updatedList = ffmpegFormatsListMaker.updatedListOFFormats()
```


## TODO
 
- [ ] for audio/video use remove subtitle formats from yoru list, eg `vtt`, `srt` etc... 


## Contributing 

Feel free to fork, make sudgestions, raise an issue etc..

## Contributor 

- [Pietro](http://github.com/pietrop)

