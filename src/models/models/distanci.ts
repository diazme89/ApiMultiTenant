import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface distanciAttributes {
  codigo?: number;
  descrip?: string;
  kms?: number;
  id: number;
}

export type distanciPk = "id";
export type distanciId = distanci[distanciPk];
export type distanciCreationAttributes = Optional<distanciAttributes, distanciPk>;

export class distanci extends Model<distanciAttributes, distanciCreationAttributes> implements distanciAttributes {
  codigo?: number;
  descrip?: string;
  kms?: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof distanci {
    distanci.init({
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    descrip: {
      type: DataTypes.CHAR(35),
      allowNull: true
    },
    kms: {
      type: DataTypes.DECIMAL(6,3),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'distanci',
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
  return distanci;
  }
}
