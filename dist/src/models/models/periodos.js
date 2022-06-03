"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.periodos = void 0;
const sequelize_1 = require("sequelize");
class periodos extends sequelize_1.Model {
    static initModel(sequelize) {
        periodos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            fecha_cierre: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'periodos',
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
        return periodos;
    }
}
exports.periodos = periodos;
//# sourceMappingURL=periodos.js.map