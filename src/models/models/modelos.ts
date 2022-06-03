import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modelosAttributes {
  numero?: number;
  nombre?: string;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  mano_obra?: number;
  id: number;
}

export type modelosPk = "id";
export type modelosId = modelos[modelosPk];
export type modelosCreationAttributes = Optional<modelosAttributes, modelosPk>;

export class modelos extends Model<modelosAttributes, modelosCreationAttributes> implements modelosAttributes {
  numero?: number;
  nombre?: string;
  cultivo?: number;
  rendimient?: number;
  precio?: number;
  gast_comer?: number;
  cuota_amor?: number;
  mano_obra?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modelos {
    modelos.init({
    numero: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    cultivo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    rendimient: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    gast_comer: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    cuota_amor: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    mano_obra: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'modelos',
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
  return modelos;
  }
}
