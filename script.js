// // INTRODUCTION TO DOM




//// document.methods:
////  getElementById - returns dom-object

////  getElementsByTagName - returns list of dom-objects/ empty collection if nothing is found
    // returned HTMLCollection is an array like object
    // input[0] selecting by indices works
    // .length works
    // most Array methods won't
    // Collection is iterable (loops):
    // for (let input of inputs)
    // you can spread objects in collection into an array:
    // const arr = [...inputs]

////  getElementsByClassName
    // returns HTMLCollection

//// search within other objects to narrow down search:
    // const ul = document.getElementsByTagName('ul')[0]
    // ul.getElementsByClassName('special')

//// doesn't work with ID, because ID is supposed to be unique to a single object!!




//// querySelector
// A newer, all-in-one method to select a single element.
// pass in a CSS selector:
    // document.querySelector('#byid')
    // document.querySelector('h1')
    // document.querySelector('.byClass')

    // returns a single object (at most), selects the first match!

//// querySelectorAll
    // returns a collection of all matching elements, but not a HTMLCollection, it's a NodeList
    // NodeLists are also array-like objects
    // difference to HTMLcollection is that we have the forEach function
    






//// SECTION 14


// ACCESSING HTML ATTRIBUTES with JS properties
// WORKING WITH innerText, textContent & innerHTML

// innerText vs textContent : 
    // innerText returns simply the text
    // textContent also returns text formatting, it's aware of what is actually showing in the browser.

// innerHTML
    // returns a string of all HTML elements



// .value , .checked 
    // .value to read inputs into input fields (text, password, range)
    // .checked for checkbox inputs, check if checked
     
// .placeholder to access placeholder

// .href to access href on a - tags

// .src to access image source 


//// ACCESSING HTML ATTRIBUTES with JS methods

    // getAttribute
        // const range = document.querySelector('input[type="range"]')
        // range.getAttribute('max')

    // setAttribute
        // range.setAttribute('min', '-500')
        // to set attributes, select attribute and value to change it to (in quotes)




//// ACCESSING OTHER ELEMENTS IN RELATION TO THE OBJECT YOU'RE WORKING WITH WITH JS PROPERTIES

    // const firstLi = document.querySelector('li')
    // firstLi.parentElement // UL
    // firstLi.parentElement.parentElement // body
    // firstLi.parentElement.parentElement.parentElement // HTML

    // const ul = document.querySelector('ul')
    // ul.children // HTML Collection of LI's
    // ul.children[0] // working with first LI

    // firstLi.nextElementSibling // working with 2nd Li
    // const thirdLi = firstLi.nextElementSibling.nextElementSibling // 3rd Li
    // thirdLi.previousElementSibling // 2nd Li




//// CHANGING MULTIPLE ELEMENTS

    // const allLis = document.querySelectorAll('li')
    // for (let i = 0; i < allLis.length; li++){
    //     console.log(allLis[i].innerText);
    //     allLis[i].innerText = 'We are the Champions!' // changing all Lis
    // }

    // // same using for of loop
    // for (let li of allLis){
    //     li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
    // }





//// ALTERING STYLES

    // .style 
        // we can change styles, but if existing styles were'nt declared in-line (inside HTML) we can't read them. 
        // JS writes in-line into the HTML as well

        // css styles are kebab-cased, in JS property names are camel-cased :
        // background-color is .style.backgroundColor

        // const allLis = document.querySelectorAll('li');
        // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

        // allLis.forEach((el, idx) => { // forEach takes 2 parameters, the element, and it's index
        //     const color = colors[i];
        //     el.style.color = color;
        // })

    
    // getComputedStyle('HTMLelement')

        // returns CSSStyleDeclaration, and Object of all style key-value pairs 

        // const li = document.querySelector('li');
        // const compStyles = getComputedStyle(li);
        // compStyles.color // returns computed color


    // .classList

        // returns DOMTokenList that contains methods
        // like .remove .add .toggle

        // better option than altering single properties in-line with .style
    
        // const todo = document.querySelector('.todo');
        // todo.getAttribute('class') // .todo
        // todo.classList.remove('todo') // removes .todo
        // todo.classList.add('todo') // adds it again
        // todo.classList.toggle('done') // adds done if it's not on yet, removes otherwise
        //     // toggle returns true/false, false if its already there, true when added


