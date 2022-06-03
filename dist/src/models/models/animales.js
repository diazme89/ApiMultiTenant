"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animales = void 0;
const sequelize_1 = require("sequelize");
class animales extends sequelize_1.Model {
    static initModel(sequelize) {
        animales.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            },
            fecha_carga: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            fecha_nac: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            tipo_inseminacion: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            fecha_baja: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            raza: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            sexo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            peso_nac: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            observacion: {
                type: sequelize_1.DataTypes.CHAR(255),
                allowNull: true
            },
            origen: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_grupo: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_animal: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true,
                unique: "animalesxkey1"
            },
            num_compra: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            num_venta: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_categoria: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            estado: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_establecimiento: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            cod_actividad: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            pesoactual: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            cod_color: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            num_caravana: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            idpadre: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            },
            idmadre: {
                type: sequelize_1.DataTypes.DECIMAL(19, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'animales',
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
                    name: "animal_num_animal",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_animal" },
                    ]
                },
                {
                    name: "animalesxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_animal" },
                    ]
                },
                {
                    name: "animalesxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "cod_color" },
                        { name: "num_caravana" },
                    ]
                },
            ]
        });
        return animales;
    }
}
exports.animales = animales;
//# sourceMappingURL=animales.js.map