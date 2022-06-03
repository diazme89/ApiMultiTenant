import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface paisAttributes {
  id: number;
  codigo?: number;
  codigo2?: string;
  nombre?: string;
}

export type paisPk = "id";
export type paisId = pais[paisPk];
export type paisCreationAttributes = Optional<paisAttributes, paisPk>;

export class pais extends Model<paisAttributes, paisCreationAttributes> implements paisAttributes {
  id!: number;
  codigo?: number;
  codigo2?: string;
  nombre?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof pais {
    pais.init({
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
    codigo2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pais',
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
  return pais;
  }
}
