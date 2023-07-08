"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayAllData = exports.displayUserData = void 0;
const schema_1 = require("../models/schema");
const displayAllData = (req, res) => {
    try {
        res.status(200).json({ statusCode: '200', status: "ok", details: schema_1.details });
    }
    catch (_a) {
        res.status(500).send("Server error");
    }
};
exports.displayAllData = displayAllData;
const displayUserData = (id, req, res) => {
    try {
        const user = schema_1.details.find((find_id) => find_id.id === id);
        if (user) {
            res.status(200).json({ statusCode: '200', status: "ok", user });
        }
        else {
            res.status(404).json({ statusCode: '404', status: "User Not Found" });
        }
        // console.log(req);
    }
    catch (_a) {
        res.status(500).send("Server error");
    }
};
exports.displayUserData = displayUserData;
//# sourceMappingURL=displayData.js.map