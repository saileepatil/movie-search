var movieElement = document.getElementById("srch-Element")
var movieBtn = document.getElementById("srch-btn")
var movieBox = document.getElementById("wrapper")
var movieDetail = document.getElementById("movieStatus")

movieBtn.addEventListener("click" , function () {
  movieBox.innerHTML = ""
  movieDetail.innerText = ""
  movieDetail.innerText = "Loading......"
   if(movieElement.value == ""){
    alert("type something")
    movieDetail.innerText = ""
   }else{
 
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieElement.value}`)
    .then((res)=>{
        if(res.data.Response == "True"){
            movieDetail.innerText = ""
        let movie = res.data.Search
        movie.map((movie,index)=>{
            console.log(movie);
            movieBox.innerHTML += `
            <div class="movieCard">
                        <img 
                       class="movieThumNail"
                        src="${movie.Poster}"/>
                        <div class = "movieDetail">
                         <p><b>Title :</b>${movie.Title}</p>
                         <p><b>Year :</b>${movie.Year}</p>
                         </div>
                      </div>`
            
            
        }  )
    }else{
        movieDetail.innerText = ""
                  movieDetail.innerText = `404 movie not found`
      
    }
    }  )
   }
}   )


