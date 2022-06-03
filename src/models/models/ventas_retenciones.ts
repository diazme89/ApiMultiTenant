import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_retencionesAttributes {
  id: number;
  id_comprobante: number;
  retencion?: string;
  importe?: number;
  cod_cuenta?: number;
  tipo?: string;
  iva_por?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  otras_percepciones?: string;
  cod_impuesto?: number;
  cod_pais?: number;
  cod_formula?: number;
  alicuota_apli?: number;
  numero_retencion?: string;
  id_cierre?: number;
}

export type ventas_retencionesPk = "id";
export type ventas_retencionesId = ventas_retenciones[ventas_retencionesPk];
export type ventas_retencionesCreationAttributes = Optional<ventas_retencionesAttributes, ventas_retencionesPk>;

export class ventas_retenciones extends Model<ventas_retencionesAttributes, ventas_retencionesCreationAttributes> implements ventas_retencionesAttributes {
  id!: number;
  id_comprobante!: number;
  retencion?: string;
  importe?: number;
  cod_cuenta?: number;
  tipo?: string;
  iva_por?: number;
  cod_unidad_negocio?: number;
  precio_con_iva?: number;
  otras_percepciones?: string;
  cod_impuesto?: number;
  cod_pais?: number;
  cod_formula?: number;
  alicuota_apli?: number;
  numero_retencion?: string;
  id_cierre?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_retenciones {
    ventas_retenciones.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    retencion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    iva_por: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    precio_con_iva: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    otras_percepciones: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_impuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_pais: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_formula: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    alicuota_apli: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    numero_retencion: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    id_cierre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_retenciones',
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
        name: "compras_vencimientos_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
      {
        name: "ventas_retenciones_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "ventas_retenciones_retencion",
        using: "BTREE",
        fields: [
          { name: "retencion" },
        ]
      },
    ]
  });
  return ventas_retenciones;
  }
}
