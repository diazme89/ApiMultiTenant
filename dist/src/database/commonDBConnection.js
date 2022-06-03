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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnectionSynCentral = exports.dbSynCentral = exports.config = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
exports.default = dotenv_1.default.config();
exports.config = {
    database: process.env.DB_DATABASE || '',
    username: process.env.DB_USER || '',
    passsword: process.env.DB_PASSWORD || '',
    option: {
        host: process.env.DB_HOST || '',
        dialect: 'mysql',
        // logging: false,
    }
};
exports.dbSynCentral = new sequelize_1.Sequelize(exports.config.database, exports.config.username, exports.config.passsword, {
    host: exports.config.option.host,
    dialect: exports.config.option.dialect,
    // logging: false,
});
const dbConnectionSynCentral = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.dbSynCentral.authenticate();
        //initModelsSynCentral(dbSynCentral);  
        console.log('Se estableció la conexión a la Base de datos Syn Central.');
    }
    catch (error) {
        console.log(error);
        throw new Error('Error al inciar la base de datos Syn Central.');
    }
});
exports.dbConnectionSynCentral = dbConnectionSynCentral;
//# sourceMappingURL=commonDBConnection.js.map