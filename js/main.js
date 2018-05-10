
// 5. Type the following code into your main.js file and in a comment next to or below each line, identify what type of data primitive each one is.

// strings
var testOne = "What kind of variable am I?"; 
// numbers
var testTwo = 256;
// booleans
var testThree = false;
// strings
var testFour = 'true';
// strings
var testFive ='128';
// strings
var testSix ="";


// 6. Type the following code into your main.js file and, in a comment below each line, identify what type of data 
// primitive is, and EXACTLY WHAT VALUE IS CONTAINED IN EACH VARIABLE.

// CONCATENATED STRINGS the word "hello" and "there"
var testOne = "hello" + "there";
// STRING AND NUMBER string that contains "100" and the number 28
var testTwo = '100' + 28;
// BOOLEAN PLUS NUMBER boolean true and number 5 
var testThree = true + 3  ;
// STRING PLUS NUMBER string contains the word false plus the number 5
var testFour = 'false' + 5 ;
// STRING MINUS NUMBER string that contains 128 minus the number 3
var testFive = '128' - 3 ;
// an empty string times the number 9
var testSix = "" * 9  ;
// string contains word zero minus number 1 ERROR!
var testSeven = 'zero' - 1 ;
// selects all the letters contained in the string which contains the word five ERROR!
var testEight= 'five'.length;

var testNine = 'five'[0] + 'ever';

var testTen = 'a' + 'b';

var testEleven = 'number'.length < 7;

var testTwelve = '12' == 12 ;

var testThirteen = 'twelve'== 12;

var testFourteen = '14'=== 14;

var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 
	'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];


// 7.Given these variables what do you expect the console msg to be?
var string1= "Hello, ";

var string2= "my name is ";

var string3= "Kingsley Pappagiorgio.";

var combinedStrings= string1+ string2 + string3;

console.log(combinedStrings);


// 8. Given these variables what do you expect the console msg to be?
var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);


// 9.

var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation);


// 10.
var num4 = 5;

var num5 = 0;

if(num4>1) {
	console.log("Num4 is greater than 1");

}else{
	console.log("Num4 is NOT greater than 1");
};


// 11.
var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");

}else if (num5 === 0 || true) {
	console.log("Else if statement ran");

}else {
	console.log("Else statement ran");

};


// 12.
var num4 = 5;

var num5 = 0;

if(num4 > num5 && num4 === num5) {
	console.log("If statement ran!");

}else if (num5 === "0" || true) {
	console.log("Else if statement ran");

}else {
	console.log("Else statement ran");

};


// 13.
var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {
	console.log(i, string1[i]);

};


// 14.
var string2 = "coding";

var total = 0;

for(var i = 0; i < string2.length; i++) {
	total = total + i;

};

console.log(total);


// 15.
var string3 = "onomatopoeia";

for(var i = 0; i < string3.length; i++) {
	if(string3[i] == "o") {
		console.log(i, string3[i]);
	};

};


// 16.
var string4 = "You're gonna need a bigger boat.";

for(var i = 0; i < string4.length; i++) {
	
	if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i" ||
		string4[i] == "o" || string4[i] == "u") {

		console.log(string4[i]);
	};
};


// 17.
function testStuff(a,b) {
	if(a > 25 && b < 100) {

		console.log(a + " is greater than 25 and " + b +" is less than 100");
	} else {
		console.log(a+ " is NOT greater than 25 or "+ b + " is NOT less than 100");
	};

};

testStuff(10,100);

testStuff(26,99);

testStuff(100,25);


// 18.
function testStuff(c, d) {

	if(c == 25) {

		return c + " is equal to 25";

	} else if (d <= 100) {
		
		return d + " is less than or equal to 100";

	} else {
		
		return "Neither if nor else if statement ran";
	};
	
};

testStuff(26, 101);

testStuff(25, 99);

testStuff(102, 24);


// 19.
function countVowels(someString) {

	var vowels = 0;

	for(var i = 0; 1 < someString.length; i++) {

		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {

		// vowels++:
		
		};
	};

	return vowels;
};

countVowels("I am the very model of a modern major general");

countVowels("Exeunt pursued by a bear");

countVowels("o1234567891o");






























