"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cta_cble_grupo = void 0;
const sequelize_1 = require("sequelize");
class cta_cble_grupo extends sequelize_1.Model {
    static initModel(sequelize) {
        cta_cble_grupo.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                unique: "i_cta_cble_grupo_codigo"
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: false
            },
            concepto: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'cta_cble_grupo',
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
                    name: "i_cta_cble_grupo_codigo",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return cta_cble_grupo;
    }
}
exports.cta_cble_grupo = cta_cble_grupo;
//# sourceMappingURL=cta_cble_grupo.js.map