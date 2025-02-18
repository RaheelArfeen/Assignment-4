function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' && typeof f2 !== 'object') {
        return "Invalid";
    }

    if (!f1.name || !f1.roll || !f1.bestFriend || !f2.name || !f2.roll || !f2.bestFriend) {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}

const f1a = { name: "hashem", roll: 1, bestFriend: 2 };
const f2a = { name: "kashem", roll: 2, bestFriend: 1 };
console.log(isBestFriend(f1a, f2a));

const f1b = { name: "hashem", roll: 21, bestFriend: 1 };
const f2b = { name: "kashem", roll: 1, bestFriend: 2 };
console.log(isBestFriend(f1b, f2b));

const f1c = { name: "kashem", roll: 2, bestFriend: 11 };
const f2c = "Kashem er Kono Bondhu Nai";
console.log(isBestFriend(f1c, f2c));

console.log(isBestFriend("heaem", {name:"kashem", roll:2, bestFriend:11}))

const f1d = { name: "hashem", roll: 1, bestFriend: 1 };
const f2d = { name: "kashem", roll: 1, bestFriend: 1 };
console.log(isBestFriend(f1d, f2d));