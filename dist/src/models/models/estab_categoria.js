"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estab_categoria = void 0;
const sequelize_1 = require("sequelize");
class estab_categoria extends sequelize_1.Model {
    static initModel(sequelize) {
        estab_categoria.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'estab_categoria',
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
        return estab_categoria;
    }
}
exports.estab_categoria = estab_categoria;
//# sourceMappingURL=estab_categoria.js.map