const assert = require("chai").assert;
const app = require("../app");
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;

// Results
let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5, 5);

describe("App", () => {
    describe("sayHello()", () => {
        it("sayHello should return Hello", () => {
            // let result = app.sayHello();
            assert.equal(sayHelloResult, "Hello");
        });
    
        it("sayHello should return type string", () => {
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, "string");
        });
    });
    describe("addNumbers()", () => {
        it("addNumbers should be above 5", () => {
            // let result = app.addNumbers(5, 5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it("addNumbers should return type number", () => {
            // let result = app.addNumbers(5, 5);
            assert.typeOf(addNumbersResult, "number");
        });
    });
    
});