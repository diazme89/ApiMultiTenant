import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hlupinoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hlupinoPk = "id";
export type hlupinoId = hlupino[hlupinoPk];
export type hlupinoCreationAttributes = Optional<hlupinoAttributes, hlupinoPk>;

export class hlupino extends Model<hlupinoAttributes, hlupinoCreationAttributes> implements hlupinoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hlupino {
    hlupino.init({
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
    tableName: 'hlupino',
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
  return hlupino;
  }
}
