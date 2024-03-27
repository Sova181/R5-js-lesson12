console.log(`   Типы данных\n`);
console.log('JavaScript позволяет узнать тип данных с помощью оператора typeof:');
console.log(typeof 3);      // number
console.log(typeof 'Game\n'); // string 

console.log("Типы данных Number, BigInt и String — это примитивные типы.");
console.log(`  С его помощью составноuj типf Object можно объединять данные 
разных типов в одно значение, например, мы можем создать пользователя,
добавив к нему имя и возраст:`);
const user = { name: 'Toto', age: 33 };
console.log(user);