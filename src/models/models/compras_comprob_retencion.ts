import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface compras_comprob_retencionAttributes {
  id: number;
  id_comprobante: number;
  numero: number;
  id_impuestoTercero: number;
  declaracion_jurada_periodo?: string;
  declaracion_jurada_presentacion?: string;
  cod_empresa?: number;
  tipo_retencion?: string;
}

export type compras_comprob_retencionPk = "id";
export type compras_comprob_retencionId = compras_comprob_retencion[compras_comprob_retencionPk];
export type compras_comprob_retencionCreationAttributes = Optional<compras_comprob_retencionAttributes, compras_comprob_retencionPk>;

export class compras_comprob_retencion extends Model<compras_comprob_retencionAttributes, compras_comprob_retencionCreationAttributes> implements compras_comprob_retencionAttributes {
  id!: number;
  id_comprobante!: number;
  numero!: number;
  id_impuestoTercero!: number;
  declaracion_jurada_periodo?: string;
  declaracion_jurada_presentacion?: string;
  cod_empresa?: number;
  tipo_retencion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof compras_comprob_retencion {
    compras_comprob_retencion.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    numero: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    id_impuestoTercero: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false
    },
    declaracion_jurada_periodo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declaracion_jurada_presentacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    tipo_retencion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compras_comprob_retencion',
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
        name: "compras_comprob_retencion_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "compras_comprob_retencion_ak1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
          { name: "cod_empresa" },
          { name: "tipo_retencion" },
        ]
      },
      {
        name: "compras_comprob_retencion_ak2",
        using: "BTREE",
        fields: [
          { name: "id_comprobante" },
          { name: "id_impuestoTercero" },
          { name: "cod_empresa" },
        ]
      },
    ]
  });
  return compras_comprob_retencion;
  }
}
