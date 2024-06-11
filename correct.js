// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !
function sayHello(target) {
    return "Hello ".concat(target.firstName, ", you have ").concat(target.money, " on your bank account.");
}
var message = sayHello({ firstName: 'World', money: 123 });
