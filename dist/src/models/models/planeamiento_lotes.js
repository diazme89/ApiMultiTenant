"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planeamiento_lotes = void 0;
const sequelize_1 = require("sequelize");
class planeamiento_lotes extends sequelize_1.Model {
    static initModel(sequelize) {
        planeamiento_lotes.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(7, 2),
                allowNull: true
            },
            cultivo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            rendimient: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            gast_comer: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            cuota_amor: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            mano_obra: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'planeamiento_lotes',
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
        return planeamiento_lotes;
    }
}
exports.planeamiento_lotes = planeamiento_lotes;
//# sourceMappingURL=planeamiento_lotes.js.map