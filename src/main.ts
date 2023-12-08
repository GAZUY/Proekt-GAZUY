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
 
//   console.log (`<p>l= ${l} d = ${d} s = ${s}</p>`)

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
// console.log (dividingTheString ('10/08/2020/30/40','/'))
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
 console.log (dividingTheString ('10/08/2020','/'))
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

/*
Задание 1
Реализовать класс, описывающий простой маркер. В классе
должны быть следующие компоненты:
■ поле, которое хранит цвет маркера;
■ поле, которое хранит количество чернил в маркере (в про-
центах);
■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от. простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов.
*/

class Katridge {
  color: string;
  amount_of_ink: number;
  constructor(color: string, amount_of_ink=100) {
      this.color = color;
      this.amount_of_ink = amount_of_ink;
  }
  display(str: string) {
      // let quantity = this.amount_of_ink;
      for (let i = 0; i < str.length; i++) {
          if (this.amount_of_ink != 0) {
            if (str[i] != ' ') this.amount_of_ink -= 0.5
            output2.innerHTML += `<span style="color:${this.color}; opacity:${this.amount_of_ink/100}">${str[i]}</span>`
          }else{
            // if (i < str.length){
            //   this.amount_of_ink = 100
            //   continue
            // }
          }
      }
  }
}
class FullInk extends Katridge{
  full (){
      this.amount_of_ink = 100
  }
}

let lineText: string 
// let color1 : string
const ink = document.querySelectorAll('input[name="color"]') as NodeListOf<HTMLInputElement>
let asd = {} as any
for (let colors of ink) {
  asd[colors.value] = {katridge: new FullInk(colors.value), div: document.querySelector(`.${colors.value} div`)}
}
console.log(asd)
const printText = document.querySelector ('.display') as HTMLButtonElement
const output2 = document.querySelector('#print p') as HTMLParagraphElement
// const inputColors = document.querySelectorAll('input[type="radio"][name="color"]') as NodeListOf<HTMLInputElement>

const onClickc = function (){
  let checked = ''
  for (let color of ink) {
    if (color.checked) {
      checked = color.value
    }
  }
  lineText = (document.querySelector('.input') as HTMLInputElement).value
  
  asd[checked]?.katridge?.display(lineText) 
  asd[checked]?.div.setAttribute('style','width:'+(asd[checked]?.katridge?.amount_of_ink*3)+'px')
}
printText?.addEventListener('click', onClickc)



// const asd = new FullInk('red',5)
//  //asd.full(10)
// asd.display(lineText)






// const printText = document.getElementById(".qwe") as HTMLButtonElement
// printText.addEventListener("click", () => {
//   const myInput = document.getElementById("#DZ1 input") as HTMLInputElement;
//   const value = myInput.value;
//   console.log(value);
// });









// Создаём и описываем новый html-элемент
const myNewDiv = document.createElement('div')
myNewDiv.className = 'aaa bbb'
myNewDiv.setAttribute('style','color:green')
myNewDiv.innerText = 'div созданный в js'
myNewDiv.addEventListener('click', ()=>{alert('hello')})

// Добавляем в уже существующий элемент
const divForPrintMachine = document.querySelector('.forPrintMachine')
divForPrintMachine?.appendChild(myNewDiv)


// Получаем элементы
const input1 = document.querySelector('#task1 input') as HTMLInputElement

if (input1) input1.value



const text1 = document.querySelector('#task1 b') as HTMLElement
const button1 = document.querySelectorAll('#task1 button') as Record<number,HTMLButtonElement>
const output1 = document.querySelector('#task1 p') as HTMLParagraphElement
document.write('<h1>asddasdas</h1>')
document.write('<p>asddasdas</p>')
document.write('<q>asddasdas</q>')
const h1 = document.querySelector('h1')
if (h1) h1.innerText = 'ddad'
if (text1) text1.innerText = 'Кто там?'
// По нажатию на кнопку выводим результат
const onClick = function () {
// @ts-ignore
output1.innerText = ''
// @ts-ignore
if (input1.value == 'Админ') {
  // @ts-ignore
  text1.innerText = 'Пароль?'
  // @ts-ignore
  input1.value = ''
  button1[0].classList.add('hidden')
  button1[1].classList.remove('hidden')
} else {
  // @ts-ignore
  output1.innerText = 'Я вас не знаю'
}
console.log (input1.value)
}

