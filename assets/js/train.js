'use strict'

// function sumTo(n) {
//     var sum = 0;
//     for (var i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n-1);
// }
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
//
// console.log(sumTo(3))

//
// function pow(x,n){
//     if(n==1){
// return x;
//     }
//     var result = x*pov(x,n-1);
//     return resuilt;
// }
// function Animal(name) {
//     this.name = name;
//     this.canWalk = true;
// }
// var animal = new Animal("clon");
// animal.canWalk = false;
// console.log(animal)

// var a = +prompt("Введите первое число", "");
// var b = +prompt("Введите второе число", "");
// alert( a + b );


// alert( 6.35.toFixed(1) );

// var price1 = 0.1, price2 = 0.2;
// alert( +(price1 + price2).toFixed(2) );



// целое число из интервала
// function r(min , max) {
//   let result = min +  Math.random( )*(max-min)
//     return Math.floor( result);
// }
//
// console.log(r(3,14));




// Делает первую букву слова заглавной
// function ucFirst(str){
//   str.substr(0,1);
//     if (!str) return str;
//     let  first = str[0].toUpperCase() + str.slice(1);
//     console.log(first)
// }
//
// ucFirst('loh')

// checkSpam(str) , которая возвращает true , если строка str содержит „viagra“ или „XXX“, а иначе false .
// function checkSpam(str) {
//     var lowerStr = str.toLowerCase();
//     return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// поставить многоточие если фраза больше чкм надо
// function truncate(str, maxlength){
//     let max  = maxlength-3;
//     if (str.length > maxlength) {
//         return str.slice(0, max) + '...';
//     }
//     return  str
// }
// console.log( truncate('Вот, что мне хотелось бы сказать на эту тему:" ', 20))

// function  extractCurrencyValue(str){
//   return  str.slice(1)
// }
// console.log( extractCurrencyValue('$120') )

// Выведите чётные числа
// for (var i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log( i );
//     }
// }
//

// Повторять цикл, пока ввод неверен
// var num;
// do {
//     num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num != null);

// var a = +prompt('a?', '');
// if (a == 0) {
//     alert( 0 );
// }
// if (a == 1) {
//     alert( 1 );
// }
// if (a == 2 || a == 3) {
//     alert( '2,3' );
// }

// var a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2||3:
//         alert( 'Перебор' );
//         break;
// }

// function sumTo(n) {
//     let  sum = n;
//
//     for (let i =n; i >0; i--) {
//         sum = sum+(i-1)
//     }
// return sum;
// }
// console.log(sumTo(2))

// function isEmpty(obj) {
//         for (var key in obj) {
//             return false;
//         }
//         return true;
// }
// var schedule = {};
// console.log(isEmpty(schedule))
// schedule["8:30"] = "подъём";
// console.log(isEmpty(schedule))

// function checkAge(age) {
//     // if (age > 18) {
//     //     return true;
//     // } else {
//     //     return confirm('Родители разрешили?');
//     // }
//
//     var age = prompt('возраст?', 18);
//     age > 18  ?    true  :  confirm('Родители разрешили?')
// }
//     function checkAge(age) {
//         return (age > 18) || confirm('Родители разрешили?');
//     }

// function min(a,b){
//     // if (a > b){
//     //     return a;
//     // }
//     // return  b;
//     return  a > b ? a : b;
// }


// let object ={ret: 444};
// function isEmpty(obj){
//     for (var key in obj) {
//            return true;
//        }
//        return false;
// }
// console.log(isEmpty(object));




// пробежаться по массиву и получить сумму
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

// function sum(params) {
// let sum = 0;
//     for (var name in params) {
//         sum += params[name];
//     }

// return sum;

// }

// console.log(sum(salaries));




// имя человека с самой ьольшой зарплатой
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

// function sumMax(params) {
// let large = 0;
// let resName ='';
//     for (var name in params) {
//         if (large < params[name]) {
//             large = params[name];
//             resName = name;
//         }
//     }
//     return resName;

// }

// console.log(sumMax(salaries));








