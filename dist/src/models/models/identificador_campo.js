"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identificador_campo = void 0;
const sequelize_1 = require("sequelize");
class identificador_campo extends sequelize_1.Model {
    static initModel(sequelize) {
        identificador_campo.init({
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
            tableName: 'identificador_campo',
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
        return identificador_campo;
    }
}
exports.identificador_campo = identificador_campo;
//# sourceMappingURL=identificador_campo.js.map