button1[0]?.addEventListener('click', onClick)
button1[1]?.addEventListener('click', function () {
// @ts-ignore
output1.innerText = ''

// @ts-ignore
if (input1.value == 'Я Главный') {
  // @ts-ignore
  output1.innerText = 'Здравствуйте!'
} else {
  // @ts-ignore
  text1.innerText = 'Кто там?'
  // @ts-ignore
  output1.innerText = 'Я вас не знаю'
  // @ts-ignore
  input1.value = ''
  button1[0].classList.remove('hidden')
  button1[1].classList.add('hidden')
}
})
/*
Реализуйте класс ExtendedDate, унаследовав его от стандарт-
ного класса Date и добавив следующие возможности:
■ метод для вывода даты (числа и месяца) текстом;
■ метод для проверки – это прошедшая дата или будущая
(если прошедшая, то метод возвращает false; если буду-
щая или текущая, то true);
■ метод для проверки – високосный год или нет;
■ метод, возвращающий следующую дату.
Создайте объект класса ExtendedDate и выведите на экран
результаты работы новых методов.
*/
// let num = new Date().getDate().toLocaleString()
// console.log (num)
// let mon = new Date().getMonth()

//     console.log (mon)

// class ExtendedDate extends Date {
//   getRussianDate() {
//     let num = this.getDate().toLocaleString()
//     let mon = this.getMonth()
//     console.log (num)
//     console.log (mon)
//     const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
//     const digit = ['','первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое']
//     const twoDigitNumber = ['десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое']
//     const dozens = ['','','двадцать', 'тридцать',]
//     if (num.length == 2){
//      if ((+ num[0]) == 1){
//        return twoDigitNumber[(+ num[1])] + ' ' + month[(mon)]
//      }else{
//        return dozens[(+ num[0])] +' '+ digit[(+ num[1])] + ' ' + month[(mon)]
//      }
//     }
//     if (num.length == 1){
//       return digit[(+ num[0])] + ' ' + month[(mon)]
//     }
    
//   }
//   prescription () {
//     if (new Date().getTime() > this.getTime()){
//       console.log (false)
//     }else{
//       console.log (true)
//     }
//   }
//   getLeapYear () {
//     console.log (this.getFullYear())
//     if ((this.getFullYear() % 4 === 0 && this.getFullYear() % 100 !== 0) || this.getFullYear() % 400 == 0){
//       // console.log ('Високосный год')
//     }else{
//       // console.log ('Не високосный год')
//     }
//   }
//   tomorrow(){
//     console.log(new Date(this.setDate(this.getDate() + 1)).toDateString())
//   }
//   now() {
//     this.now()
//   }
//   parse(val:string) {
//     this.parse(val)
//   }
// }

// console.log((new ExtendedDate('2020-12-26')).getRussianDate())

// console.log((new ExtendedDate('2024-12-26')).getLeapYear ())
// console.log((new ExtendedDate('2020-12-26')).tomorrow())
 


//   function inWordsTheNumber (num : number|string) {
//     const digit = ['','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
//     const twoDigitNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
//     const dozens = ['','','двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//     num = String (num)
//     if ((+ num[0]) == 1){
//       return twoDigitNumber[(+ num[1])]
//     }else{
//       return dozens[(+ num[0])] +' '+ digit[(+ num[1])]
//     }
 
//   }
//     console.log(inWordsTheNumber(35))
  
