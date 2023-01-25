//const APIlink = 'https://imdb-api.com/en/API/Top250Movies/k_o27z07js';



getData = () => {
fetch (APIlink)
.then ((res) =>res.json())
.then((data) => {
 const rawData = data.items;
 console.log(rawData);
});
}

getData();