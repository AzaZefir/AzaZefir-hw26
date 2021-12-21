// Создайте три переменные с именами a, b, c. Присвойте этим переменным значения 1, 2 и 3.
// Выведите на консоль сумму значений переменных a, b и с.

let sum;
let a = 1;
let b = 2;
let c = 3;

sum = a + b + c;
console.log(sum);

/* Задание:
1) Объявите две переменные: login и name.
3) Переменной name в качестве значения присвойте свое имя
3) Скопируйте значение из переменной name в login
4) Выведите в консоль браузера значение переменной login */

let login;
let name = 'Azat';

login = name;
console.log(login);


/* Задание:
Выберите подходящие имена для переменных и создайте их в коде.
1) Переменная для хранения даты создания файла.
2) Переменная для хранения имени файла.
3) Переменная для хранения количества ошибок.
*/
let fileCreationDate = '20 december 2021'
let fileName = 'index.html';
let mistakes = 0;


// Вычислите значение площади окружности на основании значений выше. 
// Площадь круга равна произведению квадрата радиуса на число Пи (3.1415)
// Выведите результат

let S;
let r = 15; // радиус
let Pi = 3.1415; // число Пи
S = Pi * r ** 2;
console.log(S);

// Выведите на экран:
// 1) Среднюю цену на продукт
// 2) Общую стоимость всех продуктов, которые есть на складе

let productPrice1 = 101.5;
let productPrice2 = 50.25;
let productPrice3 = 10.11;

let productQuantity1 = 5;
let productQuantity2 = 9;
let productQuantity3 = 15;


let averagePrice = (productPrice1 + productPrice2 + productPrice3) / 3;
let summa = (productPrice1 * productQuantity1) + (productPrice2 * productQuantity2) + (productPrice3 * productQuantity3);

console.log(averagePrice);
console.log(summa);

// Определите, какую из переменных нужно заменить на константу.


console.log("Вычисление объема цилиндра.");
//  V=π * r в квадрате * h
let V; 
const Pi = 3.1415926535; 
let r = 10;
let h = 20;

V = Pi * r * r * h;
console.log(V);