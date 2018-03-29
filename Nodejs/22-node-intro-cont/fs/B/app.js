var fs = require('fs');

function copy(filelocation) {
	var readable = fs.createReadStream(filelocation, { encoding: 'utf8', highWaterMark: 32*1024 });

	var writeable = fs.createWriteStream(filelocation+'.new');

	readable.pipe(writeable);
}

copy('./greet.txt')

