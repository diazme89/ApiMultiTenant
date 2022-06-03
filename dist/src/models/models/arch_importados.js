"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arch_importados = void 0;
const sequelize_1 = require("sequelize");
class arch_importados extends sequelize_1.Model {
    static initModel(sequelize) {
        arch_importados.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'arch_importados',
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
        return arch_importados;
    }
}
exports.arch_importados = arch_importados;
//# sourceMappingURL=arch_importados.js.map