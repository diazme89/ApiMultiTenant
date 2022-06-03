"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_especies = void 0;
const sequelize_1 = require("sequelize");
class afip_especies extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_especies.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_especies',
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
        return afip_especies;
    }
}
exports.afip_especies = afip_especies;
//# sourceMappingURL=afip_especies.js.map