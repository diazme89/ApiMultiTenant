"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuadrillas = void 0;
const sequelize_1 = require("sequelize");
class cuadrillas extends sequelize_1.Model {
    static initModel(sequelize) {
        cuadrillas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cuadrilla: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'cuadrillas',
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
        return cuadrillas;
    }
}
exports.cuadrillas = cuadrillas;
//# sourceMappingURL=cuadrillas.js.map