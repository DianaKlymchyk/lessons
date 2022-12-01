{
  console.log('1 info')
  console.log('=== === ===')

  {
  //console.log('show a before ', a); ERROR 'Cannot access 'a' before initialization'

  /// WITH LET OR CONST

  let a = 10;
  // let a;
  // a = 10;

  console.log('show a after ', a);

  /// WITH VAR (hosting)

  console.log('show b before ', b); // var b;

  // var b;

  // створення змінної сплило, вона зі значенням undefined

  var b = 10;
  // b = 10;

  console.log('show b after ', b);
  }
}

// console.log('a: ', a); /// LET не виходить за межі блочної видимості ERROR a is not defined
console.log('b: ', b); /// VAR виходить за межі блочної видимості, область видимості VAR - функція або скріпт

// блочна видимість { } for { } if { }

console.log('2 info')
console.log('=== === ===')

for (let i = 0; i < 10; i++) {
  console.log('let i in for: ', i)
}
//console.log('let i after for: ', i) // ERROR


console.log('3 info')
console.log('=== === ===')

for (var i = 0; i < 10; i++) { // частіше пишуть
// for (var i = 0; i < 10; ++i) {
  console.log('var i in for: ', i)
}
console.log('var i after for: ', i) //

console.log('4 info')
console.log('=== === ===')


let counter1 = 0;
//counter1++;
//console.log(counter1) // 1
//console.log(counter1++) // 0

let getValue = (a) => {
  a = 100;
  return a;
}


// ||
// працює так само
// ||

let counter2 = 0;
//++counter2;
//console.log(counter2) // 1
//console.log(++counter2) // 1

if ((counter1++) === 1) { // let variable = counter1++; // counter1 = 1, counter1++ поверне старе значення
  console.log('counter1++')
}

if ((++counter2) === 1) { // 1  // counter2 = 1, ++counter2 поверне нове значення
  console.log('++counter2')
}

// щоб тут не плутатися, просто так не пишемо, створити якусь змінну і туди записати результат або в одному рядку counter++, а в іншому ( if (counter ) { }
// і частіше використовується counter++


// React fragment - створити абстрактного предка, але ми не хочемо створювати новий div у дом-дереві
// <>
// <div></div>
// <div></div>
// </>

