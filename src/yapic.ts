
import './style.css'

const form = document.forms[0]
const title = form.querySelector('#title') as HTMLInputElement
const resDiv = document.getElementById('result') as HTMLDivElement
const frame = document.querySelector('iframe') as HTMLIFrameElement


form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (!title.value) return
  try {
    const resp = await fetch(`https://ma.anwap.movie/films/search/?slv=${title.value}`,
      {
        headers: {
          'Content-Type': 'text/plain',
        }
      }
    )
    const data = await resp.text()
    console.log(data)
    // console.log(data.slice(data.indexOf('img_url')))

    const imageArr = [] as string[]
    let i = 0
    while ((i = data.indexOf('img_url=', i))!=-1) {
      let srcEnd = data.indexOf(';', i + 8)
      const img = decodeURIComponent(data.slice(i + 8, srcEnd - 4))
      if (!imageArr.includes(img))  {
        imageArr.push(img)
        resDiv.innerHTML += `<img src="${img}" width="100">`
      }
      i++
    }
    // console.log(imageArr)
    // frame.srcdoc = data
  } catch (e) {
    console.log(e)
  }
})
const img1 = decodeURIComponent('https%3A%2F%2Fma.anwap.movie')
console.log(img1)