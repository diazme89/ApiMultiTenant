"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventas_cert_deposito = void 0;
const sequelize_1 = require("sequelize");
class ventas_cert_deposito extends sequelize_1.Model {
    static initModel(sequelize) {
        ventas_cert_deposito.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_comprobante: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            id_cert_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            peso: {
                type: sequelize_1.DataTypes.DECIMAL(18, 4),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'ventas_cert_deposito',
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
                    name: "ventas_certif_deposito_key1",
                    using: "BTREE",
                    fields: [
                        { name: "id_comprobante" },
                    ]
                },
            ]
        });
        return ventas_cert_deposito;
    }
}
exports.ventas_cert_deposito = ventas_cert_deposito;
//# sourceMappingURL=ventas_cert_deposito.js.map