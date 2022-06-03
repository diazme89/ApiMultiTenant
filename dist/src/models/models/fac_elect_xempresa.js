"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fac_elect_xempresa = void 0;
const sequelize_1 = require("sequelize");
class fac_elect_xempresa extends sequelize_1.Model {
    static initModel(sequelize) {
        fac_elect_xempresa.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "fac_elect_xempresa_key1"
            },
            usa_factelect: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            usa_factelect_exportacion: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: false
            },
            modo_factelect: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            clave_certificado_digital: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            punto_venta_afip: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: false
            },
            usa_nomenclador_comun: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            registracion_automatica: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'fac_elect_xempresa',
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
                    name: "fac_elect_xempresa_key1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_empresa" },
                    ]
                },
            ]
        });
        return fac_elect_xempresa;
    }
}
exports.fac_elect_xempresa = fac_elect_xempresa;
//# sourceMappingURL=fac_elect_xempresa.js.map