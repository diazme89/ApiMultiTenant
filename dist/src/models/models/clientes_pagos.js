"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_pagos = void 0;
const sequelize_1 = require("sequelize");
class clientes_pagos extends sequelize_1.Model {
    static initModel(sequelize) {
        clientes_pagos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_cliente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            importe: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            cod_empresa: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            tag: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'clientes_pagos',
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
                    name: "id_cliente",
                    using: "BTREE",
                    fields: [
                        { name: "cod_cliente" },
                    ]
                },
            ]
        });
        return clientes_pagos;
    }
}
exports.clientes_pagos = clientes_pagos;
//# sourceMappingURL=clientes_pagos.js.map