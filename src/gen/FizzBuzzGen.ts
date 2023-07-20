import { Singleton } from "typescript-ioc";

@Singleton
export class FizzBuzzGen {
    // return a string , we have to return Fizz and Buzz very soon
    generate(num: number): string {
        return num.toString();
    }
}