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
exports.newUser = void 0;
const schema_1 = require("../models/schema");
const validation_1 = require("../middleware/validation");
const newUser = (new_data, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validation_1.validateSchima.validateAsync(new_data);
        schema_1.details.push(new_data);
        res.status(200).json({ statusCode: '200', status: "Success", details: schema_1.details });
    }
    catch (error) {
        console.log("error");
        const err = "Please Enter Valid Details";
        res.status(422).json({ statusCode: '422', status: 'Unprocessable Entity', err });
    }
});
exports.newUser = newUser;
//# sourceMappingURL=addNewUser.js.map