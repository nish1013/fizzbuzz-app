import { Singleton } from "typescript-ioc";

@Singleton
export class FizzBuzzGen {
    generate(num: number): string {
        if (num % 3 === 0) {
            return "Fizz";
          } else {
            return num.toString();
        }
    }
}