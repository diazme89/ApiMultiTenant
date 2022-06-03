"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_inf_saldos_hist = void 0;
const sequelize_1 = require("sequelize");
class t_inf_saldos_hist extends sequelize_1.Model {
    static initModel(sequelize) {
        t_inf_saldos_hist.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 't_inf_saldos_hist',
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
                    name: "t_inf_saldos_histxfecha",
                    using: "BTREE",
                    fields: [
                        { name: "fecha" },
                    ]
                },
                {
                    name: "t_inf_saldos_histxclave",
                    using: "BTREE",
                    fields: [
                        { name: "clave" },
                    ]
                },
            ]
        });
        return t_inf_saldos_hist;
    }
}
exports.t_inf_saldos_hist = t_inf_saldos_hist;
//# sourceMappingURL=t_inf_saldos_hist.js.map