let API = 'http://www.omdbapi.com/?apikey=d2099c3c&t='
let loaderStatus = false

let img = document.getElementById('img')
let tilte = document.getElementById('title')
let year = document.getElementById('year')
let desc = document.getElementById('desc')
let actors = document.getElementById('actors')
let director = document.getElementById('director')
let awards = document.getElementById('awards')
let collection = document.getElementById('collection')
let writer = document.getElementById('writer')
let ratings = document.getElementById('ratings')
let genre = document.getElementById('genre')
let movieContainer = document.getElementById('movieContainer')
let errorContainer = document.getElementById('errorMovie')
movieContainer.classList.add('d-none')
errorContainer.classList.add('d-none')

function checkLoader(){
    let intro = document.getElementById('intro')
    intro.style.display = 'none'
    let loader = document.getElementById('loader')
    if(loaderStatus == true){
        loader.classList.add('loader')
        loader.classList.remove('d-none')
    }
    else
        loader.classList.add('d-none')

}

function findMovie(){
    loaderStatus = true
    checkLoader()
    let movieName = document.getElementById('movieName')
    let apiQuery = API + movieName.value
    fetch(apiQuery).then((response)=>{
        return response.json()
    }).then((data)=>{
        if(data.Error == 'Movie not found!'){
            movieContainer.classList.add('d-none')
            errorContainer.classList.add('error-container')
            errorContainer.classList.remove('d-none')
            loaderStatus = false
            checkLoader()
        }
        else{
            loaderStatus = false
            checkLoader()
            movieContainer.classList.add('movie-container')
            movieContainer.classList.remove('d-none')
            errorContainer.classList.add('d-none')
            title.innerText = data.Title
            year.innerText = data.Year
            desc.innerText = data.Plot
            actors.innerText = data.Actors
            director.innerText = data.Director
            awards.innerText = data.Awards
            collection.innerText = data.BoxOffice
            writer.innerText = data.Writer
            ratings.innerText = data.imdbRating
            genre.innerText = data.Genre
            img.src = data.Poster
        }
    })
}