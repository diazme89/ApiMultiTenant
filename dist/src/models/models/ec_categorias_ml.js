"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ec_categorias_ml = void 0;
const sequelize_1 = require("sequelize");
class ec_categorias_ml extends sequelize_1.Model {
    static initModel(sequelize) {
        ec_categorias_ml.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            id_mercadolibre: {
                type: sequelize_1.DataTypes.CHAR(30),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: true
            },
            cod_rubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cod_subrubro: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ec_categorias_ml',
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
        return ec_categorias_ml;
    }
}
exports.ec_categorias_ml = ec_categorias_ml;
//# sourceMappingURL=ec_categorias_ml.js.map