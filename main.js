//
// var str = 'drink more water';
//
// console.log(str.includes('water')); //true
//
// console.log(str.slice(6, 10)); //more
// console.log(str.slice(-5)); //water
// console.log(str.slice(-1)); //r
//
// console.log(str.substr(6, 4)); //more
// console.log(str.substr(6, 6)); //more w


// var a = 5;
// let b = '6';
// const TEN = 10;
// console.log(a + b); //56
// console.log(+a + +"6"); //11
// console.log(+a + +TEN); //15

// var cities = ['Odessa', 'Kharkiv', 'Kyiv', 'lviv', 'Krasnograd'];
//
// cities.forEach(function (item, index, array) {
//     console.log(index, item); //0 "Kharkiv" 1 "kyiv"
// })
// cities.forEach(function (item, index, array) {
//     (!(item.length % 2)) ? console.log(index, item): null;
//
//
// })

// cities.forEach(function (item, index, array) {
//     if(index >= array.length - 2){
//         console.log(array.length);
//         console.log(item);
//     }
// var cars = ['Bmw', 'Mazda', 'nissan', 'Kia','Mers','Cherry'];
// cars.forEach(function(item,index,array){
//         (index >= array.length -2) ? console.log(item): null;
//     }
// );
// })
// var num = ['van', 'two', '3', 'four','five', 'six'];

// console.log(num.splice(1, 2)); //two 3
// console.log(num.splice(num.length -3, num.length)); //(3)four five six
// console.log(num.push('zero')); // 7
// console.log(num.pop()); //six
// var str1 = 'my string';
// var str2 = 'my string';
//
// console.log(str1 < str2);
//
// let a = 0;
// let b = 10;
// // $c = a ?: b; php $c = a ?? b;
// console.log(a || b);
// const arr1 = ['Poltava', 'kharkiv', 'Kyiv', 'lviv'];
// const arr2 = ['zx', 'kv', 'cv', 'lt'];
//
// for(let i = 0; i < arr1.length; i+=2){
//     arr2[i + 1] = arr1[i];
// }
// console.log(arr1);
// console.log(arr2);

// for(let key of arr1.keys()){
//     if(!(key % 2)){
//         arr2[key + 1] = arr1[key];
//     }
// }
// console.log(arr1);
// console.log(arr2);
//
//
//
// console.log('b' + 'a' + + 'a' + 'a'); //baNaNa

// задания по переменным
//  let a = 3;
// console.log(a);

// let a = 10;
// let b = 2;
// console.log(a + b);

// if(a > b) {
//     console.log(a - b);
// } else if (b > a) {
//     console.log(b - a);
// } else {
//     console.log('равны');
// }

// console.log(a * b);
// console.log(a / b);

// let c = 15;
// let d = 2;
//
// let result = c + d;
// console.log(result);

// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result);



//задания по строкам

// let text = "Привет Мир!";
// alert(text);
//
// let text1 = "Привет,";
// let text2 = " Мир!";
// alert(text1 + text2);
//
// let text3 = text.substr(7, 3);
// alert(text3);
//еще задачи

// const seconds = 60;
// var secondsInHour = 60 * seconds;
// var secondsInDay = 24 * secondsInHour;
// var secondsInWeek = 7 * secondsInDay;
// var secondsInMonth = 30 * secondsInDay
// console.log(secondsInMonth);

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /=7;
// num ++;
// num --;
// console.log(num);

// let hour = '9';
// let minutes = '07';
// let seconds = '30';
// console.log(hour +':' + minutes + ':' + seconds);

// let text = 'Я';
// text += ' хочу';
// text += ' знать';
// text += ' JS';
// console.log(text);

// let a = 6;
// let b = 5;
// // sum = a + b; //сумма
// // pr = a * b; //проищведение
// // console.log(pr);
//
// res = a * a + b * b; //сумма квадратов
// console.log(res);

// let a = 7;
// let b = 3;
// let c = 11;
// avg = (a + b + c) / 3;
// console.log(avg);
// for (let i = 1; i < 25; i++){
//     // console.log(i % 3);
//     console.log(i % 5);
// }
let x = 5;
let y = "6";
let z = 7;
console.log();
//немного математики

//задача дел"ение по модулю
//задачи по массивам
