const accessKey = "kE6ttNgA9b24KoQ2hniwNQa1ZYONKrl6HNAGjIWFDPo"
var pge = 1;

let form = document.querySelector("form")
let loadMore = document.getElementById("loadMore");
let res = document.getElementById("results");
let load = document.getElementById("sub") 

function fetchImages(){
    let val = document.getElementById("searchInp").value
    load.style.display="block"
fetch(`https://api.unsplash.com/search/photos?page=${pge}&query=${val}&client_id=${accessKey}`)
  .then(response => response.json())
  .then(data => {
        data.results.forEach(ele => {
            const img = document.createElement("div");
            img.classList.add("imageWrapper")
            img.innerHTML = `<img src="${ele.urls.regular}" />
                            <p id="desc">${ele.alt_description}</p>`
            res.appendChild(img)
            load.style.display="none"
            pge++
            if(pge>1){
              loadMore.style.display="block"
            }
        });
    })
  .catch(error =>{
    alert(error)
    load.style.display="none"
  }) ;
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    res.innerText=""
    pge=2;
    fetchImages() 
})

loadMore.addEventListener("click",()=>{
    fetchImages();
})
