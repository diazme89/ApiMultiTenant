"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinos_direcciones = void 0;
const sequelize_1 = require("sequelize");
class destinos_direcciones extends sequelize_1.Model {
    static initModel(sequelize) {
        destinos_direcciones.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            destinatarios: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            direccion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            localidad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            provincia: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'destinos_direcciones',
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
                    name: "destinos_direcciones_key",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return destinos_direcciones;
    }
}
exports.destinos_direcciones = destinos_direcciones;
//# sourceMappingURL=destinos_direcciones.js.map