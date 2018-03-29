var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});
// [ 8, 16, 4, 14, 10 ]

var myArray = [7, 8, 9, 1, 2];
processArray(myArray, function (a) {
    return a + 5;
});
// [ 12, 13, 14, 6, 7 ]


function processArray(array, callback) {
	let newArray = [];

	array.forEach(function(arr) {
		newArray.push(callback(arr));
	console.log(newArray);
		
	});

	// console.log(newArray);
}