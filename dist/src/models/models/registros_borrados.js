"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registros_borrados = void 0;
const sequelize_1 = require("sequelize");
class registros_borrados extends sequelize_1.Model {
    static initModel(sequelize) {
        registros_borrados.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            orden_sql: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'registros_borrados',
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
        return registros_borrados;
    }
}
exports.registros_borrados = registros_borrados;
//# sourceMappingURL=registros_borrados.js.map