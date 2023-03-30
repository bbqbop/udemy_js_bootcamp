//// SECTION 18

// ASYNC FUNCTIONS

// function getData() {
//     const data = axios.get('https://swapi.dev/api/planets/').then((res) => {
//         console.log(res.data);
//     });
//     console.log(data);
// }



    // Async functions always return a Promise.
    // If the function returns a value, the promise will be resolved with that value.
    // If the function throws an exception, the promise will be rejected



    // async function add(x,y) {
    //     if (typeof x !== 'number' || typeof y !== 'number') {
    //         throw 'X and Y must be numbers!'
    //     }
    //     return x + y;
    // }


// is a shorter way of saying : 


    // function add(x, y){
    //     return new Promise((resolve, reject) => {
    //         if (typeof x !== 'number' || typeof y !== 'number') {
    //             throw 'X and Y must be numbers!'
    //         }
    //     resolve(x + y);
    //     })
    // }






//// AWAIT

    // we can only use the await keyword inside of functions declared with async.
    // await will pause the execution of the function, waiting for a promise to be resolved. 


    // function getPlanets() {
    //     return axios.get('https://swapi.dev/api/planets/')
    // }

    // getPlanets().then((res) => {
    //     console.log(res.data);
    // });


//  turn into , almost read like synchronous JS


    // async function getPlanets(){
    //     const res = await axios.get('https://swapi.dev/api/planets/') // we save the value that the promise is resolved with to a value
    //     console.log(res.data);
    // }

    // getPlanets();




//// ERROR HANDLING WITH ASYNC FUNCTIONS



// option 1, handling error inside the async function. 

    // async function getPlanets(){
    //     try {
    //         const res = await axios.get('https://swapi.dev/api/planets/') // we save the value that the promise is resolved with to a value
    //         console.log(res.data);
    //     } catch (err) {
    //         console.log('IN CATCH!', e)
    //     }};

    // getPlanets();


// option 2, handling it when calling the function. Gives us the option to have one catch for multiple .then. 

    // async function getPlanets(){
    //         const res = await axios.get('https://swapi.dev/api/planets/') // we save the value that the promise is resolved with to a value
    //         console.log(res.data);
    //     }

    // getPlanets().catch((err)=>{
    //     console.log('IN CATCH!', e);
    // })







//// MULTIPLE AWAITS

    // revisit promise exercise 'Moving Button'

        // const btn = document.querySelector('button')

        // const moveX = (element, amount, delay) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             const bodyBoundary = document.body.clientWidth;
        //             const elRight = element.getBoundingClientRect().right;
        //             const currLeft = element.getBoundingClientRect().left;
        //             if (elRight + amount > bodyBoundary) {
        //                 reject((bodyBoundary, elRight, amount));
        //             }
        //             else {
        //                 element.style.transform = `translateX(${currLeft + amount}px)`;
        //                 resolve();
        //             }
        //             }, delay);
        //     });
        // };

        // async function animateRight(el, amount){
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        //     await moveX(el, amount, 1000);
        // }

        // animateRight(btn, 100).catch((err) => {
        //     console.log('All done');
        //     animateRight(btn, -100)
        // })





//// PARALLEL VS SEQUENTIAL REQUESTS

    // SEQUENTIAL REQUESTS:  the 3 awaits run in sequence.

        // async function get3Pokemon(){
        //     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
        //     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
        //     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
        //     console.log(poke1.data.name, poke2.data.name, poke3.data.name)
        // }

        // get3Pokemon()




    // PARALLEL REQUESTS: if the requests don't rely on another.
    
        // async function get3Pokemon(){
        //     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1') // all request are being send out in parallel
        //     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
        //     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
        //     const poke1 = await prom1;
        //     const poke2 = await prom2;
        //     const poke3 = await prom3;
        //     console.log(poke1.data);
        //     console.log(poke2.data);
        //     console.log(poke3.data);
        // }

        // get3Pokemon()





    // ANOTHER EXAMPLE LightShow


        // function changeBodyColor(color, delay){
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             document.body.style.backgroundColor = color;
        //             resolve();
        //         }, delay)
        //     })
        // }


        // async function lightShow() {     /// running in sequence
        //     await changeBodyColor('teal', 1000);
        //     await changeBodyColor('pink', 1000);
        //     await changeBodyColor('indigo', 1000);
        //     await changeBodyColor('blue', 1000);
        //     await changeBodyColor('yellow', 1000);
        //     await changeBodyColor('rosa', 1000);
        //     await changeBodyColor('brown', 1000);
        //     await changeBodyColor('red', 1000);
        // }

        // async function lightShow() {
            
        //     const p1 = changeBodyColor('teal', 1000);
        //     const p2 = changeBodyColor('pink', 1000);
        //     const p3 = changeBodyColor('indigo', 1000);
        //     const p4 = changeBodyColor('blue', 1000);
        //     const p5 = changeBodyColor('yellow', 1000);
        //     const p6 = changeBodyColor('rosa', 1000);
        //     const p7 = changeBodyColor('brown', 1000);
        //     const p8 = changeBodyColor('red', 1000);     // runs in parallel, straight to the end.
        //     await p1;
        //     await p2;
        //     await p3;
        //     await p4;
        //     await p5;
        //     await p6;
        //     await p7;
        //     await p8;
        // }

        // lightShow();




//// REFACTORING WITH PROMISE.ALL
    // Promise.all accepts an array of promises
    // returns an array of all response objects when all promises have been resolved



    // async function get3Pokemon(){
    //     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1') // all request are being send out in parallel
    //     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    //     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    //     const results = await Promise.all([prom1, prom2, prom3]);
    //     printPokemon(results);
    // }

    // function printPokemon(res){
    //     for (let pokemon of res){
    //         console.log(pokemon.data.name)
    //     }
    // }

    // get3Pokemon()



//// we use async to declare an async function
//// we use await to await a resolved value within
//// 
