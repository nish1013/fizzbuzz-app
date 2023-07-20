import { FizzBuzzGen } from "../src/gen/FizzBuzzGen";
import { expect } from "chai";

describe("FizzBuzzGen", () => {
  it("should return string of the provided number", () => {
    const fizzBuzzGen = new FizzBuzzGen();
    expect(fizzBuzzGen.generate(1)).to.equal("1");
    expect(fizzBuzzGen.generate(10)).to.equal("10");
    expect(fizzBuzzGen.generate(100)).to.equal("100");
  });
});
