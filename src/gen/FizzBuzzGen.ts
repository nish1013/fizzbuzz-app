import { Singleton } from "typescript-ioc";

@Singleton
export class FizzBuzzGen {
    generate(num: number): string {
        if (num % 3 === 0) {
            return "Fizz";
          } else if (num % 5 === 0) {
            return "Buzz";
          }
          else {
            return num.toString();
        }
    }
}