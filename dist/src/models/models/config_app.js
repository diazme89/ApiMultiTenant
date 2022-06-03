"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_app = void 0;
const sequelize_1 = require("sequelize");
class config_app extends sequelize_1.Model {
    static initModel(sequelize) {
        config_app.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_app: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(150),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'config_app',
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
        return config_app;
    }
}
exports.config_app = config_app;
//# sourceMappingURL=config_app.js.map