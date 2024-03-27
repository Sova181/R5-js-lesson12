console.log(`   Типы данных\n`);
console.log('JavaScript позволяет узнать тип данных с помощью оператора typeof:');
console.log(typeof 3);      // number
console.log(typeof 'Game\n'); // string 

console.log("Типы данных Number, BigInt и String — это примитивные типы.");
console.log(` С его помощью составного типа Object можно объединять данные 
разных типов в одно значение, например, мы можем создать пользователя,
добавив к нему имя и возраст:`);
const user = { name: 'Toto', age: 33 };
console.log(user); 

console.log(`   undefined, специальное значение особого типа, 
которое означает отсутствие значения. Например, при обращении
к несуществующему символу строки:`); 
const name = 'Arya';
console.log(name[8]);  
let name1;
console.log(name1); // ? 

console.log("   Явное преобразование типов\n");
console.log(" parseInt() — это функция, в которую передается значение, чтобы его преобразовать.");

const number = parseInt('345');
console.log(number); // => 345  

const value = '0';
// Внутри скобок можно указывать переменную
const number1 = parseInt(value);
console.log(number1); // => 0

// Или конкретное значение
const number2 = parseInt('10');
console.log(number2); // => 10

// Если преобразуется число с плавающей точкой
// то отбрасывается вся дробная часть
const number5 = parseInt(3.5);
console.log(number5); // => 3 

console.log(`Точно так же можно преобразовать строку в число с плавающей точкой
 с помощью parseFloat():`); 
 const value3 = parseFloat('0.5');
console.log(value3); // 0.5