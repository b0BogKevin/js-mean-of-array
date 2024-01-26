function avg(p) {
    let sum = 0
    for (let i = 0; i < p.length; i++) {
        sum += p[i];
    }
    return Math.floor(sum/p.length)
}

let test1 = [1,2]
let test2 = [1,3,5]
let test3 = [1,1,1,1]

console.log(avg(test1))
console.log(avg(test2))
console.log(avg(test3))
