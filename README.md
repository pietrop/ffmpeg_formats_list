#  List of ffmpeg file formats

A modules that gives you a list of ffmpeg file formats.

## Motivation 

For when youy need a list of formats supported by `ffmpeg`. possibly as an array. 

For instance if you are working on an AV project (eg like [autoEdit](www.autoEdit.io)) where you are using `ffmpeg` and want to take advantage of the wide variery of file types it supports, but you also want to implement file type validations. So 

This script generates a list that can be used for this purpose. 

## Usage

### Ready to use list

To use the array list in your project the simplest way is to [get/copy and paste the ready made list from `ffmpeg_extensions.json`](ffmpeg_extentions.json).

### To make your own list

If you have different version of ffmpeg, [from what you see in the example file](ffmpeg_formats_raw_extensions.txt) but would still just like to use the list, as described above, then you can run this module as a script. 

```
npm start
```

[The list is now up to date and you can find it here `ffmpeg_extensions.json`](ffmpeg_extentions.json)

### To use it as module in your project

To integrate this into your ndoe application. 


```
npm install https://github.com/pietrop/ffmpeg_formats_list
```

_I'll publish to `npm` as soon as I get some feedback on the module_

Then you can do  either of these 

```js 
var ffmpegFormatsListMaker = require("../index.js");

// returns the default list
var defaultList = ffmpegFormatsListMaker.listOfFormats;

//or you can run the module returns an updated list matching the ffmpeg formats specs of your system
var updatedList = ffmpegFormatsListMaker.updatedListOFFormats()
```

optionally you can provide you own path to `ffmpeg` binary, eg for use case like working in nwjs or electron. This should work well with moduels such as[`ffmpeg-static`](https://github.com/eugeneware/ffmpeg-static)

```js 
var ffmpegFormatsListMaker = require("../index.js");

//optionally you can provide you own path to ffmpeg binary, eg for use case like working in nwjs or electron 
ffmpegFormatsListMaker.setffmpegPath(examplePath);

//runs the module returns an updated list matching the ffmpeg formats specs of your system
var updatedList = ffmpegFormatsListMaker.updatedListOFFormats()
```



## Prerequisits to generate your own list
If you are not using the example list but want to make your own, you'll need ffmpeg installed on the machine. 
[On mac os x it's reccomended to use brew to install](https://trac.ffmpeg.org/wiki/CompilationGuide/MacOSX)

First install home brew if you don't already have it

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then install ffmpeg


```
brew install ffmpeg
```

you are done, try 

```
which ffmpeg
```

or 

```
ffmpeg -formats
```

to verify it has all gone smoothly.

## Test

Using jasmine for testing. To run tests.

```
npm install
```

```
npm test
```

Pretty basic test coverage for now, but it's a start.


## TODO
 
- [ ] for audio/video validation use, remove subtitle formats from your list, eg `vtt`, `srt` etc... [here is a list](https://www.ffmpeg.org/general.html#Subtitle-Formats)


## Contributing 

Feel free to fork, make sudgestions, raise an issue etc..

## Contributor 

- [Pietro](http://github.com/pietrop)

