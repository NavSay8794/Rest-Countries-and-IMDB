//700bb029
//omdbAPI url: http://www.omdbapi.com/?apikey=700bb029&t

let getMovies = async () =>{
    try{
        let x = document.getElementById('movieName').value
        let apiKey = '700bb029'
        let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(x)}&r=json`

        let response = await fetch(url)
        let movieData = await response.json()
        layout(movieData)

    }catch(error){
        let movieContainererr = document.querySelector('#movieData')
        movieContainererr.innerHTML = '<div><h1>Kindly Enter the Correct Movie Name</h1></div>'
    }
}


let layout =(x) =>{

    let movieContainer = document.querySelector('#movieData')

    movieContainer.innerHTML = 
    `<div class="card  cardDet">
        <div class="card-body" style = "padding: 20px 0">
            <div class ="padder">
                <h3 class="card-title">${x.Title} (${x.Year})</h3>
                <p>${x.Rated} | ${x.Runtime} | ${x.Genre} | ${x.Released} | IMDB - ${x.Ratings[0].Value} <i class="fa fa-star" aria-hidden="true"></i></p>
            </div>
            <img src=${x.Poster} class="card-img-top" alt="..." style = "width:100%;height: 40rem; margin-bottom: 10px">
        </div>
        <div class="card-body" style = "padding: 0 15px 10px 15px">
            <p class="card-text">${x.Plot}</p>
            <h5 class="card-text">Director: ${x.Director}</h5>
            <h5 class="card-text">Stars: ${x.Actors}</h5>
            <h5 class="card-text">Languages: ${x.Language}</h5>
        </div>
    </div>`
}


/* 

 
 
Rotten tomatoes = Ratings[1].value 
Runtime
Actors
Director
Genre
Language
plot*/