/*
Задание 3
Реализовать класс Employee, описывающий работника, и со-
здать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы
со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью
метода getHtml().
Создать объект класса EmpTable и вывести на экран результат
работы метода getHtml().
Задание 4
Реализовать класс StyledEmpTable, который наследуется от
класса EmpTable. Добавить метод getStyles(), который возвращает
строку со стилями для таблицы в тегах style. Переопределить
метод getHtml(), который добавляет стили к тому, что возвращает
метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран
результат работы метода getHtml().
*/
class Employee {
 name: string
 post: string
 age: number
 wages: number
  constructor(name: string, post: string, age: number, wages: number) {
    this.name = name;
    this.post = post;
    this.age = age;
    this.wages = wages
  }
}    


let empl = [
  new Employee("Matthew McConaughey", "investment specialist", 44, 5000),
  new Employee("Jon Flanagan", "credit specialist", 30, 6000),
  new Employee("Jamie Carragher", "auditor", 45, 7000),
  new Employee("Robert Fowler", "accountant", 48, 8000),
  new Employee("Jamie Vardy", "accountant", 36, 9000)
]
let name: string
let post: string
let age: number
let wages: number
const maintain_Data = document.querySelector ('.maintain_data') as HTMLButtonElement
let divTable = document.querySelector ('#table') as HTMLDivElement
let empl1: Employee[] = []
const dataEnter = function(){
   name = (document.querySelector('.name') as HTMLInputElement).value
   post = (document.querySelector('.post') as HTMLInputElement).value
   age = +(document.querySelector('.age') as HTMLInputElement).value
   wages = +(document.querySelector('.wages') as HTMLInputElement).value
   
    empl1.push(new Employee(name, post, age, wages))
    // console.log(empl)
  const table = new EmpTable(empl).getHtml()
  // console.log(table)
const StyledTable = new StyledEmpTable(empl)
StyledTable.getHtml()
}
maintain_Data?.addEventListener('click', dataEnter)
// const empl = [
//   new Employee(name, post, age, wages),
// ]


class EmpTable {
  arr
  constructor(arr: Employee[]) {
    this.arr = arr;
  }

  getHtml() {
    const html = `<table>
    <thead>
      <tr>
        <th>№</th>
        <th>name</th>
        <th>post</th>
        <th>age</th>
        <th>wages</th>
      </tr>
    </thead>
    <tbody>
      ${this.arr.map((el,index) => `<tr><td>${index+1}</td><td>${el.name}</td><td>${el.post}</td><td>${el.age}</td><td>${el.wages}</td></tr>`).join('')}
      </tbody>
      </table>`
      divTable.innerHTML = "" 
    divTable.insertAdjacentHTML('beforeend', html)
    return html
  }
}



class StyledEmpTable extends EmpTable {
  getStyles() {
    return `<style>table {
      font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
      font-size: 14px;
      border-collapse: collapse;
      text-align: center;
      }
      th, td:first-child {
      background: #AFCDE7;
      color: white;
      padding: 10px 20px;
      }
      th, td {
      border-style: solid;
      border-width: 0 1px 1px 0;
      border-color: white;
      }
      td {
      background: #D8E6F3;
      }
      th:first-child, td:first-child {
      text-align: left;
      } </style>`
  }
  getHtml(): string {
    document.head.insertAdjacentHTML('beforeend', this.getStyles())
    return super.getHtml()
  }
}
// const table = new EmpTable(empl).getHtml()
// const StyledTable = new StyledEmpTable(empl)
// StyledTable.getHtml()


// let name: string
// let post: string
// let age: number
// let wages: number

// const maintain_Data = document.querySelector ('.maintain_data') as HTMLButtonElement

// const dataEnter = function(){
//    name = (document.querySelector('.name') as HTMLInputElement).value
//    post = (document.querySelector('.post') as HTMLInputElement).value
//    age = +(document.querySelector('.age') as HTMLInputElement).value
//    wages = +(document.querySelector('.wages') as HTMLInputElement).value
//    console.log(name, post, age, wages)
// }
// maintain_Data?.addEventListener('click', dataEnter)

/*
Задание 1
Создать html-страницу со списком ссылок.
Ссылки на внешние источники (которые начинаются с http://)
необходимо подчеркнуть пунктиром.
Искать такие ссылки в списке и устанавливать им дополни-
тельные стили необходимо с помощью JS.
*/


