"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_monedas = void 0;
const sequelize_1 = require("sequelize");
class afip_monedas extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_monedas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            fechadesde: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            fechahasta: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_monedas',
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
        return afip_monedas;
    }
}
exports.afip_monedas = afip_monedas;
//# sourceMappingURL=afip_monedas.js.map