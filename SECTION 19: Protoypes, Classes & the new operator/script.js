//// WHAT ARE OBJECT-PROTOTYPES

    // .prototype is a specific template object, that stores common Methods and properties for objects, like Array.prototype, String.pt etc

    // __proto__ is a property, which is a reference to the blueprint object of the object, like arrays etc, that contains all the build in methods
    
    // the methods are defined on the prototype object

    // every object has a reference to this prototype through its __proto__ property

    // Array.prototype will show us all Methods

    // We could define our own type of an object, and we could set its __proto__ to the Array.prototype


    // prototypes are template objects

    // several object types can share the same prototype


    // we can add new methods to existing prototypes : 

        // String.prototype.grumpus = () => alert('Go away!')
        // const cat = 'blue';
        // cat.grumpus()

    // using this to reference the object

        // String.prototype.yell = function() {
        //     return `OMG!!! ${this.toUpperCase()}!!!!`
        // }





//// INTRO TO OOP - OBJECT ORIENTED PROGRAMMING



    // central concept: 

    // organizing our code, designing and structuring our applications, by breaking things up into distinct patterns of objects.

 

//// FACTORY FUNCTIONS

    // a factory makes an object and returns it in the end

        // function makeColor(r,g,b){
        //     const color = {};
        //     color.r = r;
        //     color.g = g;
        //     color.b = b;
        //     color.rgb = function() {
        //          const {r,g,b} = this;   // destructure from this
        //          return `rgb(${r}, ${g}, ${b})`
        //     };
        //     color.hex = function() {    // no need to pass arguments;
        //         const {r,g,b} = this;
        //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        //     }
        //     return color;
        // }

        // const color1 = makeColor(255, 50, 14)
        // const color2 = makeColor(0, 255, 177)   

        // color1.hex !== color2.hex // !!!!


//// CONSTRUCTOR FUNCTIONS

    // 'new'
    // The new keyword Creates a blank, plain JS object;
    // Links (sets the constructor of) this object to another object;
    // Passes the newly created object from Step 1 as the this context;
    // Returns this if the function doesn't return its own object;


    // better option to not create and add all methods new to every new instance of the object:

        // function Color(r,g,b){   // with 'new' we don't have to create and return an object
        //     this.r = r;
        //     this.g = g;
        //     this.b = b;
        // }

        // Color.prototype.rgb = function() {     // by setting the Methods on the prototype, every new instance simply gets a reference to all methods through its __proto__ property
        //     const {r,g,b} = this;              // DONT USE ARROW FUNCTIONS, they dont get their own 'this'
        //     return `rgb(${r}, ${g}, ${b})`
        // };

        // Color.prototype.hex = function() { 
        //     const {r,g,b} = this;
        //     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        // };

        // Color.prototype.rgba = function(alpha = 1.0) {
        //     const {r,g,b} = this;
        //     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        // };


        // const color1 = new Color(255, 50, 14)
        // const color2 = new Color(0, 255, 177)

        // color1.hex === color2.hex // !!!






//// JS CLASSES


    // a new way to write the same thing with a cleaner syntax
    
    // usually we give classes an Uppercase letter for indication

        // class Color {
        //     constructor(r,g,b, name){    // constructor function runs automatically when called on a new instance
        //         this.r = r;             // adding properties to the new object
        //         this.g = g;
        //         this.b = b;
        //         this.name = name;
        //     }
        //     innerRGB() {                 // adding Methods to the prototype
        //         const {r,g,b} = this;
        //         return `${r}, ${g}, ${b}`
        //     }
        //     rgb() {                             // shorthand to define methods, also works in any object (reference lesson 'the secret life of objects)
        //         return `rgb(${this.innerRGB()})` // calls a method from within another method in the class
        //     };
        //     hex() { 
        //         const {r,g,b} = this;
        //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        //     };
        //     rgba (alpha = 1.0) {
        //         return `rgba(${this.innerRGB()}, ${alpha})`
        //     };
        // }

        // const color1 = new Color(255, 16, 19, 'tomato');  





