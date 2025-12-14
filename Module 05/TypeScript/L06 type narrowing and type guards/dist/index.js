"use strict";
// typeof
Object.defineProperty(exports, "__esModule", { value: true });
function getchai(kind) {
    if (typeof kind === "string") {
        return `making ${kind} chai`;
    }
    return `no. of order is ${kind}`;
}
console.log(getchai("pink"));
console.log(getchai(2));
// type narrowing helps in suggest methods.
// truthiness
// here ?: is used to check if message has occured or not?
function getMsg(msg) {
    if (msg) {
        return msg;
    }
    return "no message";
}
console.log(getMsg("hello"));
console.log(getMsg());
//# sourceMappingURL=index.js.map