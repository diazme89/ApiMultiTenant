"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjetas_plan = void 0;
const sequelize_1 = require("sequelize");
class tarjetas_plan extends sequelize_1.Model {
    static initModel(sequelize) {
        tarjetas_plan.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            id_tarjeta: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            codigo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false
            },
            descripcion: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            cuotas: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: false
            },
            recargo: {
                type: sequelize_1.DataTypes.DECIMAL(10, 5),
                allowNull: true
            },
            tna: {
                type: sequelize_1.DataTypes.DECIMAL(10, 5),
                allowNull: true
            },
            tem: {
                type: sequelize_1.DataTypes.DECIMAL(10, 5),
                allowNull: true
            },
            coeficiente: {
                type: sequelize_1.DataTypes.DECIMAL(10, 5),
                allowNull: true
            },
            habilitada: {
                type: sequelize_1.DataTypes.DECIMAL(1, 0),
                allowNull: false
            },
            arancel: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            costo_financiero: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            iva: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            descuento: {
                type: sequelize_1.DataTypes.DECIMAL(18, 5),
                allowNull: true,
                defaultValue: 0.00000
            },
            vigencia_desde: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            vigencia_hasta: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            plazo_modo_acreditacion: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: true
            },
            plazo_acreditacion: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: true
            },
            dia_lunes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_martes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_miercoles: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_jueves: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_viernes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_sabado: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            dia_domingo: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            cod_cuenta: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            cuota_hasta: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
            }
        }, {
            sequelize,
            tableName: 'tarjetas_plan',
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
                    name: "tarjetas_plan_idx1",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id_tarjeta" },
                        { name: "codigo" },
                    ]
                },
            ]
        });
        return tarjetas_plan;
    }
}
exports.tarjetas_plan = tarjetas_plan;
//# sourceMappingURL=tarjetas_plan.js.map