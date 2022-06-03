"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_tipos_documentos = void 0;
const sequelize_1 = require("sequelize");
class afip_tipos_documentos extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_tipos_documentos.init({
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
            tableName: 'afip_tipos_documentos',
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
        return afip_tipos_documentos;
    }
}
exports.afip_tipos_documentos = afip_tipos_documentos;
//# sourceMappingURL=afip_tipos_documentos.js.map