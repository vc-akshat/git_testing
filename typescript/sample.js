"use strict";
// interface Idata{
//    fname:string;
//    lname:string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
// export type User = unknown;
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
