"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_tipos_datos_opcional = void 0;
const sequelize_1 = require("sequelize");
class afip_tipos_datos_opcional extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_tipos_datos_opcional.init({
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
            tableName: 'afip_tipos_datos_opcional',
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
        return afip_tipos_datos_opcional;
    }
}
exports.afip_tipos_datos_opcional = afip_tipos_datos_opcional;
//# sourceMappingURL=afip_tipos_datos_opcional.js.map