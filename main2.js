"use strict";

var button = document.getElementById("enter");
var height;
var type;//this is a small change.
var blank;
var treeTime; 

button.addEventListener("click", stackTree);

function stackTree(event) {
	height = parseInt(document.getElementById("treeHeight").value);
	type = document.getElementById("treeType").value;
	var typeCount = 1;
	var spaces = height;	
	// console.log("height", height);
	if (type.length === 1 && height > 0) {
		for (var i = 0; i < height; i++) {
			blank = " ".repeat(spaces);
			// console.log("do i work", height);
			var numOfTypes = type.repeat(typeCount);
			treeTime = blank + numOfTypes;
			spaces -= 1;
			typeCount += 2;
			console.log(treeTime);
			// console.log("numOfTypes", numOfTypes);
		}
	} else alert("Enter a value higher than 0 and only 1 character. Try again!")	
};




