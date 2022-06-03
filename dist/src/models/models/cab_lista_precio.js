"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cab_lista_precio = void 0;
const sequelize_1 = require("sequelize");
class cab_lista_precio extends sequelize_1.Model {
    static initModel(sequelize) {
        cab_lista_precio.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_lista: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                unique: "cab_lista_precio_xkey1"
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            fecha_gra: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            aplica_a: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: false,
                defaultValue: 0
            },
            habilitado: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            }
        }, {
            sequelize,
            tableName: 'cab_lista_precio',
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
                    name: "cab_lista_precio_xkey1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "cod_lista" },
                    ]
                },
            ]
        });
        return cab_lista_precio;
    }
}
exports.cab_lista_precio = cab_lista_precio;
//# sourceMappingURL=cab_lista_precio.js.map