// styles.push('Рок‑н‑Ролл');
// styles[styles.length - 2] = 'Классика';
// styles.unshift('Яблоко','ко');


// let styles = [
//   'Джаз',
//   'Блюз', 'Рок‑н‑Ролл', 'Яблоко'
//   ];



// let random = Math.floor(Math.random() * styles.length);
// console.log(styles, random );
// console.log(styles[random]) ;

// let styles = [];

// while (true) {
// let num =  prompt('Сколько вам лет ? ');
//   if (num.typeof == 'number' || num == null || isNaN(num)) break;
// styles.push(+num);
// }


// var sum = 0;
// for (var i = 0; i < styles.length; i++) {
//   sum += styles[i];
// }

// console.log(sum);

// function find(array, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] == value) return i;
//   }
//   return -1;
// }

// function addClass(obj, cls) {
//   var classes = obj.className ? obj.className.split(' ') : [];
//   for (var i = 0; i < classes.length; i++) {
//     if (classes[i] == cls) return; // класс уже есть
//   }
//   classes.push(cls); // добавить
//   obj.className = classes.join(' '); // и обновить свойство
// }

// var obj = {
//   className: 'open menu'
// };

// addClass(obj, 'new free')

// console.log(obj.className);



// ++++++++++++++++++++++++++++++++++++++++++

// // функция переводит слово 'my-short-string'  в слово 'myShortString'

// function countInString(searchFor, str) {
//   var item = '';

// // ----------находим индекс пробела
//   var a = str.indexOf(searchFor);

// // ---пробегаемся цеклом и везде меняем элемент на найденной позиции на пробел
//   while (a > -1) {
//     str = str.substr(0, a) + ' ' + str.substr(a + 1);
//     a = str.indexOf(searchFor);
//   }

// // ------делаем из строки массив
//   str = str.split(' ');

// // ------пробегаемя по массиву и делаем в каждом слове заглавную букву
//   for (let i = 1; i < str.length; i++) {
//     item = str[i];
//     item = ucFirst(item);
//     str[i] = item;
//   }

// // ------  делаем из массива строку
//   str = str.join('')
//   console.log(str);
// }

// // -------Здесь первая буква введенного слова превращается в заглавную.
// function ucFirst(s) {
//   s.substr(0, 1);
//   if (!s) return s;
//   let first = s[0].toUpperCase() + s.slice(1);
//   return first;
// }

// countInString('-', 'my-short-string');


// ++++++++++++++++++++++++++++++++++++++++++

// var objусе = {
//   className: 'open menu class'
// };

// function removeClass(obj, cls){
//  let o = obj.className.trim().split(" ")
//   for (let i = 0; i < o.length; i++) {
//     if (o[i] === cls) {
//       delete o[i]; 
//     }
//   ;
// }
//   o = o.join(' ');
//   obj.className = o;
//   console.log(obj);
// }

// removeClass(objусе, 'open')


// ++++++++++++++++++++++++++++++

// const arr = [1,2,3,4,5,6,7,8,9,10];


// function filterRangeInPlace(ar, min, max) {
//   let num;
//   for (let i = 0; i < ar.length; i++) {
//     var val = ar[i];

//     if (val >= min && val<= max) {
//       ar.splice(i--, 1)
//     }

//   }

//   console.log(ar);
// }

// filterRangeInPlace(arr, 2, 5);


// ++++++++++++++++++++++++++++++++++++


// var arr = ["HTML", "JavaScript", "CSS"];
// var arrSorted = arr.slice().sort();

// console.log(arrSorted);
// console.log(arr);

// +++++++++++++++++++++++

// function compareAge(personA, personB) {
//   return personA.age - personB.age;
// }
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [vasya, masha, vovochka];

// people.sort(compareAge);

// for (var i = 0; i < people.length; i++) {
//   alert(people[i].name); // Вовочка Маша Вася
// }


// ОБЪЕКТЫ
// =============Фрилансер по жизни ======== https://www.youtube.com/watch?v=ACXQO1YZOXI&list=RDCMUCedskVwIKiZJsO8XdJdLKnA&index=6====================
// let first = 'pyfxtybt';

