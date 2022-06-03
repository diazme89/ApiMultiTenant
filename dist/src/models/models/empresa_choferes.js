"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa_choferes = void 0;
const sequelize_1 = require("sequelize");
class empresa_choferes extends sequelize_1.Model {
    static initModel(sequelize) {
        empresa_choferes.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            cod_fletero: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            cuit: {
                type: sequelize_1.DataTypes.CHAR(13),
                allowNull: true
            },
            patente_camion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            patente_acoplado: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'empresa_choferes',
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
        return empresa_choferes;
    }
}
exports.empresa_choferes = empresa_choferes;
//# sourceMappingURL=empresa_choferes.js.map