import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface testingAttributes {
  id: number;
  Detalle?: string;
  importe?: number;
  importe_test?: number;
  observacion?: string;
  numero?: number;
  desde?: string;
  hasta?: string;
  codigo?: number;
  funcion?: string;
}

export type testingPk = "id";
export type testingId = testing[testingPk];
export type testingCreationAttributes = Optional<testingAttributes, testingPk>;

export class testing extends Model<testingAttributes, testingCreationAttributes> implements testingAttributes {
  id!: number;
  Detalle?: string;
  importe?: number;
  importe_test?: number;
  observacion?: string;
  numero?: number;
  desde?: string;
  hasta?: string;
  codigo?: number;
  funcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof testing {
    testing.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    Detalle: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    importe: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    importe_test: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    observacion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    numero: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    desde: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hasta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    funcion: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'testing',
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
  return testing;
  }
}
