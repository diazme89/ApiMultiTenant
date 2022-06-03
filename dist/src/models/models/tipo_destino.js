"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipo_destino = void 0;
const sequelize_1 = require("sequelize");
class tipo_destino extends sequelize_1.Model {
    static initModel(sequelize) {
        tipo_destino.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tipo_destino',
            timestamps: false,
            indexes: [
                {
                    name: "tipo_destino_key",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
        return tipo_destino;
    }
}
exports.tipo_destino = tipo_destino;
//# sourceMappingURL=tipo_destino.js.map