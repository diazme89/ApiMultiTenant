"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nov_animales = void 0;
const sequelize_1 = require("sequelize");
class nov_animales extends sequelize_1.Model {
    static initModel(sequelize) {
        nov_animales.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            id_novedades: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false
            },
            pesoactual: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cod_animal: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_madre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            estado_rep: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'nov_animales',
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
                    name: "nov_animales_xcod_categoria",
                    using: "BTREE",
                    fields: [
                        { name: "cod_categoria" },
                    ]
                },
                {
                    name: "nov_animales_xid_madre",
                    using: "BTREE",
                    fields: [
                        { name: "id_madre" },
                    ]
                },
                {
                    name: "nov_animalesxkey1",
                    using: "BTREE",
                    fields: [
                        { name: "id_novedades" },
                        { name: "cod_animal" },
                    ]
                },
                {
                    name: "nov_animalesxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "cod_animal" },
                    ]
                },
            ]
        });
        return nov_animales;
    }
}
exports.nov_animales = nov_animales;
//# sourceMappingURL=nov_animales.js.map