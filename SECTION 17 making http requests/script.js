//// JSON & XML

// key value pairs:

    // name : todd
    // email : todd@gmail
    // age : 90

// XML Extensible Markup Language
    // <name>
    //     <first>Todd</first>
    //     <last>Smith</last>
    // </name>
    // <email>todd@gmail</email>

// JSON
    // Java Script Object Notation

    // differences to JS:
        // every key must be in parentheses, a string with double quotes
        // we can store strings, numbers, booleans, arrays, but no functions!

    // {
    //     "name": {
    //         "first" : "todd",
    //         "last" : "Smith"
    //     }, 
    //     "email": "todd@gmail.com"
    // }





//// XMLHttpRequest: The basics

    //XHR's can be used to fetch any kind of data from a server, doesnt have to be only XML
    
    // doesn't support promises

    // used to be the only way

//// EXAMPLE

    // const firstReq = new XMLHttpRequest();
    // firstReq.addEventListener('load', function(){ // THIS WILL RUN WHEN THE REQUEST WORKS, standard function (not arrow) to get a this..
    //     console.log("IT WORKED!");
    //     const data = JSON.parse(this.responseText); // parse response data, returns JS object;
    //     console.log(data)
    //     for(let entry of data){
    //         console.log(entry.date, entry.name)
    //     }

    // })
    // firstReq.addEventListener('error', () => { // THIS WILL RUN WHEN THE REQUEST DOESN'T WORK
    //     console.log("ERROR!")
    // });
    // firstReq.open("GET", 'https://date.nager.at/api/v2/publicholidays/2020/US'); // SPECIFY URL
    // firstReq.send(); // SEND THE REQUEST -> THIS STEP TAKES TIME, IS HANDLED BY THE BROWSER AND THE API
    // console.log("Request Sent!");

// gets bulky and nested when request send back another url we want to send a request to in the callback.








//// fetch API
    
    // a newer and better way
    // supports promises
    // not supported in IE

    // fetch('https://swapi.dev/api/planets/') // fetch method returns a promise:
    // .then((response) => { 
    //     if(!response.ok){ // response runs, even with a 404, it just needs any response, ergo not a network error.
    //         throw new Error(`Status Code Error: ${response.status}`); // sends error to .catch
    //     } else {
    //         // response; // response returns a body: ReadableStream
    //         // response.json() //.json() reads stream and parses it. 
    //                 // only downside it takes time, it's asynchronous. 
    //                 // Therefore it returns another promise.

    //         response.json().then((data) => {
    //             for(let planets of data.results){
    //                 console.log(planets.name);
    //             }
    //         })
    //     }
    // }) 
    // .catch((err) => {
    //     console.log('SOMETHING WENT WRONG')
    //     console.log(err);
    // });






//// CHAINING fetch REQUESTS


    // fetch('https://swapi.dev/api/planets/')
    //     .then((response) => {
    //         if (!response.ok)
    //             throw new Error(`Status Code Error: ${response.status}`);
            
    //         return response.json();
    //     })
    //     .then((data) => {  // Move 2nd then out of the first callback by returning our data.
    //         console.log("FETCHED ALL PLANETS (first 10)")
    //         const filmURL = data.results[0].films[0];
    //         return fetch(filmURL) // return another request promise
    //     })
    //     .then((response) => { // copy and paste 1st response handling
    //         if (!response.ok)
    //             throw new Error(`Status Code Error: ${response.status}`);
            
    //         return response.json();
    //     })
    //     .then((filmdata) => {
    //         console.log("FETCHED FIRST FILM, based off of first Planet")
    //         console.log(filmdata.title);
    //     })
    //     .catch((err) => {
    //         console.log('SOMETHING WENT WRONG');
    //         console.log(err);
    //     })

    //     // repeated logic, but much flatter without confusing nesting




//// REFACTORING CHAINED FETCH REQUESTS


    // fetch('https://swapi.dev/api/planets/')
    //     .then((response) => {
    //         if (!response.ok)
    //             throw new Error(`Status Code Error: ${response.status}`);
            
    //         return response.json();
    //     })
    //     .then((data) => {  
    //         console.log("FETCHED ALL PLANETS (first 10)")
    //         for(let planet of data.results){
    //             console.log(planet.name);
    //         }
    //         const nextURL = data.next;      // getting next Url for next 10 planets
    //         return fetch(nextURL) 
    //     })
    //     .then((response) => { 
    //         if (!response.ok)
    //             throw new Error(`Status Code Error: ${response.status}`);
            
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log("FETCHED NEXT 10 PLANETS")
    //         for(let planet of data.results){
    //             console.log(planet.name);
    //         }
    //     })
    //     .catch((err) => {
    //         console.log('SOMETHING WENT WRONG');
    //         console.log(err);
    //     })


//// CLEAN UP INTO


    // const checkStatusAndParse = (response) => {
    //     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    //     return response.json(); 
    // }

    // const printPlanets = (data) => {
    //     console.log("LOADED 10 MORE PLANETS")
    //     for(let planet of data.results){
    //         console.log(planet.name);
    //     }
    //     return Promise.resolve(data.next); // Returns a resolved promise to pass data, or in this case next URL onto the next .then
    // }

    // const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    //     return fetch(url);
    // }

    // fetchNextPlanets()
    //     .then(checkStatusAndParse)
    //     .then(printPlanets)
    //     .then(fetchNextPlanets)
    //     .then(checkStatusAndParse)
    //     .then(printPlanets)
    //     .then(fetchNextPlanets)
    //     .then(checkStatusAndParse)
    //     .then(printPlanets)
    //     .catch((err) => {
    //         console.log('SOMETHING WENT WRONG');
    //         console.log(err);
    //     })








//// AXIOS

        // An external library for making HTTP requests
        // axios on github

        // import AXIOS:
        // <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

        // syntax:
        // axios.get(URL)

        // axios returns a promise

    // axios.get('https://swapi.dev/api/planets/')
    // .then((res) => {
    //     console.log(res.data);  //  axios returns an already parsed object
    // })
    // .catch((err) => {     // we don't need to manually check the response of the status code
    //     console.log(err)  // if status is !200 ok, the catch runs.     
    // });







//// SEQUENTIAL AXIOS REQUESTS

        // axios.get('https://swapi.dev/api/planets/')
        // .then((res) => {
        //     console.log(res.data)
        // })

    // OR IF YOU ONLY WANT THE DATA, USING DESTRUCTURING:

        // axios.get('https://swapi.dev/api/planets/')
        // .then(({data}) => {
        //     console.log(data);
        //     for(let planet of data.results){
        //         console.log(planet.name)
        //     }
        //     return axios.get(data.next)
        // })
        // .then(({data}) => {
        //     console.log(data);
        //     for(let planet of data.results){
        //         console.log(planet.name)
        //     }
        // })
        // .catch(err => {
        //     console.log('ERROR', err)
        // });

    // REFACTORED

        // const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
        //     return axios.get(url);
        // }
        // const printPlanets = ({data}) => {
        //     console.log(data)
        //     for(let planet of data.results){
        //         console.log(planet.name)
        //     }
        //     return Promise.resolve(data.next) // the next .then expects a resolved promise
        // }

        // fetchNextPlanets()
        // .then(printPlanets)
        // .then(fetchNextPlanets)
        // .then(printPlanets)
        // .then(fetchNextPlanets)
        // .then(printPlanets)
        // .catch(err => {
        //     console.log('ERROR', err)
        // });