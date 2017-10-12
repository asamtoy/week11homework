var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		arr.forEach(function(element, index, array){
		    array[index] = element* element;
		});
		return arr;
	},

	sum: function (arr) {
		var result = arr.reduce(function(accumulator, currentValue) {
		    return accumulator + currentValue;
		});
		return result;
	},

// Will use Filter, I believe
	// findDuplicates: function (arr) {
	// 	var duplicates = arr.slice().sort();
	// 	var allDuplicates = [];
	// 	for (var i = 0; i < arr.length - 1; i++) {
	// 	    if (duplicates[i + 1] == duplicates[i]) {
	// 	        allDuplicates.push(duplicates[i]);
	// 	    }
	// 	}
	//
	// },


// Should use filter???

	removeAndClone: function (arr, valueToRemove) {
		function notValueToRemove(values){
			return values != valueToRemove;
		}

		var notValue = arr.filter(function(notValueToRemove){
			return notValueToRemove != valueToRemove;
		})


	},

	// findIndexesOf: function (arr, itemToFind) {
	//
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
