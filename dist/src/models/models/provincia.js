"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provincia = void 0;
const sequelize_1 = require("sequelize");
class provincia extends sequelize_1.Model {
    static initModel(sequelize) {
        provincia.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            nombre: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            },
            cod_identif: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_jurisdiccion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_afip_provincia: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'provincia',
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
        return provincia;
    }
}
exports.provincia = provincia;
//# sourceMappingURL=provincia.js.map