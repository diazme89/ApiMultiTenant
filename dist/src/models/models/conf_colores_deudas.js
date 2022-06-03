"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf_colores_deudas = void 0;
const sequelize_1 = require("sequelize");
class conf_colores_deudas extends sequelize_1.Model {
    static initModel(sequelize) {
        conf_colores_deudas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            desde: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            hasta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'conf_colores_deudas',
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
        return conf_colores_deudas;
    }
}
exports.conf_colores_deudas = conf_colores_deudas;
//# sourceMappingURL=conf_colores_deudas.js.map