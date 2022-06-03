"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.depositos = void 0;
const sequelize_1 = require("sequelize");
class depositos extends sequelize_1.Model {
    static initModel(sequelize) {
        depositos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            domicilio_empresa: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            tipo_deposito: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            punto_de_venta: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'depositos',
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
        return depositos;
    }
}
exports.depositos = depositos;
//# sourceMappingURL=depositos.js.map