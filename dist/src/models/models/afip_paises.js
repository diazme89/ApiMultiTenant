"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_paises = void 0;
const sequelize_1 = require("sequelize");
class afip_paises extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_paises.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            codigo_cuit: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_paises',
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
        return afip_paises;
    }
}
exports.afip_paises = afip_paises;
//# sourceMappingURL=afip_paises.js.map