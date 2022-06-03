"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maquinar = void 0;
const sequelize_1 = require("sequelize");
class maquinar extends sequelize_1.Model {
    static initModel(sequelize) {
        maquinar.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            empresa: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            hs_km_iniciales: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            unidad_medida: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            codexterno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'maquinar',
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
        return maquinar;
    }
}
exports.maquinar = maquinar;
//# sourceMappingURL=maquinar.js.map