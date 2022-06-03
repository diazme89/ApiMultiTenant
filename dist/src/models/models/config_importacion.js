"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config_importacion = void 0;
const sequelize_1 = require("sequelize");
class config_importacion extends sequelize_1.Model {
    static initModel(sequelize) {
        config_importacion.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            nombre_tabla: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            orden: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            nombre_campo: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            descripcion_campo: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            tipo_campo: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            precision_campo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            escala_campo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            longitud_campo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            campo_nulo: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: true
            },
            posicion_campo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            usa_gf_secuencia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            usa_renumeracion: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'config_importacion',
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
                    name: "config_importacion_key1",
                    using: "BTREE",
                    fields: [
                        { name: "nombre_tabla" },
                        { name: "orden" },
                    ]
                },
            ]
        });
        return config_importacion;
    }
}
exports.config_importacion = config_importacion;
//# sourceMappingURL=config_importacion.js.map