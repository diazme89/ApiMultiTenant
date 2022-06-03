"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicaciones = void 0;
const sequelize_1 = require("sequelize");
class aplicaciones extends sequelize_1.Model {
    static initModel(sequelize) {
        aplicaciones.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre_app: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'aplicaciones',
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
        return aplicaciones;
    }
}
exports.aplicaciones = aplicaciones;
//# sourceMappingURL=aplicaciones.js.map