context = describe;

describe("the JavaScript language", function() {

  describe("has different types and operators", function() {
    it("considers numbers to be equal to their string representation", function() {
      expect(1 == "1").toBeTruthy();
      expect(1 != "1").toBeFalsy();
    });

    it("knows that numbers and strings are not exactly the same", function() {
      expect(1 === "1").toBeFalsy();
      expect(1 !== "1").toBeTruthy();
    });

    it("joins parts as string when using the plus operator", function() {
      expect(1 + "a").toEqual("1a");
    });

    it("operates integers before joining the string", function() {
      expect(1 + 1 + "2").toEqual('22');
    });

    it("knows the type of the variable", function() {
      let x = 1;

      expect(typeof(x)).toEqual('number');
    });

    it("surprises me, NaN is not comparable with NaN", function() {
      expect(5 / "a").toEqual(5 / "a");
      //expect(typeof(NaN)).toEqual();
      expect(isNaN(5 / "a")).toBeTruthy();
    });

    it("considers an empty string to be falsy", function() {
      //expect("" == false).toBe......();// Truthy or Falsy
      //expect("" === false).toBe.....();// Truthy or Falsy
    });

    it("considers zero to be falsy", function() {
      //expect(0 == false).toBe......();// Truthy or Falsy
      //expect(0 === false).toBe.....();// Truthy or Falsy
    });

    it("considers nulls to be falsy", function() {
      let x = null;
      let result;

      if (x) {
         result = true;
      } else {
         result = false;
      }

      //expect(result == false).toBe......();// Truthy or Falsy
      //expect(null === false).toBe.....();// Truthy or Falsy
      //expect(null == false).toBe....();// Truthy or Falsy
    });

    it("knows the type of a function", function() {
      function x(){}

      expect(typeof(x)).toBe('function');
      //expect(typeof(xxx)).toBe('...');
    });

    it("has arrays and they can contain anything inside", function() {
      let arr = [1,2,3,4];
      arr.push(5);
      arr[9] = 6;
      let matrix = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 7, 8]];

      /*
      expect(arr[1]).toEqual();
      expect(arr[4]).toEqual();
      expect(arr[6]).toEqual();
      expect(arr[9]).toEqual();
      expect(matrix[0][2]).toEqual();
      */
    });

    it("may contain functions inside arrays", function() {
      let arr = [1,2, function(arg){ return 3 + arg;}];

      //expect(arr[2](1)).toEqual();
    });

    it("concatenate arrays - well, kind of", function() {
      let a = [1,2,3];
      let b = [4,5,6];

      //expect(a + b).toEqual();
    });

    it("joins arrays and strings", function() {
      let a = [1,2,3];

      //expect ("1" + a).toEqual();
      //expect(a + "1").toEqual();
    });

    it("joins arrays and other things", function() {
      let a = [1,2,3];
      let b = ['x', 'y', 'z'];

      //expect(1 + a).toEqual();
      //expect(a + 1).toEqual();
      //expect(1 + b).toEqual();
      //expect(true + a).toEqual();
    });

    it("can't compare arrays", function() {
      let a = [1,2,3];
      let b = [1,2,3];

      //expect(a == b).toBe.....();  // Truthy or Falsy
      //expect(a === b).toBe.....(); // Truthy or Falsy
    });

    it("is not the same to compare by value than by reference ", function() {
      let a = [1,2,3];
      let b = [1,2,3];

      expect(a).toEqual(b);        // Jasmine toEqual compares by value
      expect(a).not.toBe(b);       // Jasmine toBe compares by reference
    });
  });


  describe("considers functions as first class citizens", function() {
    it("can declare named functions", function() {
      function example() {
        return 'some example';
      }

      //expect(example()).toEqual();
    });

    it("can declare anonymous functions", function() {
      let someLet = function(a, b) {
        return a + b;
      };

      //expect(typeof(someLet)).toBe();
      //expect(someLet(1,1)).toBe();
    });

    it("may return anything", function() {
      function example(arg) {
        return [arg, arg * 2, arg * 3];
      }

      let result = example(2);

      //expect(result[1]).toEqual();
    });

    it("may return arrays that contains functions and so on", function() {
      function example() {
         // write the missing code here
      }

      //expect(example()[0](1)[1]).toEqual(10);
    });

    it("can use optional parameters", function() {
      function example(a, b, c) {
        if (c) {
          return a + b + c;
        }
        return a + b;
      }

      //expect(example(1,1,1)).toBe();
      //expect(example(1,1)).toBe();
    });

    it("anonymous functions are anonymous", function() {
      let x = function z() {
        return 1;
      };
      //expect(typeof(z)).toEqual();
      //expect(x()).toEqual();
    });

    it("passes primitive types as values (a copy) to functions", function() {
      function example(arg) {
        arg = "test!";
      }

      let x = 1;
      let y = "example";
      let z = true;

      // example(x);
      // expect(x).toEqual();

      // example(y);
      // expect(y).toEqual();

      // example(z);
      // expect(z).toEqual();
    });

    it("passes arrays by reference", function() {
      function example(arg) {
        arg[0] = 100;
      }

      let x = [1,2,3];

      example(x);
      //expect(x).toEqual();
    });

    it("passes objects by reference", function() {
      function example(arg) {
        arg.property = 'test';
      }

      let x = { property: 'cool!' };

      example(x);
      //expect(x).toEqual();
    });

    it("may return a function as the result of invoking a function", function() {
      function add(a, b){
        return a + b;
      }

      function example(){
        return add;
      }

      //expect(example()(1,2)).toEqual();
      let f = example();
      //expect(f(2,2)).toEqual();
    });

    it("can return closures as a function result", function() {
      function plus(amount){
        return function(number){
          return number + amount;
        };
      }

      let f = plus(5);

      //expect(f(3)).toBe();
    });

    it("can have functions that receive other functions as arguments", function() {
      function add(a,b){
        return a + b;
      }

      function example(arg){
        return arg(2,2) + 1;
      }

      //expect(example(add)).toEqual();
    });

    it("may have functions as the input and the output", function() {
      function plus(originalFunction) {
        return function(arg1) {
          return originalFunction() + arg1;
        };
      }

      let f = plus(function() {return 1;});

      //expect(f(2)).toBe();
    });
  });

  describe("has multiple ways to define and create objects", function() {
    it("can define object literals", function() {
        let obj = {
          name:    'bob',
          theName: function() {
            return this.name;
          }
        };

        //expect(obj.theName()).toBe();
    });

    it("can create properties dynamically", function() {
      let obj = {
        name:    'bob',
        surname: 'sponge'
      };
      obj.address = 'palm tree';

      //expect(obj.address).toEqual();
      //expect(obj['address']).toEqual();
      //expect(obj['name']).toEqual();
    });

    it("may define complex objects", function() {
      let user;
      // write the contents of the obj to make the satisfy the expectations:

      //expect(user.address.street).toEqual('sesame');
      //expect(user.friends[0].name).toEqual('triki');
    });

    it("has a pattern called, the Module Pattern", function() {
      function createObject() {
        let points = 0;

        return {
          addPoint: function(){ ++points; },
          score:    function(){ return points; }
        };
      }

      let obj = createObject();
      obj.addPoint();

      //expect(obj.score()).toEqual();
      //expect(typeof(obj.points)).toEqual();
    });

    it("may create objects also with the module pattern", function() {
      function createObject(initialScore) {
        // write the code here
      }

      /*
      let obj = createObject(5, 'red');
      obj.incrementScoreIn(5);
      expect(obj.color).toEqual('red');
      expect(obj.points()).toEqual(10);
      */
    });

    it("can define constructors", function() {
      function Obj() {
        let name = 'bob';

        this.theName = function() {
          return name;
        };
      }

      let obj = new Obj();
      //expect(obj.theName()).toBe();
    });

    it("may contain 'static' methods", function() {
      function Obj() {
        let name = 'bob';

        this.theName = function() {
          return name;
        };
      }

      Obj.someStaticMethod = function() {
        return 22;
      };

      //expect(Obj.someStaticMethod()).toBe();
    });

    it("can define a factory", function() {
      function obj() {
        let self = {};
        let name = 'bob';

        self.theName = function() {
          return name;
        };

        return self;
      }

      let instance = obj();
      //expect(instance.theName()).toBe();
      //expect(instance.theName).not.toBe(obj().theName);
    });

    it("can create methods dynamically on an object instance", function() {
        let obj = {};
        let methodNames = ['meow', 'jump'];

        for (let i = 0; i < methodNames.length; i++) {
          obj[[methodNames[i]]] = function() { return 'it works'; };
        }

        //expect(obj.meow()).toEqual();
    });
  });
});
