// ex03.js

function areaHardcoreCalculator(x1, y1, x2, y2) {
    let x = x2 - x1
    let y = y2 - y1
    // if (x1 > x2) {
    //     x = x1 - x2
    // }else if (x1 < x2) {
    //     x = x2 - x1
    // }   if(y1 > y2) {
    //     y = y1 - y2
    // }else if (y1 < y2) {
    //     y = y2 - y1
    // }

    return x * y
}

console.log(areaHardcoreCalculator(0, 1, 3, 2)); // Résultat attendu: 3
console.log(areaHardcoreCalculator(1, 68, 2, 87)); // Résultat attendu: 19