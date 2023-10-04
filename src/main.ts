import './style.css'

/*
 const divPrintElements = document.querySelector('.printElements')
  if (divPrintElements) divPrintElements.innerHTML = wrapperElement.getHtml()
Модуль 2
ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
ВВЕДЕНИЕ В ООП
Задание
1. Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков.
*/
function outputStringStatistics (str: string) {
  let letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
  let digits = '0123456789'
  let signs = '_+=-!@#$%^&*()~`*[]{}\\|/<>?:;"'
  let l = 0
  let d = 0
  let s = 0 
 
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      l++
    }
    if (digits.includes(str[i])) {
      d++
    }
    if (signs.includes(str[i])) {
      s++
    }
    
  }
 
  console.log (`<p>l= ${l} d = ${d} s = ${s}</p>`)

}
outputStringStatistics ('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/')

// 2. Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.



// let numberInWords 
// let counter = 0 

// const input1 = document.querySelector('#homework1 input') as HTMLInputElement

// if (input1) input1.value

// const text1 = document.querySelector('#homework1 h3') as HTMLElement
// const button1 = document.querySelectorAll('#homework1 button') as Record<number,HTMLButtonElement>
// const output1 = document.querySelector('#homework1 p') as HTMLParagraphElement
// const onClick = function () {
//   // @ts-ignore
//   output1.innerText = ''
//   numberInWords = input1.value
//   // do{
//   //   if (counter > 0) {
//   //     text1.innerHTML = '<h3 style= "color:red">Введите положительное двузначное число</h3>'
//   //     input1.innerText = ''
//   //   }
//   //   numberInWords = Number(numberInWords)
//   //   counter ++
//   // }while (10 > numberInWords || numberInWords > 99 ) 

//   // @ts-ignore
//   if (input1.value == 'Админ') {
//     // @ts-ignore
//     text1.innerHTML = 'Пароль?'
//     // @ts-ignore
//     input1.value = ''
//     button1[0].classList.add('hidden')
//     button1[1].classList.remove('hidden')
//   } else {
//     // @ts-ignore
//     output1.innerText = 'Я вас не знаю'
//   }
// }
// button1[0]?.addEventListener('click', onClick)
// button1[1]?.addEventListener('click', function () {
//   // @ts-ignore
//   output1.innerText = ''

//   // @ts-ignore
//   if (input1.value == 'Я Главный') {
//     // @ts-ignore
//     output1.innerText = 'Здравствуйте!'
//   } else {
//     // @ts-ignore
//     text1.innerText = 'Кто там?'
//     // @ts-ignore
//     output1.innerText = 'Я вас не знаю'
//     // @ts-ignore
//     input1.value = ''
//     button1[0].classList.remove('hidden')
//     button1[1].classList.add('hidden')
//   }
// })


// do{
  
//   numberInWords = prompt('Введите положительное двузначное число')
//   numberInWords = Number(numberInWords)
 
// }while (10 > numberInWords || numberInWords > 99 ) 
//  console.log(numberInWords);


