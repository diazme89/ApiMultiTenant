import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impuestoterceroAttributes {
  id: number;
  tipo: number;
  subtipo: number;
  codigo: number;
  nombre: string;
  cuentaContable?: number;
  minimonoimp?: number;
  cod_regimen?: number;
}

export type impuestoterceroPk = "id";
export type impuestoterceroId = impuestotercero[impuestoterceroPk];
export type impuestoterceroCreationAttributes = Optional<impuestoterceroAttributes, impuestoterceroPk>;

export class impuestotercero extends Model<impuestoterceroAttributes, impuestoterceroCreationAttributes> implements impuestoterceroAttributes {
  id!: number;
  tipo!: number;
  subtipo!: number;
  codigo!: number;
  nombre!: string;
  cuentaContable?: number;
  minimonoimp?: number;
  cod_regimen?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impuestotercero {
    impuestotercero.init({
    id: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    subtipo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    codigo: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    cuentaContable: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    minimonoimp: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    cod_regimen: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impuestotercero',
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
        name: "ImpuestoTercero_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ImpuestoTercero_ak1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipo" },
          { name: "subtipo" },
          { name: "codigo" },
        ]
      },
    ]
  });
  return impuestotercero;
  }
}
