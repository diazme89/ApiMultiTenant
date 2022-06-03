"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformacion = void 0;
const sequelize_1 = require("sequelize");
class transformacion extends sequelize_1.Model {
    static initModel(sequelize) {
        transformacion.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            nro_operacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cantidad_aplica: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            usuario_fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            usuario_hora: {
                type: sequelize_1.DataTypes.TIME,
                allowNull: true
            },
            cod_deposito_origen: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_deposito_destino: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'transformacion',
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
        return transformacion;
    }
}
exports.transformacion = transformacion;
//# sourceMappingURL=transformacion.js.map