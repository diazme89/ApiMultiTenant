"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localidad = void 0;
const sequelize_1 = require("sequelize");
class localidad extends sequelize_1.Model {
    static initModel(sequelize) {
        localidad.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "codigo"
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            cod_provincia: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_afip_localidad: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            cod_postal: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'localidad',
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
                    name: "codigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return localidad;
    }
}
exports.localidad = localidad;
//# sourceMappingURL=localidad.js.map