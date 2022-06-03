"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_res_emp_servicios = void 0;
const sequelize_1 = require("sequelize");
class tt_res_emp_servicios extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_res_emp_servicios.init({
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: false
            },
            imagen: {
                type: sequelize_1.DataTypes.CHAR(61),
                allowNull: false
            },
            uta: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            ingresos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            egresos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: false
            },
            cod_empresa_servicio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'tt_res_emp_servicios',
            timestamps: false,
            indexes: [
                {
                    name: "res_emp_servicios_KEY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa_servicio" },
                    ]
                },
            ]
        });
        return tt_res_emp_servicios;
    }
}
exports.tt_res_emp_servicios = tt_res_emp_servicios;
//# sourceMappingURL=tt_res_emp_servicios.js.map