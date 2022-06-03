"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing = void 0;
const sequelize_1 = require("sequelize");
class testing extends sequelize_1.Model {
    static initModel(sequelize) {
        testing.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            Detalle: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            importe_test: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(3, 0),
                allowNull: true
            },
            desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            funcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'testing',
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
        return testing;
    }
}
exports.testing = testing;
//# sourceMappingURL=testing.js.map