//const APIlink = 'https://imdb-api.com/en/API/Top250Movies/k_o27z07js';


getData = () => {
fetch (APIlink)
.then ((res) =>res.json())
.then((data) => {
const reData = refactorData(data.items);
movieCard(reData);
});
};



refactorData = (movies) => {
    let movieData = []

    movies.map ((m) => {
        movieData.push({
            id: m.id,
            title: m.title,
            year: m.year,
            rank: m.rank,
            image: m.image,
            imDbRating: m.imDbRating,
            likes: 0,
            comments: ''
            });       
    });
return movieData;
};



movieCard = (reFacMovies) => {
    let moviesCards = ''
reFacMovies.map((m)=>{
moviesCards +=  `<div class="movieCard">
<img src="${m.image}" alt="${m.title}" />
<div class="movieCardDetails">
  <h2>${m.title}</h2>
  <p>${m.year}</p>
  <p>IMDB Rating: <span>${m.imDbRating}</span></p>
  <div class="movieCardSocial">
    <a href="#"><i class="fas fa-heart"></i></a>
    <a href="#"><i class="fas fa-share-alt"></i></a>
    <a href="#"><i class="fas fa-comment"></i></a>
  </div>
</div>
</div>`;
});

document.querySelector('body').innerHTML = moviesCards
};
getData();