import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_retencionesAttributes {
  id: number;
  id_comprobante: number;
  retencion?: string;
  importe?: number;
  cod_cuenta?: number;
  tipo?: string;
  iva_por?: number;
  alicuota_apli?: number;
  monto_impo?: number;
  cod_unidad_negocio?: number;
  cod_formula?: number;
  nro_retencion?: string;
  cod_impuesto?: number;
  cod_pais?: number;
}

export type compras_retencionesPk = "id";
export type compras_retencionesId = compras_retenciones[compras_retencionesPk];
export type compras_retencionesCreationAttributes = Optional<compras_retencionesAttributes, compras_retencionesPk>;

export class compras_retenciones extends Model<compras_retencionesAttributes, compras_retencionesCreationAttributes> implements compras_retencionesAttributes {
  id!: number;
  id_comprobante!: number;
  retencion?: string;
  importe?: number;
  cod_cuenta?: number;
  tipo?: string;
  iva_por?: number;
  alicuota_apli?: number;
  monto_impo?: number;
  cod_unidad_negocio?: number;
  cod_formula?: number;
  nro_retencion?: string;
  cod_impuesto?: number;
  cod_pais?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_retenciones {
    compras_retenciones.init({
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
    alicuota_apli: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    monto_impo: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_formula: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nro_retencion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cod_impuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_pais: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_retenciones',
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
        name: "compras_retenciones_cod_cuenta",
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
        ]
      },
      {
        name: "compras_retenciones_retencion",
        using: "BTREE",
        fields: [
          { name: "retencion" },
        ]
      },
      {
        name: "compras_vencimientos_id_comp",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
        ]
      },
    ]
  });
  return compras_retenciones;
  }
}
