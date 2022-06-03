"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rendicion = void 0;
const sequelize_1 = require("sequelize");
class rendicion extends sequelize_1.Model {
    static initModel(sequelize) {
        rendicion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            id_usuario: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_rendicion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_moneda: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            OBSERVACION: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            saldo: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            id_cierre: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            fecha_cierre: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            id_usuario_tesorero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_rendicion_anterior: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'rendicion',
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
        return rendicion;
    }
}
exports.rendicion = rendicion;
//# sourceMappingURL=rendicion.js.map