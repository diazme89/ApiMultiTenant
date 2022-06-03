"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedores_pagos = void 0;
const sequelize_1 = require("sequelize");
class proveedores_pagos extends sequelize_1.Model {
    static initModel(sequelize) {
        proveedores_pagos.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            cod_proveedor: {
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
            tableName: 'proveedores_pagos',
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
        return proveedores_pagos;
    }
}
exports.proveedores_pagos = proveedores_pagos;
//# sourceMappingURL=proveedores_pagos.js.map