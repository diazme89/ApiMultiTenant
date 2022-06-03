"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_volcado_impuestos = void 0;
const sequelize_1 = require("sequelize");
class tt_volcado_impuestos extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_volcado_impuestos.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            campos_txt: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.CHAR(12),
                allowNull: true
            },
            alicuota: {
                type: sequelize_1.DataTypes.CHAR(6),
                allowNull: true
            },
            alicuota_ret: {
                type: sequelize_1.DataTypes.CHAR(6),
                allowNull: true
            },
            categoria: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            valor_1: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            valor_2: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            valor_3: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            valor_4: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_volcado_impuestos',
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
        return tt_volcado_impuestos;
    }
}
exports.tt_volcado_impuestos = tt_volcado_impuestos;
//# sourceMappingURL=tt_volcado_impuestos.js.map