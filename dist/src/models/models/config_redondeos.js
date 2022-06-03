"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_redondeos = void 0;
const sequelize_1 = require("sequelize");
class config_redondeos extends sequelize_1.Model {
    static initModel(sequelize) {
        config_redondeos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            concepto: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            monto_limite: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            usa_negativo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'config_redondeos',
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
        return config_redondeos;
    }
}
exports.config_redondeos = config_redondeos;
//# sourceMappingURL=config_redondeos.js.map