import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pcuentas_modeloAttributes {
  id: number;
  cod_cuenta?: number;
  descripcion?: string;
  tipo_cuenta?: string;
  id_cuenta_madre?: number;
  grupo?: string;
  imputable?: number;
}

export type pcuentas_modeloPk = "id";
export type pcuentas_modeloId = pcuentas_modelo[pcuentas_modeloPk];
export type pcuentas_modeloCreationAttributes = Optional<pcuentas_modeloAttributes, pcuentas_modeloPk>;

export class pcuentas_modelo extends Model<pcuentas_modeloAttributes, pcuentas_modeloCreationAttributes> implements pcuentas_modeloAttributes {
  id!: number;
  cod_cuenta?: number;
  descripcion?: string;
  tipo_cuenta?: string;
  id_cuenta_madre?: number;
  grupo?: string;
  imputable?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pcuentas_modelo {
    pcuentas_modelo.init({
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
    id_cuenta_madre: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    imputable: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcuentas_modelo',
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
        name: "idx_pcuentas_modelo_xcodcuenta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_cuenta" },
          { name: "grupo" },
          { name: "id_cuenta_madre" },
          { name: "imputable" },
        ]
      },
    ]
  });
  return pcuentas_modelo;
  }
}
