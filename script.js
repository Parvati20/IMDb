
async function getData(){
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b83cea4e3emshe2e7dfa6bff0fe3p184520jsn4b8ccb956710',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
  
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem("movies", JSON.stringify(result));
        console.log("Data fetched and stored in local storage.");
    } catch (error) {
        console.error(error);
    }
  }
  
  async function showData() {
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (!movies) {
        console.log("Fetching data from IMDb API...");
        await getData();
        movies = JSON.parse(localStorage.getItem("movies"));
    }
  
    if (movies && movies.length > 0) {
        const mainDiv = document.querySelector(".main");
        mainDiv.innerHTML = ""; 
        movies.forEach(movie => {
            const div = document.createElement("div");
            div.addEventListener("click",()=>{
              window.location.href="about.html";
              localStorage.setItem("movie" .JSON.stringify(movies[i]));
          })
            div.className = "container";
            div.setAttribute("id",i)
            div.innerHTML = `
                <img src="${movie.image}" alt="movie image" class="image">
                <h2>${movie.rating}</h2>
                <h2>${movie.title}</h2>
                <button>Watch</button>
                <button>Trailer</button>
            `;
            mainDiv.appendChild(div);
        });
    } else {
        console.log("No movie data found.");
    }
  }
  window.addEventListener("DOMContentLoaded",getData());
  
  
  
