"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendedores = void 0;
const sequelize_1 = require("sequelize");
class vendedores extends sequelize_1.Model {
    static initModel(sequelize) {
        vendedores.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            porcentaje: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            contrato: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            sueldo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            zona: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            fecha_ingreso: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            viatico: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cuil: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: true
            },
            inactivo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'vendedores',
            hasTrigger: true,
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
                {
                    name: "vendedores_xkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_vendedor" },
                    ]
                },
            ]
        });
        return vendedores;
    }
}
exports.vendedores = vendedores;
//# sourceMappingURL=vendedores.js.map