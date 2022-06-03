"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipos_documentos_py = void 0;
const sequelize_1 = require("sequelize");
class tipos_documentos_py extends sequelize_1.Model {
    static initModel(sequelize) {
        tipos_documentos_py.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            codigo2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tipos_documentos_py',
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
        return tipos_documentos_py;
    }
}
exports.tipos_documentos_py = tipos_documentos_py;
//# sourceMappingURL=tipos_documentos_py.js.map