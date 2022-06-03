"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenes_sql = void 0;
const sequelize_1 = require("sequelize");
class ordenes_sql extends sequelize_1.Model {
    static initModel(sequelize) {
        ordenes_sql.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.STRING(3000),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ordenes_sql',
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
        return ordenes_sql;
    }
}
exports.ordenes_sql = ordenes_sql;
//# sourceMappingURL=ordenes_sql.js.map