"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf_ejercicio_economico = void 0;
const sequelize_1 = require("sequelize");
class conf_ejercicio_economico extends sequelize_1.Model {
    static initModel(sequelize) {
        conf_ejercicio_economico.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            inicio: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            fin: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            ejercicio_activo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'conf_ejercicio_economico',
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
                    name: "conf_ejercicio_economico_inicio_fin",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "inicio" },
                        { name: "fin" },
                    ]
                },
            ]
        });
        return conf_ejercicio_economico;
    }
}
exports.conf_ejercicio_economico = conf_ejercicio_economico;
//# sourceMappingURL=conf_ejercicio_economico.js.map