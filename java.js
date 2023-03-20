
  

let user_name = prompt("Please enter your name");
let gender = prompt("Please enter your gender (male or female):");




function gender(){
  while( gender != "male" && gender !="female" ){
    gender = prompt("please enter your real gender(male or female)")
  }
}
gender()
if (gender === "male") {
  alert("Hello Mr " + user_name);
} else if (gender === "female") {
  alert("Hello Ms " + user_name);
} 


let drink = prompt("do you want a hot or a cold drink?")
let drinkName= prompt("name of the drink")
alert("your drink is getting prepared")

let info = [ user_name , gender ,drink, drinkName ];
for (let i = 0 ; i < info.length ; i++){
  console.log(info[i])
}


// console.log(info);

// console.log(name + " ordered a " + drink + " "+drinkName+ ".");
