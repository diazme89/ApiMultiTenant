"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gest_identificador_movimientos = void 0;
const sequelize_1 = require("sequelize");
class gest_identificador_movimientos extends sequelize_1.Model {
    static initModel(sequelize) {
        gest_identificador_movimientos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_gest_identificador: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_item_relacionado: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'gest_identificador_movimientos',
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
                {
                    name: "idx_id_gest_identificador",
                    using: "BTREE",
                    fields: [
                        { name: "id_gest_identificador" },
                    ]
                },
                {
                    name: "idx_id_item_relacionado",
                    using: "BTREE",
                    fields: [
                        { name: "id_item_relacionado" },
                    ]
                },
            ]
        });
        return gest_identificador_movimientos;
    }
}
exports.gest_identificador_movimientos = gest_identificador_movimientos;
//# sourceMappingURL=gest_identificador_movimientos.js.map