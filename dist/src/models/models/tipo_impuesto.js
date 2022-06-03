"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_impuesto = void 0;
const sequelize_1 = require("sequelize");
class tipo_impuesto extends sequelize_1.Model {
    static initModel(sequelize) {
        tipo_impuesto.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_tipo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            tipo_impuesto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tipo_impuesto',
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
        return tipo_impuesto;
    }
}
exports.tipo_impuesto = tipo_impuesto;
//# sourceMappingURL=tipo_impuesto.js.map