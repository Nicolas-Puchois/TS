/* function addition(x: number, y: number):  number {
    return x + y;
}
const result = addition(10, 20);
console.log(result);
*/
function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
var result = damage({ life: 100, magic: 20 }, 12);
console.log(result);
