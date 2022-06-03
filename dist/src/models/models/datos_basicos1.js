"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datos_basicos1 = void 0;
const sequelize_1 = require("sequelize");
class datos_basicos1 extends sequelize_1.Model {
    static initModel(sequelize) {
        datos_basicos1.init({
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
            cantidad1: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad2: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad3: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad4: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad5: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad6: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad7: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad8: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad9: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad10: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad11: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cantidad12: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
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
            tableName: 'datos_basicos1',
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
        return datos_basicos1;
    }
}
exports.datos_basicos1 = datos_basicos1;
//# sourceMappingURL=datos_basicos1.js.map