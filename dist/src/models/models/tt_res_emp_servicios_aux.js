"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_res_emp_servicios_aux = void 0;
const sequelize_1 = require("sequelize");
class tt_res_emp_servicios_aux extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_res_emp_servicios_aux.init({
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
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'tt_res_emp_servicios_aux',
            timestamps: false,
            indexes: [
                {
                    name: "res_emp_servicios_aux_KEY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                        { name: "cod_empresa_servicio" },
                    ]
                },
            ]
        });
        return tt_res_emp_servicios_aux;
    }
}
exports.tt_res_emp_servicios_aux = tt_res_emp_servicios_aux;
//# sourceMappingURL=tt_res_emp_servicios_aux.js.map