"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablas = void 0;
const sequelize_1 = require("sequelize");
class tablas extends sequelize_1.Model {
    static initModel(sequelize) {
        tablas.init({
            nombre: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tablas',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "nombre" },
                    ]
                },
            ]
        });
        return tablas;
    }
}
exports.tablas = tablas;
//# sourceMappingURL=tablas.js.map