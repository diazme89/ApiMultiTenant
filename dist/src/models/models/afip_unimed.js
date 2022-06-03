"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_unimed = void 0;
const sequelize_1 = require("sequelize");
class afip_unimed extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_unimed.init({
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
            tableName: 'afip_unimed',
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
        return afip_unimed;
    }
}
exports.afip_unimed = afip_unimed;
//# sourceMappingURL=afip_unimed.js.map