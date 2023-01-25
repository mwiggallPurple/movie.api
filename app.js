//const APIlink = 'https://imdb-api.com/en/API/Top250Movies/k_o27z07js';



getData = () => {
fetch (APIlink)
.then ((res) =>res.json())
.then((data) => {
 refactorData(data.items)
});
}

refactorData = (movies) => {
    let movieData = []

    movies.map ((m) => {
        movieData.push(
            {
            id: m.id,
            title: m.title,
            year: m.year,
            rank: m.rank,
            image: m.image,
            imDbRating: m.imDbRating,
            likes: 0,
            comments: ''
            }
        )       
    })

    console.log(movieData)
}
getData();