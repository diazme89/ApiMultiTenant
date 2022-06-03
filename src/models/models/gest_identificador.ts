import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface gest_identificadorAttributes {
  id: number;
  codigo: number;
  tipo_circuito: string;
  descripcion: string;
  cod_cliente?: number;
  cod_proveedor?: number;
}

export type gest_identificadorPk = "id";
export type gest_identificadorId = gest_identificador[gest_identificadorPk];
export type gest_identificadorCreationAttributes = Optional<gest_identificadorAttributes, gest_identificadorPk>;

export class gest_identificador extends Model<gest_identificadorAttributes, gest_identificadorCreationAttributes> implements gest_identificadorAttributes {
  id!: number;
  codigo!: number;
  tipo_circuito!: string;
  descripcion!: string;
  cod_cliente?: number;
  cod_proveedor?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof gest_identificador {
    gest_identificador.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      unique: "idx_codigo"
    },
    tipo_circuito: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cod_cliente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    cod_proveedor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gest_identificador',
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
        name: "idx_codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "idx_cod_cliente",
        using: "BTREE",
        fields: [
          { name: "cod_cliente" },
        ]
      },
    ]
  });
  return gest_identificador;
  }
}
