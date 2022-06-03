"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_localidades = void 0;
const sequelize_1 = require("sequelize");
class afip_localidades extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_localidades.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cod_provincia: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'afip_localidades',
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
                    name: "afip_localidades_xkey1",
                    using: "BTREE",
                    fields: [
                        { name: "cod_provincia" },
                    ]
                },
            ]
        });
        return afip_localidades;
    }
}
exports.afip_localidades = afip_localidades;
//# sourceMappingURL=afip_localidades.js.map