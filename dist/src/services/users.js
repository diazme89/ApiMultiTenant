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
exports.getUsuariosModel = exports.getUsuarios = void 0;
const connectionManager_1 = require("../database/connectionManager");
const sequelize_1 = require("sequelize");
const init_models_1 = require("../models/models/init-models");
/**
 * No necesitamos que los servicios sepan que conexion estamos usando gracias
 * al tipo de abstraccion que armamos en el codigo
 **/
/**
 * Obtener todos los usuarios.
 **/
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual
    const db = (0, connectionManager_1.getConnection)();
    const usuariosList = yield db.query('SELECT * FROM usuarios', { type: sequelize_1.QueryTypes.SELECT, raw: true });
    res.json(usuariosList);
});
exports.getUsuarios = getUsuarios;
const getUsuariosModel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual
    yield (0, connectionManager_1.getConnection)();
    const usuariosList = yield init_models_1.usuarios.findAll();
    res.json(usuariosList);
});
exports.getUsuariosModel = getUsuariosModel;
//# sourceMappingURL=users.js.map