// let User = {
//   name: 'dic',
//   age: 25,
//   address: {
//     city: 'Usgorod',
//     street: 'fridom'
//   }
//   // 'like javascript' : true, 
//   // [first]: true
// }

// console.log(User.name, User.age, User['like javascript'] );
// console.log(User.pyfxtybt);
// console.log(User[first]);


// Преимущество квадратных скобок
// let key = 'name';
// console.log(User[key]);

// console.log(User.address.city);


// function makeUserInfo(name, age) {
// return {
//   name: name,
//   age: age
// }
// }
// console.log(makeUserInfo('fffff', 30));


// дублирование объектов
// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy);


// console.log(User?.address?.city);

// if('address' in User ){
// console.log(User.address);
// }; // true
                                                                        



// перебор всех свойств объеков

// for (var key in User) {
//    console.log(prop);
//  }


// function UserInfo(name, age) {
//   // неявно создается новый объект this{}
//   this.name = name;
//   this.age = age
//   // return this; неявно
// }

// console.log(new UserInfo('bill', 20)
// );

// +++++++++++++++++++++++++++++++++++++++++++++
// var menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// }

// function multiplyNumeric(arg){

// for (var prop in arg) {
//   console.log(menu[prop]);
//   if(typeof menu[prop] == 'number'){
//        menu[prop] *= 2;
//     }
// }
// console.log(arg);

// }

// multiplyNumeric(menu)


// +++++++++++++++++++++++++++++++++++++++++++++


// let calculator = {
 
//  sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }

// }


// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())
// 

// +++++++++++++++++++++++++++++++++

// function Calc(){
// this.read = function (){
//   this.a = +prompt('a?',0)
//   this.b = +prompt('b?',0)
// }
// this.sum = function (){return this.a + this.b};
// this.mil = function (){return this.a * this.b};
// }

// let calculator = new Calc();
// calculator.read();
// calculator.sum();
// calculator.mil();

// ++++++++++++++++++++++++++++++++++++

// function Accumulator (startingValue) {
//   this.value = startingValue

//   this.read = function () {
//     this.value += +prompt('Сколько нужно добавить?', 0)
//   }
// }

// let accumulator = new Accumulator(1)
// accumulator.read()
// accumulator.read()
// alert(accumulator.value)

// =================================

// const car = {
//   name: 'tesla',
//   carEyar : 2022
// }

// // здесь шаблоная строка
// // const details = `Avtomobil ${car.name} - production year ${car.carEyar}`;

// // здесь вывод как шаблон html
// // const details = `
// // <div>
// //  <h2>${car.name}</h2>
// //  <p>${car.carEyar}</p>
// // </div>
// // `
// // document.body.innerHTML = details


// // const cars = [
// //   {
// //   name: 'tesla',
// //   carEyar : 2022
// // },
// // {
// //   name: 'bmw',
// //   carEyar : 2010
// // }
// // ]


// // здесь делаем список перебор циклом из машин и добавляем на страницу 

// // const Cars = `
// // <ul>
// // ${cars.map( car => `<li>${car.name}</li>`).join('')}
// // </ul>
// // `;

// // document.body.innerHTML = details+ Cars



// // если свойства нет - отображаем пустоту
// const Car = {
//   name: 'tesla',
//   carEyar: 2022,
//   info: 'современный электромобиль'
// }

// const html = 
//   `<div>
//     <p>${Car.name}</p>
//     <p>${Car.carEyar}</p>
//     ${Car.info ? `<p>${Car.info}</p>` : ''}
//    </div>`

// console.log(html);
// document.body.innerHTML = html;
// +++++++++++++++++++++++++++++++++++++++++++++++++++

// быстрый доступ к свойствам - деструктуризация


// const Car = {
//   name: 'tesla',
//   carEyar: 2022,
//   info: 'современный электромобиль',
//   dimentions: {
//     size: {
//       width: '1.99mm',
//       length: '5.3mm'
//     }
//   }
// }

