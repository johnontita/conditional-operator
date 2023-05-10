//for conditional operators one line of code is executed.
// It has three parts condition,if part,else part .                                
// It supports template literals which is not the case in if else statement


const age=16;
const expectationsLife = age>= 18?'you can marry or be married😍😍😍':'still young😫'; 
console.log(expectationsLife);

//use of template literals to calculate age
const birthYear=2001;
const academicLevels=birthYear>=1998?`you are a fourth year with an age of ${birthYear-2023}years`:`you are school dropout`;
console.log(academicLevels)

//best way of using template literals in conditional operators 
let yourAge=19;
console.log(`${yourAge>=20?'begin selfemployment':'still a kid'}`)

//another task
const supplimentaryPassmark= 30;
console.log(`you will ${supplimentaryPassmark>=40?'not pay 800':'pay 800😭'}`);
