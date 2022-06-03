import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface asientos_itemsAttributes {
  id: number;
  id_asientos: number;
  id_cuenta: number;
  descripcion?: string;
  debe?: number;
  haber?: number;
  numero_cheque?: string;
  banco?: string;
  fec_emision?: string;
  fec_pago?: string;
  gasto?: string;
  alicuota_iva?: number;
  tipo?: string;
  cod_prov_cli?: number;
  conciliacion_bancaria?: string;
  numero_comprobante?: number;
  fec_conciliacion_bancaria?: string;
  cod_unidad_negocio?: number;
  cod_corredor?: number;
  tarjeta_resumen_numero?: number;
  cod_banco?: number;
  id_cuenta_destino?: number;
  cheque_id?: number;
  id_cierre?: number;
  tipo_cheque?: string;
}

export type asientos_itemsPk = "id";
export type asientos_itemsId = asientos_items[asientos_itemsPk];
export type asientos_itemsCreationAttributes = Optional<asientos_itemsAttributes, asientos_itemsPk>;

export class asientos_items extends Model<asientos_itemsAttributes, asientos_itemsCreationAttributes> implements asientos_itemsAttributes {
  id!: number;
  id_asientos!: number;
  id_cuenta!: number;
  descripcion?: string;
  debe?: number;
  haber?: number;
  numero_cheque?: string;
  banco?: string;
  fec_emision?: string;
  fec_pago?: string;
  gasto?: string;
  alicuota_iva?: number;
  tipo?: string;
  cod_prov_cli?: number;
  conciliacion_bancaria?: string;
  numero_comprobante?: number;
  fec_conciliacion_bancaria?: string;
  cod_unidad_negocio?: number;
  cod_corredor?: number;
  tarjeta_resumen_numero?: number;
  cod_banco?: number;
  id_cuenta_destino?: number;
  cheque_id?: number;
  id_cierre?: number;
  tipo_cheque?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof asientos_items {
    asientos_items.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_asientos: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    id_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    numero_cheque: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    banco: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    fec_emision: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fec_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gasto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    alicuota_iva: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_prov_cli: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    conciliacion_bancaria: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    numero_comprobante: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    fec_conciliacion_bancaria: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_corredor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tarjeta_resumen_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cod_banco: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    id_cuenta_destino: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cheque_id: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 1
    },
    id_cierre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_cheque: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asientos_items',
    hasTrigger: true,
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
        name: "asientos_items_fec_pago",
        using: "BTREE",
        fields: [
          { name: "fec_pago" },
        ]
      },
      {
        name: "asientos_items_cod_prov_cli",
        using: "BTREE",
        fields: [
          { name: "cod_prov_cli" },
        ]
      },
      {
        name: "asientos_items_id_asientos",
        using: "BTREE",
        fields: [
          { name: "id_asientos" },
        ]
      },
      {
        name: "asientos_items_id_cuenta",
        using: "BTREE",
        fields: [
          { name: "id_cuenta" },
        ]
      },
      {
        name: "asientos_items_key1",
        using: "BTREE",
        fields: [
          { name: "cod_banco" },
          { name: "numero_cheque" },
        ]
      },
    ]
  });
  return asientos_items;
  }
}
