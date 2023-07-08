"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeUserData = void 0;
const schema_1 = require("../models/schema");
const validateUpdates_1 = require("../middleware/validateUpdates");
const changeUserData = (updateData, id, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validateUpdates_1.validateUpdateSchima.validateAsync(updateData);
        const person = schema_1.details.find((account) => account.id === id);
        const index = schema_1.details.indexOf(person);
        console.log(person);
        console.log(index);
        if (!person) {
            console.log("error");
            const message = "User Not Found";
            res.status(404).json({ StatusCode: '404', status: message });
        }
        else {
            const updatedAccount = Object.assign(Object.assign({}, person), updateData);
            console.log(updatedAccount);
            schema_1.details[index] = updatedAccount;
            res.status(200).json({ statusCode: '200', status: "Successs", details: schema_1.details });
        }
    }
    catch (err) {
        const message = "Please Enter Valid Details";
        console.log("error");
        res.status(422).json({ statusCode: '422', status: 'Unprocessable Entity', message });
    }
});
exports.changeUserData = changeUserData;
//# sourceMappingURL=patchlogic.js.map