"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importacion_declaracion = void 0;
const sequelize_1 = require("sequelize");
class importacion_declaracion extends sequelize_1.Model {
    static initModel(sequelize) {
        importacion_declaracion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            predefinido: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'importacion_declaracion',
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
                    name: "idx_importacion_dec",
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return importacion_declaracion;
    }
}
exports.importacion_declaracion = importacion_declaracion;
//# sourceMappingURL=importacion_declaracion.js.map