//// CREATE AND INSERT ELEMENTS

    //.createElement('HTMLtype')
        // document.createElement('h2'); // creates a new element H2

    //.appendChild('newElement')
        // new element appends to the end of the parent element

        // //EX
            // const newImg = document.createElement('img');
            // newImg.src = 'imgURL';
            // newImg.style.width = '300px';

            // document.body.appendChild(newImg);

            // const newLink = document.createElement('a');
            // newLink.innerText = 'Mr. Bubz Video! CLICK ME';
            // newLink.href = 'linkURL';

            // const firstP = document.querySelector('p');
            // firstP.appendChild(newLink);

    //.insertBefore('newElement', 'sibling')
        // is being called on the parent, needs the new element and the sibling it should precede

        // //EX
            // const firstLi = document.querySelector('li');
            // const parentUl = document.querySelector('li');
            // parentUl.insertBefore(newLi, firstLi)

    
    //.insertAdjacentElement(position, element)
        // position options:
            // 'beforebegin'
            // 'afterbegin'
            // 'beforeend'
            // 'afterend'
        //visualization
            // beforebegin
            // <p>
            // afterbegin
            // ...
            // beforeend
            // </p>
            // afterend

        // EX
            // const i = document.createElement('i');
            // i.innerText = 'I am italics!'
            // const firstP = document.querySelector('p');
            // firstP.insertAdjacentElement('beforebegin', i);


    //.append() & .prepend(element, ...)
        // take multiple elements
            // firstP.append(i, newLi)


   //.remove() & .removeChild() 
        // removeChild() - is being called on the parent
            // const ul = document.querySelector('section ul');
            // const removeMe = ul.querySelector('.special');

            // const deleted = ul.removeChild(removeMe) // if you want, removeChild returns deleted element

        // remove - is being called on the Element itself
            // const h1 = document.querySelector('h1');
            // h1.remove()













    ////////////////////////////////////////
    //// PRACTICE

        // NBA SCORES CHART

        // const warriorsGames = [{
        //     awayTeam: {
        //         team: 'Golden State',
        //         points: 119,
        //         isWinner: true
        //     },
        //     homeTeam: {
        //         team: 'Houston',
        //         points: 106,
        //         isWinner: false
        //     }
        //     },
        //     {
        //     awayTeam: {
        //         team: 'Golden State',
        //         points: 105,
        //         isWinner: false
        //     },
        //     homeTeam: {
        //         team: 'Houston',
        //         points: 127,
        //         isWinner: true
        //     }
        //     },
        //     {
        //     homeTeam: {
        //         team: 'Golden State',
        //         points: 126,
        //         isWinner: true
        //     },
        //     awayTeam: {
        //         team: 'Houston',
        //         points: 85,
        //         isWinner: false
        //     }
        //     },
        //     {
        //     homeTeam: {
        //         team: 'Golden State',
        //         points: 92,
        //         isWinner: false
        //     },
        //     awayTeam: {
        //         team: 'Houston',
        //         points: 95,
        //         isWinner: true
        //     }
        //     },
        //     {
        //     awayTeam: {
        //         team: 'Golden State',
        //         points: 94,
        //         isWinner: false
        //     },
        //     homeTeam: {
        //         team: 'Houston',
        //         points: 98,
        //         isWinner: true
        //     }
        //     },
        //     {
        //     homeTeam: {
        //         team: 'Golden State',
        //         points: 115,
        //         isWinner: true
        //     },
        //     awayTeam: {
        //         team: 'Houston',
        //         points: 86,
        //         isWinner: false
        //     }
        //     },
        //     {
        //     awayTeam: {
        //         team: 'Golden State',
        //         points: 101,
        //         isWinner: true
        //     },
        //     homeTeam: {
        //         team: 'Houston',
        //         points: 92,
        //         isWinner: false
        //     }
        //     }
        // ]

        // // const chartUL = document.createElement('ul');
        // // const body = document.querySelector('body');
        // // // document.appendChild(chartUL)

        // // for(entry of warriorsGames){
        // //     let awayTeam = entry.awayTeam.team;
        // //     let homeTeam = entry.homeTeam.team;
        // //     let awayScore = entry.awayTeam.points;
        // //     let homeScore = entry.homeTeam.points;
        // //     let entryLi = document.createElement('li');
        // //     if (awayTeam === 'Golden State' && entry.awayTeam.isWinner === 'true'){
        // //         entryLi.classList.toggle('win')
        // //     }
        // //     if (awayScore > homeScore
        // //         ? entryLi.innerHTML = `${awayTeam} vs ${homeTeam} <b>${awayScore}</b>-${homeScore}`
        // //         : entryLi.innerHTML = `${awayTeam} vs ${homeTeam} ${awayScore}-<b>${homeScore}</b>`
        // //         );
        // //     chartUL.appendChild(entryLi);
        // // }

        // // body.append(chartUL);

        // //// CORRECTION

        // // const ulParent = document.createElement('ul');
        // // for(let game of warriorsGames){
        // //     const {homeTeam, awayTeam} = game; // DESTRUCTURING !!
        // //     const gameLi = document.createElement('li');
        // //     const {team:hTeam, points: hPoints} = homeTeam; // !!
        // //     const {team:aTeam, points: aPoints} = awayTeam; // !!
        // //     const teamNames = `${aTeam} @ ${hTeam}`;
        // //     let scoreLine
        // //     if (aPoints > hPoints){
        // //         scoreLine = `<b>${aPoints}</b>-${hPoints}`
        // //     }else {
        // //         scoreLine = `${aPoints}-<b>${hPoints}</b>`
        // //     }
        // //     const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
        // //     gameLi.classList.add(warriors.isWinner?'win':'loss')

        // //     gameLi.innerHTML = `${teamNames} ${scoreLine}`
        // //     ulParent.append(gameLi);
        // // }

        // // document.body.prepend(ulParent);



        // //// REFACTORING INTO FUNCTION FOR REUSABILITY
                
                

        // const makeChart = (games, targetTeam) => {
        //     const ulParent = document.createElement('ul');
        //     for(let game of games){
        //         const gameLi = document.createElement('li');
        //         gameLi.innerHTML = getScoreLine(game);
        //         isWinner(game, targetTeam);
        //         gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss')
        //         ulParent.append(gameLi);
        //     }
        //     return ulParent
        // }
        // const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
        //     const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
        //     return target.isWinner;
        // }
        // const getScoreLine = ({homeTeam, awayTeam}) => {
        //     const {team:hTeam, points: hPoints} = homeTeam; // !!
        //     const {team:aTeam, points: aPoints} = awayTeam; // !!
        //     const teamNames = `${aTeam} @ ${hTeam}`;
        //     let scoreLine
        //     if (aPoints > hPoints){
        //         scoreLine = `<b>${aPoints}</b>-${hPoints}`
        //     }else {
        //         scoreLine = `${aPoints}-<b>${hPoints}</b>`
        //     }
        //     return `${teamNames} ${scoreLine}`;
        // }

        // const gsSection = document.querySelector('#gs');
        // const hrSection = document.querySelector('#hr');
        // const gsChart = makeChart(warriorsGames, 'Golden State');
        // const hrChart = makeChart(warriorsGames, 'Houston');
        // gsSection.appendChild(gsChart);
        // hrSection.appendChild(hrChart);

    //////////////////////////////////////////
    ////








