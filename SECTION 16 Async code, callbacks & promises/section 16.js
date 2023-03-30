//// CALLSTACK
    // works by last thing in = first thing out
    // use dev tools to go through the stack step by step to debug

//// JS is single - threaded
    // JS itself is only running one line of code at a time

//// How Asynchronous Callbacks work        
    // Browsers come with Web API's that are able to handle certain tasks in the background (like making requests or setTimeout)
    // The JS call stack recognizes these Web API functions and passes them off to the browser to take care of
    // Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

//// css sidetrack, use transform, not .left .top etc

//// element.getBoundingClientRect() 
    // gives you elements outer rectangle position

    // element.getBoundingClientRect().right for instance
    


//// PROMISES

    // A Promise is an object representing the eventual completion or failure of an asynchronous operation
    // A pattern for writing async code
    // A P is a returned object to which you can attach callbacks, instead of passing callbacks into a function

    //EXAMPLE

        // const willGetYouADog =  new Promise((resolve, reject) => {
        //     const rand = Math.random();
        
        //     // without resolve or reject, the promise will have the status of pending.

        //     if(rand < 0.5){
        //         resolve();
        //     }
        //     else{
        //         reject();
        //     }
        // });
        //     // Every promise has a .then method that runs when promise is resolved.
        // willGetYouADog.then(() => {
        //     console.log('We got a dog')
        // });
        //     // .catch will run if a promise was rejected
        // willGetYouADog.catch(() => {
        //     console.log('NO DOG')
        // }); 


    // same example, but add in delay

        // const willGetYouADog =  new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //     const rand = Math.random();
        //     if(rand < 0.5){
        //         resolve();
        //     }
        //     else{
        //         reject();
        //     }
        //     }, 5000);
        // });
        // willGetYouADog.then(() => {
        //     console.log('We got a dog')
        // });
        // willGetYouADog.catch(() => {
        //     console.log('NO DOG')
        // }); 


    // EXAMPLE FAKEREQUEST - pass arguments into reject & resolve

        // const fakeRequest = (url) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             const rand = Math.random();
        //             if(rand < 0.3){
        //                 reject({status: 404});
        //             }
        //             else {
        //                 const pages = {
        //                     '/users': [
        //                         {id: 1, username:'Bilbo' },
        //                         {id: 5, username:'Esmeralda' }
        //                     ],
        //                     '/about' : 'This is the about page!'
        //                 };
        //                 const data = pages[url];
        //                 resolve({status: 200, data })
        //             }
        //         }, 1000)
        //     })
        // }

        // fakeRequest('/users')
        //     .then((res) => {
        //         console.log('Status Code', res.status)
        //         console.log('Data', res.data)
        //         console.log('REQUEST WORKED');
        //     })
        //     .catch((res) => {
        //         console.log(res.status)
        //         console.log('REQUEST FAILED');
        //     });


    //// CHAINING PROMISES

        // adding promises inside the .then for promises relying on data from initial response when resolved 

        // instead of nesting, call then on the same level : 

            // .then() 
            // .then() // only runs if 1st promise is resolved AND .then returns a promise 
            // .then() // ...

            // .catch() // catches all if anything goes wrong

//// 



        