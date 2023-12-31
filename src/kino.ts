import "./kino.css"
import '@justinribeiro/lite-youtube'
const youtubeKey = 'AIzaSyBFuM4qq0wTQZ6YNpwspqyZ6qfVtZGhMPY'
// let form = document.forms[0]

// let title = form.querySelector('#title') as HTMLInputElement

// let type = form.querySelector('#type') as HTMLSelectElement

// let search = form.querySelector('#search') as HTMLInputElement
// search.onclick = function(event) {
//   if (title) console.log (title.value)
//   if (type) console.log (type.value)

// }

// function wait(arg0: number) {
//   throw new Error('Function not implemented.')
// }
//=================================================================
const form = document.forms[0]
const title = form.querySelector('#title') as HTMLInputElement
const type = form.querySelector('#type') as HTMLSelectElement
const showingEverything =  document.querySelector('.showingEverything') as HTMLDivElement
const paginationDiv = document.querySelector('#pages')as HTMLDivElement
const paginationButton = document.querySelectorAll('#pages button') as NodeList

// try {
//   const resp = await fetch(`https://api.service-kp.com/oauth2/device?grant_type=device_code&client_id=myclient&client_secret=mysecret`)
//   const data = await resp.json()
//   console.log(data)
//   renderPagination(data.totalResults, 1)
//   render(data.Search)
// } catch(e) {
//   console.log(e)
// }

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  if (!title.value) return
  try {
    const resp = await fetch(`http://www.omdbapi.com/?apikey=dca05d40&s=${title.value}&type=${type.value}`)
    const data = await resp.json()
    // renderPagination(data.totalResults, 1)
     render(data.Search)
  } catch(e) {
    //console.log(e)
  }
})
let a: any
let descriptionDiv: HTMLDivElement
showingEverything.onclick = async function (event) {
  const target = event.target as HTMLElement
  if (target.tagName == 'BUTTON' ){
    a = target.getAttribute('id')
    descriptionDiv = document.querySelector('#D'+a)as HTMLDivElement
    let description = ''
    if (descriptionDiv.lastChild != null) descriptionDiv.lastChild.remove()
    const resp1 = await fetch(`http://www.omdbapi.com/?apikey=dca05d40&i=${target.getAttribute('id')}`)
    const data1 = await resp1.json()
    description += `${data1.Plot}`
    descriptionDiv.append(description)
    descriptionDiv.classList.toggle('description') 
  }
  if (target.tagName == 'INPUT' ){
    descriptionDiv.classList.toggle('description') 
  }
  
}






// Poster:"https://m.media-amazon.com/images/M/MV5BN2ZmZGM3YTktOTk0Ni00Mjc4LThjYzEtYmExZGJiZjBlOTg3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
// Title
// :
// "Sad Movie"
// Type
// :
// "movie"
// Year
// :
// "2005"
// imdbID
// :
// "tt0475711"
function wait(ms: number) {
  return new Promise((resolve)=>{setTimeout(()=>resolve(true),ms)})
}


async function render(arr:any[]) {
  let films = ''
  // let i = 0
  for (let el of arr) {
    await wait(500) 
    films += `<div class="flex">
                <img src="${el.Poster}">    
                <div>
                  <p>Название фильма: <span>${el.Title}</span></p> 
                  <p>Год выхода: <span>${el.Year}</span></p> 
                  <p>Тип фильма: <span>${el.Type}</span></p> 
                  <p>ID файла: <span>${el.imdbID}</span></p> 
                  <button id="${el.imdbID}">Подробно о фильме</button>
                </div>
                <div class="description" id = D${el.imdbID} style= " width: 300px;height: 630px;position:absolute; top:0; left:0; box-sizing: border-box; background-color: rgb(238, 225, 51);padding: 10px;font-size: x-large;font-weight: bold;">
                <input type="submit" class="X" value="X">
                </div>    
              </div>`
              if (showingEverything)
              showingEverything.innerHTML = films;
  }
  if (showingEverything.lastChild != null) paginationDiv.removeAttribute('.description'); paginationDiv.setAttribute('class','pages')
}
paginationDiv.onclick = async function (event) {
  const target = event.target as HTMLElement
  if (target == paginationButton[3]){
    try {
      const resp = await fetch(`http://www.omdbapi.com/?apikey=dca05d40&s=${title.value}&type=${type.value}&page=10`)
      const data = await resp.json()
      // console.log(paginationButton[2].value)
       render(data.Search)
    } catch(e) {
      console.log(e)
    }

  }
}


// paginationDiv.onclick = async function (event) {
//   const target = event.target as HTMLElement
//   let buttonAll = paginationDiv.querySelectorAll ('button') as NodeList 
//   if(target == )
  
// }




// function renderPagination(total: number, page: number) {
//   const totalPages = Math.ceil(total/10)
//   let pagination = ''
//   for (let i=0;i<totalPages;i++) {
//     pagination += `<button data-action="pagination">${i+1}</button>`
//   }
//   paginationDiv?.insertAdjacentHTML('beforeend', pagination)
// }

// document.addEventListener('click', async (e)=>{
//   const target = e.target as HTMLButtonElement
//   if (target.dataset.action == 'pagination') {
//     try {
//       const resp = await fetch(`http://www.omdbapi.com/?apikey=dca05d40&s=${title.value}&type=${type.value}&page=${target.textContent}`)
//       const data = await resp.json()
//       render(data.Search)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// })
//=============================================================