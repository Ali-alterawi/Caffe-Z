let name =prompt("what is your name ? ");
let gender =prompt("what is your Gender male/female ?");

if(gender=="male"){
alert(`welcome MR ${name} !`);
}else if(gender=="female"){
alert(`welcome MS ${name} !`);
}else{
alert("welcome!");
}

let drinkType =prompt("do you want hot or cold drink?");
let drinkName =prompt("what is your drink name?");
alert("your drink is getting prepared ");

console.log(`name:${name} Gender:${gender} drinkType:${drinkType}  drinkName:${drinkName}` );