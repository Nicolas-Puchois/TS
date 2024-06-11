// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !

function sayHello(target: { firstName: string, money: number }): string {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstName: 'World', money: 123 });