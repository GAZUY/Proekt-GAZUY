 import './style.css'

// /*
//  const divPrintElements = document.querySelector('.printElements')
//   if (divPrintElements) divPrintElements.innerHTML = wrapperElement.getHtml()
// Модуль 2
// ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
// ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
// ВВЕДЕНИЕ В ООП
// Задание
// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
// */
// function outputStringStatistics (str: string) {
//   let letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
//   let digits = '0123456789'
//   let signs = '_+=-!@#$%^&*()~`*[]{}\\|/<>?:;"'
//   let l = 0
//   let d = 0
//   let s = 0 
 
//   for (let i = 0; i < str.length; i++) {
//     if (letters.includes(str[i])) {
//       l++
//     }
//     if (digits.includes(str[i])) {
//       d++
//     }
//     if (signs.includes(str[i])) {
//       s++
//     }
    
//   }
 
// //   console.log (`<p>l= ${l} d = ${d} s = ${s}</p>`)

// // }
// // outputStringStatistics ('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/')

// // 2. Написать функцию, которая принимает двузначное число
// // и возвращает его в текстовом виде.
// // Например: 35 – тридцать пять, 89 – восемьдесят девять,
// // 12 – двенадцать.



// // let numberInWords 
// // let counter = 0 

// // const input1 = document.querySelector('#homework1 input') as HTMLInputElement

// // if (input1) input1.value

// // const text1 = document.querySelector('#homework1 h3') as HTMLElement
// // const button1 = document.querySelectorAll('#homework1 button') as Record<number,HTMLButtonElement>
// // const output1 = document.querySelector('#homework1 p') as HTMLParagraphElement
// // const onClick = function () {
// //   // @ts-ignore
// //   output1.innerText = ''
// //   numberInWords = input1.value
// //   // do{
// //   //   if (counter > 0) {
// //   //     text1.innerHTML = '<h3 style= "color:red">Введите положительное двузначное число</h3>'
// //   //     input1.innerText = ''
// //   //   }
// //   //   numberInWords = Number(numberInWords)
// //   //   counter ++
// //   // }while (10 > numberInWords || numberInWords > 99 ) 

// //   // @ts-ignore
// //   if (input1.value == 'Админ') {
// //     // @ts-ignore
// //     text1.innerHTML = 'Пароль?'
// //     // @ts-ignore
// //     input1.value = ''
// //     button1[0].classList.add('hidden')
// //     button1[1].classList.remove('hidden')
// //   } else {
// //     // @ts-ignore
// //     output1.innerText = 'Я вас не знаю'
// //   }
// // }
// // button1[0]?.addEventListener('click', onClick)
// // button1[1]?.addEventListener('click', function () {
// //   // @ts-ignore
// //   output1.innerText = ''

// //   // @ts-ignore
// //   if (input1.value == 'Я Главный') {
// //     // @ts-ignore
// //     output1.innerText = 'Здравствуйте!'
// //   } else {
// //     // @ts-ignore
// //     text1.innerText = 'Кто там?'
// //     // @ts-ignore
// //     output1.innerText = 'Я вас не знаю'
// //     // @ts-ignore
// //     input1.value = ''
// //     button1[0].classList.remove('hidden')
// //     button1[1].classList.add('hidden')
// //   }
// // })


// // do{
  
// //   numberInWords = prompt('Введите положительное двузначное число')
// //   numberInWords = Number(numberInWords)
 
// // }while (10 > numberInWords || numberInWords > 99 ) 
// //  console.log(numberInWords);


// function inWordsTheNumber (num : number|string) {
//   const digit = ['','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
//   const twoDigitNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
//   const dozens = ['','','двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//   num = String (num)
//   if ((+ num[0]) == 1){
//     return twoDigitNumber[(+ num[1])]
//   }else{
//     return dozens[(+ num[0])] +' '+ digit[(+ num[1])]
//   }
 
// }
//   // console.log(inWordsTheNumber(35))
  

// /*
// 3. Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
// */
// let str1 = ''
// function changingTheCaseAndNumbers (str: string) {
//   let capitalLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
//   let letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
//   let digits = '0123456789'
//   let arr:String[] = str.split('')
//   for (let i = 0; i < arr.length; i++) {
//     if (capitalLetters.includes(str[i])) {
//       arr[i] = arr[i].toLowerCase()
//     }
//     if (letters.includes(str[i])) {
//       arr[i] = arr[i].toUpperCase()
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//       if (digits.includes(str[i])) {
//         arr[i] = '_'
//       }
//   }
//   str1 = arr.join('')
 
// //   console.log (`<p>${str1}</p>`)

// // }

// // changingTheCaseAndNumbers ('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/')


// /*
// 4. Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign
// в textAlign.
// */
// function cconvertСamelСase (nameStyle: string) {
//   let arr = nameStyle.split('-')
//   arr.forEach((el, i, arr) => {
//     if (i > 0) {
//       arr[i] = el[0].toUpperCase() + el.slice(1)
//     }
//   })
//   return arr.join('')
// }
// // console.log(cconvertСamelСase('font-size-normal'))
// /*
// 5. Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.
// */
// function convertToAnAbbreviation (str:string) {
//   let arr = str.split(' ') 
//   let arr1 = arr.map (item => item[0].toUpperCase())
//   return arr1.join('')
// }
// // console.log (convertToAnAbbreviation ('объектно ориентированное программирование'))

