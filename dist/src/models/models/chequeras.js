"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chequeras = void 0;
const sequelize_1 = require("sequelize");
class chequeras extends sequelize_1.Model {
    static initModel(sequelize) {
        chequeras.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            denominacion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            numero_inicial: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_final: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'chequeras',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return chequeras;
    }
}
exports.chequeras = chequeras;
//# sourceMappingURL=chequeras.js.map