"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp_articulos_c = void 0;
const sequelize_1 = require("sequelize");
class tmp_articulos_c extends sequelize_1.Model {
    static initModel(sequelize) {
        tmp_articulos_c.init({
            cod_articulo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c1_nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c2_nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c3_nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c4_nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c5_nombre: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c1_id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c2_id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c3_id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c4_id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c5_id_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c1_valor: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c2_valor: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c3_valor: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c4_valor: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c5_valor: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c1_grupo: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c2_grupo: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c3_grupo: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c4_grupo: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c5_grupo: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            c1_id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c2_id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c3_id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c4_id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            c5_id_valor_caracteristica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tmp_articulos_c',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_articulo" },
                    ]
                },
            ]
        });
        return tmp_articulos_c;
    }
}
exports.tmp_articulos_c = tmp_articulos_c;
//# sourceMappingURL=tmp_articulos_c.js.map