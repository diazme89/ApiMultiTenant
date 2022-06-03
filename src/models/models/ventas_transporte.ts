import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ventas_transporteAttributes {
  id: number;
  id_comprobante: number;
  transporte_nombre?: string;
  transporte_domicilio?: string;
  transporte_cuit?: string;
  transporte_marca?: string;
  transporte_patente?: string;
  transporte_responsable?: string;
  transporte_resp_documento?: string;
}

export type ventas_transportePk = "id";
export type ventas_transporteId = ventas_transporte[ventas_transportePk];
export type ventas_transporteCreationAttributes = Optional<ventas_transporteAttributes, ventas_transportePk>;

export class ventas_transporte extends Model<ventas_transporteAttributes, ventas_transporteCreationAttributes> implements ventas_transporteAttributes {
  id!: number;
  id_comprobante!: number;
  transporte_nombre?: string;
  transporte_domicilio?: string;
  transporte_cuit?: string;
  transporte_marca?: string;
  transporte_patente?: string;
  transporte_responsable?: string;
  transporte_resp_documento?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ventas_transporte {
    ventas_transporte.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    id_comprobante: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    transporte_nombre: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    transporte_domicilio: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    transporte_cuit: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    transporte_marca: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    transporte_patente: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    transporte_responsable: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    transporte_resp_documento: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ventas_transporte',
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
  return ventas_transporte;
  }
}
