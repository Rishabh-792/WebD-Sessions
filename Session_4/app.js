// // JS Functions

// // defining a simple fn
// function log() {
//     for (let i = 0; i < 5; i++) {
//         console.log("Hello !");
//     }
// }
// // running the fn
// log();

// // running same function multiple times
// for (let i = 0; i < 3; i++) {
//     log();
//     console.log("\n");
// }

// // giving arguments in function
// function greet(pname) {
//     console.log(`Hi, ${pname} !`);
// }
// // running it
// greet("Raj");

// // using return keyword
// function sum(x, y, z) {
//     return x + y + z;
// }
// // running it
// let ans = sum(2, 5, 6);
// console.log(ans);

// // Using function expression
// const sum1 = function (x, y) {
//     return x + y;
// };
// // running it
// ans = sum1(3, 5);
// console.log(ans);

// // Methods
// const myMath = {
//     // defining the function
//     square: function (num) {
//         return num * num;
//     },
//     // shorthand for defining
//     add(x, y) {
//         return x + y;
//     },
// };
// // Accessing it
// console.log(myMath.square(7));
// console.log(myMath.add(96, 4));

// // working with this
// const person = {
//     firstName: "Walter",
//     lastName: "White",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };
// // logging output
// console.log(person.fullName());

// // Using Try and Catch
// try {
//     hello.toUpperCase();
// } catch (error) {
//     console.error(`Error encountered; ${error} !!!`);
// }

// // raising an error
// try {
//     let i = Math.floor(Math.random() * 10) + 1;
//     if (i >= 5) {
//         console.log("Try block executed", `\nValue of i is ${i}.`);
//     } else {
//         throw new Error(`Value of i is ${i} which is less than 5`);
//     }
// } catch (error) {
//     console.log(`${error} !!!`);
// }

// // Arrow Functions
// const squaredSum = (x, y, z) => {
//     return x * x + y * y + z * z;
// };
// // running it
// console.log(squaredSum(3, 4, 5));

// // using setTimeout
// console.log("This will be printed first");
// setTimeout(() => {
//     console.log("This will be printed at last");
//     console.log("Done after delay of 1s");
// }, 1000);
// console.log("This will be printed second");

// // using setInterval
// setInterval(() => {
//     console.log("Hello");
// }, 1000);

// // terminating setInterval
// let myInterval = setInterval(() => {
//     console.log("World !");
// }, 1000);
// setTimeout(() => {
//     clearInterval(myInterval);
// }, 5000);

// // Document
// console.dir(document);

// // logging document objects

// // all objects
// console.log(document.all);

// // using id
// console.log(document.getElementById("click"));

// // using class
// console.log(document.getElementsByClassName("mx-auto"));

// // using tag
// console.log(document.getElementsByTagName("div"));

// // using querySelector

// // id
// console.log(document.querySelector("#click"))

// // class
// console.log(document.querySelector(".mx-auto"))

// // tag
// console.log(document.querySelectorAll("div"));

// // document manipulation
// const h1 = document.querySelector("h1");
// const p = document.querySelectorAll("p");

// console.log(p[0].innerText);
// console.log(p[0].textContent);
// console.log(p[0].innerHTML);

// h1.innerText = "Hello";
// h1.innerHTML += " <i>World</i>";

// console.log(h1.style.margin);

// h1.style.border = "1px dashed black";

// let x = window.getComputedStyle(h1);
// console.log(x.padding);

// h1.setAttribute("class", "purple");

// h1.classList.add("orange");

// h1.classList.remove("orange");

// console.log(h1.classList.contains("orange"));

// setInterval(() => {
//     h1.classList.toggle("purple");
// }, 750);

// const btn = document.querySelector("button");

// // setting onclick property
// btn.onclick = function () {
//     console.warn("!");
// };

// // using eventListener
// btn.addEventListener("click", function (e) {
//     console.log("!");
//     // e.stopPropagation();
// });

// // Bubbling Up
// const divObj = document.querySelectorAll("div");
// for (let div of divObj) {
//     div.addEventListener("click", () => {
//         console.log("Bubbling !!");
//     });
// }

// // Promise
// const makeRandReq = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand > 0.5) {
//                 resolve({ data: "hello", status: 200 });
//             }
//             reject({ data: "Bye", status: 404 });
//         }, 1000);
//     });
// };

// makeRandReq()
//     // this runs if promise is resolved
//     .then((res) => {
//         console.log(res);
//     })
//     // this runs if promise is rejected
//     .catch((e) => {
//         console.log("Error", e);
//     });

// // Async Function
// const login = async (username, password) => {
//     if (!username || !password) throw "Missing Credentials !!";
//     if (password === "Hello") return "Back !";
//     throw "Invalid Password !!!";
// };
// login("Rish", "Hello")
//     .then((msg) => {
//         console.log("Welcome", msg);
//     })
//     .catch((err) => {
//         console.log("ERROR!", err);
//     });

// // await keyword
// async function Fake() {
//     await makeRandReq();
//     console.log("Running Now !");
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// Fake();
