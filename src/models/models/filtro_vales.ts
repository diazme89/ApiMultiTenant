import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface filtro_valesAttributes {
  fecha1?: string;
  fecha2?: string;
  ajuste?: string;
  motivo?: string;
  id: number;
  usuario?: string;
  fecha_carga?: string;
  destino?: number;
  numero?: number;
  nro_vale_entrega?: number;
  nro_vale?: number;
  cod_solicitante?: number;
  cod_retira?: number;
}

export type filtro_valesPk = "id";
export type filtro_valesId = filtro_vales[filtro_valesPk];
export type filtro_valesCreationAttributes = Optional<filtro_valesAttributes, filtro_valesPk>;

export class filtro_vales extends Model<filtro_valesAttributes, filtro_valesCreationAttributes> implements filtro_valesAttributes {
  fecha1?: string;
  fecha2?: string;
  ajuste?: string;
  motivo?: string;
  id!: number;
  usuario?: string;
  fecha_carga?: string;
  destino?: number;
  numero?: number;
  nro_vale_entrega?: number;
  nro_vale?: number;
  cod_solicitante?: number;
  cod_retira?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof filtro_vales {
    filtro_vales.init({
    fecha1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ajuste: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    motivo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fecha_carga: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    destino: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    nro_vale_entrega: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    nro_vale: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    cod_solicitante: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    cod_retira: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'filtro_vales',
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
  return filtro_vales;
  }
}
