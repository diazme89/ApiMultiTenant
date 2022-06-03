"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gest_identificador = void 0;
const sequelize_1 = require("sequelize");
class gest_identificador extends sequelize_1.Model {
    static initModel(sequelize) {
        gest_identificador.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "idx_codigo"
            },
            tipo_circuito: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: false
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'gest_identificador',
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
                    name: "idx_codigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
                {
                    name: "idx_cod_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
            ]
        });
        return gest_identificador;
    }
}
exports.gest_identificador = gest_identificador;
//# sourceMappingURL=gest_identificador.js.map