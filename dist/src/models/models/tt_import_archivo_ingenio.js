"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_import_archivo_ingenio = void 0;
const sequelize_1 = require("sequelize");
class tt_import_archivo_ingenio extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_import_archivo_ingenio.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            numero_rem: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            numero_val: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            trash_kg: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            kg_azucar: {
                type: sequelize_1.DataTypes.DECIMAL(11, 2),
                allowNull: true
            },
            nro_cta: {
                type: sequelize_1.DataTypes.DECIMAL(12, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_import_archivo_ingenio',
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
                    name: "tt_import_archivo_ingenio_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_import_archivo_ingenio;
    }
}
exports.tt_import_archivo_ingenio = tt_import_archivo_ingenio;
//# sourceMappingURL=tt_import_archivo_ingenio.js.map