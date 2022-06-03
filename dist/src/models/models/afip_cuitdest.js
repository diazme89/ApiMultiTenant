"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_cuitdest = void 0;
const sequelize_1 = require("sequelize");
class afip_cuitdest extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_cuitdest.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_cuitdest',
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
        return afip_cuitdest;
    }
}
exports.afip_cuitdest = afip_cuitdest;
//# sourceMappingURL=afip_cuitdest.js.map