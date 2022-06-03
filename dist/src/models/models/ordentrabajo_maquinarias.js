"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordentrabajo_maquinarias = void 0;
const sequelize_1 = require("sequelize");
class ordentrabajo_maquinarias extends sequelize_1.Model {
    static initModel(sequelize) {
        ordentrabajo_maquinarias.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_ordentrabajo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cod_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            horas_maquina: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            id_mantenimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ordentrabajo_maquinarias',
            timestamps: false
        });
        return ordentrabajo_maquinarias;
    }
}
exports.ordentrabajo_maquinarias = ordentrabajo_maquinarias;
//# sourceMappingURL=ordentrabajo_maquinarias.js.map