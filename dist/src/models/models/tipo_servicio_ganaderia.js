"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_servicio_ganaderia = void 0;
const sequelize_1 = require("sequelize");
class tipo_servicio_ganaderia extends sequelize_1.Model {
    static initModel(sequelize) {
        tipo_servicio_ganaderia.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipo_servicio_ganaderia',
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
        return tipo_servicio_ganaderia;
    }
}
exports.tipo_servicio_ganaderia = tipo_servicio_ganaderia;
//# sourceMappingURL=tipo_servicio_ganaderia.js.map