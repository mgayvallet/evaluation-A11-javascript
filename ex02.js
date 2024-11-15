// ex02.js

function areaCalculator(width, height) {
    if( width > height){
        return width
    }else{
        return height
    }
}

console.log(areaCalculator(1, 3)); // Résultat attendu: 3
console.log(areaCalculator(1, 0)); // Résultat attendu: 0