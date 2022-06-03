"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unidad_productiva = void 0;
const sequelize_1 = require("sequelize");
class unidad_productiva extends sequelize_1.Model {
    static initModel(sequelize) {
        unidad_productiva.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            nro_certif: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            fec_venc: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            limite_peso: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'unidad_productiva',
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
        return unidad_productiva;
    }
}
exports.unidad_productiva = unidad_productiva;
//# sourceMappingURL=unidad_productiva.js.map