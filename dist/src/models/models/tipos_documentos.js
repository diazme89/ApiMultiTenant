"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipos_documentos = void 0;
const sequelize_1 = require("sequelize");
class tipos_documentos extends sequelize_1.Model {
    static initModel(sequelize) {
        tipos_documentos.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_afip: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipos_documentos',
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
        return tipos_documentos;
    }
}
exports.tipos_documentos = tipos_documentos;
//# sourceMappingURL=tipos_documentos.js.map