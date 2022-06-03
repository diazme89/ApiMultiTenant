"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoria = void 0;
const sequelize_1 = require("sequelize");
class categoria extends sequelize_1.Model {
    static initModel(sequelize) {
        categoria.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true,
                unique: "categoriaxkey1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            tipo_progenitor: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'categoria',
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
                    name: "categoriaxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return categoria;
    }
}
exports.categoria = categoria;
//# sourceMappingURL=categoria.js.map