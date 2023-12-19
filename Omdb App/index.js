const apiKey="4f4b140a"
    let input=document.querySelector("#searchInput");
    let moviesDiv=document.getElementById("moviesDiv");
    async function search(){
        try {
            let fetchData=await fetch (`http://www.omdbapi.com/?s=${input.value}&apikey=${apiKey}`)
            let allData=await fetchData.json();
            console.log(allData)
            if(!input.value)
            {
                alert("Please Enter Movie Name")
                moviesDiv.innerHTML=``
            }
            else
            {
                let output=``;
                allData.Search.forEach(movie => {
                    output+=`<div id="movieCard">
                               <img class="moviePoster" src="${movie.Poster}" alt="Movie-Poster">
                               <h2 class="movieName">${movie.Title}</h2>
                               <h2 class="movieYear">Year: ${movie.Year}</h2>
                              
                             </div>`
                });
                moviesDiv.innerHTML=output;
            }
        } catch (error) {
            console.log(error)
        }
    }