const ulLi = document.querySelectorAll('.Modul_3_4_Week_12-1 li a') as NodeListOf<HTMLAnchorElement>
ulLi.forEach(el => {
 
  if (el.getAttribute('href')?.includes('http')) {
    el.classList.add('dotted_underline')
  }
})

/*
Задание 2
Создать html-страницу с деревом вложенных директорий.
При клике на элемент списка, он должен сворачиваться или
разворачиваться. При наведении на элемент, шрифт должен ста-
новится жирным (с помощью CSS).
*/
let menu = document.querySelector('.Modul_3_4_Week_12-2') as HTMLDivElement
let lists = menu.querySelectorAll('li')
let span = document.createElement('span')
for (let li of lists) {
  let span = document.createElement('span')
  li.prepend(span)
  if(span.nextSibling )
  span.append(span.nextSibling)
}
menu.onclick = function (event) {
  const target = event.target as HTMLElement
  if (target.parentNode != null)
 { let childrenContainer = target.parentNode.querySelector('ul')
  if (childrenContainer) childrenContainer.classList.toggle('hide')
      }
}
/*
Задание 3
Создать html-страницу со списком книг.
При щелчке на элемент, цвет текста должен меняться на оран-
жевый. При повторном щелчке на другую книгу, предыдущей
необходимо возвращать прежний цвет.
Если при клике мышкой была зажата клавиша Ctrl, то элемент
добавляется/удаляется из выделенных. Если при клике мышкой
была зажата клавиша Shift, то к выделению добавляются все
элементы в промежутке от предыдущего кликнутого до текущего.
*/
let bookList = document.querySelector('.Modul_3_4_Week_12-3') as HTMLDivElement
let listsTag = bookList.querySelectorAll('li')
console.log (listsTag)
bookList.onclick = function (event){
  let target = event.target as HTMLElement
  if (target.tagName == 'LI' && !event.ctrlKey && !event.shiftKey){
  for (let el of listsTag){
    el.classList.remove('choice')
  }
  target.classList.add('choice')
  }
  if (target.tagName == 'LI' && event.ctrlKey) target.classList.toggle('choice')
  if (target.tagName == 'LI' && event.shiftKey){
    let lastActive: any
    let targetIndex = 0
    let lastActiveIndex = 0
    listsTag.forEach((el, i) => {
      if (el == target) targetIndex = i
      if (el == lastActive) lastActiveIndex = i
    })
    console.log(targetIndex)
    console.log(lastActiveIndex)
    for (let i = Math.min(targetIndex, lastActiveIndex); i <= Math.max(targetIndex, lastActiveIndex); i++) {
      listsTag[i].classList.add('choice')
    }
  } 
}




