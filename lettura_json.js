let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        //console.log(data[0].title) //Solo il tiolo del primo elemento

        //Dato che è un array ha la proprietà forEach
        data.forEach(el => {
            console.log("Titolo: " + el.title)
        });

    })