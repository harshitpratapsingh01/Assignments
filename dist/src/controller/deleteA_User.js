"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserData = void 0;
const schema_1 = require("../models/schema");
const deleteUserData = (id, req, res) => {
    const person = schema_1.details.find((user) => user.id === id);
    const index = schema_1.details.indexOf(person);
    if (!person) {
        console.log("error");
        const message = "User Not Found";
        res.status(404).json({ StatusCode: '401', status: message });
    }
    else {
        schema_1.details.splice(index, 1);
        res.status(200).json({ statusCode: '200', status: 'success', details: schema_1.details });
    }
};
exports.deleteUserData = deleteUserData;
//# sourceMappingURL=deleteA_User.js.map