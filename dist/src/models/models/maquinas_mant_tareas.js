"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinas_mant_tareas = void 0;
const sequelize_1 = require("sequelize");
class maquinas_mant_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        maquinas_mant_tareas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_maq_mant: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'maquinas_mant_tareas',
            timestamps: false
        });
        return maquinas_mant_tareas;
    }
}
exports.maquinas_mant_tareas = maquinas_mant_tareas;
//# sourceMappingURL=maquinas_mant_tareas.js.map