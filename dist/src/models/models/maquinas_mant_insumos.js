"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinas_mant_insumos = void 0;
const sequelize_1 = require("sequelize");
class maquinas_mant_insumos extends sequelize_1.Model {
    static initModel(sequelize) {
        maquinas_mant_insumos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_maq_mant: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_insumo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(6, 1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'maquinas_mant_insumos',
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
        return maquinas_mant_insumos;
    }
}
exports.maquinas_mant_insumos = maquinas_mant_insumos;
//# sourceMappingURL=maquinas_mant_insumos.js.map