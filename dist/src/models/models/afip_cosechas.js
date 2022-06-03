"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afip_cosechas = void 0;
const sequelize_1 = require("sequelize");
class afip_cosechas extends sequelize_1.Model {
    static initModel(sequelize) {
        afip_cosechas.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'afip_cosechas',
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
        return afip_cosechas;
    }
}
exports.afip_cosechas = afip_cosechas;
//# sourceMappingURL=afip_cosechas.js.map