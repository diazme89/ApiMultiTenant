"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelos = void 0;
const sequelize_1 = require("sequelize");
class modelos extends sequelize_1.Model {
    static initModel(sequelize) {
        modelos.init({
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cultivo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            rendimient: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            gast_comer: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            cuota_amor: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            mano_obra: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            }
        }, {
            sequelize,
            tableName: 'modelos',
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
        return modelos;
    }
}
exports.modelos = modelos;
//# sourceMappingURL=modelos.js.map