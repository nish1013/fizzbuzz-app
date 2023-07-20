import { expect } from "chai";
import { FizzBuzzGenService } from "../src/services/FizzBuzzGenService";
import { FizzBuzzGen } from "../src/gen/FizzBuzzGen";
import { instance, mock, when } from "ts-mockito";

describe("FizzBuzzGenService", () => {
    it("should generate 100 outputs in any case", () => {
        
        const fizzBuzzGenMock: FizzBuzzGen = mock(FizzBuzzGen);

        const service = new FizzBuzzGenService();
        service["fizzBuzzGen"] = instance(fizzBuzzGenMock); // Mock

        // Mock console.log
        const output: string[] = [];
        const originalLog = console.log;
        console.log = (s: string) => output.push(s);
        service.print();
        console.log = originalLog;;

        // Assert
        expect(output).to.have.lengthOf(100);
    });

    it("should generate correct output", () => {
        
        const fizzBuzzGenMock: FizzBuzzGen = mock(FizzBuzzGen);
        when(fizzBuzzGenMock.generate(1)).thenReturn("1");
        when(fizzBuzzGenMock.generate(3)).thenReturn("Fizz");
        when(fizzBuzzGenMock.generate(5)).thenReturn("Buzz");
        when(fizzBuzzGenMock.generate(15)).thenReturn("FizzBuzz");

        const service = new FizzBuzzGenService();
        service["fizzBuzzGen"] = instance(fizzBuzzGenMock); // Mock

        // Mock 
        const output: string[] = [];
        const originalLog = console.log;
        console.log = (s: string) => output.push(s);
        service.print();
        console.log = originalLog;;

        // Assert
        expect(output[0]).to.equal("1");
        expect(output[2]).to.equal("Fizz");
        expect(output[4]).to.equal("Buzz");
        expect(output[14]).to.equal("FizzBuzz");
    });
});
