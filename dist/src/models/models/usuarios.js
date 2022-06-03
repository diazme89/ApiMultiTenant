"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = void 0;
const sequelize_1 = require("sequelize");
class usuarios extends sequelize_1.Model {
    static initModel(sequelize) {
        usuarios.init({
            id: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: false,
                primaryKey: true
            },
            usuario: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            clave: {
                type: sequelize_1.DataTypes.CHAR(15),
                allowNull: true
            },
            perfil: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            empresa: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            bloq_stock: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_empresa: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_arti_inv: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_prov_comp: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_clien_vtas: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_bco_dis: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_conta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_conf: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            bloq_comprobantes: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pto_vta: {
                type: sequelize_1.DataTypes.DECIMAL(2, 0),
                allowNull: true
            },
            autorizar: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            pan_consolidar_emp: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            cta_caja: {
                type: sequelize_1.DataTypes.DECIMAL(10, 0),
                allowNull: true,
                defaultValue: 0
            },
            bloq_edit_articulos: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            limite_descuento: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true,
                defaultValue: 100.00
            },
            ocultar_precio_cpra_y_vta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            editar_responsable: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            bloq_edit_imp: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            ver_precio_orden_compra: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            forzar_remito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            permite_generar_remito: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            actualizar_precios_pr: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "S"
            },
            forzar_actualizacion_precios_pr: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            habilitar_lista_precio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            permite_editar_fecha_vta: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            autorizar_solicitud_precio: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            cod_vendedor: {
                type: sequelize_1.DataTypes.DECIMAL(5, 0),
                allowNull: true
            },
            cambiar_contrasenia: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            mail: {
                type: sequelize_1.DataTypes.CHAR(80),
                allowNull: true
            },
            clave_mail: {
                type: sequelize_1.DataTypes.CHAR(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuarios',
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
        return usuarios;
    }
}
exports.usuarios = usuarios;
usuarios.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
    delete values.clave;
    return values;
};
//# sourceMappingURL=usuarios.js.map