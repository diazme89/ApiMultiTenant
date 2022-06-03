"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.origen = void 0;
const sequelize_1 = require("sequelize");
class origen extends sequelize_1.Model {
    static initModel(sequelize) {
        origen.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'origen',
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
        return origen;
    }
}
exports.origen = origen;
//# sourceMappingURL=origen.js.map