//// SECTION 15
///////////////////////////////////////////////
//// COMMUNICATING WITH EVENTS



 //// addEventListener(event, callback)

    //  // .onclick or inline simply overwrites existing event listeners 

    //  const btn = document.querySelector('button');
    //  btn.addEventListener('click', function(){
    //     alert('Clicked')
    //  })

    //  btn.addEventListener('click', function(){
    //     console.log('2nd Thing')
    //  })

    //  //// addEventListener allows multiple 

    //  btn.addEventListener('mouseover', function(){
    //     btn.innerText = 'Stop touching me'
    //  })

    //  btn.addEventListener('mouseout', function(){
    //     btn.innerText = 'Click Me';
    //  })

    //  //// select window for the global scope!
    //  window.addEventListener('scroll', function() {
    //     console.log('STOP SCROLLING!')
    //  })





//// DEMO THE IMPOSSIBLE BUTTON

    // const btn = document.querySelector('button')
    // btn.addEventListener('mouseover', function(){
    //     //// USE window.innerWidth & Height for current window size
    //     btn.style.left = `${Math.random() * window.innerWidth}px`;
    //     btn.style.top = `${Math.random() * window.innerHeight}px`;
    // })

    // btn.addEventListener('click', function(){
    //     btn.innerText = 'YOU GOT ME!';
    //     document.body.style.backgroundColor = 'green'
    // })






//// EVENTS ON MULTIPLE ELEMENTS

    //  const colors = [
    //     'red',
    //     'orange',
    //     'yellow',
    //     'green',
    //     'blue',
    //     'purple',
    //     'indigo',
    //     'violet'
    //  ];

    //  const h1 = document.querySelector('h1');
    //  const printColor = function(){
    //     console.log(this.style.backgroundColor) //// .this refers to the box that is being clicked on
    //     h1.style.color = this.style.backgroundColor;
    // }

    // const container = document.querySelector('#boxes');

    //  for (let color of colors) {
    //     const box = document.createElement('div');
    //     box.style.backgroundColor = color;
    //     box.classList.add('box');
    //     box.addEventListener('click', printColor);       
    //     container.append(box);
    //  }




//// THE EVENT OBJECT

// is always part of the eventlistener, we can capture it :
    // addEventListener(function(event){})
    // it contains information about the event (key, mouseclick etc)



//// keydown, keyup & keypress
    // keydown triggers at keydown
    // keyup triggers key release
    // keypress triggers when key actually writes into an input(letters, space etc)
        // triggers at enter, not at delete, uppercase (shift + letter) are only 1 keypress



//// EXERCISE SHOPPING LIST

    // const addItemInput = document.querySelector('#addItem');
    // const shoppingList = document.querySelector('#shoppingList')
    // addItemInput.addEventListener('keypress', function(event){
    //     if (event.key === 'Enter'){
    //         // add a new item to the list
    //         const newLi = document.createElement('li');
    //         newLi.innerText = this.value;
    //         shoppingList.append(newLi);
    //         this.value = ''
    //     }
    // })


    

