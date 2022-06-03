"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.condicion_venta_tipo = void 0;
const sequelize_1 = require("sequelize");
class condicion_venta_tipo extends sequelize_1.Model {
    static initModel(sequelize) {
        condicion_venta_tipo.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'condicion_venta_tipo',
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
        return condicion_venta_tipo;
    }
}
exports.condicion_venta_tipo = condicion_venta_tipo;
//# sourceMappingURL=condicion_venta_tipo.js.map