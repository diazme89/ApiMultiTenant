"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_cosecha = void 0;
const sequelize_1 = require("sequelize");
class tt_cosecha extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_cosecha.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_lote_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            superficie: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            kg_produccion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            prod_sup_gestion: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            produccion_pla: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            prod_sup_pla: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            },
            imagen: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_alta: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_cosecha',
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
                    name: "tt_cosecha_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_cosecha;
    }
}
exports.tt_cosecha = tt_cosecha;
//# sourceMappingURL=tt_cosecha.js.map