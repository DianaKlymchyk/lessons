## Переваги використання querySelector над getElementsBy*

- один метод querySelector/querySelectorAll для id, class, tagname
- доступний метод .forEach у querySelectorAll,
- можна звузити пошук, витягуючи елемент, вказавши тег з класом чи атрибутом


## Переваги використання getElementsBy* порівняно з querySelector

- getElementsBy* повертає живу колекцію, querySelectorAll статичну
- коли у нас з'являється новий елемент на сторінці з таким же класом, то отримана раніше (і збережена у глобальну змінну) колекція оновлюється

## Різниця між елементами у вигляді Node та створених як строки з HTML

- html у вигляді строки додатково ще парситься для DOM-дерева, створений елемент відразу вставляється на сторінку
- html у вигляді строки дозволяє задати багато атрибутів, класів відразу, легко дозволяє вписати текст чи значення з допомогою `user ${name}`, з ним легко працювати в циклах, можна робити будь-яку вкладеність
- appendChild/prependChild та insertAdjacentHTML(position, text) дозволяє додати елемент чи частину коду в контейнер, зміна innerHTML повністю затирає внутрішній HTML-код


## Цикли та методи масивів

- while / do while
- for (let i = 0; i < n; i++) { }
- for (let item of array) { }


- array.forEach ((item, index, array) => { } )
- array.map ( (item, index, array) => item + 2 )
- array.filter ( ( item ) ) => item % 2 === 0 )