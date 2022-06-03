"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lotes = void 0;
const sequelize_1 = require("sequelize");
class lotes extends sequelize_1.Model {
    static initModel(sequelize) {
        lotes.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true,
                unique: "lotesxkey1"
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cultivo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            rendimient: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            gast_comer: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            cuota_amor: {
                type: sequelize_1.DataTypes.DECIMAL(8, 2),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(8, 0),
                allowNull: true
            },
            anterior: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            variedad: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            estimado: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            comentario: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            up: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            finca: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            col_aux_01_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_02_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_03_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_04_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_05_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_06_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_07_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_08_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_01_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_02_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_03_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_04_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_05_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_06_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_07_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_08_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_09_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_09_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_10_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_10_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_11_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_11_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_12_nombre: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            col_aux_12_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            inf_finca_lote: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            col_aux_13_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_13_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_14_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_14_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_15_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_15_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_16_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_16_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_17_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_17_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_18_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_18_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_19_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_19_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_20_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_20_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_21_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_21_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_22_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            col_aux_22_valor: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            cod_periodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            latitud: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            longitud: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            imputa: {
                type: sequelize_1.DataTypes.CHAR(3),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'lotes',
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
                    name: "lotesxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return lotes;
    }
}
exports.lotes = lotes;
//# sourceMappingURL=lotes.js.map