"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajas = void 0;
const sequelize_1 = require("sequelize");
class cajas extends sequelize_1.Model {
    static initModel(sequelize) {
        cajas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                primaryKey: true
            },
            nro_caja: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cajas',
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
        return cajas;
    }
}
exports.cajas = cajas;
//# sourceMappingURL=cajas.js.map