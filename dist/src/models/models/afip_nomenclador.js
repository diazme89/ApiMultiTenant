"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_nomenclador = void 0;
const sequelize_1 = require("sequelize");
class afip_nomenclador extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_nomenclador.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            um: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_nomenclador',
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
        return afip_nomenclador;
    }
}
exports.afip_nomenclador = afip_nomenclador;
//# sourceMappingURL=afip_nomenclador.js.map