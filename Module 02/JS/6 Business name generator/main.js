/*
this is lec 62

/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
    Crazy
    Amazing
    Fire

Shop Name:
    Engine
    Foods
    Garments

Another Word:
    Bros
    Limited
    Hub

*/
let x = (Math.random() * 30);
let y = (Math.random() * 30);
let z = (Math.random() * 30);

let a
    if (x <= 10) {
        a ="Crazy"
    } else if (x > 10 && x <= 20) {
        a ="Amazing"
    } else {
        a ="Fire" 
    }

let b
    if (y <= 10) {
        b = "Engine"
    } else if (y > 10 && y <= 20) {
        b = "Foods"
    } else {
        b = "Garments"
    }

    let c
    if (x <= 10) {
        c = "Bros"
    } else if (x > 10 && x <= 20) {
        c = "Limited"
    } else {
        c = "Hub"
    }
console.log(`${a} ${b} ${c}`)