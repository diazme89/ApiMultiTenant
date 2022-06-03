"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoria_aplicativos = void 0;
const sequelize_1 = require("sequelize");
class categoria_aplicativos extends sequelize_1.Model {
    static initModel(sequelize) {
        categoria_aplicativos.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            campo: {
                type: sequelize_1.DataTypes.CHAR(70),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'categoria_aplicativos',
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
        return categoria_aplicativos;
    }
}
exports.categoria_aplicativos = categoria_aplicativos;
//# sourceMappingURL=categoria_aplicativos.js.map