"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cania_peladores = void 0;
const sequelize_1 = require("sequelize");
class cania_peladores extends sequelize_1.Model {
    static initModel(sequelize) {
        cania_peladores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_produccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empleado: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            tarea_nro: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cania_peladores',
            timestamps: false
        });
        return cania_peladores;
    }
}
exports.cania_peladores = cania_peladores;
//# sourceMappingURL=cania_peladores.js.map