import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface volcadaAttributes {
  id: number;
  descripcion?: string;
  fabrica?: number;
  interno?: number;
  exportacion?: number;
  descarte?: number;
}

export type volcadaPk = "id";
export type volcadaId = volcada[volcadaPk];
export type volcadaCreationAttributes = Optional<volcadaAttributes, volcadaPk>;

export class volcada extends Model<volcadaAttributes, volcadaCreationAttributes> implements volcadaAttributes {
  id!: number;
  descripcion?: string;
  fabrica?: number;
  interno?: number;
  exportacion?: number;
  descarte?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof volcada {
    volcada.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    fabrica: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    interno: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    exportacion: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    descarte: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'volcada',
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
  return volcada;
  }
}
