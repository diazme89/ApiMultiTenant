import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pcuentasAttributes {
  id: number;
  cod_cuenta?: number;
  descripcion?: string;
  tipo_cuenta?: string;
  cod_contabilidad?: number;
  cod_cuenta_madre?: number;
  grupo?: string;
  cod_actividad?: number;
  cod_periodo?: number;
  id_cta_modelo?: number;
  imputable?: number;
  sistema?: number;
  cod_establecimiento?: number;
  cod_unidad_negocio?: number;
  cod_empresa?: number;
  cta_xestab?: number;
  id_registro_ref?: number;
}

export type pcuentasPk = "id";
export type pcuentasId = pcuentas[pcuentasPk];
export type pcuentasCreationAttributes = Optional<pcuentasAttributes, pcuentasPk>;

export class pcuentas extends Model<pcuentasAttributes, pcuentasCreationAttributes> implements pcuentasAttributes {
  id!: number;
  cod_cuenta?: number;
  descripcion?: string;
  tipo_cuenta?: string;
  cod_contabilidad?: number;
  cod_cuenta_madre?: number;
  grupo?: string;
  cod_actividad?: number;
  cod_periodo?: number;
  id_cta_modelo?: number;
  imputable?: number;
  sistema?: number;
  cod_establecimiento?: number;
  cod_unidad_negocio?: number;
  cod_empresa?: number;
  cta_xestab?: number;
  id_registro_ref?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pcuentas {
    pcuentas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cod_cuenta: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo_cuenta: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    cod_contabilidad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_periodo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    id_cta_modelo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    imputable: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    sistema: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    cod_establecimiento: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_unidad_negocio: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_empresa: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cta_xestab: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    id_registro_ref: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcuentas',
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
  return pcuentas;
  }
}
