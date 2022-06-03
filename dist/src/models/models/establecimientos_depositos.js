"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.establecimientos_depositos = void 0;
const sequelize_1 = require("sequelize");
class establecimientos_depositos extends sequelize_1.Model {
    static initModel(sequelize) {
        establecimientos_depositos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'establecimientos_depositos',
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
        return establecimientos_depositos;
    }
}
exports.establecimientos_depositos = establecimientos_depositos;
//# sourceMappingURL=establecimientos_depositos.js.map