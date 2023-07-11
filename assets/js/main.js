"use strict";

///Level 1_1
for (let i = 1; i < 11; i++) console.log(`Hello World ${i}`);

//Level 1_2

let numArray = [];
for (let i = 0; i < 11; i++) numArray.push(i);
console.log(numArray);

//Level 1_3
let counter = 0;
while (counter < 10) {
      counter++;
      console.log("Hallo World " + counter);
}

//Level 1_4
let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
}

//Level 1_6
let retArray = [];
for (let i = 1; i < 101; i++) {
      let img = "image" + i + ".jpg";
      console.log(img);
}

//Level 1_7
const textOutput = document.querySelector(".output");
let text = "";
let i = 1;
do {
      text += "<br>The number is " + i;
      i++;
} while (i < 6);
textOutput.innerHTML = text;

//Level 2_1
function imageArray() {
      let returnArray = [];

      for (i = 1; i < 101; i++) {
            if (i < 10) {
                  returnArray.push("image_00" + i + ".jpg");
            } else if (i > 9 && i < 100) {
                  returnArray.push("image0" + i + ".jpg");
            } else {
                  returnArray.push("image" + i + ".jpg");
            }
      }
      console.log(returnArray);
}

imageArray();
