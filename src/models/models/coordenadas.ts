import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface coordenadasAttributes {
  id: number;
  codigo_lote?: number;
  num_objeto?: number;
  punto?: number;
  lat_grados?: number;
  lat_minutos?: number;
  lat_segundos?: number;
  long_grados?: number;
  long_minutos?: number;
  long_segundos?: number;
}

export type coordenadasPk = "id";
export type coordenadasId = coordenadas[coordenadasPk];
export type coordenadasCreationAttributes = Optional<coordenadasAttributes, coordenadasPk>;

export class coordenadas extends Model<coordenadasAttributes, coordenadasCreationAttributes> implements coordenadasAttributes {
  id!: number;
  codigo_lote?: number;
  num_objeto?: number;
  punto?: number;
  lat_grados?: number;
  lat_minutos?: number;
  lat_segundos?: number;
  long_grados?: number;
  long_minutos?: number;
  long_segundos?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof coordenadas {
    coordenadas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo_lote: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    num_objeto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    punto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lat_grados: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lat_minutos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lat_segundos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    long_grados: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    long_minutos: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    long_segundos: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coordenadas',
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
  return coordenadas;
  }
}
