"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_idiomas = void 0;
const sequelize_1 = require("sequelize");
class afip_idiomas extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_idiomas.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_idiomas',
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
        return afip_idiomas;
    }
}
exports.afip_idiomas = afip_idiomas;
//# sourceMappingURL=afip_idiomas.js.map