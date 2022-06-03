"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destino_precios = void 0;
const sequelize_1 = require("sequelize");
class destino_precios extends sequelize_1.Model {
    static initModel(sequelize) {
        destino_precios.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_dest: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_area: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'destino_precios',
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
                    name: "destino_precios_key",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return destino_precios;
    }
}
exports.destino_precios = destino_precios;
//# sourceMappingURL=destino_precios.js.map