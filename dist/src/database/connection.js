"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSynCentral = exports.db = void 0;
var sequelize_1 = require("sequelize");
// innoa_base
exports.db = new sequelize_1.Sequelize('innoa_base', 'dba', 'gestion525', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.dbSynCentral = new sequelize_1.Sequelize('syn_central', 'dba', 'gestion525', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
// export default db;
//# sourceMappingURL=connection.js.map