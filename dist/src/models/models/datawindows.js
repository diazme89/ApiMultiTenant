"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datawindows = void 0;
const sequelize_1 = require("sequelize");
class datawindows extends sequelize_1.Model {
    static initModel(sequelize) {
        datawindows.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            dataobject: {
                type: sequelize_1.DataTypes.CHAR(50),
                allowNull: true
            },
            objeto: {
                type: sequelize_1.DataTypes.CHAR(60),
                allowNull: true
            },
            visible: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            x: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            y: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            ancho: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            alto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            texto: {
                type: sequelize_1.DataTypes.STRING(400),
                allowNull: true
            },
            color_texto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            color_fondo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            negrita: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            cursiva: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            borde: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            papel_orientacion: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            papel_tamanio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            papel_bandeja: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            papel_person_alto: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            papel_person_ancho: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            header: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            detail: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            summary: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            footer: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            letra_tamanio: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true
            },
            letra_fuente: {
                type: sequelize_1.DataTypes.CHAR(100),
                allowNull: true
            },
            left_margin: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: true
            },
            top_margin: {
                type: sequelize_1.DataTypes.DECIMAL(11, 0),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'datawindows',
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
                    name: "datawindows_id",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "datawindows_objeto_dataobject",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "objeto" },
                        { name: "dataobject" },
                    ]
                },
            ]
        });
        return datawindows;
    }
}
exports.datawindows = datawindows;
//# sourceMappingURL=datawindows.js.map