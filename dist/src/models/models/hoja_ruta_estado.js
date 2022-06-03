"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoja_ruta_estado = void 0;
const sequelize_1 = require("sequelize");
class hoja_ruta_estado extends sequelize_1.Model {
    static initModel(sequelize) {
        hoja_ruta_estado.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_estado: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'hoja_ruta_estado',
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
        return hoja_ruta_estado;
    }
}
exports.hoja_ruta_estado = hoja_ruta_estado;
//# sourceMappingURL=hoja_ruta_estado.js.map