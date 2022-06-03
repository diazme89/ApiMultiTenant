"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjetas = void 0;
const sequelize_1 = require("sequelize");
class tarjetas extends sequelize_1.Model {
    static initModel(sequelize) {
        tarjetas.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "tarjetas_idx1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            tipo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            cod_proveedor: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            habilitada: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: false
            },
            cod_externo: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tarjetas',
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
                    name: "tarjetas_idx1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return tarjetas;
    }
}
exports.tarjetas = tarjetas;
//# sourceMappingURL=tarjetas.js.map