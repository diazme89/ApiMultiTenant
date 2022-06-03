"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_tipos_envios = void 0;
const sequelize_1 = require("sequelize");
class ec_tipos_envios extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_tipos_envios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_envio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            cant_dias_entrega: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            costo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true,
                defaultValue: 0.00
            },
            envio_gratis: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true,
                defaultValue: "true"
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_tipos_envios',
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
        return ec_tipos_envios;
    }
}
exports.ec_tipos_envios = ec_tipos_envios;
//# sourceMappingURL=ec_tipos_envios.js.map