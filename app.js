//#1 Create an Object
let cat = {
    name: "Loki" ,
    numLegs: 4
    };

//#2 Use Dot Notation to Access the Properties of an Object
let cat = {
    name: "Loki",
    numLegs: 4
  };
  console.log(cat.name);
  console.log(cat.numLegs);

 //#3 Create a Method on an Object
 let cat = {
    name: "Loki",
    numLegs: 4,
  sayLegs: function() {return "This cat has " + cat.numLegs + " legs.";}
  };
  cat.sayLegs();

  //#4 Make Code More Reusable with the this Keyword
  let cat = {
    name: "Loki",
    numLegs: 4,
    sayLegs: function() {return "This cat has " + this.numLegs + " legs.";}
  };
  
  cat.sayLegs();

  //#5 Define a Constructor function
  function Cat() {
    this.name = "Loki";
    this.color = "grey";
    this.numLegs = 4;
  }

  //#6 Use a Constructor to Create Objects
  function Cat() {
    this.name = "Mittens";
    this.color = "white";
    this.numLegs = 4;
  }
  // Only change code below this line
  let calico = new Cat();

  //#7 Extend Constructors to Receive Arguments
  function Cat(name, color) { 
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    let bombay = new Cat("Whiskers", "black");

    //#8 Verify an Object's Constructor with instanceof
    function Kitchen(numMeals) {
        this.numMeals = numMeals;
      }
      
      // Only change code below this line
      let myKitchen = new Kitchen(3);
      
      myKitchen instanceof Kitchen;

      //#9 Understand Own Properties
      function Cat(name) {
        this.name = name;
        this.numLegs = 4;
      }
      
      let himalayan = new Cat("Thor");
      let ownProps = [];
      // Only change code below this line
      for (let property in himalayan) {
        if(himalayan.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log(ownProps);

      //#10 Use Prototype Properties to Reduce Duplicate Code
      function Cat(name) {
        this.name = name;
      }
      
      Cat.prototype.numLegs = 4;
      
      // Only change code above this line
      let somali = new Cat("Ichigo");