// здесь свойства выводятся в переменные
// const {name, carEyar, info} = Car;
// const   {width,length}=Car.dimentions.size;
// console.log(name, carEyar, info,width, length);

// здесь из массив авынимаем свойства
// const auto = ['tesla', 2022, 'silver'];
// const [name,year,color] = auto;
// console.log(name, year, color);

// const auto = 'Tesla, 2022,green'
// const[name, carEyar, info] = auto.split(',')
// console.log(name, carEyar, info);

// деструктуризация из функции
// function convert(rubles){
//   const complete = {
//     eur: rubles*80,
//     usd: rubles*80,
//     gbr: rubles*100
//   }
//   return complete;
// }
// const {eur,usd,gbr} = convert(100);
// console.log(eur, usd, gbr);


// оператор spreed создает ссылку
// const regular = ['vw', 'shkoda', 'audi']
// const electric = ['tesla', 'bmw i3', 'Jaguar I-Place']
// вместо
// let cars =[];
// cars.push('Mersedes-Bens')
// cars = cars.concat(electric)
// сделать так
// const cars = [...regular, 'Mersedes-Bens', ...electric]
// // если нужно поменять один из элементов массива , но не затронуть второй массив например так
// const CarsNew = [ ...cars];
// CarsNew[0] = 'Motocycle'
// console.log(cars);
// console.log(CarsNew);

// разбивает на символы
// const word = 'electric'
// const letters = [ ...word]
// console.log(letters);


// выбираем из верстки все элементы нужные мам
// const cars = Array.from(document.querySelectorAll('.cars span'));
// a можно и так
// const cars = [...document.querySelectorAll('.cars span')];
// делаем из них массив и проходимся по массиву . доставая значения каждого элемента
// const autos = cars.map(car => car.textContent);


// например имеем массив объектов и нужно из него удалить один элемент , зная только его id
// const cars =[
//   {
//     name: 'Tesla', id: 2345
//   },
//   {
//     name: 'Nissan', id: 678
//   },
//   {
//     name: 'Shkoda', id: 6543
//   },
// ]
// const objectID = 2345;
// // здесь находится индекс элемента с нужным id 
// const indexId = cars.findIndex( car => car.id === objectID); 
// // здесь делается два массива . 1-й все элементы до второй- все элементы после
// // благодаря оператору spread это превращается из кусочков в один массив
// const carsNew = [ ...cars.slice(0, indexId), ...cars.slice(indexId + 1)];
// console.log(carsNew
// );

// так можно закидывать в функцию аргументы в виде массива
// const car = ['Tesla', 2021]
// function displayCar(title,year){
// console.log(`Автомобиль ${title} - ${year} года`);
// }
// displayCar(...car)

// =============================================
// rest запаковывает элементы в массивэ
// function conv(rate,total1,total2,total3){
// }
// // или здесь вместо большого количества аргументов выйдет массив
// function conv (rate, ...totals) {
//   console.log(rate,totals);
//   // здесь собственной переьирается массив и выходит итог после конвертации
//   return totals.map(total => total / rate)
// }

// const total = conv(70,1000,800,6300,2500);
// console.log(total);

// const car = ['Tesla' , 111, 'red', '50000']
// // допустим надо взять не все аргументы. тогда ненужные аргументы запакуются в массив
// const [name,id, ...options] = car;
// console.log(name, id, options);

// ======================================
// const cars = ['Tesla' , 'bmw', 'mersedes-bens', 'nissan', 'audi'];
// const auto = {
//   name: 'tesla',
//   year: 2021,
//   color: 'red'
// }
// for (let i = 0; i < cars.length; i++) {
//   const element = cars[i];
//   console.log(element);
// }

// cars.forEach(car => {
//   console.log(car);
// })

// for(const index in cars){
//   console.log(cars[index]);
//    if (index == 3) {
//     break
//   }
// }

// for( const car of cars ){
//      if (car === 'bmw') {
//     break
//   }
//   console.log(car);
// }

// for( const car of Object.keys(auto) ){
//   console.log(car);
// }

