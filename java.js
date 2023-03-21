
let user_name = prompt("Please enter your name");
let gender = prompt("Please enter your gender (male or female):");




function userGender() {
  while (gender != "male" && gender != "female") {
    gender = prompt("please enter your real gender(male or female)")
  }


  if (gender === "male") {
    alert("Hello Mr " + user_name);
  } else if (gender === "female") {
    alert("Hello Ms " + user_name);
  }
}
userGender();
let drink = prompt("do you want a hot or a cold drink?")
let drinkName = prompt("name of the drink")
alert("your drink is getting prepared")

let info = [user_name, gender, drink, drinkName];
for (let i = 0; i < info.length; i++) {
  console.log(info[i])
}


// console.log(info);

// console.log(name + " ordered a " + drink + " "+drinkName+ ".");

let details = document.getElementById("details")
const div = document.createElement("div");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

p.textContent = `${user_name}`;
li1.textContent = `${gender}`;
li2.textContent = `${drink}`;
li3.textContent = `${drinkName}`;

details.appendChild(div);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
div.appendChild(p);
div.appendChild(ul);




