"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.act_categoria = void 0;
const sequelize_1 = require("sequelize");
class act_categoria extends sequelize_1.Model {
    static initModel(sequelize) {
        act_categoria.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            id_cabecera: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'act_categoria',
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
                    name: "act_categoriaxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_cabecera" },
                    ]
                },
            ]
        });
        return act_categoria;
    }
}
exports.act_categoria = act_categoria;
//# sourceMappingURL=act_categoria.js.map