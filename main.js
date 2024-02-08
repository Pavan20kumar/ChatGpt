let search = document.getElementById('searchinput')
let serchresult = document.getElementById('searchdisplay')
let spinner = document.getElementById('spinner')
function searchWikipidya(event){
    if(event.key==="Enter"){
        serchresult.textContent=""
        spinner.classList.toggle('d-none')
        

        let searchinput = search.value
      

        let opantions = {
            method: "GET"
        }
        let url="https://apis.ccbp.in/wiki-search?search="+searchinput
        fetch(url, opantions)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            let {search_results}=jsonData
            displayresult(search_results)

        })
       
    }
}
function displayresult(searchResults){
    spinner.classList.toggle('d-none')
    for(let result of searchResults){
        createAppendSearchResult(result)

    }
  

}
function createAppendSearchResult(result){
    let {title, link, description}= result
    //create div element//
    let divelement = document.createElement('div')
    divelement.classList.add('result_item')
    serchresult.appendChild(divelement)
    // anchor tage//
    let aelement =document.createElement('a')
    aelement.classList.add('result-title')
    aelement.textContent=title
    aelement.href=link
    aelement.target="_blank"
    divelement.appendChild(aelement)
    //breake line//
    let breakelement = document.createElement('br')
    divelement.appendChild(breakelement)
    //anchor tage heding//
    let a2element = document.createElement('a')
    a2element.classList.add('result-url')
    a2element.href=link
    a2element.target="_blank"
    a2element.textContent=link
    divelement.appendChild(a2element)
    //paragrafe element//
    let pelement = document.createElement('p')
    pelement.classList.add('link-description')
    pelement.textContent=description
    divelement.appendChild(pelement)



   
}

search.addEventListener('keydown', searchWikipidya)