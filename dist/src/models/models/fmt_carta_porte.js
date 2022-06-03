"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmt_carta_porte = void 0;
const sequelize_1 = require("sequelize");
class fmt_carta_porte extends sequelize_1.Model {
    static initModel(sequelize) {
        fmt_carta_porte.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'fmt_carta_porte',
            timestamps: false
        });
        return fmt_carta_porte;
    }
}
exports.fmt_carta_porte = fmt_carta_porte;
//# sourceMappingURL=fmt_carta_porte.js.map