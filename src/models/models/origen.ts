import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface origenAttributes {
  id: number;
  codigo?: number;
  descripcion?: string;
}

export type origenPk = "id";
export type origenId = origen[origenPk];
export type origenCreationAttributes = Optional<origenAttributes, origenPk>;

export class origen extends Model<origenAttributes, origenCreationAttributes> implements origenAttributes {
  id!: number;
  codigo?: number;
  descripcion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof origen {
    origen.init({
    id: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'origen',
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
  return origen;
  }
}
