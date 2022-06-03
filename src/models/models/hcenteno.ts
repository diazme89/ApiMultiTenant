import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hcentenoAttributes {
  id: number;
  humedad?: number;
  merma?: number;
}

export type hcentenoPk = "id";
export type hcentenoId = hcenteno[hcentenoPk];
export type hcentenoCreationAttributes = Optional<hcentenoAttributes, hcentenoPk>;

export class hcenteno extends Model<hcentenoAttributes, hcentenoCreationAttributes> implements hcentenoAttributes {
  id!: number;
  humedad?: number;
  merma?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hcenteno {
    hcenteno.init({
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
    tableName: 'hcenteno',
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
  return hcenteno;
  }
}
