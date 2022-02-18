console.log("Hello World")



// Conditional Statements
let rate = 3
if(rate === 3){
    console.log("***")
}
else if(rate === 4){
    console.log("****")
}
else{
    console.log("*")
}



// Logical Operators
let show = "GOT"
let rating = 4

if(show === "GOT" && rating === 3){
    console.log(`${show} is nice`)
}
if(show === "GOT" || rating === 3){
    console.log(`${show} is nice`)
}
if(show === "GOT" && (rating === 3 || show === "GOT") && rating === 4){
    console.log(`${show} is great`)
}



// Arrays
let arr1 = []
const array = [1,2,"three",false,null]

console.log(array[2])

// push
arr1.push("one")
console.log(arr1)
console.log("New arr1 : ", arr1)

// pop
let x = arr1.pop()
console.log(`The removed item is ${x}`)
console.log("New arr1 : ", arr1)

// unshift
array.unshift(NaN)
console.log("New array : ", array)

// shift
let y = array.shift()
console.log(`The removed item is ${y}`)
console.log("New array : ", array)

array[10] = true
console.log(array)



// Objects
const data = {zip: "302001", avg: 500, loggedIn: false}
console.log(`The zip code is ${data.zip}`, `The average is ${data["avg"]}`)



// Loops
const loop = []

// for loop
for(let i = 1 ; i <= 10 ; i++){
    loop.push(i*10)
}
console.log(loop)

// while loop
let error = false;
while(!error){
    let x = loop.pop();
    if(x/10 === 5) error = true
    console.log(x)
}

// for .. of loop
for(let num of loop){
    console.log(num)
}

// for .. in loop
for(let key in data){
    console.log(`The value for ${key} is ${data[key]}`)
}

