"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinas_mant = void 0;
const sequelize_1 = require("sequelize");
class maquinas_mant extends sequelize_1.Model {
    static initModel(sequelize) {
        maquinas_mant.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "maquinas_mantxkey1"
            },
            mantenimiento: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            horas: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            horas_aviso: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            kilometros: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            kilometros_aviso: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            hs_km_iniciales: {
                type: sequelize_1.DataTypes.DECIMAL(10, 3),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'maquinas_mant',
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
                    name: "maquinas_mantxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_maquina" },
                    ]
                },
            ]
        });
        return maquinas_mant;
    }
}
exports.maquinas_mant = maquinas_mant;
//# sourceMappingURL=maquinas_mant.js.map