// /*

// 6. Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.
// */
// function convertToOneOine(...strings:string[]) {
//   return strings.join('');
// }
// // console.log(convertToOneOine('Написать функцию', 'переводит операнды в числа', '(+ - * /)'));

// /*
// 7. Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.
// */
// function calculatorFromTheLine (example:string) {
//   while (example.indexOf('+') != -1){
//     return (+(example.slice(0,example.indexOf('+') ))) + (+(example.slice(example.indexOf('+')+1 )))
//   }
//   while (example.indexOf('-') != -1){
//     return (+(example.slice(0,example.indexOf('-') ))) - (+(example.slice(example.indexOf('-')+1 )))
//   }
//   while (example.indexOf('*') != -1){
//     return (+(example.slice(0,example.indexOf('*') ))) * (+(example.slice(example.indexOf('*')+1 )))
//   }
//   while (example.indexOf('/') != -1){
//     return (+(example.slice(0,example.indexOf('/') ))) / (+(example.slice(example.indexOf('/')+1 )))
//   }
// }
// // console.log(calculatorFromTheLine ('72 + 28'))
// /*
// 8. Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.
// */
// function urlAdress(url:string) {
//   let protocol = url.slice(0, url.indexOf('://'))
//   let domain = url.slice(url.indexOf('://')+3, url.indexOf('/',url.indexOf('://')+3))
//   let path = url.slice(url.indexOf('/',url.indexOf('://')+3))
//   return 'протокол:' + protocol +', домен:' + domain +', путь:' + path
// }

// // console.log(urlAdress('https://itstep.org/ua/about'))
// /*
// 9. Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().
// */
// function dividingTheString (str: string,dividing:string) {
//   let arr:string[]=[] 
//   let i = 0 
//   let a:string
//   console.log ('10/08/2020/30/40')
//   do{
//     console.log (i)
//     if (str.indexOf(dividing,i) == -1){
//       a = str.slice(i) 
//       console.log (a)
//       arr.push(a)
//     }
//     a = str.slice(i,str.indexOf(dividing,i))
//     arr.push(a)
//     i = str.indexOf(dividing,i)+1
//     console.log (arr)
//     console.log (i)
//     console.log (a)
//   }while(str.indexOf(dividing,i) != -1)
//   // a = str.slice(i) 
//   // arr.push(a)


//  return arr
// }
// // console.log (dividingTheString ('10/08/2020/30/40','/'))
// // function dividingTheString (str: string,dividing) {
// //   let rek = divide (0 , str.indexOf(dividing,0))
// //   function divide (i , a) {
// //     if (a == -1){
// //       return arr
// //     }else{
// //       return  arr.push(str.slice (i,(divide (i=a+1, a=str.indexOf(dividing,i)))))
// //       console.log (i)
// //       console.log (a)
     
// //     }
// //   }
// //   return rek
// // }
// // console.log (dividingTheString ('10/08/2020','/'))
// /*
// 10. Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.
// */
// function textConclusion(template:string, ...strings:any[]) {
//   [...strings].forEach((item, index) => template = template.replace('%' + (index + 1), item));
//   return template;
// }
// // console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));
// // console.log(textConclusion('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));
// */
// /*
// Задание 1
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от. простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.
// */

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
let color1 : string
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


// const empl = [
//   new Employee("Matthew McConaughey", "investment specialist", 44, 5000),
//   new Employee("Jon Flanagan", "credit specialist", 30, 6000),
//   new Employee("Jamie Carragher", "auditor", 45, 7000),
//   new Employee("Robert Fowler", "accountant", 48, 8000),
//   new Employee("Jamie Vardy", "accountant", 36, 9000)
// ]
let name: string
let post: string
let age: number
let wages: number
const maintain_Data = document.querySelector ('.maintain_data') as HTMLButtonElement
let empl: Employee[]
const dataEnter = function(){
   name = (document.querySelector('.name') as HTMLInputElement).value
   post = (document.querySelector('.post') as HTMLInputElement).value
   age = +(document.querySelector('.age') as HTMLInputElement).value
   wages = +(document.querySelector('.wages') as HTMLInputElement).value
   console.log(name, post, age, wages)
    empl = [
    new Employee(name, post, age, wages),
  ]
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
        <th>name</th>
        <th>post</th>
        <th>age</th>
        <th>wages</th>
      </tr>
    </thead>
    <tbody>
      ${this.arr.map(el => `<tr><td>${el.name}</td><td>${el.post}</td><td>${el.age}</td><td>${el.wages}</td></tr>`).join('')}
      </tbody>
      </table>`
    document.body.insertAdjacentHTML('beforeend', html)
    return html
  }
}



class StyledEmpTable extends EmpTable {
  getStyles() {
    return `<style> table { color:red } </style>`
  }
  getHtml(): string {
    document.head.insertAdjacentHTML('beforeend', this.getStyles())
    return super.getHtml()
  }
}
const table = new EmpTable(empl).getHtml()
const StyledTable = new StyledEmpTable(empl)
StyledTable.getHtml()


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


