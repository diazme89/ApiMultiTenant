"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_empresas_servicios = void 0;
const sequelize_1 = require("sequelize");
class t_empresas_servicios extends sequelize_1.Model {
    static initModel(sequelize) {
        t_empresas_servicios.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "t_empresas_serviciosxkey1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            abrevia: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            no_editable: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 't_empresas_servicios',
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
                    name: "t_empresas_serviciosxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return t_empresas_servicios;
    }
}
exports.t_empresas_servicios = t_empresas_servicios;
//# sourceMappingURL=t_empresas_servicios.js.map