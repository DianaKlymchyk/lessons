## TypeScript examples

`let n: number = 10;`

#### number

`let n: number;` 

#### string

`const str = '1000';` 

#### Good function example

`let func1 = (a: number, b: string | number): void => { console.log( Number(a) + Number(b)) }`

`func1(10, '10')` 

#### Not good function example

``let func2 = (a: number, b: string | number): number => { return; }`` // Error, function does not return number

``func2(100)`` // Error, one argument only


### ДЗ для тренування:

-- Показувати кількість задач всього і кількість виконаних задач

-- Заборонити можливість видалення задачі, якщо вона не виконана, задісейблити кнопку видалення.