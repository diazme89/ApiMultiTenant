import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impresorasAttributes {
  id: number;
  codigo?: number;
  identificador?: string;
  descripcion?: string;
  marca?: string;
  tipo?: string;
  cod_compatibilidad?: number;
}

export type impresorasPk = "id";
export type impresorasId = impresoras[impresorasPk];
export type impresorasCreationAttributes = Optional<impresorasAttributes, impresorasPk>;

export class impresoras extends Model<impresorasAttributes, impresorasCreationAttributes> implements impresorasAttributes {
  id!: number;
  codigo?: number;
  identificador?: string;
  descripcion?: string;
  marca?: string;
  tipo?: string;
  cod_compatibilidad?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impresoras {
    impresoras.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    identificador: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    marca: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cod_compatibilidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impresoras',
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
  return impresoras;
  }
}
