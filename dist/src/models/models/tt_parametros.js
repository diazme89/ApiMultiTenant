"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt_parametros = void 0;
const sequelize_1 = require("sequelize");
class tt_parametros extends sequelize_1.Model {
    static initModel(sequelize) {
        tt_parametros.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            idproc: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            propiedad: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tt_parametros',
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
                {
                    name: "tt_parametros_idproc",
                    using: "BTREE",
                    fields: [
                        { name: "idproc" },
                    ]
                },
            ]
        });
        return tt_parametros;
    }
}
exports.tt_parametros = tt_parametros;
//# sourceMappingURL=tt_parametros.js.map