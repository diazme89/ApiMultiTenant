"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprobantes_destino = void 0;
const sequelize_1 = require("sequelize");
class comprobantes_destino extends sequelize_1.Model {
    static initModel(sequelize) {
        comprobantes_destino.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            destino: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'comprobantes_destino',
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
        return comprobantes_destino;
    }
}
exports.comprobantes_destino = comprobantes_destino;
//# sourceMappingURL=comprobantes_destino.js.map