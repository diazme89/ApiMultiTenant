"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_texportacion = void 0;
const sequelize_1 = require("sequelize");
class afip_texportacion extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_texportacion.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_texportacion',
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
        return afip_texportacion;
    }
}
exports.afip_texportacion = afip_texportacion;
//# sourceMappingURL=afip_texportacion.js.map