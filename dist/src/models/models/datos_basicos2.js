"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datos_basicos2 = void 0;
const sequelize_1 = require("sequelize");
class datos_basicos2 extends sequelize_1.Model {
    static initModel(sequelize) {
        datos_basicos2.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_basicos: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            inicio_actualizado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            inicio_cierre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cierre_planeamiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cierre_gestion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'datos_basicos2',
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
        return datos_basicos2;
    }
}
exports.datos_basicos2 = datos_basicos2;
//# sourceMappingURL=datos_basicos2.js.map