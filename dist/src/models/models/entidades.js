"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entidades = void 0;
const sequelize_1 = require("sequelize");
class entidades extends sequelize_1.Model {
    static initModel(sequelize) {
        entidades.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entidades',
            timestamps: false
        });
        return entidades;
    }
}
exports.entidades = entidades;
//# sourceMappingURL=entidades.js.map