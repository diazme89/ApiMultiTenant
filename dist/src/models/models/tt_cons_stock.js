"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_cons_stock = void 0;
const sequelize_1 = require("sequelize");
class tt_cons_stock extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cons_stock.init({
            rubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            rubro_descrip: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: false
            },
            subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            subrubro_descrip: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: false
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: false
            },
            precio_gestion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            uni_medida: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            ajustes: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            negativos: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            transito: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            labores: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            unidades: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            existencia_transito: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            existencia: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            color: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            stock_minimo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            cod_deposito: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            deposito_descrip: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: false
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_cons_stock',
            timestamps: false,
            indexes: [
                {
                    name: "cons_stock_KEY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_deposito" },
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return tt_cons_stock;
    }
}
exports.tt_cons_stock = tt_cons_stock;
//# sourceMappingURL=tt_cons_stock.js.map