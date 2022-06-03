import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hlinoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hlinoPk = "id";
export type hlinoId = hlino[hlinoPk];
export type hlinoCreationAttributes = Optional<hlinoAttributes, hlinoPk>;

export class hlino extends Model<hlinoAttributes, hlinoCreationAttributes> implements hlinoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hlino {
    hlino.init({
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
    tableName: 'hlino',
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
  return hlino;
  }
}
