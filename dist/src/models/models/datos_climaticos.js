"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datos_climaticos = void 0;
const sequelize_1 = require("sequelize");
class datos_climaticos extends sequelize_1.Model {
    static initModel(sequelize) {
        datos_climaticos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            finca: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'datos_climaticos',
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
        return datos_climaticos;
    }
}
exports.datos_climaticos = datos_climaticos;
//# sourceMappingURL=datos_climaticos.js.map