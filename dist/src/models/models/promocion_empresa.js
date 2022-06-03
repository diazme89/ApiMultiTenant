"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promocion_empresa = void 0;
const sequelize_1 = require("sequelize");
class promocion_empresa extends sequelize_1.Model {
    static initModel(sequelize) {
        promocion_empresa.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            id_promocion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'promocion_empresa',
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
        return promocion_empresa;
    }
}
exports.promocion_empresa = promocion_empresa;
//# sourceMappingURL=promocion_empresa.js.map