"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareas = void 0;
const sequelize_1 = require("sequelize");
class tareas extends sequelize_1.Model {
    static initModel(sequelize) {
        tareas.init({
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true,
                unique: "tareasxkey1"
            },
            descrip: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            coef_uta: {
                type: sequelize_1.DataTypes.DECIMAL(7, 4),
                allowNull: true
            },
            valor: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            insumos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            empresa_servicio: {
                type: sequelize_1.DataTypes.DECIMAL(4, 0),
                allowNull: true
            },
            tipo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            uni_medida: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            aplic_cosecha: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cantidad1: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad2: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad3: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad4: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad5: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad6: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad7: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad8: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad9: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad10: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad11: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cantidad12: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            cantidad: {
                type: sequelize_1.DataTypes.DECIMAL(9, 2),
                allowNull: true
            },
            cod_sueldos: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            grupo: {
                type: sequelize_1.DataTypes.CHAR(25),
                allowNull: true
            },
            inf_flete_prod: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            pcio_milimetro: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'tareas',
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
                    name: "tareasxkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
                {
                    name: "tareasxkey2",
                    using: "BTREE",
                    fields: [
                        { name: "tipo" },
                    ]
                },
                {
                    name: "tareasxkey3",
                    using: "BTREE",
                    fields: [
                        { name: "empresa_servicio" },
                    ]
                },
            ]
        });
        return tareas;
    }
}
exports.tareas = tareas;
//# sourceMappingURL=tareas.js.map