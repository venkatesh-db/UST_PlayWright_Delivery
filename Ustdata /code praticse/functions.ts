
function logMessage(message: string, userId?: number): void {
  console.log(message, userId ?? "Guest");
}

logMessage("Welcome"); // Welcome Guest
logMessage("Welcome", 123); // Welcome 123


const multiply = (a: number, b: number): number => a * b;

function discount(price: number, rate: number = 0.1): number {
  return price - price * rate;
}

console.log(discount(100)); // 90

