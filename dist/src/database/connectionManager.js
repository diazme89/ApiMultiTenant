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
exports.getConnection = exports.dbConnectionBySlug = exports.getConnectionBySlug = exports.connectAllDb = void 0;
const sequelize_1 = require("sequelize");
const continuation_local_storage_1 = require("continuation-local-storage");
const commonDBConnection_1 = require("./commonDBConnection");
const sequelize_2 = require("sequelize");
const init_models_1 = require("../models/models/init-models");
let connectionMap;
/**
 * Aqui crearemos utilidades que nos ayudarán a conectarnos a nuestras bases de datos de inquilinos y resolver la conexión
 * Aqui encontraremos una funcion para conectarnos a todas nuestras bases de datos de inquilinos y resolver la conexion
 * y una funcion que nos devolvera una conexion de la connectionMap creada anteriormente
 * de esta manera tendremos nuestro administrados de conexion
 **/
/**
 * Creamos una instancia de sequelize para todos los inquilinos definidos en la tabla tenants de la base de datos compartida,
 * y las guardamos en un map
 * Esta funcion se llama desde el modelo Server
 **/
function connectAllDb() {
    return __awaiter(this, void 0, void 0, function* () {
        let tenants;
        try {
            tenants = yield commonDBConnection_1.dbSynCentral.query('SELECT * FROM tenants', { type: sequelize_2.QueryTypes.SELECT, raw: true });
        }
        catch (e) {
            console.log('error', e);
            return;
        }
        connectionMap = tenants
            .map((tenant) => {
            const config = createConnectionConfig(tenant);
            return {
                [tenant.slug]: new sequelize_1.Sequelize(config.database, config.username, config.passsword, { host: config.option.host,
                    dialect: config.option.dialect,
                })
            };
        })
            .reduce((prev, next) => {
            return Object.assign({}, prev, next);
        }, {});
    });
}
exports.connectAllDb = connectAllDb;
/**
 *  Creamos un objeto de configuracion para el tenant dado
 **/
const createConnectionConfig = (tenant) => {
    return {
        database: tenant.db_name,
        username: tenant.db_username,
        passsword: tenant.db_password,
        option: {
            host: tenant.db_host,
            dialect: 'mysql',
        }
    };
};
/**
 * Obtenemos informacion de la conexion (instancia de sequelize) para el slug del tenant dado
 * Esta funcion se llama dese el Resolver para obtener la instacia de sequelize para el tenant solicitado
 */
function getConnectionBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        if (connectionMap) {
            console.log(`Obteniendo conexion para ${slug}`);
            yield (0, exports.dbConnectionBySlug)(connectionMap[slug]);
            return connectionMap[slug];
        }
    });
}
exports.getConnectionBySlug = getConnectionBySlug;
// Esta funcion la estaba armando para asociar los modelos a la instancia de conexion del contexto actual
const dbConnectionBySlug = (conn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield conn.authenticate();
        (0, init_models_1.initModels)(conn);
        console.log(`Se estableció la conexión a la Base de datos`);
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error al inciar la base de datos`);
    }
});
exports.dbConnectionBySlug = dbConnectionBySlug;
/**
 * Obtenemos la informacion de conexion (instancia de sequelize) para el contexto actual.
 * Aqui hemos utilizado un getNamespace de 'continuation-local-storage'. Esto nos permite obtener
 * o establecer cualquier informacion y la vincula al contexto de solicitud actual.
 */
function getConnection() {
    const nameSpace = (0, continuation_local_storage_1.getNamespace)('unique context');
    const conn = nameSpace === null || nameSpace === void 0 ? void 0 : nameSpace.get('connection');
    if (!conn) {
        throw 'La conexión no está configurada para ninguna base de datos de inquilinos.';
    }
    return conn;
}
exports.getConnection = getConnection;
//# sourceMappingURL=connectionManager.js.map