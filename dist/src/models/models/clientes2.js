"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes2 = void 0;
const sequelize_1 = require("sequelize");
class clientes2 extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes2.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            domicilio: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            telefonos: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            contacto: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cod_zona: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            categoria_iva: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            localidad: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            codigo_postal: {
                type: sequelize_1.DataTypes.CHAR(8),
                allowNull: true
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            saldo_inicial: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            moneda: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cod_localidad: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            percepcionDGR: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            sedronar: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            percepciondgr_porc: {
                type: sequelize_1.DataTypes.DECIMAL(5, 2),
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            saldo_inicial_tag_2: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            actualiza_saldo: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: true
            },
            lista_precio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'clientes2',
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
        return clientes2;
    }
}
exports.clientes2 = clientes2;
//# sourceMappingURL=clientes2.js.map