function inWordsTheNumber (num : number|string) {
  const digit = ['','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
  const twoDigitNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
  const dozens = ['','','двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
  num = String (num)
  if ((+ num[0]) == 1){
    return twoDigitNumber[(+ num[1])]
  }else{
    return dozens[(+ num[0])] +' '+ digit[(+ num[1])]
  }
 
}
  console.log(inWordsTheNumber(35))
  

/*
3. Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
*/
let str1 = ''
function changingTheCaseAndNumbers (str: string) {
  let capitalLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
  let letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
  let digits = '0123456789'
  let arr:String[] = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (capitalLetters.includes(str[i])) {
      arr[i] = arr[i].toLowerCase()
    }
    if (letters.includes(str[i])) {
      arr[i] = arr[i].toUpperCase()
    }
  }
  for (let i = 0; i < arr.length; i++) {
      if (digits.includes(str[i])) {
        arr[i] = '_'
      }
  }
  str1 = arr.join('')
 
  console.log (`<p>${str1}</p>`)

}

changingTheCaseAndNumbers ('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/')


/*
4. Написать функцию, которая преобразует названия css-
стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign
в textAlign.
*/
function cconvertСamelСase (nameStyle: string) {
  let arr = nameStyle.split('-')
  arr.forEach((el, i, arr) => {
    if (i > 0) {
      arr[i] = el[0].toUpperCase() + el.slice(1)
    }
  })
  return arr.join('')
}
console.log(cconvertСamelСase('font-size-normal'))
/*
5. Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.
*/
function convertToAnAbbreviation (str:string) {
  let arr = str.split(' ') 
  let arr1 = arr.map (item => item[0].toUpperCase())
  return arr1.join('')
}
console.log (convertToAnAbbreviation ('объектно ориентированное программирование'))

/*

6. Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.
*/
function convertToOneOine(...strings:string[]) {
  return strings.join('');
}
console.log(convertToOneOine('Написать функцию', 'переводит операнды в числа', '(+ - * /)'));

/*
7. Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.
*/
function calculatorFromTheLine (example:string) {
  while (example.indexOf('+') != -1){
    return (+(example.slice(0,example.indexOf('+') ))) + (+(example.slice(example.indexOf('+')+1 )))
  }
  while (example.indexOf('-') != -1){
    return (+(example.slice(0,example.indexOf('-') ))) - (+(example.slice(example.indexOf('-')+1 )))
  }
  while (example.indexOf('*') != -1){
    return (+(example.slice(0,example.indexOf('*') ))) * (+(example.slice(example.indexOf('*')+1 )))
  }
  while (example.indexOf('/') != -1){
    return (+(example.slice(0,example.indexOf('/') ))) / (+(example.slice(example.indexOf('/')+1 )))
  }
}
console.log(calculatorFromTheLine ('72 + 28'))
/*
8. Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.
*/
function urlAdress(url:string) {
  let protocol = url.slice(0, url.indexOf('://'))
  let domain = url.slice(url.indexOf('://')+3, url.indexOf('/',url.indexOf('://')+3))
  let path = url.slice(url.indexOf('/',url.indexOf('://')+3))
  return 'протокол:' + protocol +', домен:' + domain +', путь:' + path
}

console.log(urlAdress('https://itstep.org/ua/about'))
/*
9. Написать функцию, которая принимает строку и раздели-
тель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат:
“10”, “08”, “2020”.
Выполняя задание, не используйте функцию split().
*/
function dividingTheString (str: string,dividing:string) {
  let arr:string[]=[] 
  let i = 0 
  let a:string
  console.log ('10/08/2020/30/40')
  do{
    console.log (i)
    if (str.indexOf(dividing,i) == -1){
      a = str.slice(i) 
      console.log (a)
      arr.push(a)
    }
    a = str.slice(i,str.indexOf(dividing,i))
    arr.push(a)
    i = str.indexOf(dividing,i)+1
    console.log (arr)
    console.log (i)
    console.log (a)
  }while(str.indexOf(dividing,i) != -1)
  // a = str.slice(i) 
  // arr.push(a)


 return arr
}
console.log (dividingTheString ('10/08/2020/30/40','/'))
// function dividingTheString (str: string,dividing) {
//   let rek = divide (0 , str.indexOf(dividing,0))
//   function divide (i , a) {
//     if (a == -1){
//       return arr
//     }else{
//       return  arr.push(str.slice (i,(divide (i=a+1, a=str.indexOf(dividing,i)))))
//       console.log (i)
//       console.log (a)
     
//     }
//   }
//   return rek
// }
// console.log (dividingTheString ('10/08/2020','/'))
/*
10. Написать функцию вывода текста по заданному шаблону.
Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % ука-
зывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего
входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
8, 2020) должна вывести “Today is Monday 10.8.2020”.
*/
function textConclusion(template:string, ...strings:any[]) {
  [...strings].forEach((item, index) => template = template.replace('%' + (index + 1), item));
  return template;
}
console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));
console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));
