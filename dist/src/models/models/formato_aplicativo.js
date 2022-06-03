"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formato_aplicativo = void 0;
const sequelize_1 = require("sequelize");
class formato_aplicativo extends sequelize_1.Model {
    static initModel(sequelize) {
        formato_aplicativo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            aplicativo: {
                type: sequelize_1.DataTypes.CHAR(200),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'formato_aplicativo',
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
        return formato_aplicativo;
    }
}
exports.formato_aplicativo = formato_aplicativo;
//# sourceMappingURL=formato_aplicativo.js.map