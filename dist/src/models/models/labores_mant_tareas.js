"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores_mant_tareas = void 0;
const sequelize_1 = require("sequelize");
class labores_mant_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        labores_mant_tareas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'labores_mant_tareas',
            timestamps: false
        });
        return labores_mant_tareas;
    }
}
exports.labores_mant_tareas = labores_mant_tareas;
//# sourceMappingURL=labores_mant_tareas.js.map