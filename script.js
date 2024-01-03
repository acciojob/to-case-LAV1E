function toCase(text) {
  // write your code here
	let word = text.toLowerCase();
	for(let i = 0; i<word.length;i++){
		 console.log(`${word}+"-" ${text.toUpperCase()}`);
	}
}

// DO not change the code below

// const text = prompt("Enter text:");
// alert(toCase(text));
