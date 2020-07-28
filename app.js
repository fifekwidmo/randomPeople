const fs = require('fs');
const {gender, maleFirstNames, femaleFirstNames, lastNames} = require('./store');
const people = [];
const randChoice = arr =>{
	return arr[Math.floor(Math.random() * arr.length)];
} 
const randNumber = (min, max) => {
	return Math.floor((Math.random() * (max - min)) + min)
}
for (let i = 0; i < 21; i++) {
	let randomGender = (randChoice(gender));
  if (randomGender == 'female') {
    randomFirstName = (randChoice(femaleFirstNames));
  } else {
    randomFirstName = (randChoice(maleFirstNames));
  };	
	let randomLastName = (randChoice(lastNames));
	let randomAge = (randNumber(1, 99));
	people.push({
		gender : randomGender,
		firstName : randomFirstName,
		lastName : randomLastName,
		age : randomAge
	});
	// console.log('20 times');
}
const peopleJsonString = JSON.stringify(people, null, ' ');
fs.writeFile('ppl.txt', peopleJsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});