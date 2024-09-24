// var a = "hello from javascript"

//from
// console.log(a.slice(6,10));

//8S
// console.log(a.charAt(15).toUpperCase().repeat(8));

//hello array
// console.log(a.split(" ",1))

//hello script
// console.log(a.substr(0,5) +" " + a.substr(15, 20));

// F L
// console.log(a.charAt(0).toUpperCase() + a.slice(1,19) + a.charAt(20).toUpperCase());


// //task 1
// let a = 10;
// (a < 10) ? console.log(10) :
//     (a >= 10 && a <= 40) ? console.log("10 to 40") :
//         (a > 40) ? console.log("> 40") : console.log("unknown")

// //task 2
// let text = "Your JavaScript"
// if ((text.length * 2).toString() === "30") {
//     console.log("30");
// }

// //task 3
// if (text.charAt(5) === "J") {
//     console.log("J")
// }

// //task 4
// if (typeof (text) == "string") {
//     console.log("string")
// }

// //task 5
// if (typeof (text.length) == "number") {
//     console.log("number")
// }

// //task 6
// if (text.slice(0, 4).repeat(2) == "YourYour")
//     console.log("your your")

// //task 7
// var degree = 65;

// if (degree < 50) {
//     console.log("fail");
// }
// else if (degree >= 50 || degree <= 70)
//     console.log("good")

// else if (degree > 70)
//     console.log("excellent");

// console.log("");

// //task 1
// let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// console.log(myFriends.slice(0, 3));

// //task 2
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr);

// //task 3
// let arr1 = ["A", "B", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = arr1.concat(arr2).sort();
// console.log((allArrs[4] + allArrs[5] + allArrs[6]).toLowerCase())

// //task 4
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.slice(zero, ++counter).reverse()); zero = 0; counter = 3;

// console.log(my.slice(++zero, counter).reverse()); zero = 0; counter = 3;

// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter)); zero = 0; counter = 3;

// console.log(my[++zero][++counter] + my[zero][++counter].toUpperCase())

// console.log("");

// let job = "Manager"
// let salary = 0;
// switch ("Manager") {
//     case "Manager":
//         console.log(salary = 8000);
//         break;
//     case "IT" || "Support":
//         console.log(salary = 6000);
//         break;
//     case "Developer" || "Designer":
//         console.log(salary = 7000);
//         break;

//     default:
//         salary = 4000;
//         break;
// }

// console.log("");

// let holidays = 0;
// let money = 0;

// if (holidays === 0) 
// {
//     money = 5000;
//     console.log(`My money is ${money}`)
// }

// else if (holidays === 1 || holidays === 2) 
// {
//     money = 3000;
//     console.log(`My Money is ${money}`);
// }

// else if (holidays === 3) 
// {
//     money = 2000;
//     console.log(`My money is ${money}`);
// }

// else if (holidays === 4) 
// {
//     money = 1000;
//     console.log(`My money is ${money}`);
// }

// else if (holidays === 5) 
// {
//     money = 0;
//     console.log(`My money is ${money}`);
// }

// else 
// {
//     money = 0;
//     console.log(`My money is ${money}`);
// }

// console.log("");

// //task 1
// var arr = ['Ahmed', 'cairo', 1253, true, 'id', 'age'];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 'cairo')
//         continue;
//     if (arr[i] == 'id')
//         break;
//     console.log(arr[i]);
// }

// //task 2
// var friends = ['Ali', 2, 'Ahmed', 3, 5, 'sara'];
// var names = []
// for (var i = 0; i < friends.length; ++i)
// {
//     if (typeof friends[i] === 'string')
//         names.push(friends[i]);
// }
// console.log(names)

// console.log('');

// var arr3 = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
// let letter = 'a'
// let count = 1;
// for (var i = 0; i < arr3.length; ++i ){
//     if (arr3[i].startsWith(letter.toUpperCase()))
//         continue;
//     console.log(`${count++} => ${arr3[i]}`);
// }

// console.log('');

// let products = ['product A', 'product B', 'product C', 'product D'];
// let colors = ['red', 'green', 'blue'];
// let model = ['2020', '2021'];

// for (var i = 0; i < products.length; ++i){
//     document.write(`<h1 class="bg-dark text-primary col-6">${products[i]}____</h1>`);
//     document.write(`<h3 class="text-danger">-colors-</h3>`)
//     for (var j = 0; j < colors.length; ++j){
//         document.write(`<span>${colors[j]} </span>`)
//     }
//     document.write(`<h3>-Model-</h3>`)
//     for (var k = 0; k < model.length; ++k){
//         document.write(`<span>${model[k]} </span>`);
//     }
// }

// console.log('');

// function task1(start, end) {
//     document.write(`<select id="years">`)
//     for (var i = start; i <= end; ++i){
//         document.write(`<option value="years">${i}</option>`)
//     }
// }
// task1(2000, 2005);

// function task2 (arr){
//     for (var i = 0; i < arr.length; ++i){
//         console.log(arr[i]);
//     }
// }
// task2(products)

// function task3 (fNum, contNum, endNum, brkNum){
//     var array = [fNum, contNum, endNum, brkNum];
//     for (var i = 0; i < array.length; ++i){
//         if (array[i] == contNum)
//             continue;
//         else if (array[i] == brkNum)
//             break;

//         console.log(array[i]);
//     }
// }

// task3(1,2,3,4)

