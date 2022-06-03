import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface turnosAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type turnosPk = "id";
export type turnosId = turnos[turnosPk];
export type turnosCreationAttributes = Optional<turnosAttributes, turnosPk>;

export class turnos extends Model<turnosAttributes, turnosCreationAttributes> implements turnosAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof turnos {
    turnos.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'turnos',
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
  return turnos;
  }
}
