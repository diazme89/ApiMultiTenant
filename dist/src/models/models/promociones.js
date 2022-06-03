"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promociones = void 0;
const sequelize_1 = require("sequelize");
class promociones extends sequelize_1.Model {
    static initModel(sequelize) {
        promociones.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_promocion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre_promocion: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            habilitada: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            fecha_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            sum_art_fac: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            tipo_promocion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_lista_precios: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            art_desc: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            }
        }, {
            sequelize,
            tableName: 'promociones',
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
        return promociones;
    }
}
exports.promociones = promociones;
//# sourceMappingURL=promociones.js.map