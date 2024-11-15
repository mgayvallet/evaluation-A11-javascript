function getReduction(price, age) {
    if (age < 5) {
        return 0        
    }else if (age <= 18) {
        return price * 0.5
    }else if (age <= 25) {
        let total = price * 0.3
        return price - total
    }else if (age > 25) {
        return price 
    }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45