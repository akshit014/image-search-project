const accesskey ="cS4M5bnx9ygPKud_VPqtAM5UwDuOxGxh0NEYqVoNhlg"

const formEl =document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchresults = document.querySelector(".search-results")
const showMore = document.getElementById("show-More-button")

let inputData = ""
let page =  1

async function searchimages(){
    inputData =  inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
    
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results
    
    if(page === 1){
        searchresults.innerHTML= ""
    }
    results.map((result)=> {
        const imagewrapper = document.createElement("div")
        imagewrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt= result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.target= "_blank"
        imageLink.textContent=result.alt_description
        
        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imageLink)
        searchresults.appendChild(imagewrapper)
    })
    page++
    if(page>1){
        showMore.style.display="block"
    }
}
formEl.addEventListener("submit", (event)=>{
    event.preventDefault()
    page=1;
    searchimages()
})
showMore.addEventListener("click", ()=>{
    searchimages()
})

    
    

