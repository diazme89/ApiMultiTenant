import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuariosAttributes {
  id: number;
  usuario?: string;
  clave?: string;
  perfil?: number;
  empresa?: number;
  bloq_stock?: string;
  pan_empresa?: string;
  pan_arti_inv?: string;
  pan_prov_comp?: string;
  pan_clien_vtas?: string;
  pan_bco_dis?: string;
  pan_conta?: string;
  pan_conf?: string;
  bloq_comprobantes?: string;
  pto_vta?: number;
  autorizar?: string;
  pan_consolidar_emp?: string;
  cta_caja?: number;
  bloq_edit_articulos?: string;
  limite_descuento?: number;
  ocultar_precio_cpra_y_vta?: string;
  editar_responsable?: string;
  bloq_edit_imp?: string;
  ver_precio_orden_compra?: string;
  forzar_remito?: string;
  permite_generar_remito?: string;
  actualizar_precios_pr?: string;
  forzar_actualizacion_precios_pr?: string;
  habilitar_lista_precio?: string;
  permite_editar_fecha_vta?: string;
  autorizar_solicitud_precio?: string;
  cod_vendedor?: number;
  cambiar_contrasenia?: string;
  mail?: string;
  clave_mail?: string;
}

export type usuariosPk = "id";
export type usuariosId = usuarios[usuariosPk];
export type usuariosCreationAttributes = Optional<usuariosAttributes, usuariosPk>;

export class usuarios extends Model<usuariosAttributes, usuariosCreationAttributes> implements usuariosAttributes {
  id!: number;
  usuario?: string;
  clave?: string;
  perfil?: number;
  empresa?: number;
  bloq_stock?: string;
  pan_empresa?: string;
  pan_arti_inv?: string;
  pan_prov_comp?: string;
  pan_clien_vtas?: string;
  pan_bco_dis?: string;
  pan_conta?: string;
  pan_conf?: string;
  bloq_comprobantes?: string;
  pto_vta?: number;
  autorizar?: string;
  pan_consolidar_emp?: string;
  cta_caja?: number;
  bloq_edit_articulos?: string;
  limite_descuento?: number;
  ocultar_precio_cpra_y_vta?: string;
  editar_responsable?: string;
  bloq_edit_imp?: string;
  ver_precio_orden_compra?: string;
  forzar_remito?: string;
  permite_generar_remito?: string;
  actualizar_precios_pr?: string;
  forzar_actualizacion_precios_pr?: string;
  habilitar_lista_precio?: string;
  permite_editar_fecha_vta?: string;
  autorizar_solicitud_precio?: string;
  cod_vendedor?: number;
  cambiar_contrasenia?: string;
  mail?: string;
  clave_mail?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios {
    usuarios.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    clave: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    perfil: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    empresa: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    bloq_stock: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_empresa: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_arti_inv: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_prov_comp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_clien_vtas: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_bco_dis: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_conta: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_conf: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bloq_comprobantes: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pto_vta: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    autorizar: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    pan_consolidar_emp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cta_caja: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    bloq_edit_articulos: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    limite_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 100.00
    },
    ocultar_precio_cpra_y_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    editar_responsable: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bloq_edit_imp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ver_precio_orden_compra: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    forzar_remito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    permite_generar_remito: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    actualizar_precios_pr: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "S"
    },
    forzar_actualizacion_precios_pr: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    habilitar_lista_precio: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    permite_editar_fecha_vta: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    autorizar_solicitud_precio: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    cod_vendedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cambiar_contrasenia: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    mail: {
      type: DataTypes.CHAR(80),
      allowNull: true
    },
    clave_mail: {
      type: DataTypes.CHAR(40),
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

usuarios.prototype.toJSON =  function () {
  var values = Object.assign({}, this.get());

  delete values.clave;
  return values;
}