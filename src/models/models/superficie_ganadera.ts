import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface superficie_ganaderaAttributes {
  id: number;
  cod_lote: number;
  cod_actividad: number;
  periodo: number;
  fecingreso?: string;
  fecsalida?: string;
}

export type superficie_ganaderaPk = "id";
export type superficie_ganaderaId = superficie_ganadera[superficie_ganaderaPk];
export type superficie_ganaderaCreationAttributes = Optional<superficie_ganaderaAttributes, superficie_ganaderaPk>;

export class superficie_ganadera extends Model<superficie_ganaderaAttributes, superficie_ganaderaCreationAttributes> implements superficie_ganaderaAttributes {
  id!: number;
  cod_lote!: number;
  cod_actividad!: number;
  periodo!: number;
  fecingreso?: string;
  fecsalida?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof superficie_ganadera {
    superficie_ganadera.init({
    id: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    cod_lote: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    cod_actividad: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false
    },
    periodo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    fecingreso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecsalida: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'superficie_ganadera',
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
  return superficie_ganadera;
  }
}
