"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personal_tareas = void 0;
const sequelize_1 = require("sequelize");
class personal_tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        personal_tareas.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_personal: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            cod_tarea: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'personal_tareas',
            timestamps: false
        });
        return personal_tareas;
    }
}
exports.personal_tareas = personal_tareas;
//# sourceMappingURL=personal_tareas.js.map