// const baseURL = 'https://api.sampleapis.com/countries/countries';
// const listPromice = fetch(baseURL);
//   listPromice
//   .then( resp => resp.json())
//   .then(countries => {
//     console.log(countries);
//   } )
//   .catch(err => {
// console.log("ошибка", err);
//   });


// const cofee = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   resolve('ваш кофе готов')
//   }, 1500)
// })

// cofee.then(data => {
//   console.log(data);
// })

// const family = [
//   {member: 'mother', id: 111, coffee: 'Latte'},
//   {member: 'father', id: 222, coffee: 'aspresso'},
//   {member: 'son', id: 333, coffee: 'Cappuccino'},
// ]


// const getCoffee = (member) => {
//  const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
//   return coffeePromise
//   .then(data => data.json())
//   .then(list => {
//     const coffee = list.find(res => res.title === member.coffee);
//     return{
//       ...member,
//       coffee: coffee
//     }
//   })
// }



// const getFamilyMember = (id)=> {
//   return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//   const member = family.find(res => res.id === id);
//   if(member){
//     resolve(member);
//   }else{
// reject(Error('член сеиьи не найден'))
//   }
//   }, 1500)
//   })
// }

// getFamilyMember(233)
// .then(data => {
//  return getCoffee(data)
//  .then(
//    newMember =>{
//      console.log('newMember',newMember);
//    }
//  ).catch(error=>{
//    console.log("error", error);
//  })
 
// })


// =============================


// const makeCoffee = () =>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(() =>{
//        resolve("ваш кофе готов")
//     } ,500)
//   })
// }



// const makeToast = () =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//        resolve("ваши тосты готовы")
//     } ,2500)
//   })
// }

// const coffeePromice = makeCoffee()
// const tostPromice = makeToast()

// coffeePromice.then(data => {
//   console.log(data);
// })

// tostPromice.then(data => {
//   console.log(data);
// })


// Promise.all([coffeePromice, tostPromice]).then(([coffeePromice, tostPromice]) => {
//   console.log(coffeePromice, tostPromice);
// })


// =======

// const beersPromice = fetch("https://api.sampleapis.com/beers/ale");
// const winesPromice = fetch("https://api.sampleapis.com/wines/reds");


// Promise.all([beersPromice,winesPromice])
// .then(data =>{
//   return Promise.all(data.map(res => res.json()));
// })
// .then(finalData =>{
//   console.log(finalData);
// })

// ==============================
// function Car(brand,color){
//   this.brand  = brand;
//   this.color  = color;
// }


// const ford = new Car('ford', 'red');
// console.log( "brand >>",ford.brand, "//// color>>>", ford.color);



// Car.prototype.start= function () {
//   console.log(`${this.brand} - start`);
// }

// ford.start();



// class Car {
// constructor(brand, color){
//   this.brand = brand;
//   this.color = color;
// }

// start(){
//   console.log(`${this.brand} - start`);
// }

// stop(){
//   console.log(`${this.brand} - stop`);
// }

// static discount(){
//   console.log('общая скидка -10%' );
// }

// set rating(value){
// this.score = value.toUpperCase();
// }
// get rating(){
//   return this.score
// }

// }

//  const ford = new Car('ford', 'red');
//  const nissan = new Car('nissan', 'red');

// console.log(ford.rating ="five");
// console.log(ford.rating);






// class Car {
// constructor(brand){
//   this.brand = brand;
//   this.gasTank = 100;
//   this.refueling = [];
// }
// getGas(){
//   this.gasTank +=10;
//   const stamp = Date.now();
//   const time = new Date(stamp);
//   this.refueling.push(time.toString());
//   return this.gasTank;
// }

// drive(){
//   this.gasTank -= 10;
//   return this.gasTank;
// }
// }


// class HibridCar extends Car {
//   constructor (brand, model){
//     super(brand)
//     this.brand = brand;
//     this.model = model;
//   }
//   autopark(){
//     console.log('автопарка');
//   }
// }


// const nissan = new Car('nissan')
// const lexus = new HibridCar('lexus', 'rx')





