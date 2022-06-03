"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labores_log_externo = void 0;
const sequelize_1 = require("sequelize");
class labores_log_externo extends sequelize_1.Model {
    static initModel(sequelize) {
        labores_log_externo.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_labores: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'labores_log_externo',
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
        return labores_log_externo;
    }
}
exports.labores_log_externo = labores_log_externo;
//# sourceMappingURL=labores_log_externo.js.map