
// Specify colors, can be either color names or hexadecimal for exampel
const colors = ["blue","green","yellow","orange","red","purple","pink","#cdcdcd"];

// The actual changing of color
document.onclick = () => {  									// change when clicking anywhere on screen
	document.body.style.backgroundColor							// specify that the background color of the body should change
    	= colors[Math.floor(Math.random() * colors.length)];	// random choose color from or list of colors
};

/* 
You have to use both Math.floor and Math.random.
Math.random give you an number BETWEEN 0 and 1, this will not be a whole number.
Take it times the lenght of colors (8).
You will now have a number BETWEEN 0 and 8.
To make the number an integer apply Math.floor. (rounds down to the nearest whole number)
In other words you will now randomly get 0, 1, 2, 3, 4, 5, 6, 7. 
The whole number will be used to pick what index in the color list to use. 
In other words what color. (index 0 is the first color in the list, and so on)
*/