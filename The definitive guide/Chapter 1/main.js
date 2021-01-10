function equalArrays(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
		return true;
	}
}
let scope = 'global';
function testScope() {
	scope = 'local';
	return scope;
}
mainloop: while (true) {
	//Code ommitted...
	continue mainloop; //Jump to the next interation of the named loop
}
let matrix = getData();
var sum = 0, success = false;
compute_sum: if (matrix) {
	for (let x = 0; x < matrix.length; x++) {
		var row = matrix[x];
		if (!row) {
			break compute_sum;
		}
		for (var y = 0; y < row.length y++) {
			var cell = row[y];
			if (!cell) break compute_sum;
			sum += sum;
		}
	}
	success = true;
}
let monster = {
	point: {
		x: 0,
		y: 0
	},
	'main title': "Javascript",
	'sub-title': "The Definitive Guide",
	'for ': 'all audiences',
	author: {
		firstname: "David",
		surname: "Flanagan"
	}
}
function remove(o, p) {
	for (prop in o) {
		if (!prop in p) delete o[prop];
	}
	return o;
}
function subtract(o, p) {
	for (let prop in p) {
		delete 0[prop];
	}
	return o;
}
function result(o, p) {
	let result = new Object;
	Object.assign(result, o, p);
}
// Object.defineProperty(Object.prototype, "extend", {
// 	writable: true,
// 	configurable: true, 
// 	enumerable: false,
// 	 value: function(o) {
// 		 let names = Object.getOwnPropertyNames(o);
// 		 for(var i =0; i < names.length; i++){
// 			 //Skip the properties already in this object:
// 			 if(names[i] in this) continue;
// 			 //get property description from o:
// 			 var desc = Object.getOwnPropertyDescriptor(o, names[i]);

// 		 }
// 	 }
// })
Object.defineProperty(Object.prototype, "extend", {
	writable: true,
	configurable: true,
	enumerable: false,
	value: function (o) {
		let names = Object.getOwnPropertyNames(o);
		// if(o[names] in )
		for (let name of names) {
			if (name in object.prototype) continue;
			let descriptor = Object.getOwnPropertyDescriptor(0, name);
			Object.defineProperty(o, name, descriptor);
		}
	}
})