/*
Задание 4
Создать html-страницу для отображения/редактирования текста.
При открытии страницы текст отображается с помощью тега
div. При нажатии Ctrl + E, вместо div появляется textarea с тем
же текстом, который теперь можно редактировать. При нажатии
Ctrl + S, вместо textarea появляет div с уже измененным текстом.
Не забудьте выключить поведение по умолчанию для этих соче-
таний клавиш.
*/
let workingWithText = document.querySelector('.Modul_3_4_Week_12-3') as HTMLDivElement
let DivText = document.querySelector('#text') as HTMLDivElement
document.addEventListener('keydown', function(event) {
  if ((event.code === "KeyE" || event.code === "KeyS") && event.ctrlKey) {
    event.preventDefault()
    return false
  }
})
document.addEventListener('keydown', function(event) {
  if (event.code === "KeyE" && event.ctrlKey) {
    if (DivText.firstElementChild?.tagName != 'TEXTAREA' ){
    // DivText.querySelectorAll("*").forEach(el => {
    //   if (el.tagName.includes('TEXTAREA') === false ){
        let textarea= document.createElement('textarea')
        DivText.prepend(textarea)
        if(textarea.nextSibling )
        textarea.append(textarea.nextSibling)
       }
    // });
  
  }
})
document.addEventListener('keydown', function(event) {
  if (event.code === "KeyS" && event.ctrlKey) {
    let DivTextTextarea = document.querySelector('#text textarea') as HTMLTextAreaElement
    let q = DivTextTextarea.value
 
    DivTextTextarea.remove()
    if (q)
    DivText.prepend(q)
   
  
  }
})
/*
Задание 5
Создать html-страницу с большой таблицей.
При клике по заголовку колонки, необходимо отсортировать
данные по этой колонке. Например: на скриншоте люди отсо-
ртированы по возрасту. Учтите, что числовые значения должны
сортироваться как числа, а не как строки.
*/
let sortableTable = document.querySelector('#table') as HTMLTableElement
if (sortableTable != null || sortableTable != undefined) {
  sortableTable.onclick = function(event) {
    let target = event.target as any
    if (target.tagName == 'TH') {
      let th = event.target as HTMLElement
      let asdf = th.innerHTML
      //console.log(asdf)
      // @ts-ignore
      empl.sort((a,b)=>a[asdf] - b[asdf])
      const table = new EmpTable(empl).getHtml()
      // console.log(table)
      const StyledTable = new StyledEmpTable(empl)
      StyledTable.getHtml() 
    }
  }
}
/*
Задание 6
Создать html-страницу с блоком текста в рамочке.
Реализовать возможность изменять размер блока, если зажать
мышку в правом нижнем углу и тянуть ее дальше.
*/
// let menu = document.querySelector('.Modul_3_4_Week_12-2') as HTMLDivElement
// let lists = menu.querySelectorAll('li')
// console.log(lists)

// lists.forEach(el => {
//   el.onmouseover = function(event) {
//     let target = event.target as HTMLElement
//     if (target.tagName == 'SPAN')
//     target.className = "boldFont" 
//   }
//   el.onmouseout = function(event) {
//     let target = event.target as HTMLElement
//     if (target.tagName == 'SPAN')
//     target.className = "" 
//   }
//   el.addEventListener('click', (e: MouseEvent) => {
//     const target = e.target as HTMLElement
//     const li = target.closest('li') as HTMLElement
//     if (li == e.currentTarget) {
//       const ul = li.querySelector('ul')
//       if (ul) ul.classList.toggle('hide')
      
//     }
//   })
// })
// ПЯТНАШКИ
// ===================================================
// Обращаемся к элементам, создаем массив DIVов эаполняем через цикл id.
const reset = document.querySelector('#reset') as HTMLButtonElement
const demo = document.querySelector('#demo') as HTMLButtonElement
const tag = document.querySelector('#TAG') as HTMLDivElement
let elDiv: HTMLDivElement[] = []
for (let i = 1; i < 16; i ++){
  elDiv.push(document.createElement ('div'))
  elDiv[i-1].setAttribute('id', `D${i}`)
}
elDiv.push(document.createElement ('div'))
  elDiv[15].setAttribute('id', `D${0}`)

  let demoArr: number[] = []
  //=======================================================
  // перемешиваем массив перемещая id с элемента на элемент в случайном порядкеЭ но с условием перемещения (верхЭ низ, право, лево). заполняем родительский DIV элементами массива. Записываем ходы в массив.


