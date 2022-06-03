"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporte = void 0;
const sequelize_1 = require("sequelize");
class transporte extends sequelize_1.Model {
    static initModel(sequelize) {
        transporte.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_transporte: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            domicilio: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            marca: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            patente: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            responsable: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            documento: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            patente2: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            contacto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            predefinido: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'transporte',
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
        return transporte;
    }
}
exports.transporte = transporte;
//# sourceMappingURL=transporte.js.map