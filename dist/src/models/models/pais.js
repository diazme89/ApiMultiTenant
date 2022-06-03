"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pais = void 0;
const sequelize_1 = require("sequelize");
class pais extends sequelize_1.Model {
    static initModel(sequelize) {
        pais.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            codigo2: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'pais',
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
        return pais;
    }
}
exports.pais = pais;
//# sourceMappingURL=pais.js.map