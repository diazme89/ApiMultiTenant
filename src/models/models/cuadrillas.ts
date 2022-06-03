import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cuadrillasAttributes {
  id: number;
  cod_cuadrilla: number;
  nombre: string;
}

export type cuadrillasPk = "id";
export type cuadrillasId = cuadrillas[cuadrillasPk];
export type cuadrillasCreationAttributes = Optional<cuadrillasAttributes, cuadrillasPk>;

export class cuadrillas extends Model<cuadrillasAttributes, cuadrillasCreationAttributes> implements cuadrillasAttributes {
  id!: number;
  cod_cuadrilla!: number;
  nombre!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof cuadrillas {
    cuadrillas.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    cod_cuadrilla: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    nombre: {
      type: DataTypes.CHAR(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cuadrillas',
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
  return cuadrillas;
  }
}
