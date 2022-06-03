import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transporteAttributes {
  id: number;
  cod_transporte?: number;
  nombre?: string;
  domicilio?: string;
  cuit?: string;
  marca?: string;
  patente?: string;
  responsable?: string;
  documento?: string;
  patente2?: string;
  contacto?: string;
  predefinido?: string;
}

export type transportePk = "id";
export type transporteId = transporte[transportePk];
export type transporteCreationAttributes = Optional<transporteAttributes, transportePk>;

export class transporte extends Model<transporteAttributes, transporteCreationAttributes> implements transporteAttributes {
  id!: number;
  cod_transporte?: number;
  nombre?: string;
  domicilio?: string;
  cuit?: string;
  marca?: string;
  patente?: string;
  responsable?: string;
  documento?: string;
  patente2?: string;
  contacto?: string;
  predefinido?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof transporte {
    transporte.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_transporte: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    marca: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    patente: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    responsable: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    documento: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    patente2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    contacto: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    predefinido: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'transporte',
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
  return transporte;
  }
}
