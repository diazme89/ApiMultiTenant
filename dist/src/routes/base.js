"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_1 = require("../services/users");
exports.router = (0, express_1.Router)();
exports.router.get('', (req, res) => {
    res.status(200).json({ status: "running" });
});
// API Route
exports.router.get('/', (req, res, next) => {
    res.status(200).json({ body: 'Hello multi-tenant application.' });
});
exports.router.get('/users', users_1.getUsuarios);
exports.router.get('/usersmodel', users_1.getUsuariosModel);
exports.default = exports.router;
//# sourceMappingURL=base.js.map