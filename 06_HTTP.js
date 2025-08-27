//Introduzione ai WebServer

const http = require('http');
/*
Per poter creare un webServer devo utilizzare CreateServer che prende 2 parametri: 
    - req = request (richiesta)
    - res = response (risposta)
*/

const server = http.createServer((req, res) =>{
    // res.write("<h1>Benvenuto sul sito di Node con metodo http sulla porta 3000<h1>");
    // res.end(); //Chiudo la connessione
   
    //Ora vado a gestire la req, facendo le url (Rooting)

    if(req.url === '/'){
        res.end("<h1>Benvenuto nella home del sito</h1>")
    }else if(req.url === '/node'){
        res.end("<h1>Pagina dedicata a node</h1><p>Introduzione</p>")
    }else if(req.url == '/michele'){
        res.end(`<h1>Pagina di Michele</h1>
            <h3>Introduzione</h3>
            <p>Inizio paragrafo introduzione</p>
            `)
    }else{
        res.end(`<h1>Erorre 404 pagina non trovata</h1>
            <p>Torna alla <a href="/">Home</a>`)
    }
})

//Se provo ad eseguire prima di scrivere le cose sotto, cioè mandare in ascolto il server, non succede nulla
server.listen(3000) //Lancio il server sulla porta 3000 oppure una porta a casa che scelgo io
//Ora se lanciamo il comando node, il software non si ferma ma lancerà il server in ascolto sulla porta
//Aprire il browser e andare su localhost:<prota>. Per fermare tutto ctrl+c nel terminale
console.log("Server in ascolto sulla porta 3000")