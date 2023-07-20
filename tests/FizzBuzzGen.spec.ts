import { FizzBuzzGen } from "../src/gen/FizzBuzzGen";
import { expect } from "chai";

describe("FizzBuzzGen", () => {
  it("should return string of the provided number where number is not multiple of 3 or 5", () => {
    const fizzBuzzGen = new FizzBuzzGen();
    expect(fizzBuzzGen.generate(1)).to.equal("1");
    expect(fizzBuzzGen.generate(3)).to.not.equal("3");
    expect(fizzBuzzGen.generate(100)).to.not.equal("100");
    expect(fizzBuzzGen.generate(45)).to.not.equal("45");
  });

  it("For multiples of three print “Fizz” instead of the number.", () => {
    const fizzBuzzGen = new FizzBuzzGen();
    expect(fizzBuzzGen.generate(3)).to.equal("Fizz");
    expect(fizzBuzzGen.generate(6)).to.equal("Fizz");
    expect(fizzBuzzGen.generate(9)).to.equal("Fizz");
  });

  it("For multiples of five print “Buzz” instead of the number.", () => {
    const fizzBuzzGen = new FizzBuzzGen();
    expect(fizzBuzzGen.generate(5)).to.equal("Buzz");
    expect(fizzBuzzGen.generate(10)).to.equal("Buzz");
    expect(fizzBuzzGen.generate(20)).to.equal("Buzz");
  });

  it("For numbers that are multiples of both three and five print “FizzBuzz”.", () => {
    const fizzBuzzGen = new FizzBuzzGen();
    expect(fizzBuzzGen.generate(15)).to.equal("FizzBuzz");
    expect(fizzBuzzGen.generate(90)).to.equal("FizzBuzz");
    expect(fizzBuzzGen.generate(45)).to.equal("FizzBuzz");
  });

});