function shuffleArray (indexD0:number){
  let whereToMove 
  do {
   let round = []
   if (indexD0 + 4 <= 15 && 0 <= indexD0 + 4 ) round.push(indexD0 + 4)
   if (indexD0 - 4 <= 15 && 0 <= indexD0 - 4 ) round.push(indexD0 - 4)
   if (indexD0 + 1 <= 15 && 0 <= indexD0 + 1 && indexD0 !=3 && indexD0 !=7 && indexD0 !=11) round.push(indexD0 + 1)
   if (indexD0 - 1 <= 15 && 0 <= indexD0 - 1 && indexD0 !=4 && indexD0 !=8 && indexD0 !=12) round.push(indexD0 - 1)
   whereToMove = round[Math.floor(Math.random() * round.length)]
   let atr1 = elDiv[indexD0].getAttribute('id')
        elDiv[indexD0].setAttribute('id', `${elDiv[whereToMove].getAttribute('id')}`)
        elDiv[whereToMove].setAttribute('id', `${atr1}`)
        indexD0 = whereToMove 
        demoArr.push(indexD0)   
      
  } while (indexD0 != 0);
  do {
    let round = []
    if (indexD0 + 4 <= 15 && 0 <= indexD0 + 4 ) round.push(indexD0 + 4)
    if (indexD0 - 4 <= 15 && 0 <= indexD0 - 4 ) round.push(indexD0 - 4)
    if (indexD0 + 1 <= 15 && 0 <= indexD0 + 1 && indexD0 !=3 && indexD0 !=7 && indexD0 !=11) round.push(indexD0 + 1)
    if (indexD0 - 1 <= 15 && 0 <= indexD0 - 1 && indexD0 !=4 && indexD0 !=8 && indexD0 !=12) round.push(indexD0 - 1)
    whereToMove = round[Math.floor(Math.random() * round.length)]
    let atr1 = elDiv[indexD0].getAttribute('id')
        elDiv[indexD0].setAttribute('id', `${elDiv[whereToMove].getAttribute('id')}`)
        elDiv[whereToMove].setAttribute('id', `${atr1}`)
        indexD0 = whereToMove 
        demoArr.push(indexD0)   
      
  } while (indexD0 != 15);
  demoArr.unshift(15)
}
 elDiv.map((el) => tag.appendChild(el))
 //======================================================================
//  прописываем логику игры (обмен ID). Добавляем все ходы в массив.
 


let d0 = document.querySelector('#D0') as HTMLDivElement
shuffleArray(elDiv.indexOf(d0))
console.log(elDiv.indexOf(d0))
tag.onclick = function(event){
  let target = event.target as any
    if (target.tagName == 'DIV'){
       let d0 = document.querySelector('#D0') as HTMLDivElement
       demoArr.push(elDiv.indexOf(target))
       if (elDiv.indexOf(d0) == 7 && elDiv.indexOf(target) == 8 || elDiv.indexOf(d0) == 8 && elDiv.indexOf(target) == 7 ||
       elDiv.indexOf(d0) == 3 && elDiv.indexOf(target) == 4 || elDiv.indexOf(d0) == 4 && elDiv.indexOf(target) == 3 ||
       elDiv.indexOf(d0) == 11 && elDiv.indexOf(target) == 12 || elDiv.indexOf(d0) == 12 && elDiv.indexOf(target) == 11)
       {
        
       }else{
         if (Math.max(elDiv.indexOf(d0), elDiv.indexOf(target)) - Math.min(elDiv.indexOf(d0), elDiv.indexOf(target)) == 1 || Math.max(elDiv.indexOf(d0), elDiv.indexOf(target)) - Math.min(elDiv.indexOf(d0), elDiv.indexOf(target)) == 4){
        let atr = elDiv[elDiv.indexOf(d0)].getAttribute('id')
        elDiv[elDiv.indexOf(d0)].setAttribute('id', `${elDiv[elDiv.indexOf(target)].getAttribute('id')}`)
        elDiv[elDiv.indexOf(target)].setAttribute('id', `${atr}`)
        }
       }
      
      console.log(demoArr)  
    }
}


// =============================================================
// demo.onclick = function(event){
//   let target = event.target as HTMLButtonElement
//   if (target){
//     let a = demoArr[demoArr.length - 1]
//   for (let i = demoArr.length - 2; i >= 0; i-- ){
//      if (demoArr[i] == demoArr[i-2]) demoArr.splice(demoArr[i-2],1)
//     (function(i) {
//     setTimeout(function() {
//     console.log ('a'+a)
//     console.log ('demoArr[i]'+demoArr[i])
//     let atr = elDiv[demoArr[i]].getAttribute('id')
//         elDiv[demoArr[i]].setAttribute('id', `${elDiv[a].getAttribute('id')}`)
//         elDiv[a].setAttribute('id', `${atr}`)
//         a = demoArr[i]
//     },  1000 + (1000 * i))
//   })(i)   
    
//   }}
// }
// console.log(demoArr)
// ========================================================================= 


