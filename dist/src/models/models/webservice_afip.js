"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webservice_afip = void 0;
const sequelize_1 = require("sequelize");
class webservice_afip extends sequelize_1.Model {
    static initModel(sequelize) {
        webservice_afip.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_metodo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            metodo: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            ultimo_ticket_acceso: {
                type: sequelize_1.DataTypes.BLOB,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'webservice_afip',
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
        return webservice_afip;
    }
}
exports.webservice_afip = webservice_afip;
//# sourceMappingURL=webservice_afip.js.map