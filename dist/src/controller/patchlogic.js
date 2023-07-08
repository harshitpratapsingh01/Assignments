"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserData = void 0;
const schema_1 = require("../models/schema");
const changeUserData = (updateData, id, req, res) => {
    const person = schema_1.details.find((account) => account.id === id);
    const index = schema_1.details.indexOf(person);
    console.log(person);
    console.log(index);
    if (!person) {
        console.log("error");
        res.status(401).json({ StatusCode: '401', status: "error" });
    }
    else {
        const updatedAccount = Object.assign(Object.assign({}, person), updateData);
        console.log(updatedAccount);
        schema_1.details[index] = updatedAccount;
        res.status(200).json({ statusCode: '200', status: "Successs", details: schema_1.details });
    }
};
exports.changeUserData = changeUserData;
//# sourceMappingURL=patchlogic.js.map