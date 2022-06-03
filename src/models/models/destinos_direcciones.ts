import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface destinos_direccionesAttributes {
  id: number;
  codigo?: number;
  destinatarios?: string;
  direccion?: string;
  localidad?: string;
  provincia?: string;
}

export type destinos_direccionesPk = "id";
export type destinos_direccionesId = destinos_direcciones[destinos_direccionesPk];
export type destinos_direccionesCreationAttributes = Optional<destinos_direccionesAttributes, destinos_direccionesPk>;

export class destinos_direcciones extends Model<destinos_direccionesAttributes, destinos_direccionesCreationAttributes> implements destinos_direccionesAttributes {
  id!: number;
  codigo?: number;
  destinatarios?: string;
  direccion?: string;
  localidad?: string;
  provincia?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof destinos_direcciones {
    destinos_direcciones.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    destinatarios: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    localidad: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'destinos_direcciones',
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
        name: "destinos_direcciones_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return destinos_direcciones;
  }
}