//// MORE PRACTICE WITH CLASSES ADDING TO OUR COLOR CLASS



        // class Color {
        //     constructor(r,g,b, name){    
        //         this.r = r;             
        //         this.g = g;
        //         this.b = b;
        //         this.name = name;
        //         this.calcHSL();         // calling a method within the class from within the constructor!
        //     }
        //     innerRGB() {                 
        //         const {r,g,b} = this;
        //         return `${r}, ${g}, ${b}`
        //     }
        //     rgb() {                            
        //         return `rgb(${this.innerRGB()})` 
        //     };
        //     hex() { 
        //         const {r,g,b} = this;
        //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        //     };
        //     hsl(){
        //         const {h,s,l} = this;
        //         return `hsl(${h}, ${s}%, ${l}%)`
        //     }
        //     rgba (alpha = 1.0) {
        //         return `rgba(${this.innerRGB()}, ${alpha})`
        //     };
        //     fullSaturation(){
        //         const {h, l} = this;
        //         return `hsl(${h}, 100%, ${l}%)`
        //     }
        //     opposite(){
        //         const {h,s,l} = this;
        //         const newHue = (h + 180) % 360;
        //         return `hsl(${newHue}, ${s}%, ${l}%)`
        //     }
        //     calcHSL() {                         // hsl colors : hue, saturation, lightness;
        // 		let { r, g, b } = this;
        // 		// Make r, g, and b fractions of 1
        // 		r /= 255;
        // 		g /= 255;
        // 		b /= 255;

        // 		// Find greatest and smallest channel values
        // 		let cmin = Math.min(r, g, b),
        // 			cmax = Math.max(r, g, b),
        // 			delta = cmax - cmin,
        // 			h = 0,
        // 			s = 0,
        // 			l = 0;
        // 		if (delta == 0) h = 0;
        // 		else if (cmax == r)
        // 			// Red is max
        // 			h = ((g - b) / delta) % 6;
        // 		else if (cmax == g)
        // 			// Green is max
        // 			h = (b - r) / delta + 2;
        // 		else
        // 			// Blue is max
        // 			h = (r - g) / delta + 4;

        // 		h = Math.round(h * 60);

        // 		// Make negative hues positive behind 360°
        // 		if (h < 0) h += 360;
        // 		// Calculate lightness
        // 		l = (cmax + cmin) / 2;

        // 		// Calculate saturation
        // 		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // 		// Multiply l and s by 100
        // 		s = +(s * 100).toFixed(1);
        // 		l = +(l * 100).toFixed(1);
        // 		this.h = h;
        // 		this.s = s;
        // 		this.l = l;
        // 	}
        // }

        // const white = new Color(255,255,255);





//// EXTENDS, SUPER & SUBCLASSES


    // two classes that share a lot of the same functionality:

        // class Cat {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     eat(){
        //         return `${this.name} is eating`
        //     }
        //     meow(){
        //         return 'MEOWW!'
        //     }
        // }

        // class Dog {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     eat(){
        //         return `${this.name} is eating`
        //     }
        //     bark(){
        //         return 'WOOF!'
        //     }
        // }


    // writing a third class, that both can Extend on:  KEYWORDS EXTEND & SUPER

        // class Pet {
        //     constructor(name, age){
        //         this.name = name;
        //         this.age = age;
        //     }
        //     eat(){
        //         return `${this.name} is eating`
        //     }
        // }

        // class Cat extends Pet {  
        //     constructor(name, age, livesLeft = 9){
        //         super(name, age)                    // super references the superclass Pet
        //         this.livesLeft = livesLeft;
        //     }
        //     meow(){
        //         return 'MEOWW!'
        //     }
        // }

        // class Dog extends Pet { // no constructor, so Dog uses the constructor of Pet
        //     bark(){
        //         return 'WOOF!'
        //     }
        //     eat() {
        //         return `${this.name} scarfs his food`   // Dog having its own eat() overrides the Pets eat function
        //     }
        // }