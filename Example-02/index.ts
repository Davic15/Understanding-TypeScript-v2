// TypeScrip Code.
const appDiv: HTMLElement = document.getElementById('app')!;
appDiv.innerHTML = '<h1>TypeScript Starter</h1>'

let x: number;
x = 3;

function sayIt(msg: string) {
    appDiv.innerHTML = msg;
}

sayIt('<h1>Hi There</h1>');

// Exercise.
function add (a: number, b: number) {
    return a + b;
}
appDiv.innerHTML = add(2, 2) + ' is the answer.';

// Exercise
function log (msg: string, inDev: boolean = false) {
    if (inDev) {
        appDiv.innerHTML = msg;
    }
}
log('in dev Mode', true);

// Exercise - object;
function logObj(o: object) {
    appDiv.innerHTML = o + '';
}
logObj({a: 3});

// Exercise - any
function logAny (a: any) {
    appDiv.innerHTML = a;
}
//logAny('h1');
//logAny(true)
logAny({a: 4})


/**
 * Accessors
 */
const appDiv2: HTMLElement = document.getElementById('app2')!;

class Dog {
    //name;
    constructor(private name: string){}
}

class Cat {
    hairball: boolean;
    constructor(hairball: boolean) {
        this.hairball = hairball;
    }
    meow() {
        if (this.hairball) {
            return 'meow - cough, cough';
        } else {
            return 'meow';
        }
    }
}

let kitty = new Cat(false);
kitty.hairball = true;
appDiv2.innerHTML = kitty.meow();

/**
 * Generics
 */

class Ball { 
    bounciness: number;
    constructor (bounciness: number) {
        this.bounciness = bounciness;
    }
}
class BallOfString { 
    length: number;
    constructor (length: number) {
        this.length = length;
    }
}

const ball1 = new Ball(2);
const string1 = new BallOfString(3);

class Toys<T> {
    collection: T[] = [];

    additem(newItem: T) {
        this.collection.push(newItem)
    }
}

const dogToys = new Toys<Ball>();
dogToys.additem(ball1)


/**
 * Decorators
 */
function nameit(target: any) {
    console.log('decoating' + target);
}

@nameit
class Cow {
    constructor(private name: string) {}
    moo() {
        return 'Moo - ' + this.name
    }
}