const tagEl = document.querySelectorAll('#TAG DIV') as NodeListOf<Element>
      for (let i = 0; i< 16; i ++){
        console.log(elDiv[i].getAttribute('id'))
        console.log("D"+ (i+1))
        
        if(parseInt(String(elDiv[i].getAttribute('id'))) ==  (i+1) && i == 15){
        
            tag.insertAdjacentHTML('afterbegin', `<p>ПОБЕДА</p>`) 
          }else{
            break
          
        }

      }
      console.log(elDiv)


      demo.onclick = async function(event){
        let target = event.target as HTMLButtonElement
        if (target) {
          let a = demoArr[demoArr.length - 1]
          for (let i = demoArr.length - 2; i >= 0; i-- ){
            //  if (demoArr[i] == demoArr[i-2]) demoArr.splice(demoArr[i-1],2)      
            await (200) 
            console.log ('a'+a)
            console.log ('demoArr[i]'+demoArr[i])
            let atr = elDiv[demoArr[i]].getAttribute('id')
            elDiv[demoArr[i]].setAttribute('id', `${elDiv[a].getAttribute('id')}`)
            elDiv[a].setAttribute('id', `${atr}`)
            a = demoArr[i]
            
          }
        }
      }



 





// // src/main.ts
// (let i = Math.min(targetIndex, lastActiveIndex); i <= Math.max(targetIndex, lastActiveIndex); i++)
//  let atr = elDiv[elDiv.indexOf(target)-1].getAttribute('id')
//         elDiv[elDiv.indexOf(target)-1].setAttribute('id', `${elDiv[elDiv.indexOf(target)].getAttribute('id')}`)
//         elDiv[elDiv.indexOf(target)].setAttribute('id', `${atr}`)
//  const temp = elDiv[elDiv.indexOf(target)-1]
//         elDiv[elDiv.indexOf(target)-1] = elDiv[elDiv.indexOf(target)]
//         elDiv[elDiv.indexOf(target)] = temp
//         elDiv.map((el) => tag.appendChild(el))
// elem.getAttribute(name)
// console.log(elDiv)
// const temp = elDiv[0];
// elDiv[0] = elDiv[1];
// elDiv[1] = temp;
// elDiv.map((el) => tag.appendChild(el))
// console.log(elDiv)
// [elDiv[0], elDiv[1]]=[elDiv[1], elDiv[0]]

// tag.appendChild(elDiv[i])
// elDiv.map((el,index) => el.setAttribute('id', `D${index}`))
// elDiv.map((el,index) => el.setAttribute('data', `${index}`))
// elDiv.forEach((el,index) => el.insertAdjacentHTML('afterbegin', `<p>${index}</p>`))
// const shuffleArray = (array: any[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }
// shuffleArray(elDiv)
// let divTag = tag.querySelectorAll('div')
// shuffleArray(divTag)
// console.log(divTag)


// console.log(elDiv)

let checkTheInput = document.querySelector('.Modul_3_4_Week_11_1 input') as HTMLInputElement
checkTheInput.oninput = function(event){
  
  let target = event.target as HTMLInputElement
  console.log(target.value)
  let Week_11_1 = target.value.split('')
  console.log(Week_11_1)
  for (let i = 0; i < 10;i++){
    const index = Week_11_1.lastIndexOf(''+i)
    if (index!=-1) {
      Week_11_1.splice(Week_11_1.lastIndexOf(''+i),1)
      target.value = Week_11_1.join('')
    }
  }
}

function wait(arg0: number) {
  throw new Error('Function not implemented.')
}
// //================================================================
// // ПОИСК ФИЛЬМОВ
// let title = document.querySelector('#title') as HTMLInputElement

// let type = document.querySelector('#type') as HTMLSelectElement

// let search = document.querySelector('#search') as HTMLButtonElement
// search.onclick = function(event) {
//   if (title) console.log (title.value)
//   if (type) console.log (type.value)

// }

// function wait(arg0: number) {
//   throw new Error('Function not implemented.')
// }
//=================================================================

