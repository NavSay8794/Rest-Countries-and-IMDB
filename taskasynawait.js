
let makelayout = async () => {
    try{
        let url = 'https://restcountries.eu/rest/v2/all'

        let response = await fetch(url)
        let result = await response.json()
        layout(result)
    }catch(error){
        console.log(error)
    }
    
}
makelayout()

let layout = (x) => {
    var m = 0
    var sect = document.getElementById('containerSect')
    for (let i = 1; i <= 63; i++) {
        var r = document.createElement("div");
        sect.appendChild(r);
        r.className = "row";
        r.id = `row${i}`;
        var rid = document.getElementById(`row${i}`)

        var br = document.createElement('br')
        sect.appendChild(br)
        for (let j = 0; j < 4; j++) {
            var c = document.createElement("div");
            rid.appendChild(c);
            c.className = "col-lg-3 col-md-6 col-sm-12";
            c.id = `col${j}`;
            var cid = document.querySelector(`#row${i} #col${j}`)

            cid.innerHTML = `
            <div class="card" style="width: 16rem; background-color:#eeeeee; margin-bottom: 10px">
                <div class="card-body" style = "padding: 20px 0">
                    <div class ="padder">
                        <h5 class="card-title">${x[m].name}</h5>
                    </div>
                    <img src=${x[m].flag} class="card-img-top" alt="..." style = "width:100%;height: 10rem; margin-bottom: 10px">
                </div>
                <div class="card-body" style = "padding: 0 15px 10px 15px">
                    <h5 class="card-title">Capital: ${x[m].capital}</h5>
                    <p class="card-text">Country Codes: ${x[m].alpha2Code} , ${x[m].alpha3Code}</p>
                    <p class="card-text">Region: ${x[m].region}</p>
                </div>
                <div class="card-body buttons">
                    <button type="button" id=${x[m].name} class="btn btn-primary" onclick ="getWeatherDetails(this.id)">Weather Details</button>
                </div>
          </div>`
            m++
        }
    }
}


let getWeatherDetails = async (y) => {

    try{
        let api_key = 'eb8ea9f133d75bd85238f7fc85a99b09'
        let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${y}&appid=${api_key}`

        let responsew = await fetch(weatherUrl)
        let resultw = await responsew.json()

        let buttonReplace = document.querySelector(`#${y}`)
        buttonReplace.innerHTML = `Temperature is = ${(resultw.main.temp -273.15).toFixed(1)} &#8451`

    }catch(error){
        console.log(error)
    }
}