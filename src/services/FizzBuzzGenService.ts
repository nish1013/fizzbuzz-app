import { FizzBuzzGen } from "../gen/FizzBuzzGen";
import {Inject} from "typescript-ioc";

export class FizzBuzzGenService {
    @Inject
    private fizzBuzzGen: FizzBuzzGen;
    print(): void {
        for (let i = 1; i<= 100; i++) {
            console.log(this.fizzBuzzGen.generate(i))
        }
    }
}