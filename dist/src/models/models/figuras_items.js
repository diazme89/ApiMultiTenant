"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.figuras_items = void 0;
const sequelize_1 = require("sequelize");
class figuras_items extends sequelize_1.Model {
    static initModel(sequelize) {
        figuras_items.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_figura: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            lat: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            lng: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true
            },
            punto: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            marcador: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            imagen: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'figuras_items',
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
        return figuras_items;
    }
}
exports.figuras_items = figuras_items;
//# sourceMappingURL=figuras_items.js.map