"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtro_animales = void 0;
const sequelize_1 = require("sequelize");
class filtro_animales extends sequelize_1.Model {
    static initModel(sequelize) {
        filtro_animales.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            sexo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            cod_color: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            num_caravana: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            fecha_nac: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            cod_animal: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            num_compra: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            num_venta: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            raza: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'filtro_animales',
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
        return filtro_animales;
    }
}
exports.filtro_animales = filtro_animales;
//# sourceMappingURL=filtro_animales.js.map