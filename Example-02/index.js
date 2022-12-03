var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TypeScrip Code.
var appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>TypeScript Starter</h1>';
var x;
x = 3;
function sayIt(msg) {
    appDiv.innerHTML = msg;
}
sayIt('<h1>Hi There</h1>');
// Exercise.
function add(a, b) {
    return a + b;
}
appDiv.innerHTML = add(2, 2) + ' is the answer.';
// Exercise
function log(msg, inDev) {
    if (inDev === void 0) { inDev = false; }
    if (inDev) {
        appDiv.innerHTML = msg;
    }
}
log('in dev Mode', true);
// Exercise - object;
function logObj(o) {
    appDiv.innerHTML = o + '';
}
logObj({ a: 3 });
// Exercise - any
function logAny(a) {
    appDiv.innerHTML = a;
}
//logAny('h1');
//logAny(true)
logAny({ a: 4 });
/**
 * Accessors
 */
var appDiv2 = document.getElementById('app2');
var Dog = /** @class */ (function () {
    //name;
    function Dog(name) {
        this.name = name;
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(hairball) {
        this.hairball = hairball;
    }
    Cat.prototype.meow = function () {
        if (this.hairball) {
            return 'meow - cough, cough';
        }
        else {
            return 'meow';
        }
    };
    return Cat;
}());
var kitty = new Cat(false);
kitty.hairball = true;
appDiv2.innerHTML = kitty.meow();
/**
 * Generics
 */
var Ball = /** @class */ (function () {
    function Ball(bounciness) {
        this.bounciness = bounciness;
    }
    return Ball;
}());
var BallOfString = /** @class */ (function () {
    function BallOfString(length) {
        this.length = length;
    }
    return BallOfString;
}());
var ball1 = new Ball(2);
var string1 = new BallOfString(3);
var Toys = /** @class */ (function () {
    function Toys() {
        this.collection = [];
    }
    Toys.prototype.additem = function (newItem) {
        this.collection.push(newItem);
    };
    return Toys;
}());
var dogToys = new Toys();
dogToys.additem(ball1);
/**
 * Decorators
 */
function nameit(target) {
    console.log('decoating' + target);
}
var Cow = /** @class */ (function () {
    function Cow(name) {
        this.name = name;
    }
    Cow.prototype.moo = function () {
        return 'Moo - ' + this.name;
    };
    Cow = __decorate([
        nameit
    ], Cow);
    return Cow;
}());
