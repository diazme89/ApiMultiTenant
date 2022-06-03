import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface aplicacionesAttributes {
  id: number;
  codigo?: number;
  nombre_app?: string;
}

export type aplicacionesPk = "id";
export type aplicacionesId = aplicaciones[aplicacionesPk];
export type aplicacionesCreationAttributes = Optional<aplicacionesAttributes, aplicacionesPk>;

export class aplicaciones extends Model<aplicacionesAttributes, aplicacionesCreationAttributes> implements aplicacionesAttributes {
  id!: number;
  codigo?: number;
  nombre_app?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof aplicaciones {
    aplicaciones.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    nombre_app: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aplicaciones',
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
  return aplicaciones;
  }
}
