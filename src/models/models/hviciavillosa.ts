import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hviciavillosaAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hviciavillosaPk = "id";
export type hviciavillosaId = hviciavillosa[hviciavillosaPk];
export type hviciavillosaCreationAttributes = Optional<hviciavillosaAttributes, hviciavillosaPk>;

export class hviciavillosa extends Model<hviciavillosaAttributes, hviciavillosaCreationAttributes> implements hviciavillosaAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hviciavillosa {
    hviciavillosa.init({
    id: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    humedad: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    merma: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hviciavillosa',
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
  return hviciavillosa;
  }
}
