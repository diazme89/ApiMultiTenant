"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identificador = void 0;
const sequelize_1 = require("sequelize");
class identificador extends sequelize_1.Model {
    static initModel(sequelize) {
        identificador.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(6, 0),
                allowNull: false,
                unique: "Identificador_ak1"
            },
            numero: {
                type: sequelize_1.DataTypes.DECIMAL(15, 0),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(80),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'identificador',
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
                    name: "Identificador_pk",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "Identificador_ak1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return identificador;
    }
}
exports.identificador = identificador;
//# sourceMappingURL=identificador.js.map