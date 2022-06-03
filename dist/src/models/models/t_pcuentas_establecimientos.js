"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_pcuentas_establecimientos = void 0;
const sequelize_1 = require("sequelize");
class t_pcuentas_establecimientos extends sequelize_1.Model {
    static initModel(sequelize) {
        t_pcuentas_establecimientos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_contabilidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_unidad_negocio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 't_pcuentas_establecimientos',
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
        return t_pcuentas_establecimientos;
    }
}
exports.t_pcuentas_establecimientos = t_pcuentas_establecimientos;
//# sourceMappingURL=t_pcuentas_establecimientos.js.map