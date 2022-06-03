"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animales_estados = void 0;
const sequelize_1 = require("sequelize");
class animales_estados extends sequelize_1.Model {
    static initModel(sequelize) {
        animales_estados.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: false,
                primaryKey: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'animales_estados',
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
        return animales_estados;
    }
}
exports.animales_estados = animales_estados;
//# sourceMappingURL=animales_estados.js.map