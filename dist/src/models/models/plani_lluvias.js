"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plani_lluvias = void 0;
const sequelize_1 = require("sequelize");
class plani_lluvias extends sequelize_1.Model {
    static initModel(sequelize) {
        plani_lluvias.init({
            finca: {
                type: sequelize_1.DataTypes.CHAR(20),
                allowNull: true
            },
            anio: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: true
            },
            orden: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            hora_carga: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            id_pc: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'plani_lluvias',
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
        return plani_lluvias;
    }
}
exports.plani_lluvias = plani_lluvias;
//# sourceMappingURL=plani_lluvias.js.map