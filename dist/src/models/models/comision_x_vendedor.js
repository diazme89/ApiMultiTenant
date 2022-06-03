"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comision_x_vendedor = void 0;
const sequelize_1 = require("sequelize");
class comision_x_vendedor extends sequelize_1.Model {
    static initModel(sequelize) {
        comision_x_vendedor.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            comision: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'comision_x_vendedor',
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
        return comision_x_vendedor;
    }
}
exports.comision_x_vendedor = comision_x_vendedor;
//# sourceMappingURL=comision_x_vendedor.js.map