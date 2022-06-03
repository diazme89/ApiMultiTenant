import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pid_cruce_factura_remitoAttributes {
  syn_id_compra: number;
  syn_cod_articulo: number;
  pid_id_compra: number;
  pid_comprobante_remito: string;
  pid_fecha_remito: string;
  pid_observacion_remito?: string;
  pid_cantidad_insumo: number;
  pid_cantidad_insumo_total: number;
}

export type pid_cruce_factura_remitoPk = "syn_id_compra" | "syn_cod_articulo" | "pid_id_compra";
export type pid_cruce_factura_remitoId = pid_cruce_factura_remito[pid_cruce_factura_remitoPk];
export type pid_cruce_factura_remitoCreationAttributes = Optional<pid_cruce_factura_remitoAttributes, pid_cruce_factura_remitoPk>;

export class pid_cruce_factura_remito extends Model<pid_cruce_factura_remitoAttributes, pid_cruce_factura_remitoCreationAttributes> implements pid_cruce_factura_remitoAttributes {
  syn_id_compra!: number;
  syn_cod_articulo!: number;
  pid_id_compra!: number;
  pid_comprobante_remito!: string;
  pid_fecha_remito!: string;
  pid_observacion_remito?: string;
  pid_cantidad_insumo!: number;
  pid_cantidad_insumo_total!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pid_cruce_factura_remito {
    pid_cruce_factura_remito.init({
    syn_id_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    syn_cod_articulo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    pid_id_compra: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    pid_comprobante_remito: {
      type: DataTypes.CHAR(18),
      allowNull: false
    },
    pid_fecha_remito: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pid_observacion_remito: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pid_cantidad_insumo: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false
    },
    pid_cantidad_insumo_total: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pid_cruce_factura_remito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "syn_id_compra" },
          { name: "syn_cod_articulo" },
          { name: "pid_id_compra" },
        ]
      },
    ]
  });
  return pid_cruce_factura_remito;
  }
}
